import styled from 'styled-components';

export const PhonebookApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: #3d3d3d;
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  @media  screen and (max-width: 480px) {
    padding: 30px;
  }
`;

export const PhonebookTitle = styled.h1`
  margin-bottom: 25px;
`;

export const ContactsTitle = styled.h2`
  margin-bottom: 25px;
`;