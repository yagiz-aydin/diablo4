
import { useState } from "react";
import { Content, ClassesContainer, ClassDescription, ClassContainer, ClassVideoContainer, ClassHeadDescription } from "./styled";
import IconButton from "../../components/IconButton";
import { Typography } from "../../components";
import { BodyContent } from "../ComponentsLayout/styled";

export type Classes = "" | "BARBARIAN" | "DRUID" | "NECROMANCER" | "ROGUE" | "SORCERER" 

const ClassDescriptions ={
    BARBARIAN: "The Barbarian has unparalleled strength and expertly wields an entire arsenal in battle, with a weapon for every occasion. He bellows intimidating war cries and unleashes ground-shaking slams to send approaching hordes reeling.",
    DRUID: "The Druid is a savage shapeshifter, fluidly transforming between the forms of a towering bear or a vicious werewolf to fight alongside the creatures of the wild. He also commands the power of earth, wind, and storm, unleashing nature’s wrath to devastating effect.",
    NECROMANCER: "Necromancers are cunning summoners that conjure vengeful hordes of the undead. Their Essence flows into three powerful bastions of Bone, Blood, or Shadow to bring low their enemies.",
    ROGUE: "The Rogue is an adaptable, agile warrior who can specialize in ranged or close quarters combat. She can best any foe with her imbued weapons, perform powerful combo attacks, and can augment her arsenal with deadly poisons and shadow magic to slay demons with impunity.",
    SORCERER: "The Sorcerer shapes the elements into whatever form is necessary to ensure victory, from hurling bolts of lightning, impaling her foes upon jagged spikes of ice, and raining flaming meteors down from the sky."
}
const ClassesSection = () => {
    const [selectedClass, setSelectedClass] = useState<Classes>("")

    const onChangeClass = (newClass: Classes) => {
        setSelectedClass(newClass);
    }
    return(<Content class={selectedClass}>
        <BodyContent>
        <ClassHeadDescription>
        <Typography.Leading>CLASSES</Typography.Leading>
        <ClassesContainer>
            <IconButton text="BARBARIAN" selected={selectedClass === "BARBARIAN"} onClick={onChangeClass}/>
            <IconButton text="DRUID" selected={selectedClass === "DRUID"} onClick={onChangeClass}/>
            <IconButton text="NECROMANCER" selected={selectedClass === "NECROMANCER"} onClick={onChangeClass}/>
            <IconButton text="ROGUE" selected={selectedClass === "ROGUE"} onClick={onChangeClass}/>
            <IconButton text="SORCERER" selected={selectedClass === "SORCERER"} onClick={onChangeClass}/>
        </ClassesContainer>
        </ClassHeadDescription>
        <ClassDescription>
            {selectedClass === "" ? 
            <Typography.Leading>CHOOSE YOUR FAITH</Typography.Leading>: 
            <ClassContainer>
                <Typography.Leading fontSize="32px" light="true">{selectedClass}</Typography.Leading>
                <Typography.Text>
                    {ClassDescriptions[selectedClass]}
                </Typography.Text>
                <ClassVideoContainer class={selectedClass}/> 
            </ClassContainer>}
        </ClassDescription>
        </BodyContent>
    </Content>)
}

export default ClassesSection;
