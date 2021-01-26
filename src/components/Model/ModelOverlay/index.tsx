import { useTransform } from "framer-motion";
import { valueScaleCorrection } from "framer-motion/types/render/dom/layout/scale-correction";
import React, { Children, useCallback, useLayoutEffect, useState } from "react";
import { CarModel } from "../ModelsContext";
import useWrapperScroll from "../useWrapperScroll";

import { Container } from "./styles";

interface Props {
  model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

  // Hook that is called when any DOM element is changed.
  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [getSectionDimensions]);

  const { scrollY } = useWrapperScroll();

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );

  // Uncomment this code to see how the scroll works.
  // React.useEffect(() => {
  //   sectionScrollProgress.onChange((value) =>
  //     console.log({ sectionScrollProgress: value })
  //   );
  // }, [sectionScrollProgress]);

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  );

  const pointerEvents = useTransform(opacity, (value) =>
    value > 0 ? "auto" : "none"
  );

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>;
};

export default ModelOverlay;
