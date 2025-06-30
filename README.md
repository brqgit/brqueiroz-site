# BRQueiroz - Site Corporativo

## 📋 Descrição

O BRQueiroz é um site corporativo moderno desenvolvido para a empresa de tecnologia da informação BRQueiroz. A aplicação apresenta os serviços oferecidos pela empresa, casos de sucesso, informações sobre a empresa e recursos de contato, com suporte completo para internacionalização (i18n) em português brasileiro e inglês.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca JavaScript para construção de interfaces
- **React Router 7** - Roteamento moderno para aplicações React
- **TypeScript** - Linguagem tipada para desenvolvimento mais seguro
- **Tailwind CSS 4** - Framework CSS utilitário para estilização
- **Framer Motion** - Biblioteca para animações e transições
- **Lucide React** - Ícones modernos e consistentes

### Internacionalização
- **i18next** - Framework de internacionalização
- **react-i18next** - Integração do i18next com React
- **i18next-browser-languagedetector** - Detecção automática de idioma

### Desenvolvimento
- **Vite** - Build tool e dev server
- **React Router Dev** - Ferramentas de desenvolvimento para React Router
- **Keen Slider** - Biblioteca para carrosséis e sliders

## 🏗️ Arquitetura da Aplicação

### Estrutura de Pastas

```
brqueiroz-site/
├── app/                          # Código principal da aplicação
│   ├── components/               # Componentes reutilizáveis
│   ├── home/                     # Página inicial
│   ├── about-us/                 # Página sobre nós
│   ├── services/                 # Página de serviços
│   ├── testimonial/              # Página de depoimentos
│   ├── privacy-policy/           # Política de privacidade
│   ├── lib/                      # Utilitários e dados
│   ├── types/                    # Definições de tipos TypeScript
│   ├── routes/                   # Configurações de rotas
│   ├── layout.tsx               # Layout principal da aplicação
│   ├── i18n.tsx                 # Configuração de internacionalização
│   └── root.tsx                 # Componente raiz
├── public/                       # Arquivos estáticos
│   ├── locales/                 # Arquivos de tradução
│   ├── services/                # Imagens dos serviços
│   ├── about/                   # Imagens sobre a empresa
│   ├── articles/                # Imagens de artigos
│   └── partners/                # Logos dos parceiros
├── package.json                 # Dependências e scripts
├── vite.config.ts              # Configuração do Vite
└── tsconfig.json               # Configuração do TypeScript
```

### Sistema de Roteamento

A aplicação utiliza React Router 7 com um sistema de roteamento baseado em arquivos:

- **Layout Principal** (`app/layout.tsx`): Define a estrutura comum com navbar, header e footer
- **Rotas Principais**:
  - `/` - Página inicial
  - `/services` - Página de serviços
  - `/privacy-policy` - Política de privacidade

### Internacionalização (i18n)

O sistema de internacionalização detecta automaticamente o idioma baseado no domínio:
- Domínios `.com` ou `.net` → Inglês
- Outros domínios → Português brasileiro (padrão)

**Arquivos de tradução:**
- `public/locales/pt-BR/translation.json` - Português brasileiro
- `public/locales/en/translation.json` - Inglês

### Componentes Principais

#### Layout
- **AppNavbar** - Navegação principal
- **AppHeader** - Cabeçalho com informações da empresa
- **AppFooter** - Rodapé com links e contatos

#### Páginas
- **HomePage** - Página inicial com seções sobre a empresa, serviços e casos de sucesso
- **AboutUs** - Página detalhada sobre a empresa
- **Services** - Listagem e detalhes dos serviços oferecidos
- **Testimonial** - Depoimentos de clientes

#### Componentes Reutilizáveis
- **ServiceCard** - Card para exibição de serviços
- **TestimonialCard** - Card para depoimentos
- **LogoCarousel** - Carrossel de logos de parceiros
- **Carousel** - Componente genérico de carrossel
- **StarCard** - Card para estatísticas

### Dados e Serviços

#### Serviços Oferecidos
A aplicação oferece 10 serviços principais:

1. **Microsoft 365** - Consultoria e implementação
2. **Consultoria Técnica** - Análise e planejamento estratégico
3. **Infraestrutura de TI** - Implementação e gerenciamento
4. **Segurança da Informação** - Proteção contra ameaças digitais
5. **Cloud Computing** - Migração e gerenciamento na nuvem
6. **Redes e Conectividade** - Projetos de redes estruturadas
7. **Suporte Técnico** - Atendimento especializado
8. **Virtualização** - Otimização de recursos
9. **Cabeamento Estruturado** - Infraestrutura física
10. **Project Management** - Gerenciamento de projetos

#### Estrutura de Dados
- **Services** (`app/lib/services.tsx`) - Definição e gerenciamento dos serviços
- **Testimonials** (`app/lib/testimonials.tsx`) - Depoimentos de clientes
- **Partners** (`app/lib/partners-logos.tsx`) - Logos dos parceiros
- **Articles** (`app/lib/articles.tsx`) - Artigos e cases

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
```bash
git clone [URL_DO_REPOSITÓRIO]
cd brqueiroz-site
```

