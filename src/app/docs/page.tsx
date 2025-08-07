/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import { unified } from "unified";
import useScrollSpy from "@/hooks/useScrollSpy"; // adjust path if needed
import "@/assets/styles/docsMarkdown.css";

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

  // 1. Fetch and parse markdown
  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/DevsToolKit/clyro_testing/refs/heads/main/docs/index.md"
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

  // 2. Get active heading from scroll
  const activeId = useScrollSpy(
    headings.map((h) => h.id),
    120 // px offset from top
  );

  // 3. Custom markdown components to inject IDs
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
  };

  return (
    <section className="flex flex-col-reverse md:flex-row w-full scroll-smooth">
      {/* Markdown content */}
      <div className="markdown-container max-w-[800px] mx-auto px-6">
        <ReactMarkdown remarkPlugins={[remarkSlug]} components={components}>
          {docs}
        </ReactMarkdown>
      </div>

      {/* TOC */}
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
