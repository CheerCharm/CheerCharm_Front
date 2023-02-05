import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: static;
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props =>
    props.direction == "column" ? "center" : "flex-end"};
  margin-top: 35px;
`;

export const exNameText = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Line = styled.hr`
  width: 90%;
  border: solid 1px #ffffff;
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 70px;
`;

export const ContentText = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 44px;
  text-align: center;
`;

export const CheerText = styled.textarea`
  width: 80%;
  height: 280px;
  font-family: Galmuri;
  font-size: 12px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fdfbf7;
  resize: none;
  outline: none;
  border: none;
`;

export const CheerName = styled.input`
  width: 80%;
  height: 50px;
  font-family: Galmuri;
  font-size: 12px;
  background-color: #fdfbf7;
  border-radius: 20px;
  padding: 0px 20px 0px 20px;
  outline: none;
  border: none;

  margin-top: 18px;
  margin-bottom: 24px;
`;
