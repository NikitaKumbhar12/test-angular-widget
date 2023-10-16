const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/angular-widget-test/runtime.js",
    "./dist/angular-widget-test/polyfills.js",
    "./dist/angular-widget-test/main.js",
    // "./dist/widget-wav/scripts.js",
  ];

  // await fs.ensureDir("elements");
  await fs.ensureDir("./dist/angular-widget-test/elements");
  await concat(files, "./dist/angular-widget-test/elements/index.js");

  await fs.copyFile(
    "./dist/angular-widget-test/styles.css",
    "./dist/angular-widget-test/elements/styles.css"
  );
})();

// test for old widget

// const fs = require("fs-extra");
// const concat = require("concat");

// (async function build() {
//   const files = [
//     "./dist/widget-wav/runtime.js",
//     "./dist/widget-wav/polyfills.js",
//     "./dist/widget-wav/main.js",
//     "./dist/widget-wav/scripts.js",
//   ];

//   // await fs.ensureDir("elements");
//   await fs.ensureDir("./dist/widget-wav/elements");
//   await concat(
//     files,
//     "./dist/widget-wav/elements/angular-widget-userdetails-exchangerate.js"
//   );

//   await fs.copyFile(
//     "./dist/widget-wav/styles.css",
//     "./dist/widget-wav/elements/styles.css"
//   );
// })();
