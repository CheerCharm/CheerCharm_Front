import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdfbf7;
`;

export const Inner = styled.div`
  width: calc(100% - 50px);
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  color: #000;
`;

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid #000;
  margin: 10px 0;
`;
