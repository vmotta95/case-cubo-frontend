import styled from "styled-components";

export const ContainerMainContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap:130px;
width: 100%;
height: 65vh;
`
export const ContainerDonutGraphic = styled.div `
display: flex;
justify-content: center;
    width: 800px;
    height: 500px;


`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;