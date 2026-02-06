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
  instagram: "https://instagram.com/ledtools_oficial",
  tiktok: "https://tiktok.com/@led.tools.ltda",
  youtube: "https://www.youtube.com/@ledtoolseledferramentas7534",
  whatsapp: "https://api.whatsapp.com/send?phone=553131440735", // ou o link específico do Linktree depois
  mercadolivre: "https://www.mercadolivre.com.br/loja/led-tools#from=share_eshop",
  shopee: "https://shopee.com.br/ledtools00",
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
            Suporte especializado no pré e pós-venda. WhatsApp (horário comercial).
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
            <a :href="links.instagram" target="_blank" rel="noopener noreferrer">
              <img alt="Instagram" src="https://cdn-icons-png.flaticon.com/512/174/174855.png"/>
            </a>
            <a :href="links.tiktok" target="_blank" rel="noopener noreferrer">
              <img alt="TikTok" src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png"/>
            </a>
            <a :href="links.youtube" target="_blank" rel="noopener noreferrer">
              <img alt="YouTube" src="https://cdn-icons-png.flaticon.com/512/3670/3670209.png"/>
            </a>
          </div>
          <p class="p muted" style="margin-top:10px;">
            Acompanhe nossas redes sociais para ficar por dentro dos lançamentos.
          </p>
        </div>
      </div>

      <div class="card about-card" style="margin-top:14px;">
        <h2 class="h2">Nossas lojas</h2>
        <div class="list-links">
          <a :href="links.mercadolivre" target="_blank" rel="noopener noreferrer"> 
            <img alt="Mercado Livre" src="https://rastrearpaquete.com.mx/wp-content/uploads/2023/03/mercadolibre-icon.png"/>
          </a>
          <a :href="links.shopee" target="_blank" rel="noopener noreferrer">
            <img alt="Shopee" src="https://olist.com/_next/image/?url=https%3A%2F%2Fd3hw41hpah8tvx.cloudfront.net%2Fimages%2Fshopee_logo_0_42ddc26afe.png&w=256&q=75"/>
          </a>
          <a :href="links.amazon" target="_blank" rel="noopener noreferrer">
            <img alt="Amazon" src="https://uploads.guiadoinvestidor.com.br/2024/06/LTnYZLKH-logoamazon.webp"/>
          </a>
        </div>
        <p class="p muted" style="margin-top:10px;">
          Sempre compre pelos canais oficiais.
        </p>
      </div>
    </div>
  </div>
</template>
