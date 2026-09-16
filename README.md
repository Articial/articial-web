# Articial website family

One Cloudflare Worker currently hosts nine hostname-aware, standalone brand websites from a shared design system. `articial.app` is deployment infrastructure, not the visible parent identity of UTUH or its products. Exact Worker routes preserve the zone's existing proxied DNS while replacing its failing origin response for these hostnames:

- `articial.app`
- `utuh.articial.app`
- `patch.articial.app`
- `intake.articial.app`
- `nett.articial.app`
- `proof.articial.app`
- `relay.articial.app`
- `rove.articial.app`
- `span.articial.app`

For local previews, use `?site=utuh`, `?site=patch`, or another site key.

Canonical URLs use the incoming request origin. The same build can move to future standalone domains such as `utuh.id` without publishing `articial.app` in page metadata.

## Development

```bash
npm install
npm run types
npm run dev
```

## Verification

```bash
npm run check
npx wrangler deploy --dry-run
```

## Deployment

Deploy a preview without custom domains first:

```bash
npm run deploy:preview
```

Then publish all configured custom domains:

```bash
npm run deploy
```
