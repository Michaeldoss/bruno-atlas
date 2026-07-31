# Atlas v0.1 — Arquitetura inicial

## Fronteiras

- **Bruno Legacy:** `Bruno_ia` e `doss-crm` permanecem em produção sem mudanças estruturais.
- **Atlas:** nova fundação modular do Bruno OS.
- **n8n:** integrações e transporte; não contém personalidade, estratégia comercial ou memória central.
- **Supabase:** fonte de verdade para identidade, CRM, contexto persistente e auditoria.

## Fluxo inicial

1. Gateway recebe uma mensagem normalizada.
2. Context Builder reúne pessoa, empresa, histórico e oportunidade.
3. Maestro decide as ações necessárias.
4. Executor registra ações e integrações.
5. Conversador produz a resposta final.

## Regra de produto

Nenhuma funcionalidade pode degradar a experiência conversacional do cliente.
