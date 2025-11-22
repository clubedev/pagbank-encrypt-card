import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "index.js",
  output: [
    {
      file: "dist/pagbank-encrypt-card.umd.js",
      format: "umd",
      name: "PagbankEncryptCard",
      exports: "default"
    }
  ],
  plugins: [resolve(), commonjs()],
};