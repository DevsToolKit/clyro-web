"use client";

import React, { useState } from "react";

interface CodeBlockProps {
  language?: string;
  value: string;
}

export default function CodeBlock({
  language = "text",
  value,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // fallback for older browsers: create a textarea
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      } catch {
        // ignore
      }
      document.body.removeChild(ta);
    }
  };

  return (
    <div className="clyro-codeblock rounded-lg overflow-hidden mb-6">
      <div className="code-header flex items-center justify-between px-3 py-2 text-sm bg-[#2d2d2d]">
        <div
          className="language-label font-mono text-xs text-gray-200/90 select-none"
          aria-hidden
        >
          {language}
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="copy-btn inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md border border-transparent hover:opacity-95 focus:outline-none"
          title="Copy"
        >
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      <div className="code-content bg-[#111827]">
        <pre
          className="whitespace-pre overflow-auto text-sm font-mono text-gray-100"
          style={{
            margin: 0,
            padding: "1rem",
            whiteSpace: "pre",
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace',
            lineHeight: 1.5,
          }}
        >
          <code>{value}</code>
        </pre>
      </div>
    </div>
  );
}
