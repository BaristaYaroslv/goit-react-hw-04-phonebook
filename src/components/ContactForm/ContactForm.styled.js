import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  margin-top: 5px;
  box-sizing: border-box;

   :focus,:hover {
  outline: none;
  border: 1px solid #CC99FF;}
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #9999FF;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px; 
  
   :hover {background-color: #CC99FF;}
`;