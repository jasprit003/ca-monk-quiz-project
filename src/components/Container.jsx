import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" fixed inset-0 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Container;
