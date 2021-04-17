import React from "react";
import { GenericButton } from './ButtonElements';

const Button = ({ children, onClick, url }) => (
  <GenericButton
    onClick={() => onClick(url)}
  >
    {children}
  </GenericButton>
);

export default Button;
