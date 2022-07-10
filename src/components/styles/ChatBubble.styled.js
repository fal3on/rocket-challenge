import styled from "styled-components";

export const ChatBubble = styled.div`
    align-self: flex-end;
    background-color: ${props => props.color};
    width: fit-content;
    padding: 1rem;
    border-radius: 5px;
`;

export const ChatBubbleText = styled.p`
    color: black;
    font-size: .8rem;
`;