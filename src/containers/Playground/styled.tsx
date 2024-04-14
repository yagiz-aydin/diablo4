import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    background-image: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.084) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, #ff000024 0%, #ff000024 24.58%, #ff000024 49.58%, #ff000024 76.15%, #ff000024 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url('images/sections/components.webp');
    background-position: center top;
    box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.24), inset 0px 2px 0px rgba(255, 255, 255, 0.06), inset 0px -1px 0px rgba(0, 0, 0, 0.24), inset 0px -2px 0px rgba(255, 255, 255, 0.06);
`

export const HeadContent = styled.div`
    margin-top: 36px;
    text-align: center;
`

export const BodyContent = styled.div`
    margin: 48px 0;
    width: var(--container-width);
    display: flex;
    flex-direction: row;
    gap: 64px;
    flex-wrap: wrap;
    margin-bottom: 32px;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-self: baseline;
        margin-left: 32px;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 28px;
`


export const ColumnProps = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    select{
        width: 180px;
        font-size: 18px;
        background-color: #0e0f0f;
        border: none;
        color: white;
    }
    input{
        height: 24px;
        width: 24px;
    }
`

export const ColumnHead = styled.div`
    align-self: flex-start;
    justify-content: flex-start;
`