import * as React from "react";
export const Button = ({children, ...rest}: React.ButtonHTMLAttributes<{}>) => {
  return (
    <button
      onClick={() => console.log("Hello")}
      style={{
        background: "orangered",
        outline: "none",
        border: "none",
        padding: "8px 12px",
        borderRadius: "4px",
        color: "white",
      }}
      {...rest}
    >
      {children ? children : 'Boop'}
    </button>
  );
};
