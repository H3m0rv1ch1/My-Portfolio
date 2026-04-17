import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HoverExpandItem {
  label: string;
  sublabel?: string;
  image?: string;
  imageAlt?: string;
  description?: string;
  gradient?: string;
}

interface HoverExpandProps {
  items: HoverExpandItem[];
  collapsedHeight?: number;
  expandedHeight?: number;
  onItemClick?: (index: number) => void;
}

export function HoverExpand({
  items,
  collapsedHeight = 68,
  expandedHeight = 320,
  onItemClick,
}: HoverExpandProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const handleTap = (i: number) => {
    if (!isTouchDevice) return;
    if (hoveredIndex === i) {
      // Already expanded — open URL
      onItemClick?.(i);
    } else {
      // Expand this row
      setHoveredIndex(i);
    }
  };

  return (
    <div className="hover-expand">
      <div className="he-border-top" />

      {items.map((item, i) => {
        const isHovered = hoveredIndex === i;
        const isOtherHovered = hoveredIndex !== null && !isHovered;

        return (
          <div key={i}>
            <motion.div
              className="he-row"
              animate={{
                height: isHovered ? expandedHeight : collapsedHeight,
                opacity: isOtherHovered ? 0.38 : 1,
              }}
              transition={{
                height: {
                  type: 'spring',
                  stiffness: 280,
                  damping: 32,
                  mass: 0.9,
                },
                opacity: { duration: 0.22, ease: 'easeOut' },
              }}
              onMouseEnter={() => !isTouchDevice && setHoveredIndex(i)}
              onMouseLeave={() => !isTouchDevice && setHoveredIndex(null)}
              onClick={() => isTouchDevice ? handleTap(i) : onItemClick?.(i)}
            >
              {/* Background Gradient */}
              <motion.div
                className={`he-bg ${item.gradient || ''}`}
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 1.06,
                }}
                transition={{
                  opacity: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
                  scale: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
                }}
              >
                <div className="he-overlay" />
              </motion.div>

              {/* Content */}
              <div className="he-content">
                <div className="he-content-inner">
                  <div className="he-label-group">
                    <motion.span
                      className="he-number"
                      animate={{
                        color: isHovered ? '#ffffff' : 'var(--muted)',
                        opacity: isHovered ? 0.5 : 0.4,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.span>

                    <motion.span
                      className="he-label"
                      animate={{
                        color: isHovered ? '#ffffff' : 'var(--fg)',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>

                    {item.description && (
                      <motion.span
                        className="he-description"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -8,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isHovered ? 0.12 : 0,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      >
                        — {item.description}
                      </motion.span>
                    )}
                  </div>

                  {item.sublabel && (
                    <motion.span
                      className="he-sublabel"
                      animate={{
                        color: isHovered ? 'rgba(255,255,255,0.55)' : 'var(--muted)',
                        opacity: isHovered ? 1 : 0.45,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.sublabel}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>

            <div className="he-border" />
          </div>
        );
      })}
    </div>
  );
}
