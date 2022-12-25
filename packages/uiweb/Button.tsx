import React from "react";

export const Button: React.FC<
  {
    variant?: "primary" | "secondary";
  } & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({
  children,
  variant = "primary",
  ...buttonProps
}) => {
  return (
    <button
      className={`button button--${variant}} ${className}`}
      {...buttonProps}
    >
      <>{children}</>
    </button>
  );
};
