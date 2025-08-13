/* keep your inline code pills */
.markdown-container code.inline-code,
.markdown-container code:not(.clyro-block-code) {
  background: #f3f4f6;
  padding: 0.12rem 0.28rem;
  border-radius: 0.35rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono",
    monospace;
}

/* block wrapper */
.clyro-codeblock {
  background-color: transparent; /* visual inside handled by children */
  border-radius: 0.6rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

/* header */
.clyro-codeblock .code-header {
  padding: 0.45rem 0.6rem;
  background: #121212;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

/* language label */
.clyro-codeblock .language-label {
  color: #e5e7eb;
  text-transform: lowercase;
}

/* copy button */
.clyro-codeblock .copy-btn {
  background: rgba(255, 255, 255, 0.04);
  color: #d1d5db;
  border-radius: 0.35rem;
  padding: 0.18rem 0.5rem;
  cursor: pointer;
}
.clyro-codeblock .copy-btn:hover {
  background: rgba(255, 255, 255, 0.06);
}

/* the pre/code inside block */
.clyro-codeblock .code-content pre {
  margin: 0;
  padding: 1rem;
  overflow: auto;
  background: #e0e0e0; /* dark code area */
}

/* ensure no inline-code styles leak into the block content */
.clyro-codeblock code,
.clyro-codeblock pre code {
  background: transparent !important;
  padding: 0 !important;
  border-radius: 0 !important;
  color: inherit;
}
