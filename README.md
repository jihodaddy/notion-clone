# Yestion

Yestion은 Notion을 클론하여 만든 프로젝트로, 노트 작성 및 관리 도구입니다.

## 데모

[Live Demo](https://yestion-ten.vercel.app/)

## 기술 스택

- **프레임워크:** Next.js 14
- **언어:** TypeScript
- **상태 관리:** Zustand
- **데이터베이스:** Convex
- **인증:** Clerk
- **파일 저장소:** Edgestore
- **배포:** Vercel
- **에디터:** Blocknote
- **UI 라이브러리:** shadcn/ui
- **유효성 검사:** Zod
- **토스트 알림:** Sonner

## 기능

- **사용자 인증 및 권한 관리:** Clerk를 이용한 간편한 로그인 및 회원가입.
- **실시간 데이터베이스:** Convex를 통한 빠르고 효율적인 데이터 관리.
- **파일 업로드 및 관리:** Edgestore로 파일을 손쉽게 저장 및 관리.
- **커스터마이징 가능한 UI:** Shadcn을 사용하여 현대적이고 일관된 UI 제공.
- **유효성 검사:** Zod를 통한 엄격한 데이터 유효성 검사.
- **텍스트 편집기:** Blocknote 에디터를 통해 사용자에게 직관적인 텍스트 편집 경험 제공.
- **toast 알림 기능:** Sonner로 사용자에게 중요한 알림 제공.

## 설치 및 실행

### Step 1. 깃 클론 및 실행
```bash
# 레포지토리를 클론합니다.
git clone https://github.com/jihodaddy/notion-clone.git

# 디렉토리로 이동합니다.
cd notion-clone

# 의존성을 설치합니다.
npm install

# 개발 서버를 시작합니다.
npm run dev
```

In new terminal
```bash
npx convex dev
```
브라우저에서 http://localhost:3000으로 접속하여 앱을 확인할 수 있습니다.

### Step 2. 환경 변수 설정
```text
# /.env.local
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```
2.1 - convex: database 연결
2.2 - clerk: 인증, 권한 라이브러리
2.3 - edgestore: file storage


