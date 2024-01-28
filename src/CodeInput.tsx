export interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CodeInput({ value, onChange }: CodeInputProps) {
  return (
    <input
      type="tel"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="text-3xl tracking-widest text-center bg-gray-700 rounded-xl p-3 border-2 border-gray-500"
    />
  );
}
