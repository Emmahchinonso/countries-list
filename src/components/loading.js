import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media(max-width: 678px){
    top: 65%;
  }
`;

const DoubleBounce1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--text-color);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bounce 2.0s infinite ease-in-out;
`;

const DoubleBounce2 = styled(DoubleBounce1)`
  animation-delay: -1.0s;
`;

const Loading = () => {
  return (
    <Spinner>
      <DoubleBounce1 />
      <DoubleBounce2 />
    </Spinner>
  )
}

export default Loading;