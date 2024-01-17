import React, { ComponentPropsWithoutRef } from "react";

export const Container: React.FC<ComponentPropsWithoutRef<"div">> = ({
  children,
}) => {
  return <div className="container w-[70%] mx-auto ">{children}</div>;
};
