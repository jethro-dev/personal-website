import React, { useEffect, useState } from "react";
import { createTracing } from "trace_events";
import anime, { stagger } from "animejs";

type Props = {
  height: number;
  width: number;
};

const colors = [
  "rgb(229,57,53)",
  "rgb(253,216,53)",
  "rgb(244,81,30)",
  "rgb(76,175,80)",
  "rgb(33,150,243)",
  "rgb(156,39,176)",
];

let count = -1;
let toggled = false;

const Tile = ({
  index,
  columns,
  rows,
}: {
  columns: number;
  rows: number;
  index: number;
}) => {
  const handleTileClick = () => {
    toggled = !toggled;
    anime({
      targets: ".tile",
      //   backgroundColor: colors[count % (colors.length - 1)],
      opacity: toggled ? 1 : 0,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };
  return (
    <div
      className="tile pointer-events-auto bg-neutral-800 opacity-0"
      onClick={handleTileClick}
      //   style={{ backgroundColor: colors[count % (colors.length - 1)] }}
    ></div>
  );
};

const createTiles = (columns: number, rows: number) => {
  return (
    <div
      className={`tiles h-full w-full grid gap-[3px] pointer-events-none`}
      style={{
        gridTemplateColumns: `repeat(${columns},1fr)`,
        gridTemplateRows: `repeat(${rows},1fr)`,
      }}
    >
      {[...Array(columns * rows)].map((x, i) => (
        <Tile key={i} index={i} columns={columns} rows={rows} />
      ))}
    </div>
  );
};

const StaggeredGrid = ({ height, width }: Props) => {
  let columns = Math.floor(width / 150);
  let rows = Math.floor(height / 150);

  return (
    <div className="absolute w-full h-full top-0 z-10">
      {createTiles(columns, rows)}
    </div>
  );
};

export default StaggeredGrid;
