# Examples

lesson 실습용 실행 가능한 TypeScript 예제. 모델은 **LM Studio 로컬 서버**(무료)를 쓴다.

## 사전 준비

1. LM Studio를 실행하고 **Local Server**를 켠다. 채팅 모델을 하나 로드한다.
2. 설정 파일을 만든다: `cp .env.example .env` 후 값을 채운다.
3. 의존성 설치: `npm install`

## 실행

```bash
npm run 0003   # 0003-generating-text.ts 실행 (generateText)
npm run 0004   # 0004-streaming-text.ts 실행 (streamText)
```

API 키는 필요 없다. AI SDK가 `.env`의 로컬 서버 주소로 직접 호출한다.
