export type Tutorial = {
  title: string;
  videoId: string;
  tag?: string;
};

export const tutorials: Tutorial[] = [
  { title: "Dica de montagem da cadeira office", videoId: "6jQ9Y4zfGBY", tag: "Cadeiras" },
  { title: "Montagem cadeira gamer", videoId: "42Rk5kNhiCw", tag: "Cadeiras" },
  { title: "Dica de montagem cadeira reunião", videoId: "St9kQyzxZj0", tag: "Cadeiras" },
  { title: "Montagem roçadeira a bateria", videoId: "XJkaeEz38SE", tag: "Jardinagem" },
  { title: "Montagem roçadeira 4 tempos", videoId: "0st0AuXGQB0", tag: "Jardinagem" },
  { title: "Montagem motopoda extensora", videoId: "nmDyW3ykAuI", tag: "Jardinagem" },
  { title: "Unboxing cuba", videoId: "Iiyj-7-p0NI", tag: "Metais" },
];
