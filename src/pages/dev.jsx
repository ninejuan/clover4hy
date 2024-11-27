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
  margin-bottom: 20px;
`;

const LuckyCloverWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 600px;
`;

const LuckyCloverLeaves = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 300px;
  height: 300px;
  background-image: url("/leaves.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LuckyCloverStem = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 60px;
  height: 250px;
  background-image: url("/stem.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
