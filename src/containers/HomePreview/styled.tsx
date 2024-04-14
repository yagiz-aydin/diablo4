import styled from "styled-components";

export const LogoContainer = styled.img`
    width: 100%;
    max-width: 640px;
`

export const VideoContainer = styled.div`
    width: calc(100vw - 16px);
    height: 100dvh;
    position: relative;
    display: inline;
`

export const Video = styled.video`
    position: absolute;
    width: 100%;
    height: calc(100vh + 1px);
    object-fit: cover;
    z-index: -1;   
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
`

export const MainContent = styled(Content)`
    text-align: center;
    gap: 16px;
`

export const FootContent = styled(Content)`
    background: url('images/sections/outro.webp');
    background-size: 3200px auto !important;
    background-position: center top;
    background-repeat: no-repeat;
    justify-content: flex-start;
    gap: 36px;
`

export const StoreLogos = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    width: 320px;
    gap: 36px;
    svg{
        width: 64px;
        height: 64px;
    }
`