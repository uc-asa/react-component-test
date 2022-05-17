import { Meta, Story } from "@storybook/react";
import LinearProgressBar, { LinearProgressBarProps } from ".";

export default {
  title: "Components/LinearProgressBar",
  component: LinearProgressBar,
} as Meta;

const Template: Story<LinearProgressBarProps> = (args) => <LinearProgressBar {...args} />;

export const Primary = Template.bind({});
// Primary.args = { label: "Hi 😃" };
