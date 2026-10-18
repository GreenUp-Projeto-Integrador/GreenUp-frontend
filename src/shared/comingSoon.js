import { toast } from "sonner";
// Aviso padrão para telas/botões que já existem no front, mas ainda NÃO têm back-end.
// Login pelo Google e Esqueci minha senha

export function comingSoon(feature) {
    toast.info(`${feature}: Funcionalidade ainda será implantada.`);
}