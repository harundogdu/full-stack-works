interface ITextProps {
  text: string;
  className?: string;
  type: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
}

const Text = (props: ITextProps) => {
  return (
    <div className={`text-${props.type} ${props.className} font-${props.weight}`}>{props.text}</div>
  );
};

export default Text;
