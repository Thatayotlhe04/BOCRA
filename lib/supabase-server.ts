import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Server-side client using SERVICE_ROLE key
// This bypasses Row Level Security — used ONLY in API routes
// NEVER expose this key to the client
export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  return createSupabaseClient(url, key);
}
