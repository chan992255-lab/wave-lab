import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * 문의 접수용 Supabase 클라이언트.
 * publishable(anon) 키는 공개되어도 되는 키이고, 테이블은 INSERT만 허용된다.
 * 환경변수가 없어도 기본 프로젝트로 동작하도록 fallback을 둔다.
 */
const url = (import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? 'https://cwiftbtyfndnthzuutrx.supabase.co';
const anonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? 'sb_publishable_TwZiTBYvuDmZZSRXDU_IoQ_ih9zs7bw';

export const INQUIRIES_TABLE = 'wavelab_inquiries';

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!url || !anonKey) return null;
  if (!client) {
    try {
      client = createClient(url, anonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
    } catch {
      client = null;
    }
  }
  return client;
}
