import { getSupabase, INQUIRIES_TABLE } from './supabase';

export type InquiryInput = {
  name: string;
  contact: string;
  packageName: string;
  message: string;
};

export type InquiryResult = {
  savedTo: 'server' | 'device';
  error?: string;
};

const STORAGE_KEY = 'wavelab_inquiries_local';

function readLocal(): unknown[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** 실패해도 의뢰 내용을 잃지 않도록 기기에 남긴다. */
function saveLocal(input: InquiryInput, reason: string) {
  try {
    const rows = readLocal();
    rows.push({ ...input, reason, createdAt: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rows.slice(-30)));
  } catch {
    /* 저장 공간이 막혀 있어도 접수 안내는 계속 진행한다. */
  }
}

export async function submitInquiry(input: InquiryInput): Promise<InquiryResult> {
  const supabase = getSupabase();

  if (supabase) {
    try {
      const { error } = await supabase.from(INQUIRIES_TABLE).insert({
        name: input.name,
        contact: input.contact,
        package: input.packageName,
        message: input.message,
        source: 'wave-lab-site',
      });
      if (!error) return { savedTo: 'server' };
      saveLocal(input, `supabase: ${error.message}`);
      return { savedTo: 'device', error: error.message };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      saveLocal(input, `exception: ${message}`);
      return { savedTo: 'device', error: message };
    }
  }

  saveLocal(input, 'no-client');
  return { savedTo: 'device' };
}

export function buildSummary(input: InquiryInput): string {
  return [
    '[웨이브 랩 제작 문의]',
    `이름/업체명: ${input.name}`,
    `연락처: ${input.contact}`,
    `희망 패키지: ${input.packageName}`,
    `문의 내용: ${input.message}`,
    `접수 시각: ${new Date().toLocaleString('ko-KR')}`,
  ].join('\n');
}

export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* 아래 fallback으로 */
  }
  try {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}
