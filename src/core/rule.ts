export interface Rule {
  regexp: RegExp;
  description?: string;
  process(
    origin: string,
    offset: number,
    groups: string[],
    wholeString: string
  ): RuleProcessOutput;
}

export interface FromTo<T> {
  from: T;
  to: T;
}

export type WordOperation =
  | {
      type: 'delete';
    }
  | {
      type: 'replace';
      into: string;
    };

export interface RuleProcessOutputMessage {
  origin: string;
  text: string;
  where: FromTo<number>;
  word: WordOperation;
}

export interface RuleProcessOutput {
  messages: RuleProcessOutputMessage[];
  output: string;
}

export function processRules(input: string, rules: Rule[]): RuleProcessOutput {
  let output = input;
  const messages: RuleProcessOutputMessage[] = [];
  for (const rule of rules) {
    output = output.replace(rule.regexp, (...args) => {
      const origin = args[0] as string;
      const groups = args.slice(1, args.length - 2) as string[];
      const offset = args[args.length - 2] as number;
      const wholeString = args[args.length - 1] as string;
      const result = rule.process(origin, offset, groups, wholeString);
      messages.push(...result.messages);
      return result.output;
    });
  }

  messages.sort((l, r) => l.where.from - r.where.from);

  return {
    messages,
    output
  };
}
