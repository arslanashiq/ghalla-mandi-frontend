// createEmotionCache.js
import createCache from "@emotion/cache";
// import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export default function createEmotionCache() {
  return createCache({
    key: "mui",
    stylisPlugins: [prefixer], // <-- enable RTL flipping
    prepend: true,
  });
}
