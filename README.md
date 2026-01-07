# 마중물젊은이공동체 2026 겨울수련회

30일 성경통독 온라인 수련회 플랫폼입니다.

## 주요 기능

- **마중물젊은이공동체 소개**: 공동체의 비전과 사명 소개
- **수련회 안내**: 2026 겨울수련회에 대한 상세 정보
- **온라인 수련회 참여**: 30일간의 성경통독 및 인증게시판
- **성경통독 참고 영상**: 성경통독에 도움이 되는 유튜브 영상
- **섬기는 사람들**: 수련회를 섬기는 팀 소개
- **메모장**: 개인 메모 기능 (로컬 저장)
- **AI 챗봇**: 수련회 관련 질문에 답변하는 챗봇

## 시작하기

### 개발 환경 실행

```bash
npm install
npm run dev
```

### 빌드

```bash
npm run build
```

### 배포

#### GitHub Pages 자동 배포

1. GitHub 리포지토리 생성
2. 코드를 리포지토리에 푸시
3. GitHub Settings > Pages > Source를 "GitHub Actions"로 변경
4. main 브랜치에 푸시하면 자동으로 배포됩니다

#### 수동 배포

```bash
npm run deploy
```

## Firebase 설정

인증게시판 기능을 사용하려면 Firebase를 설정해야 합니다:

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. Realtime Database 활성화
3. 웹 앱 추가 후 설정 정보 복사
4. `src/firebase.js` 파일의 `firebaseConfig` 객체를 실제 설정으로 업데이트

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

5. Realtime Database 규칙 설정 (읽기/쓰기 허용):

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

## 기술 스택

- React 19
- React Router DOM
- Firebase Realtime Database
- Vite
- CSS

## 프로젝트 구조

```
bible-chatbot/
├── src/
│   ├── components/        # 재사용 가능한 컴포넌트
│   ├── data/             # 성경본문 데이터
│   ├── pages/            # 페이지 컴포넌트
│   ├── App.jsx           # 메인 앱 컴포넌트
│   ├── App.css           # 스타일
│   └── firebase.js       # Firebase 설정
├── public/               # 정적 파일
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Pages 배포 워크플로우
```

## 라이선스

MIT
