import React from "react";
import iconPath from "../../Assets/iconsLib";

const Icon = ({ size, color, icon, stroke, strokeWidth }) => {
  console.log(iconPath);
  return (
    <svg
      viewBox="0 0 24 24"
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
