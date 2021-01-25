import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

// Uncomment this code to see how the scroll works.
//   useEffect(() => {
//     scrollY.onChange((scrollY) => {
//       console.log({ scrollY });
//     });
//     scrollYProgress.onChange((scrollYProgress) => {
//       console.log({ scrollYProgress });
//     });
//   }, [scrollY, scrollYProgress]);

  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      const updateScrollValue = () => {
        if (wrapperRef.current) {
          const { scrollTop, scrollHeight, offsetHeight } = element;
          const fullScroll = scrollHeight - offsetHeight;
          scrollY.set(scrollTop); // px
          scrollYProgress.set(scrollTop / fullScroll); // 0 - 1 (%)
        }
      };

      element.addEventListener("scroll", updateScrollValue);

      return () => element.removeEventListener("scroll", updateScrollValue);
    }
  }, [scrollY, scrollYProgress, wrapperRef]);

  return { scrollY, scrollYProgress };
}
