'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 0,
          headline: 'Headline',
          byline: 'Byline',
          buttonText: 'Button Text',
        },
      ],
    });
  },
};
