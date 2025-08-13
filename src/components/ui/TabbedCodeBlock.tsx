/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import { unified } from "unified";
import useScrollSpy from "@/hooks/useScrollSpy";
import "@/assets/styles/docsMarkdown.css";
import TabbedCodeBlock from "@/components/docs/TabbedCodeBlock";
import CodeBlock from "@/components/docs/CodeBlock"; // keep fallback

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function DocsPage() {
  const [docs, setDocs] = useState("");
  const [headings, setHeadings] = useState<
    { text: string; depth: number; id: string }[]
  >([]);

  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/DevsToolKit/clyro_testing/refs/heads/main/docs/testing.md"
      );
      const text = await res.text();
      setDocs(text);

      const tree: any = unified().use(remarkParse).use(remarkSlug).parse(text);

      const collected: { text: string; depth: number; id: string }[] = [];
      const extractHeadings = (node: any) => {
        if (node.type === "heading" && node.depth <= 4) {
          const textNode = node.children.find((c: any) => c.type === "text");
          if (textNode) {
            const id = slugify(textNode.value);
            collected.push({ text: textNode.value, depth: node.depth, id });
          }
        }
        if (node.children) node.children.forEach(extractHeadings);
      };

      extractHeadings(tree);
      setHeadings(collected);
    };

    fetchMarkdown();
  }, []);

  const activeId = useScrollSpy(
    headings.map((h) => h.id),
    120
  );

  const components = {
    h1: ({ node, ...props }: any) => {
      const id = slugify(String(props.children));
      return <h1 id={id} {...props} />;
    },
    h2: ({ node, ...props }: any) => {
      const id = slugify(String(props.children));
      return <h2 id={id} {...props} />;
    },
    h3: ({ node, ...props }: any) => {
      const id = slugify(String(props.children));
      return <h3 id={id} {...props} />;
    },
    h4: ({ node, ...props }: any) => {
      const id = slugify(String(props.children));
      return <h4 id={id} {...props} />;
    },
    code: ({ inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      const codeText = String(children).replace(/\n$/, "");

      // Check if this is your install snippet
      const installPattern =
        /(pnpm add|npm install|yarn add|bun add)\s+clyro-ui/;

      if (!inline && installPattern.test(codeText)) {
        return (
          <TabbedCodeBlock
            theme="light"
            tabs={[
              { label: "pnpm", code: "pnpm add clyro-ui", language: "bash" },
              { label: "npm", code: "npm install clyro-ui", language: "bash" },
              { label: "yarn", code: "yarn add clyro-ui", language: "bash" },
              { label: "bun", code: "bun add clyro-ui", language: "bash" },
            ]}
          />
        );
      }

      // Fallback to normal code block
      return !inline ? (
        <CodeBlock language={match ? match[1] : ""} value={codeText} />
      ) : (
        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <section className="flex flex-col-reverse md:flex-row w-full scroll-smooth">
      {/* Markdown */}
      <div className="markdown-container max-w-[800px] mx-auto px-6">
        <ReactMarkdown remarkPlugins={[remarkSlug]} components={components}>
          {docs}
        </ReactMarkdown>
      </div>

      {/* Table of Contents */}
      <aside className="max-w-[300px] w-full p-5 md:sticky top-0 md:h-screen overflow-auto">
        <h2 className="text-lg font-semibold mb-4">On this page</h2>
        <ul className="space-y-2 text-sm">
          {headings.map(({ id, text, depth }) => (
            <li
              key={id}
              className={`ml-${
                (depth - 1) * 4
              } transition-colors duration-200 ${
                activeId === id
                  ? "text-black font-bold"
                  : "text-gray-600 font-normal"
              }`}
            >
              <a href={`#${id}`} className="hover:underline">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

export default DocsPage;
