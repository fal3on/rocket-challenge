import styled from "styled-components";

export const ChatContainer = styled.div`
    background: white;
    width: 340px;
    border-radius: 5px;
    overflow: hidden;
`;

export const ChatHeader = styled.div`
    padding: 2rem 1rem;
    background: hotpink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    & ::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 8px;
        background: pink;
        bottom: 0;
        left: 0;
    }
    & ::after {
        content: "";
        position: absolute;
        display: block;
        width: ${props => props.stepWidth || "0px"} ;
        height: 8px;
        background: red;
        bottom: 0;
        left: 0;
    }
`;

export const ChatHeaderText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

export const HeaderTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const HeaderIcon = styled.div`
    color: white;
    font-size: 64px;
`;

export const HeaderParagraph = styled.p`
    font-size: 1rem;
    display: flex;
    & span {
        display: flex;
        align-items: center;
        margin-right: 5px;
    }
`;

export const ChatBody = styled.div`
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-y: auto;
    max-height: 50vh;
    min-height: 45vh;
    position: relative;
`;

export const ChatFooter = styled.div`
    padding: 1rem 1rem;
    background: hotpink;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #e6e6e6;
`;