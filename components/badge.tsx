export const Badge = ({ text }: { text: string }) => {
  return (
    <div className="inline-block border border-muted text-xs font-light rounded-full px-2.5 py-1 shadow-sm">
      {text}
    </div>
  );
};
