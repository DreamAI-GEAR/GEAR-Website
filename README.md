# GEAR Website

**GEAR(GIST Educational Agentic Researchers)** 팀의 공식 웹사이트입니다.

- **URL**: https://dreamai-gear.github.io/GEAR-Website/
- **Stack**: Astro 6 + Tailwind CSS v4 + Inter font
- **배포**: GitHub Actions → GitHub Pages (main 브랜치 push 시 자동 배포)

---

## 디렉토리 구조

```
GEAR-Website/
├── content/
│   └── home.md              ← 홈페이지 데이터 (팀 소개, 비전, 연락처, 네비게이션)
├── blog/
│   └── posts/               ← 블로그 포스트 (.md)
│       ├── hello-gear.md
│       └── draft-example.md
├── docs/
│   └── {프로젝트명}/         ← 프로젝트별 문서
│       ├── README.md         ← 프로젝트 소개 (필수)
│       └── *.md              ← 추가 문서
├── members/
│   └── {멤버명}/             ← 멤버별 프로필
│       └── README.md         ← 멤버 프로필 (필수)
├── events/
│   └── *.md                  ← 이벤트 기록
├── src/                      ← 소스 코드 (일반적으로 수정 불필요)
│   ├── pages/                ← 페이지 라우트
│   ├── components/           ← UI 컴포넌트
│   ├── layouts/              ← 레이아웃
│   └── styles/               ← 스타일
└── .github/workflows/        ← GitHub Actions 배포 설정
```

> **핵심**: 콘텐츠를 추가/수정할 때는 `blog/`, `docs/`, `members/`, `events/`, `content/` 폴더의 `.md` 파일만 편집하면 됩니다. `src/` 폴더를 수정할 필요가 없습니다.

---

## 콘텐츠 작성 가이드

### 블로그 포스트 작성

**경로**: `blog/posts/{파일명}.md`

1. `blog/posts/` 폴더에 새 `.md` 파일을 생성합니다.
2. 아래 frontmatter를 파일 맨 위에 작성합니다:

```yaml
---
title: "포스트 제목"
state: "published"          # draft | published | archived
authors: ["작성자1", "작성자2"]
publishedDate: "2026-04-01"  # YYYY-MM-DD
tags: ["#태그1", "#태그2"]
---

여기부터 본문 내용을 Markdown으로 작성합니다.

## 소제목 (H2)

본문 텍스트...
```

**주의사항**:
- `state: "draft"` → 블로그 목록에 표시되지 않음 (작성 중일 때 사용)
- `state: "published"` → 블로그 목록에 표시됨
- `state: "archived"` → 블로그 목록에 표시되지 않음
- `title`이 페이지 최상단에 가장 큰 글씨로 표시되므로, 본문에서는 `## H2`부터 사용하는 것을 권장합니다.

---

### 프로젝트 문서 추가

**경로**: `docs/{프로젝트명}/`

1. `docs/` 아래에 프로젝트 이름으로 폴더를 생성합니다.
2. `README.md`를 반드시 만들어야 합니다 (프로젝트 소개 페이지로 사용됨).

```yaml
---
title: "프로젝트 이름"
description: "프로젝트에 대한 한 줄 설명"
repoUrl: "https://github.com/DreamAI-GEAR/repo-name"  # 선택
status: "active"                                        # 선택
order: 1                                                # 사이드바 정렬 순서
---

프로젝트 소개 내용...
```

3. 추가 문서는 같은 폴더에 `.md` 파일로 작성합니다:

```yaml
---
title: "시작하기"
order: 2          # 사이드바에서의 순서
---

문서 내용...
```

---

### 멤버 프로필 수정

**경로**: `members/{본인이름}/README.md`

각 멤버 폴더의 `README.md`를 편집합니다:

```yaml
---
name: "홍길동"
role: "멤버"        # 교수 | 멘토 | 리드 | 멤버
bio: "한 줄 소개"
---

## 관심 분야

- 관심 분야 1
- 관심 분야 2

## GEAR에서의 역할

자유롭게 작성...
```

> `members/{이름}/` 폴더 안에 학습 기록 등 다른 파일을 넣어도 됩니다. `README.md`만 웹사이트에 렌더링됩니다.

---

### 이벤트 추가

**경로**: `events/{파일명}.md`

```yaml
---
title: "이벤트 이름"
category: "세미나"              # 세미나 | 해커톤 | 워크샵 | 스터디 등
date: "2026-04-15"             # YYYY-MM-DD
attendees: ["참석자1", "참석자2"]
image: "./photo.jpg"           # 선택 (같은 폴더에 이미지 배치)
---

이벤트 내용 및 후기...
```

---

### 홈페이지 수정

**경로**: `content/home.md`

홈페이지의 팀 소개, 비전, 목표, 연락처 등은 `content/home.md`의 frontmatter를 수정합니다:

```yaml
---
teamName: "GEAR"
tagline: "표시할 소개 문구"
vision: "비전 텍스트"
goals:
  - "목표 1"
  - "목표 2"
contact:
  email: "gear@gist.ac.kr"
  github: "https://github.com/DreamAI-GEAR"
nav:
  - label: "Home"
    href: ""
  - label: "Projects"
    href: "projects"
  # ...
---
```

---

## 배포 방법

**자동 배포**: `main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 및 배포합니다.

```bash
# 1. 변경사항 커밋
git add .
git commit -m "blog: 새 포스트 추가"

# 2. 푸시 (자동 배포 트리거)
git push origin main
```

배포 상태는 GitHub 레포지토리의 **Actions** 탭에서 확인할 수 있습니다.

## 로컬 개발

```bash
npm install          # 의존성 설치 (최초 1회)
npm run dev          # 개발 서버 (localhost:4321)
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 결과 미리보기
```
