"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const CodeBlock = ({
  value,
}: {
  value: {
    code: string;
    language: string;
  };
}) => {
  return (
    <div className="text-xs relative">
      <Button
        className="absolute top-0 right-0 mt-4 mr-4"
        variant={"ghost"}
        size={"icon"}
        onClick={() => {
          navigator.clipboard.writeText(value.code);
          toast.success("Copied to clipboard");
        }}
      >
        <Copy className="w-4 h-4" />
      </Button>
      <SyntaxHighlighter language={value.language || "text"} style={twilight}>
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
