import { Rule } from '../rule';

export const Eb: Rule = {
  description: '엡/앱은 비속어입니다.',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: '존경을 담아 부릅니다. 아버지.',
        where: {
          from: offset,
          to: offset + origin.length
        },
        word: {
          into: '아버지',
          type: 'replace'
        }
      }
    ],
    output: '아버지'
  }),
  regexp: /([엡앱])/gm
};
