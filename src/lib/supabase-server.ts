import { createClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase client.
 * Use this in Server Components and Route Handlers.
 * Uses the same public anon key here; swap for SERVICE_ROLE_KEY when needed.
 */
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
}
