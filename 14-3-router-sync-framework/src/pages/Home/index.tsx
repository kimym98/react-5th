//@ts-ignore
import type { Route } from "./+types/Home";
import cssURL from "@/styles/main.css?url";

/*페이지에 필요한 meta 태그 설정 */
export const meta: Route.MetaFunction = () => [
  { title: "Main | CRA" },
  { name: "description", content: "CRA를 다루는 메인 페이지입니다." },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Framework" },
];

/*페이지에 필요한 link 태그 설정 */

export const links = () => [
  { rel: "stylesheet", href: cssURL },
  //현재 페이지에서 빠르게 로드해야할 때
  { rel: "preload", as: "image", href: "/vite.svg" },
  //지금 안 쓰고 다음 화면에서 쓸 확률이 있다면
  // { rel: "prefetch", as: "image", href: "/vite.svg" },
];

function Home() {
  return (
    <>
      <h1>Main Page</h1>
      <div>
        <img src="/vite.svg" alt="vite logo" />
      </div>
    </>
  );
}
export default Home;
