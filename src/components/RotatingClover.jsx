import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
`;

const Clover = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  animation: ${rotate} 4s linear infinite;
`;

const Leaf = styled.div`
  position: absolute;
  width: 80px;
  height: 120px;
  background-color: #7bc96f;
  border-radius: 50%;
  transform-origin: bottom center;

  &:nth-child(1) {
    top: 0;
    left: 35px;
    transform: rotate(0deg);
  }

  &:nth-child(2) {
    top: 35px;
    left: 0;
    transform: rotate(90deg);
  }

  &:nth-child(3) {
    top: 35px;
    right: 0;
    transform: rotate(-90deg);
  }

  &:nth-child(4) {
    bottom: 0;
    left: 35px;
    transform: rotate(180deg);
  }
`;

const Stem = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  width: 10px;
  height: 100px;
  background-color: #7bc96f;
  transform: translateX(-50%);
`;

const RotatingClover = () => {
  return (
    <Container>
      <Clover>
        <Leaf />
        <Leaf />
        <Leaf />
        <Leaf />
        <Stem />
      </Clover>
    </Container>
  );
};

export default RotatingClover;
