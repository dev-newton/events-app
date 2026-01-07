import React from "react";

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const highlightText = (text: string, query: string): React.ReactNode => {
  const q = query.trim();
  if (!q) return text;

  const safeQuery = escapeRegExp(q);
  const regex = new RegExp(`(${safeQuery})`, "ig");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isMatch = part.toLowerCase() === q.toLowerCase();

    return isMatch ? (
      <mark key={index} className="bg-yellow-300">
        {part}
      </mark>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    );
  });
};
