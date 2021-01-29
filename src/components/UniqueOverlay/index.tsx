import { useTransform } from "framer-motion";
import React from "react";
import useWrapperScroll from "../Model/useWrapperScroll";

import { Container, Header, Logo, Burger, Footer } from "./styles";

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();
  // From 90% to 100% of scroll we will make the footer go from 0% to 100% of opacity.
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Made with 🤍</a>
          </li>
          <li>
            <a href="#">by Lucas Alcântara</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
