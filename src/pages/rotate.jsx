import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

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
  width: 300px;
  height: 600px;
`;

const LuckyCloverLeaves = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: ${(props) => `translate(-50%, 0) rotate(${props.rotation}deg)`};
  width: 250px;
  height: 250px;
  background-image: url("/leaves.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.4s linear; /* 부드러운 멈춤 */
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

const ToggleButton = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #8ad181;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #62ad58;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;

const Rotate = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [rotation, setRotation] = useState(0); // 현재 회전 각도 저장

  // 회전 애니메이션 실행
  React.useEffect(() => {
    let animationFrame;
    let startTime;

    const rotate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;

      // 회전 각도를 업데이트
      if (isRotating) {
        setRotation((prev) => prev + 2.0 * (elapsed / 16));
        startTime = timestamp; // 새 시작 시간 갱신
      }

      animationFrame = requestAnimationFrame(rotate);
    };

    animationFrame = requestAnimationFrame(rotate);

    return () => cancelAnimationFrame(animationFrame); // 정리
  }, [isRotating]);

  return (
    <LuckyCloverContainer>
      <LuckyCloverText>박하연을 위한 네잎클로버</LuckyCloverText>
      <ToggleButton onClick={() => setIsRotating((prev) => !prev)}>
        {isRotating ? "정지" : "회전"}
      </ToggleButton>
      <LuckyCloverWrapper>
        <LuckyCloverLeaves rotation={rotation} />
        <LuckyCloverStem />
      </LuckyCloverWrapper>
    </LuckyCloverContainer>
  );
};

export default Rotate;
