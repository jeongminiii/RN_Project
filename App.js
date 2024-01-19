// app.js

import React from "react";
import Main from "./Main"; // Main.js 파일이 같은 디렉토리에 있다고 가정합니다.

export default function App() {
  return (
    <React.Fragment>
      <Main />
      {/* 필요한 경우 여기에 추가적인 컴포넌트나 화면을 추가할 수 있습니다. */}
    </React.Fragment>
  );
}
