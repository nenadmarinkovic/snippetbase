import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  border-bottom: ${({ theme }) => theme.headerAndMenuBorder};
  background: ${({ theme }) => theme.headerBackground};
  backdrop-filter: saturate(70%) blur(3px);
  z-index: 2;
  contain: layout;
`;