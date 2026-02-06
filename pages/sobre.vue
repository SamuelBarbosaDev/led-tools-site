<script setup lang="ts">
useHead({
  title: "Sobre | Led Tools",
  meta: [
    {
      name: "description",
      content:
        "Conheça a Led Tools: variedade, confiança, agilidade no envio e atendimento completo do pré ao pós-venda.",
    },
  ],
});

const videoId = "WeDEJ2jIp9U";
</script>

<template>
  <div class="page">
    <div class="container">
      <h1 class="title">Sobre a Led Tools</h1>
      <p class="subtitle">
        Qualidade e preço justo, direto até você — com atendimento do primeiro contato ao pós-venda.
      </p>

      <div class="about-grid">
        <div class="card about-card">
          <h2 class="h2">O que nos move</h2>
          <p class="p">
            Somos especialistas em e-commerce e trabalhamos com produtos selecionados, estoque robusto e
            um fluxo de conferência/embalagem pensado para reduzir erros e acelerar a entrega.
          </p>

          <div class="about-highlights">
            <div class="pill">Confiança</div>
            <div class="pill">Agilidade</div>
            <div class="pill">Variedade</div>
            <div class="pill">Pós-venda</div>
          </div>
        </div>

        <div class="card about-card">
          <h2 class="h2">Principais linhas</h2>
          <ul class="list">
            <li>Cadeiras de escritório (do básico ao ergonômico)</li>
            <li>Ferramentas elétricas (uso profissional e doméstico)</li>
            <li>Jardinagem (máquinas, peças e reposição)</li>
            <li>Metais/inox para cozinha e banheiro</li>
            <li>Iluminação residencial e industrial</li>
          </ul>
        </div>
      </div>

      <div class="card video-card">
        <h2 class="h2">Vídeo institucional</h2>
        <div class="video">
          <iframe
            class="video-iframe"
            :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
            title="Vídeo institucional Led Tools"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>
