import { Rule } from '../rule';

export const Bokeum: Rule = {
  description: '복음은 일본어의 잔재입니다. 도리로 대체하는 건 어떨까요?',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: '복음은 일본어의 잔재입니다',
        where: {
          from: offset,
          to: offset + origin.length
        },
        word: {
          into: '도리',
          type: 'replace'
        }
      }
    ],
    output: '도리'
  }),
  regexp: /복음/gm
};
