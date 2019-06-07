import { josa } from 'josa';
import { Rule } from '../rule';

export const Tori: Rule = {
  description:
    '도리는 일본어에서 유래한 말이므로 닭도리탕 대신 닭볶음탕을 써야 합니다.',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: josa(`${origin}는 일본어니 볶음 쓰세요`),
        where: {
          from: offset,
          to: offset + origin.length
        },
        word: {
          into: '볶음',
          type: 'replace'
        }
      }
    ],
    output: '볶음'
  }),
  regexp: /([도토]리)/gm
};
