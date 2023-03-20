import styled from '@emotion/styled';

export const ContactListEl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #e74c3c;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  
  :hover {background-color: #c0392b;}
`;

export const Span=styled.span`
  font-weight: bold;
  margin-left: 10px;
`;
