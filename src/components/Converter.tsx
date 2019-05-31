import { josa } from 'josa';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  processRules,
  RuleProcessOutput,
  RuleProcessOutputMessage
} from '../core/rule';
import {
  Apa,
  EngliSsi,
  Seungri,
  Ssi,
  Ssibal,
  Tori
} from '../core/standardRules';
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
`;

const Label = styled.label`
  font-size: 1rem;
  margin-top: 2rem;
`;

const TextAreaBase = styled.textarea.attrs({
  wrap: 'off'
})`
  font-size: 1.5rem;

  width: calc(100% - 2rem);
  max-width: 768px;

  min-height: 2ch;

  border: 1px solid ${Black};
  border-radius: 0.25rem;

  padding: 0.3rem 0.6rem;
`;

const Input = styled(TextAreaBase)``;

const Output = styled(TextAreaBase).attrs({
  readOnly: true
})``;

const MessageWrap = styled.div`
  border: 1px solid ${Black};
  border-radius: 0.1rem;

  margin-top: 0.6rem;
  padding: 0.2rem 0.4rem;

  text-align: center;

  &:last-child {
    margin-bottom: 0.6rem;
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

const rules = [Ssibal, Ssi, Seungri, Tori, EngliSsi, Apa];

const Converter: FC = () => {
  const [input, setInput] = useState('');
  const [rows, setRows] = useState(1);
  const [result, setResult] = useState<RuleProcessOutput>({
    messages: [],
    output: ''
  });

  const onInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value }
  }) => {
    setInput(value);
  };

  useEffect(() => {
    setRows([...input].filter(it => it === '\n').length + 1);
  }, [input]);

  useEffect(() => {
    setResult(processRules(input, rules));
  }, [input]);

  return (
    <Wrap>
      <Description>
        파랑새밈!!
        <br /> 심심하다면 아래에 시씨식사사를 입력해보세요.
      </Description>
      <Label htmlFor="converter-input">입력</Label>
      <Input
        id="converter-input"
        placeholder="무슨 일이 일어나고 있나요?"
        onChange={onInputChange}
        rows={rows + 1}
      />
      <Label htmlFor="converter-output">결과</Label>
      <Output id="converter-output" value={result.output} rows={rows} />
      {result.messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </Wrap>
  );
};

export default Converter;
