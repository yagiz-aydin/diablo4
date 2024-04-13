import styled from "styled-components";
import { IButtonBase } from "./types";

export const FilgreeContainer = styled.div`
  background-image: url(/images/filgree/left.webp),
    url(/images/filgree/center.webp), url(/images/filgree/right.webp);
  background-position-x: 0, 50%, 100%;
  position: absolute;
  width: calc(108%);
    height: calc(132%);
    top: -16%;
    left: -4%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ButtonContainer = styled.button<IButtonBase>`
  border: none;
  background-color: transparent;
  font-family: var(--font-accent-b);
  font-size: var(--fs-600);
  color: var(--btn-text-default);
  font-weight: var(--fw-600);
  cursor: pointer;
  position: relative;
  display: flex;
  padding: 0;
  transition-duration: 3ms;
  width: ${(props) => {
    switch(props.size){
      case 'sm': 
        return '180px'
      case 'md':
        return '235px'
      case 'lg':
        return '270px'
      default: 
        return '270px'
    }
  }};
  height: ${(props) => {
    switch(props.size){
      case 'sm': 
        return '36px'
      case 'md':
        return '54px'
      case 'lg':
        return '72px'
      default: 
        return '72px'
    }
  }};

  span {
    background-image: url("/images/buttons/${(props) => props.variant}/base/left.webp"),
      url("/images/buttons/${(props) => props.variant}/base/center.webp"),
      url("/images/buttons/${(props) => props.variant}/base/right.webp");
    position: absolute;
    background-position-x: 0, 50%, 100%;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-blend-mode: lighten;
  }

  &:hover {
    span {
      background-image: url("/images/buttons/${(props) => props.variant}/hover/left.webp"),
        url("/images/buttons/${(props) => props.variant}/hover/center.webp"),
        url("/images/buttons/${(props) => props.variant}/hover/right.webp");
    }
  }
  p {
    position: absolute;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => {
    switch(props.size){
      case 'sm': 
        return '16px'
      case 'md':
        return '20px'
      case 'lg':
        return '24px'
      default: 
        return '24px'
    }
  }};
  }
`;
