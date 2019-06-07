import { Rule } from '../rule';

export const Apa: Rule = {
  description: '아파치 서버가 뭐니 버릇 없게',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: '아파가 뭐니 편찮다고 해야지',
        where: {
          from: offset,
          to: offset + origin.length
        },
        word: {
          into: '편찮',
          type: 'replace'
        }
      }
    ],
    output: '편찮'
  }),
  regexp: /(아파)/gm
};
