import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalBlock = styled.div`
  position: relative;
  background-color: #fdfbf7;
  width: 85%;
  height: ${props => props.height};
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

export const DeleteRect = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;

export const TextWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${props => props.padding || 0};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
