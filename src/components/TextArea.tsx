import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<Props> = ({ value, onChange }) => {
  return (
    <textarea
      className="text-area"
      placeholder="在此输入您的问题..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextArea;
