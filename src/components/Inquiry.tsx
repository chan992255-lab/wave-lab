import { useState, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, ChevronDown, ClipboardCheck, Copy, Loader2, Send, ShieldCheck } from 'lucide-react';
import { packages } from '../data/packages';
import { buildSummary, copyText, submitInquiry, type InquiryInput, type InquiryResult } from '../lib/inquiry';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const UNDECIDED = '아직 미정 (상담 후 결정)';
const packageOptions = [UNDECIDED, ...packages.map((p) => `${p.name} (${p.price}원~)`)];

type Errors = Partial<Record<'name' | 'contact' | 'message', string>>;

const promises = [
  '보통 24시간 안에 답장드립니다.',
  '상담과 견적은 무료입니다.',
  '미리보기를 확인하신 뒤에 진행을 정하시면 됩니다.',
];

export function Inquiry() {
  const [form, setForm] = useState<InquiryInput>({
    name: '',
    contact: '',
    packageName: UNDECIDED,
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState<InquiryInput | null>(null);
  const [result, setResult] = useState<InquiryResult | null>(null);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof InquiryInput) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = '이름 또는 업체명을 적어 주세요.';
    if (form.contact.trim().length < 5) next.contact = '연락받으실 카톡 ID·전화번호·이메일을 적어 주세요.';
    if (form.message.trim().length < 5) next.message = '만들고 싶은 것을 두어 줄만 적어 주세요.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    if (!validate()) return;

    const payload: InquiryInput = {
      name: form.name.trim(),
      contact: form.contact.trim(),
      packageName: form.packageName,
      message: form.message.trim(),
    };

    setSending(true);
    const res = await submitInquiry(payload);
    setSending(false);
    setResult(res);
    setSubmitted(payload);
    setCopied(false);
    window.setTimeout(() => {
      document.getElementById('inquiry-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 60);
  };

  const onCopy = async () => {
    if (!submitted) return;
    const ok = await copyText(buildSummary(submitted));
    setCopied(ok);
    if (ok) window.setTimeout(() => setCopied(false), 2600);
  };

  const restart = () => {
    setSubmitted(null);
    setResult(null);
    setForm({ name: '', contact: '', packageName: UNDECIDED, message: '' });
    setErrors({});
  };

  return (
    <section id="inquiry" className="relative scroll-mt-20 border-t border-white/[0.06] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[26rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.16),transparent)]"
        aria-hidden="true"
      />
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Get in touch"
                title={
                  <>
                    만들고 싶은 게 있으시면,
                    <br className="hidden sm:block" /> 편하게 남겨 주세요.
                  </>
                }
                description="짧게 적어 주셔도 충분합니다. 어떤 가게·서비스인지, 어떤 기능이 필요한지 알려 주시면 범위와 금액을 정리해서 답장드립니다."
              />
              <ul className="mt-7 space-y-3">
                {promises.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint/90" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-start gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo/90" />
                <p className="text-[11.5px] leading-relaxed text-sub">
                  남겨 주신 연락처는 제작 상담과 진행 안내에만 사용하며, 다른 곳에 쓰지 않습니다.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div id="inquiry-card" className="card-edge rounded-3xl p-1.5 shadow-card">
              <div className="rounded-[20px] bg-bg/60 p-5 sm:p-7">
                {submitted && result ? (
                  <div className="animate-fade-in">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald/15">
                      <ClipboardCheck className="h-6 w-6 text-mint" />
                    </span>
                    <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-ink">
                      문의가 접수되었습니다.
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-sub">
                      {result.savedTo === 'server'
                        ? '남겨 주신 내용을 확인한 뒤, 입력하신 연락처로 답장드리겠습니다.'
                        : '네트워크가 잠시 불안정해 이 기기에 안전하게 저장했습니다. 아래 요약을 복사해 두시면 놓치지 않고 이어갈 수 있습니다.'}
                    </p>

                    <dl className="mt-6 space-y-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                      {[
                        ['이름 / 업체명', submitted.name],
                        ['연락처', submitted.contact],
                        ['희망 패키지', submitted.packageName],
                        ['문의 내용', submitted.message],
                      ].map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[88px_1fr] gap-2 text-[12.5px]">
                          <dt className="text-sub">{label}</dt>
                          <dd className="whitespace-pre-wrap break-words text-ink/85">{value}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                      <button
                        type="button"
                        onClick={onCopy}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo to-blue px-4 py-3 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" />
                            복사했어요
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            문의 요약 복사
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={restart}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[13px] font-semibold text-ink transition-colors hover:bg-white/[0.08]"
                      >
                        새 문의 작성
                      </button>
                    </div>
                    <p className="mt-3 text-center text-[10.5px] text-sub/80" aria-live="polite">
                      {copied ? '클립보드에 복사되었습니다.' : '\u00A0'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="이름 / 업체명" required error={errors.name} htmlFor="iq-name">
                        <input
                          id="iq-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => set('name')(e.target.value)}
                          placeholder="예: 홍길동 / 파도카페"
                          autoComplete="name"
                          className={inputClass(!!errors.name)}
                          maxLength={60}
                        />
                      </Field>
                      <Field label="연락처" required error={errors.contact} htmlFor="iq-contact">
                        <input
                          id="iq-contact"
                          type="text"
                          value={form.contact}
                          onChange={(e) => set('contact')(e.target.value)}
                          placeholder="카톡 ID · 전화번호 · 이메일"
                          autoComplete="tel"
                          className={inputClass(!!errors.contact)}
                          maxLength={80}
                        />
                      </Field>
                    </div>

                    <Field label="희망 패키지" htmlFor="iq-package">
                      <div className="relative">
                        <select
                          id="iq-package"
                          value={form.packageName}
                          onChange={(e) => set('packageName')(e.target.value)}
                          className={`${inputClass(false)} appearance-none pr-10`}
                        >
                          {packageOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-surf text-ink">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sub" />
                      </div>
                    </Field>

                    <Field label="간단한 내용" required error={errors.message} htmlFor="iq-message">
                      <textarea
                        id="iq-message"
                        value={form.message}
                        onChange={(e) => set('message')(e.target.value)}
                        placeholder="어떤 가게·서비스인지, 필요한 기능이 있다면 적어 주세요. (예: 미용실 예약 페이지 + 오시는 길, 3일 안에 필요해요)"
                        rows={5}
                        className={`${inputClass(!!errors.message)} resize-y leading-relaxed`}
                        maxLength={1200}
                      />
                      <span className="mt-1.5 block text-right text-[10px] text-sub/70">
                        {form.message.length} / 1200
                      </span>
                    </Field>

                    <button
                      type="submit"
                      disabled={sending}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo via-blue to-sky px-5 py-3.5 text-[14px] font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          접수 중…
                        </>
                      ) : (
                        <>
                          문의 접수하기
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10.5px] leading-relaxed text-sub/70">
                      제출하면 입력하신 내용이 상담 접수를 위해 저장됩니다.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return [
    'w-full rounded-xl border bg-white/[0.03] px-3.5 py-3 text-[13.5px] text-ink',
    'placeholder:text-sub/55 transition-colors',
    'focus:bg-white/[0.05] focus:outline-none',
    hasError
      ? 'border-rose-400/60 focus:border-rose-400'
      : 'border-white/10 focus:border-indigo/70',
  ].join(' ');
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 flex items-center gap-1 text-[11.5px] font-medium text-ink/75">
        {label}
        {required && <span className="text-indigo/90">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[11px] text-rose-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
