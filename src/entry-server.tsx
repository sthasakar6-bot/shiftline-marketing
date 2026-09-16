import { renderToString } from "react-dom/server";
import App from "./App";

// Used only at build time (see scripts/prerender.mjs) to snapshot the
// homepage's real content into dist/index.html -- a client-side-only React
// app otherwise ships an empty <div id="root"></div>, which is invisible
// to any crawler that doesn't execute JavaScript (this is what tripped up
// Mollie's merchant-verification check). Real visitors still get the full
// interactive app: main.tsx's createRoot(...).render(...) just replaces
// this snapshot once the JS bundle loads.
export function render(): string {
  return renderToString(<App />);
}
