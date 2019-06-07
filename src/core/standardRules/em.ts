import { Rule } from '../rule';

const description = '엠/앰은 비속어입니다.';
const text = '어머니, 존경을 담아 부릅니다.';

export const Em: Rule = {
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
          into: '어머니',
          type: 'replace'
        }
      }
    ],
    output: '어머니'
  }),
  regexp: /([엠앰])/gm
};

export const Emglish: Rule = {
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
          into: '어머니',
          type: 'replace'
        }
      }
    ],
    output: `${front}어머니${back}`
  }),
  regexp: /(^|[^a-zA-Z])([Mm])([^a-zA-Z]|$)/gm
};
