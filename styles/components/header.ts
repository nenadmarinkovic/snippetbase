import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: saturate(70%) blur(3px);
  z-index: 2;
  contain: layout;
`;

export const HeaderInside = styled.div`
  padding: 1.35rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInfo = styled.div`
  color: #dcff50;
  font-weight: bold;
`;

export const HeaderBorder = styled.div`
  width: 100%;
  height: 0.5px;
  background: #262626;
`;
