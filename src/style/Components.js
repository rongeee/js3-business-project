import styled from "styled-components";

export const Btn = styled.button`
  outline: none;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border: none;
  color: #fff;
  outline: none;
  cursor: pointer;
  z-index: 11;
  transition: all 0.2s ease-in-out;
  background-size: 200% 100%;
  background: ${(props) => props.theme.btnSuccess};

  &:hover {
    /* background-image: linear-gradient(to left, #de67a3, #ab68ca); */
    filter: brightness(85%);
    /* background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19); */
  }
`;

export const BtnSecondary = styled(Btn)`
  background: ${(props) => props.theme.btnSecondary};
`;

export const FormContainer = styled.div`
  background: ${(props) => props.theme.bodyDarker};
  border: 1px solid ${(props) => props.theme.border};
  padding: 1em;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1em;
  max-width: 1400px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 1em;
`;

export const WrapperAlignStart = styled(Wrapper)`
  flex-direction: column;
  max-width: 900px;
  justify-content: flex-start;
  padding-top: 100px;
`;

export const Headline = styled.h2`
  align-self: flex-start;
`;

export const CentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
