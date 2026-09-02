import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "./Reveal";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_STYLE = (body) => ({
  backgroundColor: COLORS.warm,
  border: `1px solid ${COLORS.stone}`,
  fontFamily: body,
  color: COLORS.ink,
});

/**
 * Generic lead form: takes a field schema, validates required fields (+
 * email format), and renders a success confirmation panel on submit. By
 * default there's no backend — every lead form (Appraisal, Tenant
 * Application, Maintenance Request, Landlord Portal, Contact) shares this
 * one implementation instead of re-deriving it. Pass `onSubmit` to actually
 * deliver the values (e.g. via EmailJS) before the success panel shows.
 *
 * fields: [{ name, labelKo, labelEn, type: "text"|"email"|"tel"|"textarea"|"select",
 *            required, options?: [{ value, labelKo, labelEn }], placeholderKo?, placeholderEn? }]
 */
export function LeadForm({
  fields,
  submitLabelKo,
  submitLabelEn,
  successTitleKo,
  successTitleEn,
  successBodyKo,
  successBodyEn,
  successChildren,
  onSubmit,
  errorTitleKo = "문의 전송에 실패했습니다.",
  errorTitleEn = "Something went wrong sending your enquiry.",
}) {
  const { lang, t } = useLanguage();
  const { body } = getThemeFonts(lang);

  const [values, setValues] = useState(() => Object.fromEntries(fields.map((f) => [f.name, ""])));
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const setValue = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const validate = () => {
    const next = {};
    for (const f of fields) {
      const val = (values[f.name] || "").trim();
      if (f.required && !val) {
        next[f.name] = t("필수 입력 항목입니다.", "This field is required.");
      } else if (f.type === "email" && val && !EMAIL_RE.test(val)) {
        next[f.name] = t("올바른 이메일 주소를 입력해주세요.", "Please enter a valid email address.");
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSendError(false);
    if (onSubmit) {
      setSending(true);
      try {
        await onSubmit(values);
      } catch {
        setSending(false);
        setSendError(true);
        return;
      }
      setSending(false);
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Reveal>
        <div className="flex flex-col items-start gap-5 px-7 py-9 md:px-10 md:py-12" style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}` }}>
          <CheckCircle2 size={28} style={{ color: COLORS.green }} />
          <h3 className="text-[19px] md:text-[22px] font-medium" style={{ fontFamily: body, color: COLORS.ink }}>
            {t(successTitleKo, successTitleEn)}
          </h3>
          <p className="text-[14px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "480px" }}>
            {t(successBodyKo, successBodyEn)}
          </p>
          {successChildren}
        </div>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      {fields.map((f) => (
        <div key={f.name}>
          <label className="block text-[12px] tracking-wide mb-2" style={{ color: COLORS.dim, fontFamily: body }}>
            {t(f.labelKo, f.labelEn)}{f.required && <span style={{ color: COLORS.green }}> *</span>}
          </label>
          {f.type === "textarea" ? (
            <textarea
              rows={5}
              value={values[f.name]}
              onChange={(e) => setValue(f.name, e.target.value)}
              placeholder={t(f.placeholderKo, f.placeholderEn)}
              className="w-full px-4 py-3 text-[13.5px] outline-none resize-none"
              style={FIELD_STYLE(body)}
            />
          ) : f.type === "select" ? (
            <select
              value={values[f.name]}
              onChange={(e) => setValue(f.name, e.target.value)}
              className="w-full px-4 py-3 text-[13.5px] outline-none appearance-none"
              style={FIELD_STYLE(body)}
            >
              <option value="">{t("선택해주세요", "Select an option")}</option>
              {f.options.map((o) => (
                <option key={o.value} value={o.value}>{t(o.labelKo, o.labelEn)}</option>
              ))}
            </select>
          ) : (
            <input
              type={f.type === "email" ? "email" : f.type === "tel" ? "tel" : "text"}
              value={values[f.name]}
              onChange={(e) => setValue(f.name, e.target.value)}
              placeholder={t(f.placeholderKo, f.placeholderEn)}
              className="w-full px-4 py-3 text-[13.5px] outline-none"
              style={FIELD_STYLE(body)}
            />
          )}
          {errors[f.name] && (
            <p className="mt-1.5 text-[11.5px]" style={{ color: "#B0442E", fontFamily: body }}>{errors[f.name]}</p>
          )}
        </div>
      ))}
      {sendError && (
        <p className="text-[12.5px]" style={{ color: "#B0442E", fontFamily: body }}>
          {t(errorTitleKo, errorTitleEn)}
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="mt-2 inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[13.5px] font-semibold transition-opacity hover:opacity-85 disabled:opacity-60"
        style={{ backgroundColor: COLORS.green, color: COLORS.ivory, fontFamily: body, letterSpacing: "0.03em" }}
      >
        {sending ? t("전송 중...", "Sending...") : t(submitLabelKo, submitLabelEn)}
      </button>
    </form>
  );
}
