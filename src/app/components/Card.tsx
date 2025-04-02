import React from "react";

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`p-4 w-30 shadow-lg rounded-xl border border-gray-200 bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
