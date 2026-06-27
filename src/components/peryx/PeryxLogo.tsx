import { motion, type MotionValue } from "motion/react";

type Props = {
  size?: number;
  goldY?: MotionValue<number>;
  goldOpacity?: MotionValue<number>;
  className?: string;
};

/**
 * Peryx logo: a stylized diamond with a gold center core.
 */
export function PeryxLogo({ size = 160, goldY, goldOpacity, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-label="Peryx"
      role="img"
    >
      <path d="M30,84 L50,64 L70,84 L50,70 Z" fill="#6b6b6b" />
      <polygon points="50,5 13,32 50,62" fill="#d4d4d4" />
      <polygon points="50,5 87,32 50,62" fill="#8a8a8a" />
      <motion.polygon
        points="50,5 44,58 50,82 56,58"
        fill="#d4af37"
        style={{
          y: goldY,
          opacity: goldOpacity,
          filter: "drop-shadow(0 0 6px #d4af37)",
        }}
      />
    </svg>
  );
}

/** Small logo mark for the header. */
export function PeryxMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      <path d="M30,84 L50,64 L70,84 L50,70 Z" fill="#6b6b6b" />
      <polygon points="50,5 13,32 50,62" fill="#d4d4d4" />
      <polygon points="50,5 87,32 50,62" fill="#8a8a8a" />
      <polygon points="50,5 44,58 50,82 56,58" fill="#d4af37" />
    </svg>
  );
}

