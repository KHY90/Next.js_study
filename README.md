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

(폴더명) : url 을 생성하지 않음
폴더명 : url 생성됨

Loading UI and Streaming

특수 파일 loading.js는 React Suspense를 사용하여 의미 있는 로딩 UI를 만드는 데 도움
이 규칙을 사용하면 route 세그먼트의 콘텐츠가 로드되는 동안 서버에서 즉시 로딩 상태를 표시할 수 있습니다. 렌더링이 완료되면 새 콘텐츠가 자동으로 교체된다.
즉시 로딩 상태는 탐색 시 즉시 표시되는 대체 UI 스켈레톤, 스피너 등 로딩 표시기나 표지 사진, 제목 등 미래 화면의 작지만 의미 있는 부분을 미리 렌더링할 수 있다.