import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Hi 😃" };
