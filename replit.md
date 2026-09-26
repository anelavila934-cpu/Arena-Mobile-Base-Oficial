# Arena Mobile

Base oficial de la plataforma de videojuegos y esports ARENA MOBILE, preparada para crecer con sistemas reales de usuarios, ranking, streaming, torneos, eventos y noticias.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/arena-mobile run dev` — run the Arena Mobile web app
- `pnpm --filter @workspace/arena-mobile run typecheck` — check the Arena Mobile frontend
- `PORT=23474 BASE_PATH=/ pnpm --filter @workspace/arena-mobile run build` — build the Arena Mobile frontend
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/arena-mobile/src/App.tsx` — composición de proveedores y router.
- `artifacts/arena-mobile/src/components/shell/` — portada, shell principal, navegación responsive y encabezados compartidos.
- `artifacts/arena-mobile/src/navigation/` — destinos y enlaces de navegación.
- `artifacts/arena-mobile/src/pages/` — pantallas independientes: inicio, perfil, ranking, streaming, torneos, eventos, noticias y configuración.
- `artifacts/arena-mobile/src/data/platform-data.ts` — contratos `ArenaDataSource` y tipos que deben implementar las fuentes oficiales.
- `artifacts/arena-mobile/src/index.css` — sistema visual ARENA MOBILE: negro, violeta, fucsia, iluminación ambiental y motion.
- `artifacts/arena-mobile/public/assets/arena-mobile-official-logo.png` — logo oficial proporcionado.

## Architecture decisions

- La primera versión es frontend-only: presenta la estructura y los estados de conexión sin inventar datos reales.
- Los contratos de fuentes oficiales viven en `src/data/platform-data.ts`; las pantallas no deben acoplarse a proveedores concretos.
- Las rutas se manejan con Wouter y la base del artifact es `/`, por lo que los enlaces usan rutas internas relativas.
- Los estados `DEMO / PREVIEW`, vacíos y `Awaiting official data link` son intencionales y deben desaparecer o cambiar de fuente cuando haya datos verificados.

## Product

La experiencia comienza con una portada animada y continúa en un command center responsive con módulos para identidad de jugador, ranking global, streaming oficial, torneos, eventos, noticias y preferencias.

## User preferences

- No inventar jugadores, estadísticas, resultados, transmisiones, titulares ni APIs reales.
- Mantener la identidad negra con iluminación morada/fucsia y el logo oficial como ancla visual.

## Gotchas

- Los servicios de artifact inyectan `PORT` y `BASE_PATH`; no hardcodear esos valores en la aplicación.
- Al conectar datos reales, implementar `ArenaDataSource` y reemplazar estados `DEMO / PREVIEW` sin mover la navegación ni el shell.
- El workflow de API existente es independiente; no hace falta iniciarlo mientras la interfaz permanezca frontend-only.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
