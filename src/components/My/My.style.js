import styled from "styled-components";
import background from "../../assets/images/background.png";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url(${background});
	background-repeat: repeat-y;
	background-size: 100%;
	position: relative;
`;

export const Top = styled.div`
	width: calc(100% - 70px);
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
`;

export const Border = styled.div`
	width: calc(100% - 60px);
	border-bottom: 2px solid #fff;
	margin: 10px 0;
`;

export const MyBox = styled.div`
	width: calc(100% - 60px);
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
	margin-bottom: 90px;
	border-radius: 30px;
	background-color: #fdfbf7;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	position: relative;
`;

export const TabTitle = styled.div`
	width: 70%;
	display: flex;
	justify-content: space-between;
	margin: 30px 0;
`;

export const FlexContainer = styled.div`
	width: 85%;
	display: flex;
	overflow-x: scroll;
	padding: 5px;
	//-ms-overflow-style: none;
	//scrollbar-width: none;
	::-webkit-scrollbar {
		//display: none;
	}
`;

export const TestCharm = styled.div`
	width: 160px;
	height: 230px;
	background-color: beige;
	margin-bottom: 10px;
`;

export const CharmRect = styled.div`
	width: 160px;
	height: 270px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 15px 10px 0;
	flex-shrink: 0;
	overflow: hidden;
	position: relative;
`;

export const CheckCircle = styled.div`
	width: 15px;
	height: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 2px solid #155726;
	position: absolute;
	top: 15px;
	left: 10px;
`;

export const ButtonContainer = styled.div`
	width: 80%;
	height: 50px;
	position: relative;
	margin-top: 30px;
`;

export const DButton = styled.div`
	width: 120px;
	height: 38px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	position: absolute;
	right: 5px;
`;