<template>
  <div>
    <header class="nav">
      <div class="container nav__inner">
        <NuxtLink class="nav__logo" to="/">
          <span class="nav__dot"></span>
          <span>Led Tools</span>
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
  </div>
</template>
