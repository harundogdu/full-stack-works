import * as React from 'react';

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const Input = (props: IInputProps) => {
  const className = `px-2 py-1 border-1 border-gray-900 rounded-md ${props.className} w-full outline-none focus:border-blue-500 placeholder:gray-500 placeholder-opacity-50  placeholder:text-sm`;
  return (
    <input
      className={className}
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
