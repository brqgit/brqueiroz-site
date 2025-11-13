import { useEffect, useState } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import "./i18n";
import 'react-loading-skeleton/dist/skeleton.css'

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [chatSnippet, setChatSnippet] = useState<string | null>(null);

  useEffect(() => {
    const setFavicon = (theme: "dark" | "light") => {
      const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
      if (favicon) {
        favicon.href = theme === "dark" ? "/favicon-light.ico" : "/favicon-dark.ico";
      }
    };
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    setFavicon(match.matches ? "dark" : "light");
    const listener = (e: MediaQueryListEvent) => setFavicon(e.matches ? "dark" : "light");
    match.addEventListener("change", listener);

    if (typeof window !== "undefined") {
      const isComBr = window.location.hostname.endsWith(".com.br");
      const isRoot = window.location.pathname === "/";
      let snippet = null;
      if (isComBr && !isRoot) {
        snippet = `
          <!--Use the below code snippet to provide real time updates to the live chat plugin without the need of copying and paste each time to your website when changes are made via PBX-->
          <call-us-selector phonesystem-url="https://1363.3cx.cloud" party="LiveChat140350"></call-us-selector>

          <!--Incase you don't want real time updates to the live chat plugin when options are changed, use the below code snippet. Please note that each time you change the settings you will need to copy and paste the snippet code to your website-->
          <!--<call-us
          phonesystem-url="https://1363.3cx.cloud"
          style="position:fixed;font-size:16px;line-height:17px;z-index: 99999;--call-us-main-accent-color:#3397D4;--call-us-main-background-color:#FFFFFF;--call-us-plate-background-color:#373737;--call-us-plate-font-color:#E6E6E6;--call-us-main-font-color:#000000;--call-us-agent-bubble-color:#00000010;right: 20px; bottom: 20px;"
          id="wp-live-chat-by-3CX"
          minimized="false"
          animation-style="slidefromside"
          party="LiveChat140350"
          minimized-style="bubbleright"
          allow-call="false"
          allow-video="false"
          allow-soundnotifications="true"
          enable-mute="true"
          enable-onmobile="true"
          offline-enabled="true"
          enable="true"
          ignore-queueownership="false"
          authentication="both"
          show-operator-actual-name="false"
          aknowledge-received="true"
          operator-icon="data:image/png;base64,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"
          gdpr-enabled="true"
          message-userinfo-format="both"
          message-dateformat="both"
          lang="browser"
          button-icon-type="default"
          greeting-visibility="none"
          greeting-offline-visibility="none"
          chat-delay="2000"
          enable-direct-call="false"
          enable-ga="false"
          ></call-us>-->
          `;
      } else if (!isComBr && !isRoot) {
        snippet = `
          <!--Use the below code snippet to provide real time updates to the live chat plugin without the need of copying and paste each time to your website when changes are made via PBX-->
          <call-us-selector phonesystem-url="https://1363.3cx.cloud" party="LiveChat225415"></call-us-selector>

          <!--Incase you don't want real time updates to the live chat plugin when options are changed, use the below code snippet. Please note that each time you change the settings you will need to copy and paste the snippet code to your website-->
          <!--<call-us
          phonesystem-url="https://1363.3cx.cloud"
          style="position:fixed;font-size:16px;line-height:17px;z-index: 99999;--call-us-main-accent-color:#3397D4;--call-us-main-background-color:#FFFFFF;--call-us-plate-background-color:#373737;--call-us-plate-font-color:#E6E6E6;--call-us-main-font-color:#000000;--call-us-agent-bubble-color:#00000010;right: 20px; bottom: 20px;"
          id="wp-live-chat-by-3CX"
          minimized="false"
          animation-style="slidefromside"
          party="LiveChat225415"
          minimized-style="bubbleright"
          allow-call="false"
          allow-video="false"
          allow-soundnotifications="true"
          enable-mute="true"
          enable-onmobile="true"
          offline-enabled="true"
          enable="true"
          ignore-queueownership="false"
          authentication="both"
          show-operator-actual-name="true"
          aknowledge-received="true"
          operator-icon="data:image/png;base64,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"
          gdpr-enabled="true"
          message-userinfo-format="none"
          message-dateformat="both"
          lang="browser"
          button-icon-type="default"
          greeting-visibility="none"
          greeting-offline-visibility="none"
          chat-delay="2000"
          enable-direct-call="false"
          enable-ga="false"
          ></call-us>-->
        `;
      }
      setChatSnippet(snippet);

      const oldScript = document.getElementById("tcx-callus-js");
      if (oldScript) oldScript.remove();

      if (snippet) {
        const script = document.createElement("script");
        script.defer = true;
        script.src = "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
        script.id = "tcx-callus-js";
        script.charset = "utf-8";
        document.body.appendChild(script);

        if (!document.getElementById("chat-vibrate-style")) {
          const style = document.createElement("style");
          style.id = "chat-vibrate-style";
          style.textContent = `
            @keyframes vibrar {
              0% { transform: translate(0); }
              20% { transform: translate(-2px, 2px); }
              40% { transform: translate(-2px, -2px); }
              60% { transform: translate(2px, 2px); }
              80% { transform: translate(2px, -2px); }
              100% { transform: translate(0); }
            }
          `;
          document.head.appendChild(style);
        }

        const interval = setInterval(() => {
          const chatButton = document.getElementById("wp-live-chat-by-3CX");
          if (chatButton) {
            let hovering = false;

            chatButton.addEventListener("mouseenter", () => {
              hovering = true;
              chatButton.style.animation = "none";
            });

            chatButton.addEventListener("mouseleave", () => {
              hovering = false;
            });

            setInterval(() => {
              if (!hovering) {
                chatButton.style.animation = "vibrar 0.6s";
                setTimeout(() => {
                  chatButton.style.animation = "none";
                }, 600);
              }
            }, 2000);

            clearInterval(interval);
          }
        }, 300);
      }
    }

    return () => match.removeEventListener("change", listener);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-light.ico" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {chatSnippet && (
          <div dangerouslySetInnerHTML={{ __html: chatSnippet }} />
        )}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
