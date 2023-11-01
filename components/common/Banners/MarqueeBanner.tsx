import React from "react";

import Marquee from "react-fast-marquee";

export default function MarqueeBanner() {
  return (
    <Marquee className="p-1 bg-yellow-400 text-black" autoFill pauseOnHover>
      <div className="text-sm font-medium px-2"> 
        💣 This website is still under development. Please bear with me as I am still working on it. Thank you! 
      </div>
    </Marquee>
  )
}
