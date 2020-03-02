import { keyframes } from '@emotion/core';

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default {
	fadeAnimation,
	fadeFast: '0.2s',
	fadeMedium: '0.5s',
	fadeLong: '0.8s',
	hoverTransition: '.3s',
	hoverOpacity: 0.8,
	color: {
		text_main: 'rgba(0, 0, 0, .87)',
		text_secondary: '#808080',
		main: '#2a97d6',
		main_light: '#63acd3',
		main_lightest: 'rgba(42, 151, 214, 0.05)',
		main_medium: 'rgba(42, 151, 214, 0.6)',
		red: '#e74c3c',
		red_lighter: '#e56d62',
		yellow: '#f7b731',
		yellow_lighter: '#f7c560',
		green: '#27ae60',
		green_lighter: '#6faa86',
	},
	typography: {
		list_margin: '7px',
		line_height_small: '1.15',
		line_height_default: '1.25',
	},
};
