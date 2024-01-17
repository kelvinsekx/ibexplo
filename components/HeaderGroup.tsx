import * as React from "react";

export const HeaderGroup: React.FC<
  React.ComponentPropsWithoutRef<"hgroup">
> = ({ children }) => {
  return (
    <hgroup className="text-2xl leading-7 md:text-4xl font-medium text-center">
      {children}
    </hgroup>
  );
};
