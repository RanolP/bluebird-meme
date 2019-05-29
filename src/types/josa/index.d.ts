declare module 'josa' {
  export function josa(sentence: string): string;

  export type Josa =
    | ('은' | '는')
    | ('이' | '가')
    | ('을' | '를')
    | ('과' | '와')
    | ('이었' | '였')
    | ('이어' | '여')
    | ('이에요' | '예요')
    | ('아' | '야')
    | '이?'
    | ('으로' | '로');

  export type JosaPicker = (input: string) => string;

  export function getJosaPicker(josa: Josa): JosaPicker;

  export type Josaify = (input: string) => string;

  export function makeJosaify(josa: Josa): Josaify;
}
