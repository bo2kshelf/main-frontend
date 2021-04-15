export const icons = [
  require('./icon_1.png'),
  require('./icon_2.png'),
  require('./icon_3.png'),
  require('./icon_4.png'),
  require('./icon_5.png'),
];

export const placeholder = {
  '210x297': require('~~/.storybook/assets/210x297.png'),
};

export const bookcovers = [
  require('./random/bookcover_1.jpg'),
  require('./random/bookcover_2.jpg'),
  require('./random/bookcover_3.jpg'),
  require('./random/bookcover_4.jpg'),
  require('./random/bookcover_5.jpg'),
  require('./random/bookcover_6.jpg'),
  require('./random/bookcover_7.jpg'),
  require('./random/bookcover_8.jpg'),
  require('./random/bookcover_9.jpg'),
  require('./random/bookcover_10.jpg'),
];

export const random = {
  icon(seed = 0) {
    return icons[seed % icons.length];
  },
  bookcover(seed = 0) {
    return bookcovers[seed % bookcovers.length];
  },
};
