import styled from "styled-components";

export const ChatButton = styled.button`
  background-color: ${props => props.color};
  border: none;
  border-radius: 5px;
  color: white;
  padding: .8rem;
  font-size: .8rem;
  font-weight: bold;
  cursor: pointer;
`;