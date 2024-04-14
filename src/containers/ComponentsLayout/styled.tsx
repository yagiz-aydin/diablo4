import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    background-image:radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.084) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 24.58%, rgba(0, 0, 0, 0) 49.58%, rgba(0, 0, 0, 0) 76.15%, #000000 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)),  url('images/sections/components.webp');
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
    gap: 28px;
`

export const Row = styled.div`
    display: flex;
    gap: 32px;
`