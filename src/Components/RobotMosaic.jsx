import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import F69 from "../assets/Frames for robot/Rectangle 69.png";
import F70 from "../assets/Frames for robot/Rectangle 70.png";
import F71 from "../assets/Frames for robot/Rectangle 71.png";
import F72 from "../assets/Frames for robot/Rectangle 72.png";
import F75 from "../assets/Frames for robot/Rectangle 75.png";


const RobotMosaic = () => {
  // Timing
  const BASE = 0.2; // initial delay
  const STEP = 0.4; // gap between tiles
  const TILE_COUNT = 9;
  const REVEAL_MS = (BASE + (TILE_COUNT - 1) * STEP + 0.9) * 200; // includes tile anim duration
  const HOLD_MS = 6000; // hold assembled state 6s

  // Define stable tile keys for reveal order control
  const TILE_KEYS = useMemo(
    () => ["L1", "L2", "L3", "C1", "C2", "R1", "R2", "R3", "R4"],
    []
  );

  // Shuffle helper
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // State: order of reveals and a version to remount
  const [order, setOrder] = useState(TILE_KEYS);
  const [version, setVersion] = useState(0);

  // Cycle: after full reveal + hold, reshuffle and remount to re-run animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setOrder((prev) => shuffle(prev));
      setVersion((v) => v + 1);
    }, REVEAL_MS + HOLD_MS);
    return () => clearTimeout(timer);
  }, [version, REVEAL_MS]);

  // Motion helper that maps a tile key to its reveal index
  const withKey = (key) => {
    const idx = order.indexOf(key);
    return {
      initial: { opacity: 0, y: 24, scale: 0.9, filter: 'blur(10px)' },
      animate: { opacity: 1, y: 0, scale: [0.9, 1.03, 1], filter: 'blur(0px)' },
      transition: { delay: BASE + idx * STEP, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    };
  };

  return (
    <div key={version} className="w-full max-w-3xl mx-auto select-none">
      <div className="scale-30 sm:scale-40 md:scale-60 lg:scale-100 origin-center">
        <div
          style={{
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 3,
            display: 'inline-flex',
          }}
        >
          {/* Left column */}
          <div
            style={{
              flex: '1 1 0',
              height: 398,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              gap: 1,
              display: 'inline-flex',
            }}
          >
            <motion.img {...withKey('L1')} style={{ width: 114, paddingTop: 66, height: 260, borderRadius: 10, objectFit: 'cover' }} src={F69} alt="left-1" />
            <motion.img {...withKey('L2')} style={{ width: 140, height: 120, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="left3" />
            <motion.img {...withKey('L3')} style={{ width: 120, height: 120, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="left-3" />
          </div>

          {/* Middle column */}
          <div
            style={{
              width: 135,
              height: 410,
              borderRadius: 8,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 2,
              display: 'inline-flex',
            }}
          >
            <motion.img {...withKey('C1')} style={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: 8, objectFit: 'cover' }} src={F70} alt="center-1" />
            <motion.img {...withKey('C2')} style={{ alignSelf: 'stretch', height: 100, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="center-2" />
          </div>

          {/* Right column */}
          <div
            style={{
              flex: '1 1 0',
              width: 512,
              height: 352,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              gap: 1,
              paddingTop: 46,
              display: 'inline-flex',
            }}
          >
            <motion.img {...withKey('R1')} style={{ height: 76, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="right-1" />
            <motion.img {...withKey('R2')} style={{ width: 220, height: 70, borderRadius: 8, objectFit: 'cover' }} src={F72} alt="right2" />
            <motion.img {...withKey('R3')} style={{ width: 106, height: 108, borderRadius: 8, objectFit: 'cover' }} src={F75} alt="right-4" />
            <motion.img {...withKey('R4')} style={{ width: 140, height: 112, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="right-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotMosaic;