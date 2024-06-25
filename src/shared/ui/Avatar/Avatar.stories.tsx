import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  src: AvatarImg,
  size: 50,
};

export const Medium = Template.bind({});
Medium.args = {
  src: AvatarImg,
  size: 100,
};

export const Large = Template.bind({});
Large.args = {
  src: AvatarImg,
  size: 150,
};
