import React, { useEffect, useState } from "react";
import './scroll.css';

const BackBtn = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, []);

  const scrollUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",

    })
  }

  return (
    <div className="container_scroll">
      {
        backToTopButton && (
          <button onClick={scrollUp} className="Back_To-Top">^</button>
        )
      }
    </div>
  )
};

export default BackBtn;
