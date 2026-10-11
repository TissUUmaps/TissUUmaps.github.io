import MDXComponents from "@theme-original/MDXComponents";

import * as markdownComponents from "../components/markdown";

// Makes the custom components usable in every Markdown (MDX) file without an
// import, so that pages can be edited without knowing about imports
export default {
  ...MDXComponents,
  ...markdownComponents,
};
