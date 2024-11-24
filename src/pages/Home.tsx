import React, { useState } from "react";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import ResponseBox from "../components/ResponseBox";
import { fetchAnswer } from "../services/api";

const Home: React.FC = () => {
  const [question, setQuestion] = useState<string>(""); // 用户输入的问题
  const [answer, setAnswer] = useState<string>("AI 的回答会显示在这里..."); // AI 的回答
  const [loading, setLoading] = useState<boolean>(false); // 是否正在加载
  const [error, setError] = useState<string>(""); // 错误消息状态

  const handleSubmit = async () => {
    if (!question.trim()) {
      setError("问题不能为空，请输入您的问题！");
      return;
    }
    setError(""); // 清空错误消息
    setAnswer("正在加载中...");
    setLoading(true); // 开始加载
    try {
      const response = await fetchAnswer(question);
      setAnswer(response || "AI 没有提供回答。");
    } catch (error: unknown) {
      setAnswer(`发生错误：${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false); // 停止加载
    }
  };

  return (
    <div className="home-container">
      <header>
        <h1>🌟 小曦枫智能问答 🌟</h1>
        <p className="subtitle">随时提问，智能解答，快速获取答案！</p>
      </header>
      <main>
        <div className="form-container">
          <TextArea value={question} onChange={setQuestion} />
          {error && <p className="error-message">{error}</p>} {/* 错误消息 */}
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "提交中..." : "提交问题"}
          </Button>
          <ResponseBox response={answer} />
        </div>
      </main>
      <footer>
        <p>© 2024 小曦枫智能问答 | 由 AI 提供支持</p>
      </footer>
    </div>
  );
};

export default Home;
