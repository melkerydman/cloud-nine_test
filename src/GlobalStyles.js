import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
	// Color
	--clr-white: #ffffff;
	--clr-black: #202020;
	--clr-accent: #B69F58;

	// Font family
	--ff-primary: ;
	--ff-secondary: ;

	// Font size
	--fs-h1: 32px;
	--fs-h2: 26px;
	--fs-h3: 22px;
	--fs-h4: 20px;
	--fs-p1: 15px;
	--fs-p2: 13px;
	--fs-p3: 11px;

	// Letter spacing

	// Line height
	--lh-1: 24px; 
	--lh-2: 22px; 
	--lh-3: 20px; 
	--lh-4: 16px; 
	--lh-5: 12px; 

	// Padding
	--gutter-xl: 24px;
	--gutter-lg: 20px;
	--gutter-md: 16px;
	--gutter-sm: 8px;
	--gutter-xs: 4px;
}
body {
	background: var(--clr-white);
	color: var(--clr-black);
}
`;
