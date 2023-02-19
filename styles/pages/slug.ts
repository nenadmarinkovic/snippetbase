import styled from "styled-components";

export const SlugContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SlugInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  position: sticky;
  align-self: flex-start;
  top: 5.5rem;
  overflow-y: auto;

  @media (max-width: 800px) {
    position: unset;
    width: 100%;
  }
`;

export const SlugMain = styled.div`
  width: 55%;
  margin: 2.5rem 0 0 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const SlugTitle = styled.h1`
  font-size: 3rem;
  margin: 2.5rem 0 0 0;
  color: #fff;
`;

export const SlugDate = styled.div`
  margin-top: 0.3rem;
`;

export const SlugDescription = styled.p`
  margin-top: 1rem;
`;

export const SlugCategory = styled.span`
  margin-top: 0.3rem;
  background: #dcff50;
  border-radius: 10px;
  padding: 5px 10px;
  color: #000;
  font-weight: bold;
  font-size: 0.75rem;
  width: fit-content;
`;
