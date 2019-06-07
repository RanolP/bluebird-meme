import { Rule } from '../rule';

const description =
  '요즘 젊은 것들은 버르장머리 없게 선배님들을 ㅇㅇ씨라고 불러?';
const text = '선배님께 씨를 붙여 불러, 버르장머리 없이?';

export const Ssi: Rule = {
  description,
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text,
        where: {
          from: offset,
          to: offset + origin.length
        },
        word: {
          into: '선배님',
          type: 'replace'
        }
      }
    ],
    output: '선배님'
  }),
  regexp: /([시씨])/gm
};

export const EngliSsi: Rule = {
  description,
  process: (origin, offset, [front, real, back]) => ({
    messages: [
      {
        origin: real,
        text,
        where: {
          from: offset,
          to: offset + origin.length
        },
        word: {
          into: '선배님',
          type: 'replace'
        }
      }
    ],
    output: `${front}선배님${back}`
  }),
  regexp: /(^|[^a-zA-Z])([Cc])([^a-zA-Z]|$)/gm
};