2. **Instale as dependências:**
```bash
npm install
```

### Desenvolvimento

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build de Produção

4. **Gere o build de produção:**
```bash
npm run build
```

5. **Execute o servidor de produção:**
```bash
npm start
```

### Verificação de Tipos

6. **Execute a verificação de tipos TypeScript:**
```bash
npm run typecheck
```

## 📝 Como Adicionar Novo Conteúdo

### 1. Adicionando Novos Serviços

#### Passo 1: Adicionar o serviço no arquivo `app/lib/services.tsx`

```typescript
// Adicione o novo serviço no array 'services'
const services: ServiceType[] = [
  // ... serviços existentes ...
  {
    slug: "novo-servico",
    title: "services.new-service.title",
    description: "services.new-service.description",
    shortDescription: "services.new-service.shortDescription",
    icon: <NewIcon className="h-10 w-10 text-[#1c5abd]" />,
    image: "/services/novo-servico.gif",
    fullDescription: "services.new-service.fullDescription"
  },
];
```

#### Passo 2: Adicionar traduções em `public/locales/pt-BR/translation.json`

```json
{
  "services": {
    "new-service": {
      "title": "Nome do Novo Serviço",
      "description": "Descrição curta do novo serviço",
      "shortDescription": "Descrição muito curta",
      "fullDescription": [
        "Primeiro parágrafo da descrição completa",
        "Segundo parágrafo da descrição completa",
        "Terceiro parágrafo da descrição completa"
      ]
    }
  }
}
```

#### Passo 3: Adicionar traduções em `public/locales/en/translation.json`

```json
{
  "services": {
    "new-service": {
      "title": "New Service Name",
      "description": "Short description of the new service",
      "shortDescription": "Very short description",
      "fullDescription": [
        "First paragraph of full description",
        "Second paragraph of full description",
        "Third paragraph of full description"
      ]
    }
  }
}
```

#### Passo 4: Adicionar imagem do serviço
- Coloque a imagem em `public/services/novo-servico.gif`
- Formatos suportados: GIF, PNG, JPG, WebP

### 2. Adicionando Novos Artigos

#### Passo 1: Adicionar o artigo no arquivo `app/lib/articles.tsx`

```typescript
const articles: Article[] = [
  // ... artigos existentes ...
  {
    title: "articles.4.title",
    description: "articles.4.description",
    content: "articles.4.content",
    image: "/articles/artigo 4.jpg",
    alt: "articles.4.alt",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:1234567890",
  },
];
```

#### Passo 2: Adicionar traduções em `public/locales/pt-BR/translation.json`

```json
{
  "articles": {
    "4": {
      "title": "Título do Novo Artigo",
      "description": "Descrição do novo artigo",
      "content": "Conteúdo completo do artigo",
      "alt": "Texto alternativo da imagem"
    }
  }
}
```

#### Passo 3: Adicionar traduções em `public/locales/en/translation.json`

```json
{
  "articles": {
    "4": {
      "title": "New Article Title",
      "description": "New article description",
      "content": "Complete article content",
      "alt": "Image alt text"
    }
  }
}
```

#### Passo 4: Adicionar imagem do artigo
- Coloque a imagem em `public/articles/artigo 4.jpg`
- Formatos suportados: JPG, PNG, GIF, WebP

### 3. Adicionando Novos Logos de Parceiros

#### Passo 1: Adicionar o logo no arquivo `app/lib/partners-logos.tsx`

```typescript
export function getPartnersLogos(): PartnerLogo[] {
  return [
    // ... logos existentes ...
    { id: 9, src: "/partners/9.png", alt: "Nome do Novo Parceiro" },
  ];
}
```

#### Passo 2: Adicionar imagem do logo
- Coloque a imagem em `public/partners/9.png`
- Recomendado: PNG com fundo transparente
- Tamanho sugerido: 200x100px

### 4. Adicionando Novos Depoimentos

#### Passo 1: Adicionar o depoimento no arquivo `app/lib/testimonials.tsx`

```typescript
const testimonials: Testimonial[] = [
  // ... depoimentos existentes ...
  {
    title: "testimonials.7.title",
    position: "testimonials.7.position",
    testimonial: "testimonials.7.testimonial",
    image: "/placeholder.svg",
    fullDescription: "testimonials.7.fullDescription",
    images: [
      "/articles/3/0.jpg",
      "/articles/3/1.jpg",
      "/articles/3/2.jpg",
    ],
  }
];
```

#### Passo 2: Adicionar traduções em `public/locales/pt-BR/translation.json`

```json
{
  "testimonials": {
    "7": {
      "title": "Título do Novo Depoimento",
      "position": "Cargo ou Empresa",
      "testimonial": "Depoimento curto do cliente",
      "fullDescription": [
        "Primeiro parágrafo da descrição completa",
        "Segundo parágrafo da descrição completa",
        "Terceiro parágrafo da descrição completa"
      ]
    }
  }
}
```

#### Passo 3: Adicionar traduções em `public/locales/en/translation.json`

