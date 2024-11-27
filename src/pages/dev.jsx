import React from "react";
import styled, { keyframes } from "styled-components";

const LuckyCloverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Pretendard", sans-serif;
`;

const LuckyCloverText = styled.div`
  font-family: "Noto Sans KR", "Pretendard Variable", Pretendard, sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

// 잎사귀 회전 애니메이션
const rotateAnimation = keyframes`
  0% {
    transform: translate(-50%, 0) rotate(0deg);
  }
  100% {
    transform: translate(-50%, 0) rotate(360deg);
  }
`;

const LuckyCloverWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 600px;
`;

const LuckyCloverLeaves = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 250px;
  height: 250px;
  background-image: url("/leaves.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${rotateAnimation} 5s linear infinite;
`;

const LuckyCloverStem = styled.div`
  position: absolute;
  top: 31%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 20px;
  height: 300px;
  background-image: url("/stem.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;

const Dev = () => {
  return (
    <LuckyCloverContainer>
      <LuckyCloverText>박하연을 위한 네잎클로버</LuckyCloverText>
      <LuckyCloverWrapper>
        <LuckyCloverLeaves />
        <LuckyCloverStem />
      </LuckyCloverWrapper>
    </LuckyCloverContainer>
  );
};

export default Dev;
