import React from "react";

interface TOCItem {
  text: string;
  depth: number;
  id: string;
}

interface TOCProps {
  headings: TOCItem[];
  activeId: string;
}

export default function TableOfContents({ headings, activeId }: TOCProps) {
  return (
    <aside className="max-w-[300px] w-full p-5 md:sticky top-0 md:h-screen overflow-auto">
      <h2 className="text-lg font-semibold mb-4">On this page</h2>
      <ul className="space-y-2 text-sm">
        {headings.map(({ id, text, depth }) => (
          <li
            key={id}
            className={`ml-${(depth - 1) * 4} transition-colors duration-200 ${
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
  );
}
