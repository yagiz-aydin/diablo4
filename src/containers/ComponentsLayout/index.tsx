import { Button, Typography } from "../../components";
import IconButton from "../../components/IconButton";
import { HeadContent, BodyContent, Content, Column, Row } from "./styled";

const ComponentsLayout = () => (
  <Content>
    <HeadContent>
      <Typography.Text>UI Stylesheet</Typography.Text>
      <Typography.Heading>COMPONENTS</Typography.Heading>
    </HeadContent>
    <BodyContent>
      <Column>
        <Typography.Heading fontSize="28px" light="true">
          Primary
        </Typography.Heading>
        <Button variant="primary" size="lg">
          Primary
        </Button>
        <Button variant="primary" size="md">
          Primary
        </Button>
        <Button variant="primary" size="sm">
          Primary
        </Button>
      </Column>
      <Column>
        <Typography.Heading fontSize="28px" light="true">
          Secondary
        </Typography.Heading>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
        <Button variant="secondary" size="md">
          Secondary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
      </Column>
      <Column>
        <Typography.Heading fontSize="28px" light="true">
          With Filgree
        </Typography.Heading>
        <Button variant="primary" size="lg" filgree>
          Primary
        </Button>
        <Button variant="secondary" size="md" filgree>
          Primary
        </Button>
        <Button variant="primary" size="sm" filgree>
          Primary
        </Button>
      </Column>
    </BodyContent>
    <BodyContent>
      <Column>
      <Typography.Heading fontSize="28px" light="true">
          Icon Button
        </Typography.Heading>
        <Row>
          <IconButton text="BARBARIAN" currentClass={"BARBARIAN"} onClick={() => {}}/>
          <IconButton text="NECROMANCER" currentClass={"BARBARIAN"} onClick={() => {}}/>
          <IconButton text="SORCERER" currentClass={"BARBARIAN"} onClick={() => {}}/>
          <IconButton text="DRUID" currentClass={"BARBARIAN"} onClick={() => {}}/>
          <IconButton text="ROGUE" currentClass={"BARBARIAN"} onClick={() => {}}/>
        </Row>
      </Column>
      <Column>
        <Typography.Heading fontSize="28px" light="true">
          Typography Old Fenris
        </Typography.Heading>
        <Typography.Heading fontSize="48px">
          Apparently motionless
        </Typography.Heading>
        <Typography.Heading fontSize="40px">
          to her passengers and crew,
        </Typography.Heading>
        <Typography.Heading fontSize="32px">
          the Interplanetary liner Hyperion bored serenely
        </Typography.Heading>
        <Typography.Heading fontSize="26px">
          onward through space at normal acceleration.
        </Typography.Heading>
        <Typography.Heading fontSize="18px">
          In the railed-off sanctum in one corner of the control room a bell
          tinkled.
        </Typography.Heading>
      </Column>
      <Column>
        <Typography.Heading fontSize="28px" light="true">
          Typography Exocet Blizzard
        </Typography.Heading>
        <Typography.Leading fontSize="48px">
          Apparently motionless
        </Typography.Leading>
        <Typography.Leading fontSize="40px">
          to her passengers and crew,
        </Typography.Leading>
        <Typography.Leading fontSize="32px">
          the Interplanetary liner Hyperion bored serenely
        </Typography.Leading>
        <Typography.Leading fontSize="26px">
          onward through space at normal acceleration.
        </Typography.Leading>
        <Typography.Leading fontSize="18px">
          In the railed-off sanctum in one corner of the control room a bell
          tinkled.
        </Typography.Leading>
      </Column>
      <Column>
      <Typography.Heading fontSize="28px" light="true">
          Typography Alegreya Sans
        </Typography.Heading>
        <Typography.Text>
          Typography Exocet Blizzard Apparently motionless to her passengers and crew, the Interplanetary liner Hyperion bored serenely onward through space at normal acceleration.In the railed-off sanctum in one corner of the control room a bell tinkled.
        </Typography.Text>
      </Column>
    </BodyContent>
  </Content>
);

export default ComponentsLayout;
