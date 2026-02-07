<script setup lang="ts">
const config = useRuntimeConfig();

const phone = config.public.whatsappPhone as string;
const text = config.public.whatsappText as string;

const href = computed(() => {
  const msg = encodeURIComponent(text || "");
  return `https://wa.me/${phone}?text=${msg}`;
});
</script>

<template>
  <a
    class="wa-fab"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    title="Falar no WhatsApp"
  >
    <img class="wa-fab__img" src="/whatsapp-bot.png" alt="WhatsApp" />
  </a>
</template>
