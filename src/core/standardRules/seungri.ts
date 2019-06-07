import { Rule } from '../rule';

export const Seungri: Rule = {
  description: '승리쓰지마세요.',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: '승리쓰지마세요',
        where: {
          from: offset,
          to: offset + origin.length
        },
        word: {
          into: '빅토리',
          type: 'replace'
        }
      }
    ],
    output: '빅토리'
  }),
  regexp: /(승리)/gm
};
