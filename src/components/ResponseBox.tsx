import React from "react";

interface ResponseBoxProps {
  response: string;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ response }) => {
  return <div className="response-box">{response || "AI 的回答会显示在这里..."}</div>;
};

export default ResponseBox;
