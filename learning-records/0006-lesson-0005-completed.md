# Lesson 0005 Completed: Choosing Your Model & V5→V6 변경점

Completed lesson 0005 — 커리큘럼 01.3(V5→V6 Breaking Changes)과 01.4(Choosing Your Model)를 하나로 통합한 레슨.

- **Quiz:** v6에서 모델을 고르고 연결하는 방식에 대해 맞는 것은?
- **Answer chosen:** "model 인자에 무엇을 넘기느냐로 결정되며, 나머지 코드는 그대로다" (정답)
- **Exercise:** v5 에이전트 코드를 v6로 마이그레이션 — `Experimental_Agent` → `ToolLoopAgent`, `system` → `instructions`, `stopWhen`은 기본값(`stepCountIs(20)`)이라 생략 가능.
- **Takeaway (Part A):** 모델 연결은 세 경로 — ① AI Gateway 문자열(클라우드, 유료) ② 전용 provider 패키지 ③ OpenAI 호환(LM Studio, 무료 로컬). 선택은 `model` 한 줄에 갇혀 있어 교체가 한 줄 수정으로 끝난다. 고를 때 축: 능력·비용·지연·로컬vs클라우드.
- **Takeaway (Part B):** 확정 v6 변경분만 학습 — Gateway 문자열 정식화, 에이전트 클래스/옵션 변경, 일부 provider 메타데이터 키 변경. `maxTokens→maxOutputTokens`, `ai/react→@ai-sdk/react` 등은 v5.0 변경이라 v5→v6과 혼동 금지.
- **Progress:** 01. AI SDK Basics — 1,2,3,4,5,6 완료. 다음은 01.7 UI Message Streams (프론트엔드 스트리밍 시작).
