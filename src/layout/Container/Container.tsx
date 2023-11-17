import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0">
      <div className="vh-100 dt w-100 bg-dark-pink">
        <div className="dtc v-mid tc white ph3 ph4-l">{children}</div>
      </div>
    </div>
  );
}
