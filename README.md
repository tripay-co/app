<h1 align="center">Tripay APP</h1>

<p align="center">
Um novo jeito rápido e prático de vender passagens.
<br/>
Caso seja novo acesse o <a href="/ONBOARDING.md">Onboarding</a>.
</p>

<p align="center">
  <img alt="License: MIT" src="https://img.shields.io/badge/MADE_WITH-LOVE-032F5B?style=for-the-badge" />
</p>

## Requisitos/Ferramentas

- NodeJS
- Pnpm
- Docker
- Docker Compose

## Comandos

- Desenvolvimento
  - `pnpm start`: Roda servidor na porta 3000 e abre a URL do app no browser.
  - `pnpm dev`: Roda servidor na porta 3000.
  - `pnpm build`: Gera um site estático do app em `/build`. Por padrão sendo em modo de produção, podendo ser modificado com a flag `--mode=$BUILD_MODE`
  - `pnpm preview`: Roda um servidor local (deve somente ser utilizado para preview) do build localizado em `/build`.
- Linter
  - `pnpm lint`: Roda eslint para procurar erros de tipagem.
  - `pnpm lint:fix`: Roda eslint para procurar erros de tipagem, tenta corrigir os erros automaticamente.
  - `pnpm ts:check`: Roda compilador do typescript para procurar erros de tipagem.

## Variáveis de ambiente

| Variável                          | Descrição                                                |
| --------------------------------- | -------------------------------------------------------- |
| VITE_BASE_URL_API                 | URL da API                                               |
| VITE_BASE_URL_FRONT               | URL do App                                               |
| SENTRY_AUTH_TOKEN                 | Token da conexão com o Sentry                            |

## Descubra mais

- [Vite Guide](https://vitejs.dev/guide/)
- [Vitest](https://vitest.dev/guide/)

