<script setup lang="ts">
useHead({title: "Produtos | Led Tools"})

const { products, categories } = useProducts();

const q = ref("");
const selected = ref<string>("Todas");
const sort = ref<"relevancia" | "menor" | "maior">("relevancia");

const filtered = computed(() => {
  let list = products as any[];

  // filtro por categoria
  if (selected.value !== "Todas") {
    list = list.filter((p) => p.categoria === selected.value);
  }

  // busca por nome
  const query = q.value.trim().toLowerCase();
  if (query) {
    list = list.filter((p) => p.nome.toLowerCase().includes(query));
  }

  // ordenação
  if (sort.value === "menor") {
    list = [...list].sort((a, b) => a.precoNumber - b.precoNumber);
  } else if (sort.value === "maior") {
    list = [...list].sort((a, b) => b.precoNumber - a.precoNumber);
  }

  return list;
});

function formatBRL(n: number) {
  try {
    return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  } catch {
    return `R$ ${n.toFixed(2).replace(".", ",")}`;
  }
}
</script>

<template>
  <div class="page">
    <div class="container">
      <div class="top">
        <div>
          <h1 class="title">Produtos</h1>
          <p class="subtitle">Catálogo com links oficiais para compra.</p>
        </div>

        <div class="controls">
          <input v-model="q" class="input" placeholder="Buscar produto..." />

          <select v-model="sort" class="select">
            <option value="relevancia">Relevância</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </select>
        </div>
      </div>

      <div class="chips">
        <button
          class="chip"
          :class="{ active: selected === 'Todas' }"
          @click="selected = 'Todas'"
        >
          Todas
        </button>

        <button
          v-for="c in categories"
          :key="c"
          class="chip"
          :class="{ active: selected === c }"
          @click="selected = c"
        >
          {{ c }}
        </button>
      </div>

      <div class="grid">
        <a
          v-for="p in filtered"
          :key="p.url"
          :href="p.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card card-link"
          title="Abrir anúncio"
        >
          <img class="img" :src="p.imagem" :alt="p.nome" loading="lazy" />

          <div class="meta">
            <div class="cat">{{ p.categoria }}</div>
            <div class="name">{{ p.nome }}</div>

            <div class="row">
              <div class="price">{{ formatBRL(p.precoNumber) }}</div>
              <div class="tag">Ver anúncio</div>
            </div>
          </div>
        </a>
      </div>

      <div v-if="filtered.length === 0" class="empty">
        Nenhum produto encontrado com esses filtros.
      </div>
    </div>
  </div>
</template>
