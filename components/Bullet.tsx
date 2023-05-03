import React from "react";

type Props = {
  text: string;
};

const Bullet = ({ text }: Props) => {
  return (
    <div className="inline-block mb-2 mr-2 bg-neutral-400 bg-opacity-25 py-2.5 px-3 rounded-full text-xs">
      {text}
    </div>
  );
};

export default Bullet;
