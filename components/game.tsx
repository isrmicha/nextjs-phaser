import { useRef } from "react";
import { useGame } from "../helpers/useGame";
import { Types } from "phaser";
import { MainScene } from "./MainScene";

const gameConfig: Types.Core.GameConfig = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    antialias: false,
    pixelArt: true,
    roundPixels: true,
  },
  scene: MainScene,
};

// you can place this in a different file if you prefer
const PhaserGame = () => {
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);

  return (
    <div className="container">
      <div ref={parentEl} />
    </div>
  );
};

export default PhaserGame;
