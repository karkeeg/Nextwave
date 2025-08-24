import React from "react";
import { motion } from "framer-motion";

import F69 from "../assets/Frames for robot/Rectangle 69.png";
import F70 from "../assets/Frames for robot/Rectangle 70.png";
import F71 from "../assets/Frames for robot/Rectangle 71.png";
import F72 from "../assets/Frames for robot/Rectangle 72.png";
import F75 from "../assets/Frames for robot/Rectangle 75.png";

/*
  RobotMosaic
  - Displays the 5 provided frame images in a mosaic similar to the reference.
  - Responsive scaling while maintaining exact same layout structure
  - Same robot frame positioning across all screen sizes
*/
const RobotMosaic = () => {
  // Delay controls (~1s between tiles). Adjust to taste.
  const BASE = 0.2; // initial delay before first tile
  const STEP = 0.6; // additional delay between tiles

  // Motion helper: smoother on-mount reveal (no whileInView)
  const withIdx = (i) => ({
    initial: { opacity: 0, y: 24, scale: 0.9, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, scale: [0.9, 1.03, 1], filter: 'blur(0px)' },
    transition: { delay: BASE + i * STEP, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <div className="w-full max-w-3xl mx-auto select-none">
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
            <motion.img {...withIdx(8)} style={{ width: 114, paddingTop: 66, height: 260, borderRadius: 10, objectFit: 'cover' }} src={F69} alt="left-1" />
            <motion.img {...withIdx(7)} style={{ width: 140, height: 120, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="left3" />
            <motion.img {...withIdx(6)} style={{ width: 120, height: 120, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="left-3" />
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
            <motion.img {...withIdx(5)} style={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: 8, objectFit: 'cover' }} src={F70} alt="center-1" />
            <motion.img {...withIdx(4)} style={{ alignSelf: 'stretch', height: 100, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="center-2" />
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
            <motion.img {...withIdx(3)} style={{ height: 76, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="right-1" />
            <motion.img {...withIdx(2)} style={{ width: 220, height: 70, borderRadius: 8, objectFit: 'cover' }} src={F72} alt="right2" />
            <motion.img {...withIdx(1)} style={{ width: 106, height: 108, borderRadius: 8, objectFit: 'cover' }} src={F75} alt="right-4" />
            <motion.img {...withIdx(0)} style={{ width: 140, height: 112, borderRadius: 8, objectFit: 'cover' }} src={F71} alt="right-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotMosaic;