# Lesson 0003 Completed: Generating Text

Completed lesson 0003 (Generating Text) and ran `generateText` against a local LM Studio model.

- **Quiz:** `generateText` 호출의 특징으로 맞는 것은?
- **Answer chosen:** "완성된 결과를 한 번에 받는다" (정답)
- **Exercise:** `examples/0003-generating-text.ts`의 `system`을 직접 채웠다 — 페르소나·말투·길이 제약은 설계 선택이라는 점을 실습으로 확인.
- **Run:** LM Studio 로컬 서버(`@ai-sdk/openai-compatible`)로 무료 실행. 결과는 `{ text, usage, finishReason }`로 받았고 `finishReason: "stop"` 확인.
- **Takeaway:** `generateText`는 완성된 응답을 한 번에 반환하며, 같은 `prompt`라도 `system`이 결과를 좌우한다. provider는 model 인스턴스만 바꾸면 교체된다.
- **Next:** Streaming Text To The Terminal (`streamText`로 같은 코드를 점진 출력으로 전환).
