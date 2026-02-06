# Led Tools — Site Institucional

Site institucional e catálogo da Led Tools, desenvolvido com Nuxt 3 e TypeScript, com deploy estático no GitHub Pages.

O objetivo do site é apresentar a marca, reforçar confiança e direcionar clientes para os canais oficiais de venda (Mercado Livre, Shopee, etc.), além de oferecer tutoriais de montagem e informações de contato.

## Sobre a Led Tools

A Led Tools atua no e-commerce há anos, especializada na importação e venda de produtos de qualidade com preço justo.

Principais diferenciais:

- Atendimento de excelência do pré ao pós-venda  
- Alto volume de vendas com agilidade logística  
- Lojas oficiais nos marketplaces  
- Foco em confiança, agilidade e respeito ao cliente  
- Estoque robusto e atualizado  
- Processo rigoroso de conferência e embalagem  

Categorias de produtos:

- Cadeiras de escritório  
- Ferramentas elétricas  
- Equipamentos de jardinagem  
- Metais para cozinha e banheiro  
- Iluminação residencial e industrial  

## Funcionalidades do site

- Página inicial institucional  
- Catálogo de produtos com:
  - Busca por nome  
  - Filtro por categoria  
  - Ordenação por preço  
  - Links diretos para anúncios oficiais  
- Seção de tutoriais de montagem (YouTube)  
- Página Sobre  
- Página de Contato com canais oficiais  
- SEO básico por página  
- Favicon e identidade visual personalizada  
- Deploy automático no GitHub Pages  

## Tecnologias utilizadas

- Nuxt 3  
- TypeScript  
- CSS puro (sem frameworks de UI)  
- GitHub Actions  
- GitHub Pages  

## Estrutura do projeto

```path
assets/        CSS global
components/    Componentes Vue reutilizáveis
composables/   Lógica reutilizável (ex: produtos)
data/          Dados estáticos (produtos, tutoriais)
layouts/       Layout padrão do site
pages/         Rotas do Nuxt
public/        Arquivos públicos (favicon, logo)

```

## Como rodar localmente

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar ambiente de desenvolvimento

```bash
npm run dev
```

Acesse:

```url
http://localhost:3000
```

## Build estático

```bash
npm run generate
```

Arquivos finais em:

```path
.output/public
```

## Deploy

O deploy é feito automaticamente via GitHub Actions para o GitHub Pages ao fazer push na branch `main`.

URL de produção:

```url
https://github.com/SamuelBarbosaDev/led-tools-site.git
```

## Personalização

### Produtos

Os produtos são carregados a partir de:

```path
/data/produtos_led_tools.json
```

Esse arquivo pode ser atualizado periodicamente via script de scraping.

### Tutoriais

Os tutoriais ficam em:

```path
/data/tutorials.ts
```

Basta adicionar novos vídeos do YouTube.

## Licença

Projeto institucional desenvolvido para a Led Tools.
Uso e distribuição conforme autorização da marca.
