import React from "react";
import styled, { keyframes } from "styled-components";

// 잎 회전 애니메이션
const rotateLeaves = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 전체 컨테이너
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  margin: 0;
`;

// 클로버 Wrapper
const CloverWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

// 잎 회전 영역
const Leaves = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotateLeaves} 4s linear infinite;
`;

// 네잎클로버 잎
const Leaf = styled.div`
  position: absolute;
  width: 100px;
  height: 150px;
  background-color: #7bc96f;
  border-radius: 50% 50% 0 0;
  transform-origin: bottom center;

  &:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  &:nth-child(2) {
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(135deg);
  }
  &:nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) rotate(-135deg);
  }
  &:nth-child(4) {
    top: 50%;
    right: 0;
    transform: translateY(-50%) rotate(-45deg);
  }
`;

// 줄기 (잎 뒤로 이동)
const Stem = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  width: 15px;
  height: 400px;
  background-color: #7bc96f;
  border-radius: 5px;
  transform: translateX(-50%);
  z-index: 1; /* 잎 뒤로 이동 */
`;

const RotatingClover = () => {
  return (
    <Container>
      <CloverWrapper>
        <Stem />
        <Leaves>
          <Leaf />
          <Leaf />
          <Leaf />
          <Leaf />
        </Leaves>
      </CloverWrapper>
    </Container>
  );
};

export default RotatingClover;
