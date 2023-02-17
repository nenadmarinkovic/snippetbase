import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.5rem 0;
  backdrop-filter: saturate(70%) blur(3px);
  z-index: 2;
  contain: layout;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInfo = styled.div`
  color: #DCFF50;
  font-weight: bold;

`;
