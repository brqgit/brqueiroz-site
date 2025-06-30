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
          <call-us 
            phonesystem-url="https://1363.3cx.cloud" 
            style="position:fixed;font-size:16px;line-height:17px;z-index: 99999;right: 20px; bottom: 20px;" 
            id="wp-live-chat-by-3CX" 
            minimized="true" 
            animation-style="noanimation" 
            party="LiveChat140350" 
            minimized-style="bubbleright" 
            allow-call="true" 
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
            gdpr-enabled="false" 
            message-userinfo-format="both" 
            message-dateformat="both" 
            lang="browser" 
            button-icon-type="default" 
            greeting-visibility="none" 
            greeting-offline-visibility="none" 
            chat-delay="2000" 
            enable-direct-call="true" 
            enable-ga="false" 
          >
          </call-us>`;
      } else if (!isComBr && !isRoot) {
        snippet = `           
        <call-us 
          phonesystem-url="https://1363.3cx.cloud" 
          style="position:fixed;font-size:16px;line-height:17px;z-index: 99999;right: 20px; bottom: 20px;" 
          id="wp-live-chat-by-3CX" 
          minimized="true" 
          animation-style="noanimation" 
          party="brqueirozinformatica" 
          minimized-style="bubbleright" 
          allow-call="true" 
          allow-video="false" 
          allow-soundnotifications="true" 
          enable-mute="true" 
          enable-onmobile="true" 
          offline-enabled="true" 
          enable="true" 
          ignore-queueownership="false" 
          authentication="none" 
          show-operator-actual-name="true" 
          aknowledge-received="true" 
          gdpr-enabled="false" 
          message-userinfo-format="both" 
          message-dateformat="both" 
          lang="browser" 
          button-icon-type="default" 
          greeting-visibility="none" 
          greeting-offline-visibility="none" 
          chat-delay="2000" 
          enable-direct-call="true" 
          enable-ga="false" 
        >
        </call-us>`;
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
