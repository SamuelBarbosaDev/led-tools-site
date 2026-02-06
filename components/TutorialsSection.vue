<script setup lang="ts">
import { tutorials } from "~/data/tutorials";

function thumb(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function watchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
</script>

<template>
  <section class="tutorials">
    <div class="container">
      <div class="tutorials__top">
        <div>
          <h2 class="h2" style="margin:0;">Tutoriais de montagem</h2>
          <p class="subtitle" style="margin:6px 0 0;">
            Aprenda a montar e usar seus produtos com vídeos rápidos.
          </p>
        </div>

        <a
          class="btn"
          href="https://www.youtube.com/@ledtoolseledferramentas7534"
          target="_blank"
          rel="noopener noreferrer"
          title="Abrir Youtube"
        >
          Veja mais em nosso canal
        </a>
      </div>

      <div class="tutorials__grid">
        <a
          v-for="t in tutorials"
          :key="t.videoId"
          class="card tutorials__card"
          :href="watchUrl(t.videoId)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="tutorials__thumb" :src="thumb(t.videoId)" :alt="t.title" loading="lazy" />
          <div class="tutorials__meta">
            <div class="tutorials__row">
              <span v-if="t.tag" class="badge">{{ t.tag }}</span>
              <span class="tutorials__cta">Assistir</span>
            </div>
            <div class="tutorials__title">{{ t.title }}</div>
          </div>
        </a>
      </div>

      <p class="muted" style="margin:12px 0 0; font-size: 13px;">
        Não encontrou seu produto? Fale com o suporte via WhatsApp pelos canais oficiais.
      </p>
    </div>
  </section>
</template>
