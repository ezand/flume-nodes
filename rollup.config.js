import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";

import pkg from "./package.json";

const input = ["src/index.js"];

const globals = {
  flume: "flume",
};

export default [
  {
    // UMD
    input,
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: "bundled",
      }),
      terser(),
    ],
    external: ["flume"],
    output: {
      file: `dist/${pkg.name.substr(pkg.name.lastIndexOf("/"))}.min.js`,
      format: "umd",
      name: "flumeNodes",
      esModule: false,
      exports: "named",
      sourcemap: true,
      globals: globals,
    },
  },
  // ESM and CJS
  {
    input,
    plugins: [nodeResolve()],
    external: ["flume"],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        exports: "named",
        sourcemap: true,
        globals: globals,
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        sourcemap: true,
        globals: globals,
      },
    ],
  },
];
