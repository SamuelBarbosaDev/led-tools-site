<script setup lang="ts">
import WhatsAppFloatButton from "~/components/WhatsAppFloatButton.vue";
</script>

<template>
  <div>
    <header class="nav">
      <div class="container nav__inner">
        <NuxtLink class="nav__logo" to="/">
          <!-- <span class="nav__dot"></span> -->
          <img src="https://http2.mlstatic.com/D_NQ_NP_841095-MLA91336511156_092025-F.jpg" alt="Led Tools" class="nav__logo-img" />
        </NuxtLink>

        <nav class="nav__links">
          <NuxtLink to="/produtos">Produtos</NuxtLink>
          <NuxtLink to="/sobre">Sobre</NuxtLink>
          <NuxtLink to="/contato">Contato</NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <div>© {{ new Date().getFullYear() }} Led Tools.</div>
        <div style="margin-top:10px">
          Catálogo institucional. Compras feitas pelos canais oficiais (Mercado Livre / Shopee).
        </div>
      </div>
    </footer>
    <WhatsAppFloatButton />
  </div>
</template>
