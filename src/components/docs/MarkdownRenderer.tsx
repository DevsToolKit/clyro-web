/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkSlug from "remark-slug";
import CodeBlock from "@/components/docs/CodeBlock";
import { slugify } from "@/utils/slugify";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const markdownComponents = {
    h1: ({ ...props }: any) => {
      const id = slugify(String(props.children));
      return <h1 id={id} {...props} />;
    },
    h2: ({ ...props }: any) => {
      const id = slugify(String(props.children));
      return <h2 id={id} {...props} />;
    },
    h3: ({ ...props }: any) => {
      const id = slugify(String(props.children));
      return <h3 id={id} {...props} />;
    },
    h4: ({ ...props }: any) => {
      const id = slugify(String(props.children));
      return <h4 id={id} {...props} />;
    },
    code: ({ inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      const codeContent = String(children).replace(/\n$/, "");

      return !inline ? (
        <CodeBlock language={match ? match[1] : ""} value={codeContent} />
      ) : (
        <code className="bg-gray-200 px-1 py-0.5 rounded text-sm" {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkSlug]} components={markdownComponents}>
      {content}
    </ReactMarkdown>
  );
}
