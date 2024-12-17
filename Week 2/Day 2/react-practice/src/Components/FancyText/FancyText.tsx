import React from "react";

const FancyText = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: Omit<P, keyof typeof WrappedComponent.defaultProps>) => {
    const fancyStyle = { fontStyle: "italic", fontWeight: "bold" };
    return (
      <div style={fancyStyle}>
        <WrappedComponent {...(props as P)} />
      </div>
    );
  };
};

export default FancyText;
