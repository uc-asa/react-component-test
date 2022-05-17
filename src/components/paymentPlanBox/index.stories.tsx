import { Meta, Story } from "@storybook/react";
import PaymentPlanBox, { PaymentPlanBoxProps } from ".";

export default {
  title: "Components/PaymentPlanBox",
  component: PaymentPlanBox,
} as Meta;

const Template: Story<PaymentPlanBoxProps> = (args) => <PaymentPlanBox {...args} />;

export const Primary = Template.bind({});
// Primary.args = { label: "Hi 😃" };
