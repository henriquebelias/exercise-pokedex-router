import React from "react";
import { GenericButton } from './ButtonElements';

const Button = ({ children, onClick, url, gridless }) => (
  <GenericButton
    onClick={() => onClick(url)}
    gridless={gridless}
  >
    {children}
  </GenericButton>
);

export default Button;
