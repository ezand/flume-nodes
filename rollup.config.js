import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

const input = ["src/index.ts"];

const globals = {
  flume: "flume",
};

export default [
  {
    // UMD
    input,
    plugins: [
      nodeResolve(),
      typescript(),
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
    plugins: [typescript(), nodeResolve()],
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
