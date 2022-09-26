import React from 'react';

interface IButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className={`px-2 py-1 text-white bg-red-500 rounded-md ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
