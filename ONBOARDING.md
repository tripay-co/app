<h1 align="center">
Guia dos ferreiros do Github!<br/>🚀✨
</h1>

## 🔧 Regra do artesão

Assim como um artesão valoriza cada detalhe de sua obra, nós, programadores, devemos cuidar para que cada alteração no código deixe-o mais organizado, claro e funcional, garantindo que o próximo que passar por ali encontre um trabalho bem feito.

## 📂 Estrutura de pastas

- `src/`
  - `index.tsx`: Ponto de entrada da aplicação
  - `app/*`: Componentes usados no roteamento e ponto de entrada
  - `domain`: Core da nossa aplicacão
    - Valores que iremos enviar e receber das API's
    - `errors`: Ponto de costumizacão dos erros da aplicacão
    - `models`: Ponto de criacão de dados que seram recebidos
    - `repositories`: Ponto de criacão da nossa regra principal
    - `test`: Configuracão de mocks
  - `data`: Lógica da nossa aplicacão e comnunicacão com infra e domain
    - `protocol`: Criacão de protocolos/protocolo das requests (Adapter pattern)
    - `repositories`: Implementacão da interface definida na domain
      - Criacão de arquivo spec/test
      - Criacão da classe concreta
    - `test`: Configuracão de mocks
  - `react`: Pasta onde ficará tudo relacionado a biblioteca do react
    - `pages/*`: Definição das páginas junto de seus respectivos componentes.
      - `components/*`: Componente somente dessa página
      - `hooks/*`: Hook somenete dessa página
    - `hooks/*`: Hooks compartilhados entre páginas
    - `components/*`: Componentes compartilhados entre páginas
    - `layouts`: Layout das páginas
  - `lib/*`: Definição e inicialização de libs externas
    - ex: firebase, apollo, posthog, etc.
  - `shared/*`: Valores compartilhados
  - `types/*`: Tipagens compartilhadas
  - `utils/*`: Funções utilitárias
  - `theme/*`: Configuração de tema/estilo global
  - `assets/*`: Icones, lotties e imagens
- `test/`
  - `mocks/*`: Configuração de mocks
  - `utils/*`: Funções utiltárias de testes
  - `setup.ts`: Ponto de entrada de testes

## 🧑‍💻 Codando

### 🧩 Componentes

Nós temos três pastas onde guardamos componentes, `pages` e `components`. Os componentes são agrupados por domínio, ou seja, ficam na mesma pasta se eles se relacionam entre si.

- Caso ele seja usado por somente uma página ficará junto dela. ex: `src/pages/{index.tsx}/{Component}`.
- Caso ele seja compartilhado por mais de uma página, ele ficará em `src/components`.

Essas mesmas regras valem para qualquer outro arquivo (`utils`, `types`, etc)

#### Estrutura dos componentes e Páginas

- `src/{components,pages}/**/`:
  - `index.tsx`: Definição do componente.
  - `index.spec.tsx`: Teste unitário do componente.
    - Não configurado atualmente
  - `types.ts`: Definição de tipagens do componente.
  - `styles.ts`: Definição de estilos locais.
    - Depreciado: Preferir uso de tailwind e componentização
  - `schema.ts`: Definição de schema (para formulários)

### 🎨 Estilização

Temos um pilar para a estilização:

- [Tailwind](https://tailwindcss.com/): É a nossa ferramenta principal de css.

### 📃 Formulários

Para lidar com formulários, nós utilizamos a lib [`react-hook-form`](https://react-hook-form.com/) e realizamos a validação através da lib [`zod`](https://zod.dev/).

Antigamente tinhamos o hábito de sempre componentizar todos os formulários e colocá-los em `/src/forms`, isso acabou sendo descartado porque essa componentização pré-matura acabava criando muito boilerplate e sendo chato de lidar com o crescimento do projeto.

## 🔎 Especificidades

### Deploy da aplicação

Todo o deploy é automatizado pelo [GitHub Actions](https://docs.github.com/en/actions). Podendo ser visto sua configuração em `.github/workflows`. Utilizando uma imagem [Docker](https://www.docker.com/), cujo o arquivo por sua vez é o [Dockerfile](./Dockerfile).

A ferramenta utilizada para hospedamento do projeto é o [`NGINX`](https://docs.nginx.com/), qualquer configuração, por exemplo controle de cache, deve ser definida em seu arquivo de configuração [`default.conf`](./docker/nginx/default.conf) na pasta `docker/nginx`.

## 👀 Extra
