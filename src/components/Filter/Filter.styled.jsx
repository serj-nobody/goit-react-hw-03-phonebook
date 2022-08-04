import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

export const FilterLabel = styled.label`
  font-weight: 700;
  margin-bottom: 15px;
`;

export const FilterInput = styled.input`
  /* flex-grow: 1; */
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