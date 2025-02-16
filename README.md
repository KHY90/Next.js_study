Next.js 공부용 레파지토리

Routing

- Pages Router: 디렉토리 + 파일 이름
- App Router: 디렉토리 이름 + page.jsx

Layout

- Pages Router: _app.js + Layout 패턴 사용
- App Router: layout.jsx

하이드레이션(Hydration)이란?

Next.js는 초기 Html 파일을 먼저 전달하고 이후 HTML 요소들을 React 컴포넌트로 변환 및 이벤트리스너를 부착하여 React DOM에서 관리하게 한다. 이 과정을 Hydration(수분 보충)이라고 한다.

서버사이드 렌더링(SSR)을 통해 만들어 진 인터랙티브 하지 않는 HTML을 클라이언트 측 자바스크립트를 사용하여 인터랙티브한 리액트 컴포넌트로 변환하는 과정을 말한다.
(서버 환경에서 이미 렌더링된 HTML에 React를 붙이는 것)