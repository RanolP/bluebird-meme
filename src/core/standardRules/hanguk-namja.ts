import { Rule } from '../rule';

export const HangukNamja: Rule = {
  description: '🤏',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: '유니코드에 후원까지 한다.',
        where: {
          from: offset,
          to: offset + origin.length,
        },
        word: {
          into: '🤏',
          type: 'replace',
        },
      },
    ],
    output: '🤏',
  }),
  regexp: /(한국남자)/gm,
};
