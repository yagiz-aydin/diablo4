import Typography from "../Typography";
import { IconButtonContainer, ImageButton } from "./styled";
import { IIconButtonProps } from "./types";

const IconButton = ({ text, selected, onClick }: IIconButtonProps) => {
  return (
    <IconButtonContainer selected={text} onClick={() => onClick(text)}>
      <ImageButton image={text} selected={selected} />
      <Typography.Leading light={`${selected}`} fontSize="24px">
        {text}
      </Typography.Leading>
    </IconButtonContainer>
  );
};

export default IconButton;
