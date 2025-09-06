# React 3주차 과제 회고

## 카드 검색 리스트 UI 제작

> React 앱과 외부 시스템을 동기화하는 이펙트를 활용하여 검색 폼을 제출할 때마다 브라우저 탐색 버튼으로 내비게이션 할 수 있게 구현하기

## 프로젝트 구조 및 컴포넌트 설명

### 폴더 구조

```
src/
	app.jsx                // 메인 앱 컴포넌트, 전체 로직 관리
	main.jsx               // React 앱 진입점
	components/
		card/                // 개별 카드 UI
			index.jsx
		search-form/         // 검색 입력 폼
			index.jsx
		searched-card-list/  // 필터링된 카드 리스트
			index.jsx
	data/
		celebrity.json       // 연예인 더미 데이터
	styles/
		main.css             // 전체 스타일
		common/              // 공통 스타일
```

### 주요 컴포넌트 및 역할

- **app.jsx (SearchCelebrity)**
  - 전체 앱의 상태 관리 (검색어, 필터링 결과)
  - 브라우저 URL 쿼리(`q`)와 React 상태 동기화
  - 뒤로가기/앞으로가기 시 UI 자동 갱신
  - 검색어가 공백일 때 전체 리스트 표시 및 URL 쿼리 제거

- **SearchForm**
  - 검색 입력창 및 버튼
  - 입력값 변경 시 상태 업데이트
  - 검색 버튼 클릭 시 부모(onSearch)로 검색어 전달

- **SearchedCardList**
  - 필터링된 연예인 리스트를 카드 형태로 렌더링

- **Card**
  - 연예인 정보(이름, 소속사, 데뷔일, 대표곡 등)와 이미지를 카드로 표시
  - 위키 링크 등 외부 정보 제공

### 데이터 구조

- `celebrity.json`
  - 각 연예인 객체:
    - `id`, `name_kr`, `name_en`, `company`, `debut-date`, `debut-song`, `latest-song`, `tag`, `image`, `wiki_url`

### 동작 방식

1. 앱 로딩 시 URL 쿼리(`q`)를 읽어 검색어와 리스트를 초기화
2. 검색 폼에서 검색어 입력 후 버튼 클릭 시, URL 쿼리 갱신 및 리스트 필터링
3. 검색어가 공백 또는 빈 문자열이면 전체 리스트 표시, URL 쿼리 제거
4. 브라우저 탐색(뒤로/앞으로) 시 URL 쿼리와 UI 자동 동기화

### 실행 방법

1. 프로젝트 루트에서 패키지 설치

   ```js
   // npm 사용 시
   npm install

   // bun 사용 시
   npm install
   ```

2. 개발 서버 실행

   ```js
   // npm 사용 시
   npm run dev

   // bun 사용 시
   npm install
   ```

3. 브라우저에서 `localhost:3000` 접속
