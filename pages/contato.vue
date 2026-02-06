<script setup lang="ts">
useHead({
  title: "Contato | Led Tools",
  meta: [
    {
      name: "description",
      content: "Fale com a Led Tools e acesse os canais oficiais e lojas.",
    },
  ],
});

// Você pode substituir pelos links finais exatos (se quiser).
const links = {
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  youtube: "https://www.youtube.com",
  whatsapp: "https://wa.me", // ou o link específico do Linktree depois
  mercadolivre: "https://www.mercadolivre.com.br",
  shopee: "https://shopee.com.br",
  amazon: "https://www.amazon.com.br",
};
</script>

<template>
  <div class="page">
    <div class="container">
      <h1 class="title">Contato e canais oficiais</h1>
      <p class="subtitle">
        Precisa de ajuda com seu produto? Confira os tutoriais e, se necessário, fale conosco no WhatsApp.
      </p>

      <div class="about-grid">
        <div class="card about-card">
          <h2 class="h2">Atendimento</h2>
          <p class="p">
            Suporte especializado no pré e pós-venda. WhatsApp (horário comercial). :contentReference[oaicite:1]{index=1}
          </p>

          <div class="cta-row">
            <a class="btn btn--primary" :href="links.whatsapp" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
            <a class="btn" :href="links.youtube" target="_blank" rel="noopener noreferrer">
              Ver tutoriais no YouTube
            </a>
          </div>
        </div>

        <div class="card about-card">
          <h2 class="h2">Redes sociais</h2>
          <div class="list-links">
            <a :href="links.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a :href="links.tiktok" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a :href="links.youtube" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
          <p class="p muted" style="margin-top:10px;">
            (Vamos substituir esses links pelos exatos do Linktree já já.) :contentReference[oaicite:2]{index=2}
          </p>
        </div>
      </div>

      <div class="card about-card" style="margin-top:14px;">
        <h2 class="h2">Nossas lojas</h2>
        <div class="list-links">
          <a :href="links.mercadolivre" target="_blank" rel="noopener noreferrer">Mercado Livre</a>
          <a :href="links.shopee" target="_blank" rel="noopener noreferrer">Shopee</a>
          <a :href="links.amazon" target="_blank" rel="noopener noreferrer">Amazon</a>
        </div>
        <p class="p muted" style="margin-top:10px;">
          Sempre compre pelos canais oficiais. :contentReference[oaicite:3]{index=3}
        </p>
      </div>
    </div>
  </div>
</template>
