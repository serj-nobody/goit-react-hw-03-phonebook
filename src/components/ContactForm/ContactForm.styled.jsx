import styled from 'styled-components';

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 300px;

  @media  screen and (max-width: 480px) {
    width: 100%
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;

  &:nth-child(2) {
    margin-bottom: 25px;
  }
`;

export const InputLabel = styled.label`
  font-weight: 700;
  margin-bottom: 10px;
  @media  screen and (max-width: 480px) {
    margin-right: 0;
    
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 200px;
  padding: 5px;
  background-color: #e8f0fe;
  border: 1px solid #cfcfcf;
  border-radius: 5px;

  &:focus {
    border: 1px solid #7eb2df;
    outline: 1px solid #7eb2df;
  }
`;

export const Button = styled.button`
  width: 140px;
  font-weight: 700;
  padding: 8px 16px;
  background-color: #898fad;
  border: none;
  border-radius: 5px;
  margin-bottom: 40px;
  box-shadow: 0px 15px 20px -3px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 250ms;

  &:hover {
      background-color: #a4adda;
    }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }
`;