// Assets
import D4LaunchVideo from "../../assets/videos/D4-Launch.webm";
import D4Logo from "../../assets/images/D4-logo.png";

// Style
import { Video, VideoContainer, MainContent, FootContent, LogoContainer, StoreLogos } from "./styled";
import { Typography, Button } from "../../components";

// Store Logos
import Blizzard from'../../assets/logos/blizzard.svg';
import Playstation from '../../assets/logos/playstation.svg';
import Steam from'../../assets/logos/steam.svg';
import Xbox from'../../assets/logos/xbox.svg';

const HomePreview = () => (
  <VideoContainer>
    <Video autoPlay loop muted>
      <source src={D4LaunchVideo} type="video/webm" />
    </Video>
    <MainContent>
      <LogoContainer src={D4Logo} loading="eager" />
      <Typography.Heading>WELCOME TO HELL</Typography.Heading>
      <Typography.Text>ACTION RPG</Typography.Text>
      <Button variant="primary" filgree size="lg">BUY NOW</Button>
    </MainContent>
    <FootContent>
      <StoreLogos>
        <Blizzard/>
        <Playstation/>
        <Steam/>
        <Xbox/>
      </StoreLogos>
      <Typography.Heading light="true" fontSize="32px">LEVEL</Typography.Heading>
      <Typography.Heading light="true">"HELLS BELLS"</Typography.Heading>
    </FootContent>
  </VideoContainer>
);

export default HomePreview;
