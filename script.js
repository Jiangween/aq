document.getElementById("submitBtn").addEventListener("click", async function () {
    const userInput = document.getElementById("userInput").value.trim();

    if (!userInput) {
        document.getElementById("responseOutput").textContent = "请输入您的问题。";
        return;
    }

    document.getElementById("responseOutput").textContent = "正在加载...";

    try {
        // 修改为本地后端服务地址
        const response = await fetch(`http://127.0.0.1:5000/proxy?msg=${encodeURIComponent(userInput)}`);
        if (!response.ok) throw new Error(`HTTP 错误: ${response.status}`);
        const data = await response.json();

        // 显示 AI 返回的答案
        document.getElementById("responseOutput").textContent = data.answer || "AI 没有提供回答。";
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("responseOutput").textContent = `发生错误：${error.message}`;
    }
});
