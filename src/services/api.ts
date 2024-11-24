export const fetchAnswer = async (question: string): Promise<string> => {
  const apiUrl = `https://render-backend-5xuo.onrender.com/proxy?msg=${encodeURIComponent(
    question
  )}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP 错误: ${response.status}`);
    }
    const data = await response.json();

    // 检查 data.answer 是否存在
    if (!data || !data.answer) {
      throw new Error("API 响应格式无效，缺少 answer 字段");
    }

    return data.answer;
  } catch (error: unknown) {
    console.error(`请求失败：${error instanceof Error ? error.message : String(error)}`);
    throw new Error("无法连接到 AI 服务，请稍后重试");
  }
};
