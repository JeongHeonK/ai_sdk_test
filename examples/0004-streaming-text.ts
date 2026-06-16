import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { streamText } from "ai";

// provider 설정은 0003과 동일 — 바뀌는 건 generateText -> streamText뿐이다.
const baseURL = process.env.LMSTUDIO_BASE_URL;
const modelId = process.env.LMSTUDIO_MODEL;
if (!baseURL || !modelId) {
  throw new Error("LMSTUDIO_BASE_URL / LMSTUDIO_MODEL 가 .env에 없다.");
}

const lmstudio = createOpenAICompatible({ name: "lmstudio", baseURL });

// streamText는 await를 붙이지 않는다 — 즉시 result를 반환한다.
const result = streamText({
  model: lmstudio(modelId),
  system: "당신은 능글맞은 아저씨입니다. 대충 능글거리면서 핵심만 말하세요",
  prompt: "Write a short poem about streaming data. but seriously it should be a poem and funny",
  maxRetries: 1, // 서버가 안 켜져 있으면 즉시 에러
});

let charCount = 0;
console.log(Array.isArray(result.textStream)); // AsyncIterable<string> 확인
for await (const textPart of result.textStream) {
  // TODO: 조각이 도착할 때 무엇을 할지 정하라.
  //   - 가장 단순: process.stdout.write(textPart) 로 개행 없이 즉시 출력
  //   - 응용: charCount += textPart.length 로 누적해 끝에 글자 수 출력 등

  process.stdout.write(textPart);
  charCount += textPart.length;
}
process.stdout.write(`\n--- charCount: ${charCount} ---\n`);

// usage / finishReason은 스트림이 끝난 뒤 resolve되는 Promise다.
console.log("\n--- usage ---", await result.usage);
console.log("--- finishReason ---", await result.finishReason);
console.log("--- charCount ---", charCount);
