const { GoogleGenerativeAI } = require("@google/generative-ai");

class GeminiService {
  constructor(apiKey, modelName = "gemini-1.5-flash") {
    this.genAi = new GoogleGenerativeAI(apiKey);
    this.model = this.genAi.getGenerativeModel({ model: modelName });
  }

  async generateContent(prompt) {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
  }

  // Example specialized methods
  async generateStructuredResponse(prompt, responseFormat) {
    try {
      const result = await this.generateContent(prompt);
      return JSON.parse(result);
    } catch (error) {
      throw new Error(`Failed to generate structured response: ${error.message}`);
    }
  }
}

module.exports = GeminiService;
