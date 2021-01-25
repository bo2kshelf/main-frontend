import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component as DetailsComponent} from '..';
import {
  DateDetail,
  ISBNDetail,
  LanguageDetail,
  PagesDetail,
  PublisherDetail,
} from './Container';

export default {
  title: 'Bookpage/Header/Profile/Details/Item/Container',

  argTypes: {
    className: {table: {disable: true}},
  },
  decorators: [
    (Story) => (
      <DetailsComponent>
        <Story />
      </DetailsComponent>
    ),
  ],
} as Meta;

export const ISBN: Story<Parameters<typeof ISBNDetail>[0]> = (args) => (
  <ISBNDetail {...args} />
);
ISBN.args = {
  detail: '9784764905870',
};
ISBN.storyName = 'ISBN';

export const Pages: Story<Parameters<typeof PagesDetail>[0]> = (args) => (
  <PagesDetail {...args} />
);
Pages.args = {
  detail: 192,
};
Pages.storyName = 'ページ数';

export const Publisher: Story<Parameters<typeof PublisherDetail>[0]> = (
  args,
) => <PublisherDetail {...args} />;
Publisher.args = {
  detail: '小学館',
};
Publisher.storyName = '出版';

export const Date: Story<Parameters<typeof DateDetail>[0]> = (args) => (
  <DateDetail {...args} />
);
Date.args = {
  detail: '2020/11/7',
};
Date.storyName = '発売日';

export const Lang: Story<Parameters<typeof LanguageDetail>[0]> = (args) => (
  <LanguageDetail {...args} />
);
Lang.args = {
  detail: '日本語',
};
Lang.storyName = '言語';
