"use client";

import { useEffect, useState } from "react";

export type PrintBenefit = {
  name: string;
  description: string;
  applyUrl: string;
  phone?: string;
};

type PrintSummaryProps = {
  pageTitle: string;
  eligibilitySummary: string;
  benefits: PrintBenefit[];
};

// All styles are intentionally inline. This component is only visible
// during @media print (via Tailwind's `hidden print:block` classes) and
// must be self-contained so it renders identically across every page.
export function PrintSummary({ pageTitle, eligibilitySummary, benefits }: PrintSummaryProps) {
  const [date, setDate] = useState<string>("");

  // Set date client-side to reflect the actual print date, not the build date.
  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  return (
    <div
      className="hidden print:block"
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: "10.5pt",
        lineHeight: "1.55",
        color: "#000",
        background: "#fff",
      }}
    >
      {/* ── Document Header ──────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderBottom: "2pt solid #000",
          paddingBottom: "6pt",
          marginBottom: "10pt",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "7pt",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#555",
              marginBottom: "3pt",
            }}
          >
            mediguide.health &nbsp;·&nbsp; Free Public Resource &nbsp;·&nbsp; Not Legal or Medical Advice
          </div>
          <div style={{ fontSize: "15pt", fontWeight: "800", lineHeight: "1.15" }}>
            Benefits Summary
          </div>
          <div style={{ fontSize: "10.5pt", fontWeight: "600", color: "#333", marginTop: "2pt" }}>
            {pageTitle}
          </div>
        </div>
        <div style={{ fontSize: "9pt", color: "#555", textAlign: "right" }}>
          {date && <>Printed: {date}</>}
        </div>
      </div>

      {/* ── Section 1: Eligibility ───────────────────────────────────── */}
      <div style={{ marginBottom: "10pt" }}>
        <div
          style={{
            fontSize: "7pt",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            borderBottom: "0.75pt solid #888",
            paddingBottom: "2pt",
            marginBottom: "5pt",
          }}
        >
          Your Eligibility
        </div>
        <p style={{ margin: "0 0 3pt 0", fontSize: "10pt" }}>{eligibilitySummary}</p>
        <p style={{ margin: "0", fontSize: "8.5pt", color: "#444" }}>
          Confirm your eligibility and current program details directly with each program before applying.
          Rules and income limits change — this summary reflects information reviewed April 2026.
        </p>
      </div>

      {/* ── Section 2: Programs ──────────────────────────────────────── */}
      <div>
        <div
          style={{
            fontSize: "7pt",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            borderBottom: "0.75pt solid #888",
            paddingBottom: "2pt",
            marginBottom: "6pt",
          }}
        >
          Eligible Programs &amp; How to Apply
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10pt" }}>
          <thead>
            <tr style={{ borderBottom: "0.75pt solid #888" }}>
              <th
                style={{
                  textAlign: "left",
                  padding: "3pt 8pt 3pt 0",
                  width: "23%",
                  fontSize: "7pt",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Program
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "3pt 8pt",
                  width: "47%",
                  fontSize: "7pt",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                What It Is
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "3pt 0 3pt 8pt",
                  width: "30%",
                  fontSize: "7pt",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                How to Apply
              </th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit, i) => (
              <tr
                key={benefit.name}
                style={{
                  borderBottom: "0.5pt solid #ddd",
                  backgroundColor: i % 2 === 0 ? "transparent" : "#f7f7f7",
                  breakInside: "avoid",
                  pageBreakInside: "avoid",
                }}
              >
                <td
                  style={{
                    padding: "5pt 8pt 5pt 0",
                    verticalAlign: "top",
                    fontWeight: "700",
                    fontSize: "10pt",
                  }}
                >
                  {benefit.name}
                </td>
                <td style={{ padding: "5pt 8pt", verticalAlign: "top", fontSize: "10pt" }}>
                  {benefit.description}
                </td>
                <td style={{ padding: "5pt 0 5pt 8pt", verticalAlign: "top", fontSize: "9pt" }}>
                  <div
                    style={{
                      fontFamily: "'Courier New', Courier, monospace",
                      fontSize: "8.5pt",
                      wordBreak: "break-all",
                    }}
                  >
                    {benefit.applyUrl}
                  </div>
                  {benefit.phone && (
                    <div style={{ marginTop: "2pt", color: "#222" }}>{benefit.phone}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Footer Disclaimer ─────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1.5pt solid #000",
          marginTop: "12pt",
          paddingTop: "6pt",
          fontSize: "7.5pt",
          color: "#444",
        }}
      >
        <strong>MediGuide.health</strong> is a free, independent guide for Californians. Not
        affiliated with any government agency, insurer, or provider. Nothing on this page is legal
        or medical advice. For the interactive benefits finder and current program details, visit{" "}
        <strong>mediguide.health</strong>.
      </div>
    </div>
  );
}
