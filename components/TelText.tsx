/**
 * components/TelText.tsx
 *
 * Renders a string and automatically wraps any US phone number patterns
 * (e.g. 1-800-000-0000 or 800-000-0000) in a tappable <a href="tel:"> link.
 *
 * Used on pages where phone numbers are embedded inside content strings
 * (by-situation, hidden-benefits, quiz detail panels) so mobile users
 * can tap to call without manual dialing.
 *
 * Does NOT convert vanity numbers (e.g. 1-844-SERV-CAL) — digits only.
 */

import type { ReactNode } from "react";

type Props = {
  text: string;
  /** Tailwind classes applied to the tel: link. Defaults to a brand-colored style. */
  linkClassName?: string;
};

// Split pattern: capture group means matched phone numbers appear in the split array
const SPLIT_PATTERN = /(1-[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4})/g;

// Anchor test: checks whether a segment IS a phone number (stateless, no g flag)
const IS_PHONE = /^(?:1-[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4})$/;

export function TelText({ text, linkClassName }: Props): ReactNode {
  const parts = text.split(SPLIT_PATTERN);

  // Single segment — no phone number found, return plain text
  if (parts.length === 1) return text;

  const cls =
    linkClassName ??
    "font-semibold text-brand-700 hover:text-brand-900 hover:underline";

  return (
    <>
      {parts.map((part, i) => {
        if (IS_PHONE.test(part)) {
          // Strip hyphens to get the dialing number (e.g. 18008471234)
          const tel = part.replace(/-/g, "");
          return (
            <a key={i} href={`tel:${tel}`} className={cls}>
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