```json
{
  "testimonials": {
    "7": {
      "title": "New Testimonial Title",
      "position": "Position or Company",
      "testimonial": "Short client testimonial",
      "fullDescription": [
        "First paragraph of full description",
        "Second paragraph of full description",
        "Third paragraph of full description"
      ]
    }
  }
}
```

#### Passo 4: Adicionar imagens do case
- Crie uma pasta `public/articles/3/` para as imagens do case
- Adicione as imagens numeradas (0.jpg, 1.jpg, 2.jpg, etc.)
- Formatos suportados: JPG, PNG, MP4 (para vídeos)

### 5. Estrutura de Pastas para Imagens

```
public/
├── services/           # Imagens dos serviços (GIFs recomendados)
│   ├── novo-servico.gif
│   └── ...
├── articles/           # Imagens de artigos e cases
│   ├── artigo 4.jpg
│   ├── 3/             # Pasta para imagens de um case específico
│   │   ├── 0.jpg
│   │   ├── 1.jpg
│   │   └── ...
│   └── ...
├── partners/           # Logos dos parceiros
│   ├── 9.png
│   └── ...
└── about/              # Imagens sobre a empresa
    ├── nova-imagem.jpg
    └── ...
```

### 6. Dicas Importantes

#### Para Serviços:
- Use ícones do Lucide React para manter consistência
- Imagens em formato GIF são recomendadas para mostrar animações
- Mantenha o slug em minúsculas e sem espaços

#### Para Artigos:
- Links devem apontar para posts do LinkedIn ou outras redes sociais
- Imagens devem ter boa qualidade (mínimo 800x600px)
- Use descrições claras e concisas

#### Para Parceiros:
- Logos devem ter fundo transparente (PNG)
- Mantenha proporção consistente entre todos os logos
- Use nomes descritivos no alt text

#### Para Depoimentos:
- Organize as imagens em pastas numeradas por case
- Use imagens de alta qualidade para mostrar o trabalho
- Mantenha as descrições detalhadas mas objetivas

### 7. Verificação Após Adições

Após adicionar novo conteúdo:

1. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

2. **Verifique se o conteúdo aparece corretamente:**
- Navegue pelas páginas onde o conteúdo deve aparecer
- Teste a responsividade em diferentes tamanhos de tela
- Verifique se as traduções estão funcionando

3. **Execute a verificação de tipos:**
```bash
npm run typecheck
```

## 📱 Funcionalidades Principais

### Página Inicial
- **Carrossel de Logos** - Exibição dos parceiros da empresa
- **Seção Sobre Nós** - Informações sobre a empresa com animações
- **Serviços em Destaque** - Cards dos principais serviços
- **Estatísticas** - Números de experiência, clientes e projetos
- **Casos de Sucesso** - Depoimentos de clientes
- **Artigos** - Conteúdo técnico e informativo

### Navegação
- **Menu Responsivo** - Adaptável para diferentes tamanhos de tela
- **Internacionalização** - Troca automática de idioma
- **Animações Suaves** - Transições e efeitos visuais

### Serviços
- **Listagem Completa** - Todos os serviços oferecidos
- **Detalhamento** - Informações específicas de cada serviço
- **Imagens Ilustrativas** - GIFs e imagens para cada serviço

## 🎨 Design e UX

### Características Visuais
- **Design Moderno** - Interface limpa e profissional
- **Responsivo** - Adaptável para desktop, tablet e mobile
- **Animações** - Transições suaves com Framer Motion
- **Tipografia** - Fonte Eurostile para identidade visual

### Experiência do Usuário
- **Navegação Intuitiva** - Estrutura clara e fácil de usar
- **Carregamento Rápido** - Otimizado para performance
- **Acessibilidade** - Considerações de acessibilidade web
- **SEO Otimizado** - Meta tags e estrutura semântica

## 🌐 Deploy e Configuração

### Configuração de Produção
- **Vite** - Build otimizado para produção
- **React Router Serve** - Servidor para aplicação em produção
- **Web.config** - Configuração para servidores IIS (Windows)

### Variáveis de Ambiente
A aplicação detecta automaticamente o ambiente baseado no domínio para internacionalização.

## 📊 Performance

### Otimizações Implementadas
- **Code Splitting** - Carregamento sob demanda
- **Lazy Loading** - Carregamento de imagens otimizado
- **Bundle Optimization** - Build otimizado com Vite
- **Static Assets** - Servir arquivos estáticos eficientemente

## 🔧 Manutenção e Atualizações

### Estrutura Modular
- **Componentes Reutilizáveis** - Fácil manutenção e atualização
- **Sistema de Tipos** - TypeScript para maior confiabilidade
- **Separação de Responsabilidades** - Código organizado e escalável

### Adicionando Conteúdo
- **Traduções** - Editar arquivos JSON em `public/locales/`
- **Serviços** - Adicionar em `app/lib/services.tsx`
- **Imagens** - Colocar em `public/` com estrutura organizada

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato com a equipe de desenvolvimento responsável pelo projeto.

---

**Desenvolvido com ❤️ para BRQueiroz**
