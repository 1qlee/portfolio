import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const ITEM_HEIGHT = 200;
const VISIBLE_THRESHOLD = ITEM_HEIGHT / 2;

function VerticalCarousel() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const y = useMotionValue(0);
  const index = useRef(0);

  const handlePan = (event, info) => {
    y.set(info.offset.y);

    if (info.offset.y < -VISIBLE_THRESHOLD) {
      index.current = (index.current + 1) % items.length;
      y.set(0);
    } else if (info.offset.y > VISIBLE_THRESHOLD) {
      index.current = (index.current - 1 + items.length) % items.length;
      y.set(0);
    }
  };

  useEffect(() => {
    const unsubscribe = y.on("change", (latestY) => {
      //Reset position if the item has been fully scrolled.
      if (latestY < -ITEM_HEIGHT) {
        y.set(latestY + ITEM_HEIGHT);
      } else if (latestY > ITEM_HEIGHT) {
        y.set(latestY - ITEM_HEIGHT);
      }
    });

    return () => unsubscribe();
  }, [y]);

  return (
    <div style={{ height: ITEM_HEIGHT, overflow: 'hidden', width: '200px' }}>
      <motion.div
        drag="y"
        dragConstraints={{ top: -ITEM_HEIGHT, bottom: ITEM_HEIGHT }}
        style={{ display: 'flex', flexDirection: 'column' }}
        onPan={handlePan}
        dragElastic={0}
        dragMomentum={false}
      >
        {items.map((item, i) => (
          <motion.div
            key={item}
            style={{
              height: ITEM_HEIGHT,
              width: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `hsl(${(item - 1) * 72}, 80%, 70%)`,
              color: 'white',
              fontSize: '24px',
              y: (i - index.current) * ITEM_HEIGHT + y.get(), // Translate each child
            }}
            transition={{ type: 'tween', duration: 0 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default VerticalCarousel;