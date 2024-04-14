import styled from "styled-components";
import { Classes } from ".";

interface ContentStyle{
    class: Classes
}
export const Content = styled.div<ContentStyle>`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-image: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.084) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 24.58%, rgba(0, 0, 0, 0) 49.58%, rgba(0, 0, 0, 0) 76.15%, #000000 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url("images/classes/preview/${(props) => props.class}.webp"), url("images/sections/classes.webp");
    background-position: center top;
    box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.24), inset 0px 2px 0px rgba(255, 255, 255, 0.06), inset 0px -1px 0px rgba(0, 0, 0, 0.24), inset 0px -2px 0px rgba(255, 255, 255, 0.06);
    padding-top: 64px;
    @media only screen and (max-width: 800px) {
        height: auto;
    }
`

export const ClassesContainer = styled.div`
    margin-top: 24px;;
    display: flex;
    gap: 32px;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const ClassDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
`

export const ClassContainer = styled.div`
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const ClassVideoContainer = styled.div<{class: Classes}>`
    margin-top: 24px;
    height: 320px;
    width: 540px;
    background-image: url("images/classes/video/${props => props.class}.webp");
    background-position: center top;
    background-size: cover;
    @media only screen and (max-width: 800px) {
        height: 160px;
        width: 270px;
    }
`

export const ClassHeadDescription  = styled.div`

`