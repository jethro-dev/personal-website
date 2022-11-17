import { MouseEventHandler } from "react";
import { motion } from "framer-motion";

type Props = {
  toggle: MouseEventHandler<HTMLButtonElement>;
};

type PathProps = {
  variants?: {
    open: {
      d?: string;
      opacity?: number;
    };
    closed: {
      d?: string;
      opacity?: number;
    };
  };
  d?: any;
  transition?: { duration: number };
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: Props) => (
  <button
    onClick={toggle}
    className="cursor-pointer absolute top-4 right-4 w-[60px] h-[60px] rounded-[50%] bg-transparent grid place-items-center pointer-events-auto"
  >
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      className="translate-y-[1px]"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export default MenuToggle;
