export const STATUS_LABEL = {
    AVAILABLE: "Disponível",
    COLLECTION_REQUIRED: "Coleta necessária",
    MAINTENANCE: "Manutenção",
};
export const STATUS_COLOR = {
    AVAILABLE: "#6F9A7C",
    COLLECTION_REQUIRED: "#B8502B",
    MAINTENANCE: "#8A8A8A",
};
export const LEVEL_COLOR = { 1: "#6F9A7C", 2: "#A8C46A", 3: "#F5AA45", 4: "#B8502B" };

export function pointStatus(bins = []) {
    if (bins.some((b) => b.status === "COLLECTION_REQUIRED")) return "COLLECTION_REQUIRED";
    if (bins.some((b) => b.status === "MAINTENANCE")) return "MAINTENANCE";
    return "AVAILABLE";
}