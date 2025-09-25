"use client";

import Whatsapp from "@/components/site-components/Whatapp/whatsapp";
import React, { useEffect, useRef, useState } from "react";

const BackToTop = () => {
  const progressRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only once after the component mounts on the client
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // This effect now only runs if the component is mounted (client-side)
    if (!isMounted) return;

    const progressPath = progressRef.current?.querySelector("path");
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;

      const rbtProgressParent = progressRef.current;
      if (rbtProgressParent) {
        if (scroll > 50) {
          rbtProgressParent.classList.add("rbt-backto-top-active");
        } else {
          rbtProgressParent.classList.remove("rbt-backto-top-active");
        }
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    progressRef.current?.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, [isMounted]); // Now depends on `isMounted`

  // Render null on the server to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Whatsapp />
      <div className="rbt-progress-parent" ref={progressRef}>
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

export default BackToTop;
