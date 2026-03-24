#!/usr/bin/env bash
set -euo pipefail

echo "[smoke] checking critical files..."
test -f app/api/complaints/route.ts
test -f app/api/complaints/evidence/route.ts
test -f app/privacy/page.tsx
test -f lib/rate-limit.ts

echo "[smoke] checking security hooks..."
rg -q "checkRateLimit" app/api/complaints/route.ts
rg -q "x-admin-key" app/api/complaints/status/route.ts
rg -q "complaint_audit_logs" app/api/complaints/status/route.ts

echo "[smoke] checking accessibility hooks..."
rg -q "Skip to main content" app/layout.tsx
rg -q "aria-label" components/layout/Header.tsx

echo "[smoke] all checks passed"
