import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { CircleMarker, MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { collectionApi } from "../../../shared/api/endpoints";
import { STATUS_COLOR, pointStatus } from "../../../shared/trashBinStatus";
import { ArrowRight, MapPin } from "lucide-react";

const CENTRO_PADRAO = [-16.3286, -48.9534];

const iconePino = (cor) => L.divIcon({
  className: "",
  html: `<div style="background:${cor};width:20px;height:20px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 2px 5px rgba(0,0,0,.35)"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 20],
});

function distanciaKm(a, b) {
  const rad = (g) => (g * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

function AnimarMapa({ pontos, usuario }) {
  const map = useMap();

  useEffect(() => {
    if (!pontos.length) return;

    if (usuario) {
      const maisProximo = pontos.reduce((menor, p) =>
        distanciaKm(usuario, p) < distanciaKm(usuario, menor) ? p : menor
      );
      map.flyToBounds(
        [[usuario.lat, usuario.lng], [maisProximo.lat, maisProximo.lng]],
        { padding: [30, 30], maxZoom: 16, duration: 1.5 }
      );
      return;
    }

    map.flyToBounds(pontos.map((p) => [p.lat, p.lng]), {
      padding: [30, 30],
      maxZoom: 15,
      duration: 1.5,
    });
  }, [pontos, usuario, map]);

  return null;
}

export default function MiniMapaPontos() {
  const [dados, setDados] = useState([]);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    collectionApi.points().then(setDados).catch(() => setDados([]));
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setUsuario({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => {},
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
    );
  }, []);

  const pontos = useMemo(
    () =>
      (dados ?? [])
        .map((p) => ({ ...p, lat: Number(p.latitude), lng: Number(p.longitude) }))
        .filter((p) => Number.isFinite(p.lat) && Number.isFinite(p.lng)),
    [dados]
  );

  return _jsx("div", {
    className: "isolate h-[170px] w-full overflow-hidden rounded-[14px] border-2 border-white shadow-sm",
    children: _jsxs(MapContainer, {
      center: CENTRO_PADRAO,
      zoom: 13,
      className: "size-full",
      dragging: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      zoomControl: false,
      children: [
        _jsx(TileLayer, {
          url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          attribution: "&copy; OpenStreetMap",
        }),
        ...pontos.map((p) =>
          _jsx(Marker, {
            position: [p.lat, p.lng],
            icon: iconePino(STATUS_COLOR[pointStatus(p.trashBins)]),
            interactive: false,
          }, p.id)
        ),
        usuario &&
          _jsx(CircleMarker, {
            center: [usuario.lat, usuario.lng],
            radius: 7,
            pathOptions: { color: "#fff", weight: 2, fillColor: "#2F80ED", fillOpacity: 1 },
            interactive: false,
          }),
        _jsx(AnimarMapa, { pontos, usuario }),
      ],
    }),
  });
}