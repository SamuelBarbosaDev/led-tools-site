<template>
  <section class="hero">
    <div class="container">
      <div class="card hero__box">
        <span class="badge">Qualidade • Agilidade • Confiança</span>

        <h1>Qualidade e preço justo, direto até você.</h1>

        <p>
          Há anos no e-commerce, com foco em atendimento de excelência do primeiro contato à entrega,
          e pós-venda eficiente. Variedade em cadeiras, ferramentas, jardinagem, metais e iluminação.
        </p>

        <div class="hero__actions">
          <NuxtLink class="btn btn--primary" to="/produtos">Ver produtos</NuxtLink>
          <NuxtLink class="btn" to="/sobre">Conhecer a empresa</NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section style="padding: 14px 0 40px;">
    <div class="container">
      <div class="grid">
        <div class="card" style="padding:18px;">
          <div class="badge">+50 mil vendas</div>
          <h3 style="margin:10px 0 6px;">Volume com consistência</h3>
          <p style="margin:0;color:var(--muted);">Alta demanda com atenção e agilidade em cada pedido.</p>
        </div>

        <div class="card" style="padding:18px;">
          <div class="badge">Lojas oficiais</div>
          <h3 style="margin:10px 0 6px;">Segurança na compra</h3>
          <p style="margin:0;color:var(--muted);">Venda pelos canais oficiais, com avaliações positivas.</p>
        </div>

        <div class="card" style="padding:18px;">
          <div class="badge">Pós-venda</div>
          <h3 style="margin:10px 0 6px;">Atendimento completo</h3>
          <p style="margin:0;color:var(--muted);">Da primeira dúvida até a solução mais eficaz após a compra.</p>
        </div>
      </div>
    </div>
  </section>
  <TutorialsSection />
</template>
