import MyLabel from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: {
            control: {
                type: 'select'
            }
        },
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args: any) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: false,
    color: 'primary',
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: false,
    color: 'secondary',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: false,
    color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: 'Hello World',
    size: 'h1',
    allCaps: false,
    customFontColor: '#ff00c8'
};