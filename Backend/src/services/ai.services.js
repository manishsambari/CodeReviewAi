const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY)
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
You are a senior software engineer specializing in code review.
When reviewing code, you MUST:
- Explain issues clearly and concisely.
- Identify bugs, bad practices, and performance problems.
- Suggest improvements with proper reasoning.
- Improve readability, structure, and maintainability.
- Follow best practices for modern JavaScript/TypeScript.
- Never rewrite the entire code unless requested — only fix or improve parts.
- Provide examples only when needed.
- Keep the tone helpful, direct, and professional.

Your goal is to help the developer write cleaner, safer, and more efficient code.
`,
})

async function generateContent(prompt) {
  const result = await model.generateContent(prompt)
  return result.response.text()
}

module.exports = generateContent
