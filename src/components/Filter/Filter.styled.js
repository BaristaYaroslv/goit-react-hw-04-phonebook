import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  white-space: nowrap;
  
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  margin-left: 15px;
  
  :focus,:hover {
  outline: none;
  border: 1px solid #8e44ad;}
`;