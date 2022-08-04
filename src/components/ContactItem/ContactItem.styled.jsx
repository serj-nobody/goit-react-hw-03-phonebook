import styled from 'styled-components';

export const ContactElement = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  text-align: left;

  @media  screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 20px;
  }
`;

export const ContactName = styled.span`
  font-weight: 700;
  margin-right: 10px;

  @media  screen and (max-width: 480px) {
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

export const ContactNumber = styled.span`
  margin-right: 20px;

  @media  screen and (max-width: 480px) {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  display: block;
  width: 80px;
  font-weight: 700;
  padding: 8px 16px;
  background-color: #f69f99;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 15px 20px -3px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 250ms;

  &:hover {
      background-color: #ffd2ce;;
    }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }
`;