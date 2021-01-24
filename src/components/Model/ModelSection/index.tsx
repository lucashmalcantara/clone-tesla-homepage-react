import { gestureProps } from "framer-motion/types/motion/features/gestures";
import React from "react";

import { Container } from "./styles";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props // Other properties.
}) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
