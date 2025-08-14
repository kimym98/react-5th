import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import GlobalNav from "./components/GlobalNav";

//framework에선 HydrateFallback을 root에서 한번만 사용가능
export function HydrateFallback() {
  return <div style={{ padding: 16 }}>앱 로딩 중...</div>;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Dark.svg"
          type="image/x-icon"
        />
        <title>Router-framework</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <>
      <h1>Single Page Application</h1>
      <GlobalNav></GlobalNav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
