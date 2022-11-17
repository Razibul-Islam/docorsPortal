import React from "react";

const Loading = () => {
  return (
    <div className="flex items-baseline justify-center">
      <p className="text-7xl">L</p>
      <p className="w-10 h-10 border-dashed border-8 rounded-full animate-spin border-yellow-300"></p>
      <p className="text-7xl">ading...</p>
    </div>
  );
};

export default Loading;
