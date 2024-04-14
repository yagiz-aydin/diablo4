import { Button, Typography } from "../../components";
import {
  BodyContent,
  Column,
  Content,
  HeadContent,
  ColumnProps,
  ColumnHead,
} from "./styled";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useState } from "react";

type TypographyFontSize =
  | "12px"
  | "16px"
  | "20px"
  | "24px"
  | "32px"
  | "48px"
  | "64px";
// SAMPLE ONLY NOT FOR USAGE !!
const PlaygroundPreview = () => {
  // Button Props
  const [buttonCode, setButtonCode] = useState<string>("");
  const [buttonSize, setButtonSize] = useState<"lg" | "md" | "sm">("lg");
  const [buttonVariant, setButtonVariant] = useState<"primary" | "secondary">(
    "primary"
  );
  const [buttonFilgree, setButtonFilgree] = useState<boolean>(true);

  useEffect(() => {
    setButtonCode(
      `<Button \n  size="${buttonSize}" \n  variant="${buttonVariant}" \n  filgree={${buttonFilgree}}>Button\n</Button>`
    );
  }, [buttonSize, buttonVariant, buttonFilgree]);

  // Typography1 Props
  const [typographyCode, setTypographyCode] = useState<string>("");
  const [typographyLight, setTypographyLight] = useState<boolean>(true);
  const [typographyFontSize, setTypographyFontSize] =
    useState<TypographyFontSize>("64px");

  useEffect(() => {
    setTypographyCode(
      `<Typography.Heading \n  fontSize="${typographyFontSize}" \n  light="${typographyLight}">Heading\n</Typography.Heading>`
    );
  }, [typographyFontSize, typographyLight]);

  // Typography2 Props
  const [typography2Code, setTypography2Code] = useState<string>("");
  const [typography2Light, setTypography2Light] = useState<boolean>(true);
  const [typography2FontSize, setTypography2FontSize] =
    useState<TypographyFontSize>("64px");

  useEffect(() => {
    setTypography2Code(
      `<Typography.Leading \n  fontSize="${typography2FontSize}" \n  light="${typography2Light}">Leading\n</Typography.Leading>`
    );
  }, [typography2FontSize, typography2Light]);

  return (
    <Content>
      <HeadContent>
        <Typography.Text>Usage Playgorund</Typography.Text>
        <Typography.Heading>Customize</Typography.Heading>
      </HeadContent>
      <BodyContent>
        <ColumnProps>
          <ColumnHead>
            <Typography.Leading light="true" fontSize="32px">
              Props
            </Typography.Leading>
          </ColumnHead>
          <Typography.Text fontSize="64px" light="true">
            Size
          </Typography.Text>
          <select
            name="size"
            onChange={(event) =>
              setButtonSize(event.target.value as "lg" | "md" | "sm")
            }
          >
            <option value="lg" selected>
              Large
            </option>
            <option value="md">Medium</option>
            <option value="sm">Small</option>
          </select>
          <Typography.Text fontSize="64px" light="true">
            Variant
          </Typography.Text>
          <select
            name="variant"
            onChange={(event) =>
              setButtonVariant(event.target.value as "primary" | "secondary")
            }
          >
            <option value="primary" selected>
              Primary
            </option>
            <option value="secondary">Secondary</option>
          </select>
          <Typography.Text fontSize="64px" light="true">
            Filgree
          </Typography.Text>
          <input
            type="checkbox"
            name="filgree"
            onChange={() => setButtonFilgree(!buttonFilgree)}
            checked={buttonFilgree}
          />
        </ColumnProps>
        <Column>
          <ColumnHead>
            <Typography.Leading light="true" fontSize="32px">
              Code
            </Typography.Leading>
          </ColumnHead>

          <CodeMirror
            theme="dark"
            value={buttonCode}
            height="100px"
            width="320px"
            editable={false}
            extensions={[javascript({ jsx: true })]}
          />
        </Column>
        <Column>
          <ColumnHead>
            <Typography.Leading light="true" fontSize="32px">
              Preview
            </Typography.Leading>
          </ColumnHead>
          <Button
            size={buttonSize}
            variant={buttonVariant}
            filgree={buttonFilgree}
          >
            Button
          </Button>
        </Column>
      </BodyContent>
      <BodyContent>
        <ColumnProps>
          <Typography.Text fontSize="64px" light="true">
            Size
          </Typography.Text>
          <select
            name="size"
            onChange={(event) =>
              setTypographyFontSize(event.target.value as TypographyFontSize)
            }
          >
            <option value="12px">
              12px
            </option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="32px">32px</option>
            <option value="48px">48px</option>
            <option value="64px" selected>64px</option>
          </select>
          <Typography.Text fontSize="64px" light="true">
            Light Effect
          </Typography.Text>
          <input
            type="checkbox"
            name="light"
            onChange={() => setTypographyLight(!typographyLight)}
            checked={typographyLight}
          />
        </ColumnProps>
        <Column>
          <CodeMirror
            theme="dark"
            value={typographyCode}
            height="100px"
            width="320px"
            editable={false}
            extensions={[javascript({ jsx: true })]}
          />
        </Column>
        <Column>
          <Typography.Heading fontSize={typographyFontSize} light={`${typographyLight}`}>
            Heading
          </Typography.Heading>
        </Column>
      </BodyContent>
      <BodyContent>
      <ColumnProps>
          <Typography.Text fontSize="64px" light="true">
            Size
          </Typography.Text>
          <select
            name="size"
            onChange={(event) =>
              setTypography2FontSize(event.target.value as TypographyFontSize)
            }
          >
            <option value="12px">
              12px
            </option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="32px">32px</option>
            <option value="48px">48px</option>
            <option value="64px" selected>64px</option>
          </select>
          <Typography.Text fontSize="64px" light="true">
            Light Effect
          </Typography.Text>
          <input
            type="checkbox"
            name="light2"
            onChange={() => setTypography2Light(!typography2Light)}
            checked={typography2Light}
          />
        </ColumnProps>
        <Column>
          <CodeMirror
            theme="dark"
            value={typography2Code}
            height="100px"
            width="320px"
            editable={false}
            extensions={[javascript({ jsx: true })]}
          />
        </Column>
        <Column>
          <Typography.Leading fontSize={typography2FontSize} light={`${typography2Light}`}>
            Leading
          </Typography.Leading>
        </Column>
      </BodyContent>
    </Content>
  );
};

export default PlaygroundPreview;
