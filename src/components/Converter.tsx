import ClipboardJS from 'clipboard';
import { josa } from 'josa';
import React, { FC, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import {
  processRules,
  RuleProcessOutput,
  RuleProcessOutputMessage,
} from '../core/rule';
import * as standardRules from '../core/standardRules';
import { Black } from '../styles/colors';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const Description = styled.span`
  font-size: 1.5rem;
  text-align: center;

  ins {
    cursor: pointer;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  margin-top: 2rem;
`;

const TextAreaWrap = styled.div`
  position: relative;
  width: calc(100% - 2rem);
  max-width: 768px;
`;

const TextAreaBase = styled.textarea`
  font-size: 1.5rem;

  width: calc(100% - 1.2rem);
  min-height: 2ch;

  border: 1px solid ${Black};
  border-radius: 0.25rem;

  padding: 0.3rem 0.6rem;
`;

const Input = styled(TextAreaBase)``;

const Output = styled(TextAreaBase)``;

const CopyButton = styled.button`
  position: absolute;
  right: 0.4rem;
  top: 0.6rem;

  border: 1px solid black;
  background-color: hsl(0, 0%, 95%);
  padding: 0.2rem;

  transition: opacity ease 0.2s, background-color ease 0.2s;

  opacity: 0;

  &:hover {
    background-color: hsl(0, 0%, 75%);
  }

  &:active {
    background-color: hsl(0, 0%, 85%);
  }

  #output:hover > & {
    opacity: 1;
  }
`;

const Results = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: calc(100% - 2rem);
  max-width: 768px;
`;

const MessageWrap = styled.div`
  background-color: hsl(230, 35%, 90%);
  border-radius: 0.2rem;

  width: fit-content;
  height: fit-content;

  margin-top: 1.2rem;
  margin-right: 1.2rem;
  padding: 0.2rem 0.4rem;

  text-align: center;

  display: inline-block;

  &:last-child {
    margin-bottom: 1.2rem;
  }
`;

const Message: FC<{ message: RuleProcessOutputMessage }> = ({ message }) => {
  const operation =
    message.word.type === 'delete'
      ? `${message.origin} 제거`
      : message.word.type === 'replace'
      ? josa(`${message.origin}#{을} ${message.word.into}#{로} 변환`)
      : '알 수 없는 작업';
  return (
    <MessageWrap>
      {message.text}
      <br />
      {operation}
    </MessageWrap>
  );
};

const rules = Object.values(standardRules);

const sentences = ['다시 십오 년', '비어있는 에비앙 생수', '엠블럼이 멋진 앱'];

export default function Converter(): JSX.Element {
  const [input, setInput] = useState('');
  const [rows, setRows] = useState(1);
  const [result, setResult] = useState<RuleProcessOutput>({
    messages: [],
    output: '',
  });
  const textareaInput = useRef<HTMLTextAreaElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const onInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    setInput(value);
  };

  useEffect(() => {
    if (button.current) {
      const clipboard = new ClipboardJS(button.current);
      return clipboard.destroy;
    }
  }, [button]);

  useEffect(() => {
    setRows([...input].filter((it) => it === '\n').length + 1);
  }, [input]);

  useEffect(() => {
    setResult(processRules(input, rules));
  }, [input]);

  const modifyInput = (newInput: string) => {
    if (textareaInput.current) {
      textareaInput.current.value = newInput;
    }
    setInput(newInput);
  };

  const [randomRecommendation] = useState(
    sentences[Math.round(Math.random() * 100) % sentences.length]
  );

  return (
    <Wrap>
      <Description>
        파랑새밈!!
        <br /> 심심하다면 아래에{' '}
        <ins onClick={modifyInput.bind(null, randomRecommendation)}>
          {randomRecommendation}
        </ins>
        을 입력하거나 저 문장을 눌러보세요.
      </Description>
      <Label htmlFor="converter-input">입력</Label>
      <TextAreaWrap>
        <Input
          id="converter-input"
          placeholder="무슨 일이 일어나고 있나요?"
          onChange={onInputChange}
          value={input}
          rows={rows + 1}
          wrap="off"
        />
      </TextAreaWrap>
      <Label htmlFor="converter-output">결과</Label>
      <TextAreaWrap id="output">
        <Output
          id="converter-output"
          value={result.output}
          rows={rows}
          wrap="off"
          readOnly={true}
        />
        <CopyButton
          ref={button}
          data-clipboard-text={`${input} → ${result.output}\n#파랑새밈`}
        >
          Copy
        </CopyButton>
      </TextAreaWrap>
      <Results>
        {result.messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </Results>
    </Wrap>
  );
}
