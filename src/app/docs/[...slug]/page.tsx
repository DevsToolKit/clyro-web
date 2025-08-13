"use client";

import React, { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import useScrollSpy from "@/hooks/useScrollSpy";
import MarkdownRenderer from "@/components/docs/MarkdownRenderer";
import TableOfContents from "@/components/docs/TableOfContents";
import { slugify } from "@/utils/slugify";
import "@/assets/styles/docsMarkdown.css";

interface Heading {
  text: string;
  depth: number;
  id: string;
}

export default function DocsPage() {
  const [docs, setDocs] = useState("");
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const fetchMarkdown = async () => {
      const url =
        "https://raw.githubusercontent.com/DevsToolKit/clyro_testing/refs/heads/main/docs/testing.md";

      const text = await fetch(url).then((res) => res.text());
      setDocs(text);

      // Parse Markdown AST
      const tree: any = unified().use(remarkParse).use(remarkSlug).parse(text);

      const collected: Heading[] = [];

      const extractHeadings = (node: any): void => {
        if (node.type === "heading" && node.depth <= 4) {
          const textNode = node.children?.find((c: any) => c.type === "text");
          if (textNode) {
            collected.push({
              text: textNode.value,
              depth: node.depth,
              id: slugify(textNode.value),
            });
          }
        }

        if (Array.isArray(node.children)) {
          node.children.forEach((child: any) => extractHeadings(child));
        }
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

  return (
    <section className="flex flex-col-reverse md:flex-row w-full scroll-smooth">
      <div className="markdown-container max-w-[800px] mx-auto px-6">
        <MarkdownRenderer content={docs} />
      </div>
      <TableOfContents headings={headings} activeId={activeId} />
    </section>
  );
}
