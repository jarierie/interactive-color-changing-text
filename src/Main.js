import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const font = "'Nunito', sans-serif";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 70%;
  height: auto;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 100px;
  font-family: ${font};
  text-transform: uppercase;
  color: white;
  -webkit-text-stroke: 1px gray;
  &:hover {
    cursor: pointer;
  }
  p {
    margin: 0;
  }

  span {
    width: 50px;
    height: 50px;
  }
`;

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Main = () => {
  const textArray = text.split("");
  const ref = useRef(null);
  const colors = ["#325288", "#f4eee8", "#f5cebe", "#114e60"];
  //animation

  const animation = (target) => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[target], {
      color: colors[Math.floor(Math.random() * colors.length)],
    }).to(ref.current.childNodes[target], { color: "transparent", delay: 1.5 });
  };

  return (
    <>
      <Container>
        <TextContainer ref={ref}>
          {textArray.map((letter, index) => {
            return (
              <>
                {letter === " " ? (
                  <span></span>
                ) : (
                  <p
                    onMouseOver={() => {
                      animation(index);
                    }}
                  >
                    {letter}
                  </p>
                )}
              </>
            );
          })}
        </TextContainer>{" "}
      </Container>
    </>
  );
};

export default Main;
