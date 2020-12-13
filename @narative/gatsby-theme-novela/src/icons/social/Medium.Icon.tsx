import React from "react";

import { Icon } from '@types';

const MediumIcon: Icon = ({ fill = "white" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.9 7c0 2.2-1.77 3.98-3.95 3.98A3.96 3.96 0 010 7.01c0-2.2 1.77-3.98 3.95-3.98A3.96 3.96 0 017.9 7.01zM12.23 7c0 2.08-.89 3.75-1.98 3.75-1.09 0-1.97-1.67-1.97-3.74 0-2.07.88-3.74 1.97-3.74 1.1 0 1.98 1.67 1.98 3.74M14 7c0 1.86-.31 3.36-.7 3.36-.38 0-.69-1.5-.69-3.35s.31-3.35.7-3.35c.38 0 .69 1.5.69 3.35z"
      fill={fill}
    />
  </svg>
);

export default MediumIcon;
