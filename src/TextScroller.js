import React, { useEffect, useRef } from "react";
import "./TextScroller.css";

const TextScroller = ({
  children,
  direction = "horizontal",
  infinite = false,
  speed = 10,
  pauseOnHover = true,
  className = "",
  style,
}) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    const resetScroll = () => {
      scroller.style.animation = "none";
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        scroller.style.animation = "";
        if (direction === "horizontal") {
          scroller.style.animation = `scroll-horizontal ${speed}s linear`;
        } else if (direction === "vertical") {
          scroller.style.animation = `scroll-vertical ${speed}s linear`;
        }
      }, 50); // 重置
    };

    if (infinite) {
      const clone = scroller.cloneNode(true);
      scroller.appendChild(clone);

      if (direction === "horizontal") {
        const originalWidth = scroller.scrollWidth / 2;
        scroller.style.width = `${originalWidth * 2}px`;
        scroller.style.animation = `scroll-horizontal ${speed}s linear infinite`;
      } else if (direction === "vertical") {
        const originalHeight = scroller.scrollHeight / 2;
        scroller.style.height = `${originalHeight * 2}px`;
        scroller.style.animation = `scroll-vertical ${speed}s linear infinite`;
      }
    } else {
      if (direction === "horizontal") {
        scroller.style.animation = `scroll-horizontal ${speed}s linear`;
      } else if (direction === "vertical") {
        scroller.style.animation = `scroll-vertical ${speed}s linear`;
      }

      scroller.addEventListener("animationend", resetScroll);
      return () => scroller.removeEventListener("animationend", resetScroll);
    }
  }, [direction, infinite, speed]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      scrollerRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      scrollerRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div
      className={`text-scroller-container ${className} ${direction}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-scroller" ref={scrollerRef}>
        {children}
      </div>
    </div>
  );
};

export default TextScroller;
