import React from "react";
import Main from "./screens";

import styled from "styled-components";

const OuterDiv = styled.div`
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #777;
  padding: 20px;
`;

function App() {
  return (
    <OuterDiv>
      <Main />
    </OuterDiv>
  );
}

export default App;
