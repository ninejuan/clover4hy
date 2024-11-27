import React from "react";
import styled from "styled-components";

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
`;

const LuckyCloverWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 349.64px;
  height: 607.52px;
  max-height: 607.52px;
`;

const LuckyClover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-image: url("/public/clover.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const App = () => {
  return (
    <LuckyCloverContainer>
      <LuckyCloverText>박하연을 위한 네잎클로버</LuckyCloverText>
      <LuckyCloverWrapper>
        <LuckyClover />
      </LuckyCloverWrapper>
    </LuckyCloverContainer>
  );
};

export default App;
