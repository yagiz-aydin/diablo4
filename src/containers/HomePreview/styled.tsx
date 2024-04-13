import styled from "styled-components";

export const LogoContainer = styled.img`
    width: 100%;
    max-width: 640px;
`

export const VideoContainer = styled.div`
    width: calc(100vw - 16px);
    height: 100dvh;
    position: relative;
`

export const Video = styled.video`
    position: absolute;
    width: 100%;
    height: 100dvh;
    object-fit: cover;
    z-index: -1;   
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    gap: 16px;
`

export const MainContent = styled(Content)``

export const FootContent = styled(Content)`
    background: url('images/sections/outro.webp');
    background-size: 3200px auto !important;
    background-position: center top;
    background-repeat: no-repeat;
    justify-content: flex-start;
`

export const StoreLogos = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    width: 320px;
    gap: 48px;
    svg{
        width: 64px;
        height: 64px;
    }
`