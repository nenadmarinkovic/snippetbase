import styled from "styled-components";

export const TableContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: 2.5rem;
`;

export const FlexTableHeader = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(60, 60, 60);
  font-weight: bold;
  color: #fff;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const FlexTableRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(60, 60, 60);
  transition: 0.3s;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem 0;
  }

  :hover {
    color: #dcff50;
  }
`;

export const FlexRow = styled.div`
  width: calc(100% / 4);
  text-align: start;
  padding: 0.75rem 0.75rem 0.75rem 0;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }

  &:first-of-type {
    width: 10%;

    @media (max-width: 800px) {
    width: 100%;
  }
  }

  &:nth-of-type(2) {
    width: 25%;
    @media (max-width: 800px) {
    width: 100%;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }
  }

  &:nth-of-type(3) {
    width: 40%;
    @media (max-width: 800px) {
    width: 100%
  }
  }

  &:nth-of-type(4) {
    width: 10%;
    @media (max-width: 800px) {
    width: 100%
  }
  }
`;

export const SearchInput = styled.input`
  padding: 1rem 0 1rem 0;
  background: none;
  border: none;
  color: #fff;
  border-bottom: 0.5px solid rgb(60,60,60);
  width: 350px;
  font-size: 1rem;
  font-weight: bold;

  :focus {
    outline: 1px solid #000;
  }
`;

export const NoResults = styled.p`
  margin-top: 1rem;
`;
