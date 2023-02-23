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
  padding: 1.35rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 350px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const HeaderInfo = styled.div`
  color: #dcff50;
  font-weight: bold;

  span {
    position: relative;
    bottom: 3px;

    @media (max-width: 350px) {
      bottom: -3px;
    }
  }
`;

export const HeaderBorder = styled.div`
  width: 100%;
  height: 0.5px;
  background: #262626;
`;
