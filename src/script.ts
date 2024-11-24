const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
const userInput = document.getElementById("userInput") as HTMLTextAreaElement;
const responseOutput = document.getElementById("responseOutput") as HTMLDivElement;

if (submitBtn && userInput && responseOutput) {
  submitBtn.addEventListener("click", async () => {
    const question = userInput.value.trim();

    if (!question) {
      responseOutput.textContent = "请输入您的问题。";
      return;
    }

    responseOutput.textContent = "正在加载...";

    try {
      const response = await fetch(
        `https://render-backend-5xuo.onrender.com/proxy?msg=${encodeURIComponent(
          question
        )}`
      );

      if (!response.ok) throw new Error(`HTTP 错误: ${response.status}`);

      const data = await response.json();
      responseOutput.textContent = data.answer || "AI 没有提供回答。";
    } catch (error: unknown) {
      console.error("Error:", error);
      responseOutput.textContent = `发生错误：${
        (error as Error).message || "未知错误"
      }`;
    }
  });
}
