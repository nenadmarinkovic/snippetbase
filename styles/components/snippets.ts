import styled from "styled-components";

export const TableContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: 3.5rem;
`;

export const FlexTableHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(60, 60, 60);
  font-weight: bold;
  color: #fff;
`;

export const FlexTableRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(60, 60, 60);
  transition: 0.3s;
  position: relative;

  :hover {
    color: #dcff50;
  }
`;

export const FlexRow = styled.div`
  width: calc(100% / 4);
  text-align: start;
  padding: 0.75rem 0.75rem 0.75rem 0;

  &:first-of-type {
    width: 10%;
  }

  &:nth-of-type(2) {
    width: 25%;
  }

  &:nth-of-type(3) {
    width: 40%;
  }

  &:nth-of-type(4) {
    width: 10%;
  }
`;
