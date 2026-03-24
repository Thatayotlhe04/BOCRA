# Deployment Troubleshooting (Vercel)

If production deployment fails, check these first:

1. **Environment variables (most common)**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_API_KEY` (required in production for status updates)

2. **Build command**
   - Ensure Vercel build command is `npm run build`.

3. **Node version**
   - Use Node 20 on Vercel project settings.

4. **Schema readiness**
   - Run `supabase-schema.sql` so evidence and audit tables exist.

5. **Quick local parity checks**
   - `npm run test`
   - `npm run build`

If all above pass locally and Vercel still fails, open deployment logs and inspect first TypeScript/runtime error line.
