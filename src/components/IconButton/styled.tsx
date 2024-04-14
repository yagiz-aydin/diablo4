import styled from "styled-components";

export const IconButtonContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ImageButton = styled.span<{ image: string; selected: boolean }>`
  display: block;
  height: 72px;
  width: 72px;
  background-size: cover;
  background-image: url("images/classes/icons/${(props) => props.selected ? "hover" : "base"}/${(props) => props.image}.webp");
  &:hover {
    background-image: url("images/classes/icons/hover/${(props) => props.image}.webp");
  }
`;
