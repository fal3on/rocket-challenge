import styled from "styled-components";

export const ChatBlock = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const AvatarBlock = styled.div`
    width: 50px;
    height: 64px;
    position: relative;
    &::after {
        content: '';
        display: block;
        width: 15px;
        height: 15px;
        background-color: yellowgreen;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        right: -2px;
    }
`;

export const Avatar = styled.img`
    width: 50px;
    height: 64px;
    border-radius: 42%;
    object-fit: cover;
    border: 2px solid hotpink;
`;