import { ButtonContainer, FilgreeContainer } from "./styled";
import { IButtonBase } from "./types";

const Button = ({ variant, size, filgree, children }: IButtonBase) => (
  <ButtonContainer variant={variant} size={size}>
    <span />
    <p>{children}</p>
    {filgree && <FilgreeContainer /> }
  </ButtonContainer>
);

export default Button;
