import { Classes } from "../../containers/ClassesSection";

export interface IIconButtonProps{
    text: Classes;
    selected: boolean;
    onClick: (_: Classes) => void
}