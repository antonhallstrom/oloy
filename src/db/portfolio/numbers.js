const gherkinSpec = `
  **Feature**: Multiple site support
  &nbsp;&nbsp;Only blog owners can post to a blog, except administrators,
  &nbsp;&nbsp;who can post to all blogs.
  &nbsp;
  **Background**: Given a global administrator named "Greg"
  &nbsp;&nbsp;And a blog named "Greg's anti-tax rants"
  &nbsp;&nbsp;And a customer named "Dr. Bill"
  &nbsp;&nbsp;And a blog named "Expensive Therapy" owned by "Dr. Bill"
  &nbsp;
  **Scenario**: Dr. Bill posts to his own blog
  &nbsp;&nbsp;Given I am logged in as Dr. Bill
  &nbsp;&nbsp;When I try to post to "Expensive Therapy"
  &nbsp;&nbsp;Then I should see "Your article was published."
  &nbsp;
  **Scenario**: Dr. Bill tries to post to somebody else's blog, and fails
  &nbsp;&nbsp;Given I am logged in as Dr. Bill
  &nbsp;&nbsp;When I try to post to "Greg's anti-tax rants"
  &nbsp;&nbsp;Then I should see "Hey! That's not your blog!"
  &nbsp;
  **Scenario**: Greg posts to a client's blog
  &nbsp;&nbsp;Given I am logged in as Greg
  &nbsp;&nbsp;When I try to post to "Expensive Therapy"
  &nbsp;&nbsp;Then I should see "Your article was published."
`

export const numbers = [
  {
    key: 'find-pi-to-the-nth-digit',
    name: 'Find PI to the Nth Digit',
    description:
      'Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go',
    specification: [
      {
        label: 'Tools',
        content: 'List of tools being used',
      },
      {
        label: 'Features',
        content: gherkinSpec,
      },
    ],
    images: [
      {
        alt: 'some alt',
        url: null,
      },
    ],
    tables: [
      {
        name: 'View',
        rows: [
          {
            label: 'Source code',
          },
          {
            label: 'In action',
          },
        ],
        columns: [
          {
            label: 'Numbers',
            url: 'https://github.com/antonhallstrom/numbers',
          },
          { label: 'Project', url: '/link' },
        ],
      },
      {
        name: 'Manifest',
        rows: [
          { label: 'Language' },
          { label: 'Size' },
          { label: 'Time spent' },
        ],
        columns: [
          {
            value: 'JavaScript',
          },
          {
            value: '5kb',
          },
          {
            value: '1 hour',
          },
        ],
      },
      {
        name: 'Sources',
        rows: [
          {
            label: 'Ideas',
          },
          {
            label: 'Concepts',
          },
        ],
        columns: [
          {
            label: 'karan',
            url: '/link',
          },
          [
            {
              label: 'pi',
              url: '/link',
            },
            {
              label: 'milner',
              url: '/link',
            },
          ],
        ],
      },
    ],
  },
  {
    key: 'fibonacci-sequence',
    name: 'Fibonacci Sequence',
    description:
      'Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go',
    specification: [
      {
        label: 'Tools',
        content: 'List of tools being used',
      },
      {
        label: 'Features',
        content: gherkinSpec,
      },
    ],
    images: [
      {
        alt: 'some alt',
        url: null,
      },
    ],
    tables: [
      {
        name: 'View',
        rows: [
          {
            label: 'Source code',
          },
          {
            label: 'In action',
          },
        ],
        columns: [
          {
            label: 'Numbers',
            url: 'https://github.com/antonhallstrom/numbers',
          },
          { label: 'Project', url: '/link' },
        ],
      },
      {
        name: 'Manifest',
        rows: [
          { label: 'Language' },
          { label: 'Size' },
          { label: 'Time spent' },
        ],
        columns: [
          {
            value: 'JavaScript',
          },
          {
            value: '5kb',
          },
          {
            value: '1 hour',
          },
        ],
      },
      {
        name: 'Sources',
        rows: [
          {
            label: 'Ideas',
          },
          {
            label: 'Concepts',
          },
        ],
        columns: [
          {
            label: 'karan',
            url: '/link',
          },
          [
            {
              label: 'pi',
              url: '/link',
            },
            {
              label: 'milner',
              url: '/link',
            },
          ],
        ],
      },
    ],
  },
  {
    key: 'prime-factorization',
    name: 'Prime Factorization',
    description:
      'Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go',
    specification: [
      {
        label: 'Tools',
        content: 'List of tools being used',
      },
      {
        label: 'Features',
        content: gherkinSpec,
      },
    ],
    images: [
      {
        alt: 'some alt',
        url: null,
      },
      {
        alt: 'some alt',
        url: null,
      },
    ],
    tables: [
      {
        name: 'View',
        rows: [
          {
            label: 'Source code',
          },
          {
            label: 'In action',
          },
        ],
        columns: [
          {
            label: 'Numbers',
            url: 'https://github.com/antonhallstrom/numbers',
          },
          { label: 'Project', url: '/link' },
        ],
      },
      {
        name: 'Manifest',
        rows: [
          { label: 'Language' },
          { label: 'Size' },
          { label: 'Time spent' },
        ],
        columns: [
          {
            value: 'JavaScript',
          },
          {
            value: '5kb',
          },
          {
            value: '1 hour',
          },
        ],
      },
      {
        name: 'Sources',
        rows: [
          {
            label: 'Ideas',
          },
          {
            label: 'Concepts',
          },
        ],
        columns: [
          {
            label: 'karan',
            url: '/link',
          },
          [
            {
              label: 'pi',
              url: '/link',
            },
            {
              label: 'milner',
              url: '/link',
            },
          ],
        ],
      },
    ],
  },
]
