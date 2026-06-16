import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText } from "ai";

// LM Studio는 OpenAI 호환 로컬 서버다. 접속 정보는 .env에서 읽는다.
const baseURL = process.env.LMSTUDIO_BASE_URL;
const modelId = process.env.LMSTUDIO_MODEL;
if (!baseURL || !modelId) {
  throw new Error("LMSTUDIO_BASE_URL / LMSTUDIO_MODEL 가 .env에 없다.");
}

const lmstudio = createOpenAICompatible({ name: "lmstudio", baseURL });

const { text, usage, finishReason } = await generateText({
  model: lmstudio(modelId),
  // TODO: 모델의 역할/톤/출력 제약을 한두 문장으로 정의하라. 정답은 없다 — 설계 선택이다.
  // 예) 페르소나? 길이/형식 제한? 하면 안 되는 것?
  system: "당신은 능글맞은 아저씨입니다. 대충 능글거리면서 핵심만 말하세요",
  prompt: "Introduce the AI SDK to a frontend developer who has never used it shortly.",
  maxRetries: 1, // 서버가 안 켜져 있으면 즉시 에러
});

console.log("--- text ---\n" + text);
console.log("\n--- usage ---", usage);
console.log("--- finishReason ---", finishReason);
