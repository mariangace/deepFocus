import React from "react";

import "./styles.css";

interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <div className="vh-100 dt w-100 container">
          <div className="dtc v-mid tc ph3 white ph4-l">{children}</div>
        </div>
      </div>
    </>
  );
}
