import { Rule } from '../rule';

export const Evian: Rule = {
  description: '에비 앙? 상스러워요',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: '아버님께서 신음을 하신대도 그렇지..',
        where: {
          from: offset,
          to: offset + origin.length
        },
        word: {
          into: '아버지신음',
          type: 'replace'
        }
      }
    ],
    output: '아버지신음'
  }),
  regexp: /(에비앙)/gm
};
