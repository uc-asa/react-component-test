import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
// Primary.args = { label: "Hi 😃" };
