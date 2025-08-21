import AppLink from "@/components/AppLink";
import Divider from "@/components/Divider";
import Counter from "@/miniApp/Counter";
import { useCountStore } from "@/miniApp/Counter/@store";
import Counter_ from "@/miniApp/Counter/index_";
import CounterReducer from "@/miniApp/Counter/usingCounterReducer";
import Switcher from "@/miniApp/Switcher/Switch";
import TaskManager_ from "@/miniApp/TaskManager/TaskManager_";
// import { Helmet } from "react-helmet-async"; 19버전 아직 지원안함
import { Helmet } from "@dr.pogodin/react-helmet";
import { useState } from "react";
import { useShallow } from "zustand/shallow";

const htmlTag = (
  <>
    <title>앱 글로벌 상태관리 with Zustand</title>
    <meta
      name="description"
      content="Zustand를 사용하면 context, useReducer, useState없이 보다 효과적으로,
      더 빠르게, 더 가볍게 상태를 관리할 수 있습니다."
    />
    <meta property="og:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="twitter:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="og:type" content="site" />
    <meta property="og:url" content="https://github.com/simseonbeom" />
    <meta
      property="og:description"
      content="Front-end 개발자를 꿈꾸는 자들이여 범쌤에게 오라!"
    />
    <meta
      property="og:image"
      content="https://avatars.githubusercontent.com/u/35365227?v=4"
    />
    <meta property="og:site:author" content="범쌤(kindtiger)" />
  </>
);

//helmet 라이브러리
const helmetTag = (
  <Helmet>
    <title>앱 글로벌 상태관리 with Zustand</title>
    <meta
      name="description"
      content="Zustand를 사용하면 context, useReducer, useState없이 보다 효과적으로,
      더 빠르게, 더 가볍게 상태를 관리할 수 있습니다."
    />
    <meta property="og:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="twitter:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="og:type" content="site" />
    <meta property="og:url" content="https://github.com/simseonbeom" />
    <meta
      property="og:description"
      content="Front-end 개발자를 꿈꾸는 자들이여 범쌤에게 오라!"
    />
    <meta
      property="og:image"
      content="https://avatars.githubusercontent.com/u/35365227?v=4"
    />
    <meta property="og:site:author" content="범쌤(kindtiger)" />
  </Helmet>
);
function Home() {
  const [reset, setStep] = useCountStore(
    useShallow((s) => [s.reset, s.setStep])
  );
  const [dark, setDark] = useState();

  return (
    <>
      {helmetTag}
      <section id="page">
        {/* {htmlTag} */}
        {/* <Helmet></Helmet> */}
        <div className="learn">
          <h1>앱 글로벌 상태 관리 with Zustand</h1>
          <p>
            <AppLink
              href="https://zustand.docs.pmnd.rs/getting-started/introduction"
              isExternal
              className="text-red-500"
            >
              Zustand
            </AppLink>{" "}
            라이브러리를 사용해 앱 또는 컴포넌트의 상태를 효과적으로 관리하는
            방법을 학습합니다.
          </p>
          <Divider />
          <h2 lang="en" className="uppercase">
            Counter
          </h2>
          <p>간단한 카운터 앱의 상태를 CustomHook을 사용해 관리합니다.</p>
          <Counter_ />
          <Divider />
          <h2 lang="en" className="uppercase">
            Counter
          </h2>
          <p>간단한 카운터 앱의 상태를 Zustand를 사용해 관리합니다.</p>
          <Counter className="mb-3" />
          <button
            type="button"
            className="px-3 py-1 border border-accent rounded"
            onClick={reset}
          >
            reset
          </button>
          <input
            type="number"
            className="border border-accent px-2 py-1"
            placeholder="step값을 입력해주세요"
            onChange={(e) => {
              setStep(Number(e.target.value));
            }}
          />
          <Divider />
          <h2 lang="en" className="uppercase">
            Counter
          </h2>
          <p>간단한 카운터 앱의 상태를 리듀서를 사용해 관리합니다.</p>
          <CounterReducer />

          <Divider />
          <h2 lang="en" className="uppercase">
            Switcher
          </h2>
          <p>Switch의 상태를 CusomHook or 리듀서를 사용해 관리합니다.</p>
          <Switcher size="sm" />
          <p className="uppercase">{dark ? "dark" : "light"}</p>
          <Divider />
          <h2 lang="en" className="uppercase">
            Task Manager
          </h2>
          <p>
            태스크 매니저 앱의 상태를 컨텍스트 + 리듀서를 사용해 관리합니다.
          </p>
          <TaskManager_ />
          <Divider />
          <Divider />
          <Divider />
          <Divider />
        </div>
      </section>
    </>
  );
}
export default Home;
