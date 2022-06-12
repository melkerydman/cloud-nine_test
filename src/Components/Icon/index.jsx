import React from "react";
import iconPath from "../../Assets/iconsLib";

const Icon = ({ style, size, color, icon, stroke, strokeWidth }) => {
  return (
    <svg
      style={style}
      viewBox={`0 0 ${size} ${size}`}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill={color}
        d={iconPath[icon]}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default Icon;
