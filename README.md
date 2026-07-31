# Bruno Atlas v0.1

Fundação técnica do Bruno OS.

## Requisitos

- Node.js 20.9+
- pnpm 10+
- Projeto Supabase

## Início

```bash
cp .env.example apps/web/.env.local
pnpm install
pnpm dev
```

Abra `http://localhost:3000` e teste `http://localhost:3000/api/health`.

## Banco

A primeira migração está em `supabase/migrations/0001_atlas_foundation.sql`.
Antes de produção, validar em um projeto Supabase separado do Legacy e executar os advisors de segurança.
