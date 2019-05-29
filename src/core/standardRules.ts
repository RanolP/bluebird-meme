import { Rule } from './rule';

export const Ssi: Rule = {
  description: '요즘 젊은 것들은 버르장머리 없게 선배님들을 ㅇㅇ씨라고 불러?',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: '선배님을 버르장머리 없이 씨를 붙여 불러?',
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
  description: '요즘 젊은 것들은 버르장머리 없게 선배님들을 ㅇㅇ씨라고 불러?',
  process: (origin, offset, [front, real, back]) => ({
    messages: [
      {
        origin: real,
        text: '선배님을 버르장머리 없이 씨를 붙여 불러?',
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

export const Ssibal: Rule = {
  description: '씨발쓰지마세요. 여혐 단어입니다.',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: `${origin}쓰지마세요.`,
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
  regexp: /(?:^|[^a-zA-Z])([시씨Cc]발)/gm
};

export const Seungri: Rule = {
  description: '승리쓰지마세요.',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: '버닝썬 승리 쓰지 마세요.',
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

export const Tori: Rule = {
  description:
    '도리는 일본어에서 유래한 말이므로 닭도리탕 대신 닭볶음탕을 써야 합니다.',
  process: (origin, offset) => ({
    messages: [
      {
        origin,
        text: '도리는 일본어니 볶음 쓰세요.',
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
