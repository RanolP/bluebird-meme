import { Rule } from '../rule';

export const Beer: Rule = {
  description: '비어는 맥주로 대체하십시오.',
  process: (origin, offset) => {
    const output = origin.endsWith('었') ? '맥줐' : '맥주';
    return {
      messages: [
        {
          origin,
          text: '맥주를 비어 대신 쓰세요',
          where: {
            from: offset,
            to: offset + origin.length
          },
          word: {
            into: output,
            type: 'replace'
          }
        }
      ],
      output
    };
  },
  regexp: /(비[어었])/gm
};
