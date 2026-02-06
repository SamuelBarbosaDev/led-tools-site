import raw from "~/data/produtos_led_tools.json";

export type Product = {
  nome: string;
  preco: string; // no JSON vem como string
  url: string;
  imagem: string;
};

export type Category =
  | "Cadeiras"
  | "Ferramentas Elétricas"
  | "Jardinagem"
  | "Metais p/ Cozinha e Banheiro"
  | "Iluminação"
  | "Outros";

function parsePrice(value: string): number {
  const n = Number(String(value).replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function inferCategory(nome: string): Category {
  const s = nome.toLowerCase();

  if (/\bcadeira\b/.test(s)) return "Cadeiras";

  if (
    /(parafus|furadeir|lixadeir|serra|martelete|esmerilh|politriz|tupia|plain|retifica)/.test(
      s
    )
  )
    return "Ferramentas Elétricas";

  if (/(roçadeir|rocadeir|motosser|soprador|cortador|podador|jardin)/.test(s))
    return "Jardinagem";

  if (/(torneira|ducha|chuveir|misturador|monocomando|banheiro|lavabo|cozinha)/.test(s))
    return "Metais p/ Cozinha e Banheiro";

  if (/(led|ilumina|lumin|plafon|arandela|pendente|spot|painel|fita)/.test(s))
    return "Iluminação";

  return "Outros";
}

export function useProducts() {
  const products = (raw as Product[]).map((p) => ({
    ...p,
    precoNumber: parsePrice(p.preco),
    categoria: inferCategory(p.nome),
  }));

  const categories: Category[] = [
    "Cadeiras",
    "Ferramentas Elétricas",
    "Jardinagem",
    "Metais p/ Cozinha e Banheiro",
    "Iluminação",
    "Outros",
  ];

  return { products, categories };
}
