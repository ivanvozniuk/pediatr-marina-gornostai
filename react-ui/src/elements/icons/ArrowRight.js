import React from 'react';
import styled from '@emotion/styled';

const ArrowRight = ({ color, width, height, ...props }) => (
  <Svg {...props} height={height} viewBox="0 0 512 512" width={width} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="512" y1="256" y2="256"><stop offset="0" stopColor="#00f38d"/><stop offset="1" stopColor="#009eff"/></linearGradient><path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill={color}/><path d="m178.523438 420.164062v-328.328124l258.953124 206.226562h-159.042968zm30-266.085937v182.050781l55.695312-68.0625h87.429688zm0 0" fill="#4AA9E0"/></Svg>
)

const Svg = styled.svg`
  border-radius: 50%;
  transform: rotate(115deg);
  min-width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
`

export default ArrowRight;