# Lesson 0004 Completed: Streaming Text To The Terminal

Completed lesson 0004 (Streaming Text To The Terminal) and ran `streamText` against a local LM Studio model.

- **Quiz:** `streamText`를 `generateText`와 비교할 때 맞는 것은?
- **Answer chosen:** "호출은 즉시 반환되고 textStream으로 조각을 소비한다" (정답)
- **Exercise:** `examples/0004-streaming-text.ts`의 `for await` 루프 본문을 직접 채웠다 — `process.stdout.write(textPart)`로 즉시 출력하면서 `charCount`에 길이를 누적.
- **Run:** LM Studio 로컬 서버로 스트리밍 실행. 토큰이 도착하는 대로 출력됐고 `finishReason: "stop"`, charCount 432자 확인.
- **Takeaway:** `streamText`는 호출에 `await`를 붙이지 않고 즉시 result를 반환하며, `result.textStream`을 `for await`로 소비한다. `usage`/`finishReason`은 스트림이 끝난 뒤 resolve되는 Promise다. 입력 옵션(`model`/`system`/`prompt`)은 `generateText`와 동일.
- **Observation:** LM Studio 스트리밍에선 `usage`가 모두 `undefined`로 왔다 — provider가 마지막 청크에 usage를 전송해야 채워지는, 구현 의존적 동작. API 계약과 실제 값 채움은 별개라는 점을 확인.
- **Next:** Structured Output (`output: Output.object`로 schema에 맞춘 JSON 받기).
