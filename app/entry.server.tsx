import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";
import { ServerStyleSheet } from "styled-components";
import StylesContext from "./StylesContext";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const sheet = new ServerStyleSheet();
  try {
    let html = renderToString(
      sheet.collectStyles(
        <StylesContext.Provider value={null}>
          <RemixServer
            context={remixContext}
            url={request.url}
          />
        </StylesContext.Provider>
      )
    );
    const styles = sheet.getStyleTags();
    html = html.replace("</head>", `${styles}</head>`);
    responseHeaders.set("Content-Type", "text/html");
    return new Response("<!DOCTYPE html>" + html, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  } catch (error) {
    console.log(error)
  } finally {
    sheet.seal();
  }
}
