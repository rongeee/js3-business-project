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
  transition: all 0.4s ease-in-out;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, #f5ce62, #e43603, #f5ce62);

  &:hover {
    /* background-image: linear-gradient(to left, #de67a3, #ab68ca); */
    background-position: 100% 0;
    /* background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19); */
  }
`;

export const FormContainer = styled.div`
  background: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.border};
  padding: 1em;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1em;
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 1em;
`;

export const Headline = styled.h2`
  align-self: flex-start;
`;
