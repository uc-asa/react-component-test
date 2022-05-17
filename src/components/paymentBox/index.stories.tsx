import { Meta, Story } from "@storybook/react";
import PaymentBox, { PaymentBoxProps } from ".";

export default {
  title: "Components/PaymentBox",
  component: PaymentBox,
} as Meta;

const Template: Story<PaymentBoxProps> = (args) => <PaymentBox {...args} />;

export const Primary = Template.bind({});
// Primary.args = { label: "Hi 😃" };
