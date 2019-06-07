import { Rule } from '../rule';

export const Ssibal: Rule = {
  description: '씨발쓰지마세요. 여혐 단어입니다.',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: `${origin}쓰지마세요`,
        where: {
          from: offset,
          to: offset + origin.length
        },
        word: {
          type: 'delete'
        }
      }
    ],
    output: ''
  }),
  regexp: /([시씨Cc]발|[십씹](?:[팔할])?)/gm
};
