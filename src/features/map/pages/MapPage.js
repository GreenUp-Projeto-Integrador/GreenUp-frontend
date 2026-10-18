import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { toast } from "sonner";
import ScreenLayout from "../../../shared/components/ScreenLayout";
import { collectionApi } from "../../../shared/api/endpoints";
import { errorMessage } from "../../../shared/api/http";
import { LEVEL_COLOR, STATUS_COLOR, STATUS_LABEL, pointStatus } from "../../../shared/trashBinStatus";

// Centro padrão (Anápolis/GO)
const DEFAULT_CENTER = [-16.3286, -48.9534];

// Marcador desenhado em CSS 
const pinIcon = color => L.divIcon({
    className: "",
    html: `<div style="background:${color};width:26px;height:26px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35)"></div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -24]
});

// Ajusta o zoom 
function FitBounds({
    points
}) {
    const map = useMap();
    useEffect(() => {
        if (!points.length) return;
        map.fitBounds(points.map(p => [p.lat, p.lng]), {
        padding: [30, 30],
        maxZoom: 16
        });
    }, [points, map]);
    return null;
}

export default function MapPage() {
    const [raw, setRaw] = useState(null);
    const [map, setMap] = useState(null);

  // GET /collection-points/ 
  useEffect(() => {
    collectionApi.points().then(setRaw).catch(e => {
      toast.error(errorMessage(e));
      setRaw([]);
    });
  }, []);
  const points = useMemo(() => (raw ?? []).map(p => ({
    ...p,
    lat: Number(p.latitude),
    lng: Number(p.longitude)
  })).filter(p => Number.isFinite(p.lat) && Number.isFinite(p.lng)), [raw]);
  return _jsxs(ScreenLayout, {
    title: "Pontos de coleta",
    children: [_jsx("div", {
      className: "rounded-2xl overflow-hidden border border-gray-200",
      style: {
        height: "300px"
      },
      children: _jsxs(MapContainer, {
        ref: setMap,
        center: DEFAULT_CENTER,
        zoom: 14,
        style: {
          height: "100%",
          width: "100%"
        },
        children: [_jsx(TileLayer, {
          attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>",
          url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        }), _jsx(FitBounds, {
          points: points
        }), points.map(p => _jsx(Marker, {
          position: [p.lat, p.lng],
          icon: pinIcon(STATUS_COLOR[pointStatus(p.trashBins)]),
          children: _jsxs(Popup, {
            children: [_jsx("strong", {
              children: p.name
            }), _jsx("br", {}), p.address, _jsx("br", {}), p.trashBins.length, " lixeira(s)"]
          })
        }, p.id))]
      })
    }), _jsx("div", {
      className: "flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500",
      children: Object.keys(STATUS_LABEL).map(s => _jsxs("span", {
        className: "flex items-center gap-1",
        children: [_jsx("span", {
          style: {
            background: STATUS_COLOR[s],
            width: 10,
            height: 10,
            borderRadius: "50%",
            display: "inline-block"
          }
        }), STATUS_LABEL[s]]
      }, s))
    }), raw === null && _jsx("p", {
      className: "text-sm text-gray-500",
      children: "Carregando pontos de coleta…"
    }), raw !== null && points.length === 0 && _jsx("p", {
      className: "text-sm text-gray-500",
      children: "Nenhum ponto de coleta cadastrado ainda."
    }), _jsx("div", {
      className: "space-y-3",
      children: points.map(p => _jsxs("button", {
        onClick: () => map?.flyTo([p.lat, p.lng], 17),
        className: "w-full text-left rounded-2xl p-4 transition hover:opacity-90 font-normal",
        style: {
          background: "#FCEEE1"
        },
        children: [_jsx("p", {
          className: "font-semibold text-black text-sm",
          children: p.name
        }), _jsx("p", {
          className: "text-xs text-gray-600 mb-2",
          children: p.address
        }), _jsx("div", {
          className: "flex flex-wrap gap-2",
          children: p.trashBins.map(b => _jsxs("span", {
            className: "text-xs px-2 py-1 rounded-full text-white",
            style: {
              background: LEVEL_COLOR[b.occupancyLevel] ?? "#8A8A8A"
            },
            children: [b.code, " · nível ", b.occupancyLevel]
          }, b.id))
        })]
      }, p.id))
    })]
  });
}
