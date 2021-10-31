#!/usr/bin/env node

// Use Kit
const { program, argv, exec, registry, prompt } = require("./kit");

// Set Option
prompt(
  "confirm",
  {
    name: "test",
    message: "Are you handsome?",
    default: true
  },
  aaa => {
    console.log(111222, aaa);
  }
);


const child_process = require('child_process');

var a = child_process.spawnSync(`vue create vue-scaff/vue-cli-preset`, ['-p', '--clone test']);

console.log(a);

// process.exit();
// program
//   // Mode
//   .option("-m <mode>, --mode <mode>", "choose mode")
//   // Project
//   .option("-p <proj>, --proj <proj>", "choose mode");

// // Deconstruction
// const { m, mode, p, proj } = argv;
//
// // No Proj
// if ([undefined].includes(p || proj)) {
//   process.exit();
// }
//
// // Vue Mode
// if ([`vue`].includes(m || mode)) {
//   var cmd = exec(
//     `vue create -p vue-scaff/vue-cli-preset --clone ${p || proj}`,
//     (error, stdout, stderr) => {
//       console.log("stdout: " + stdout);
//       console.log("stderr: " + stderr);
//       if (error !== null) {
//         console.log("exec error: " + error);
//       }
//     }
//   );
//
//   //
//   // cmd.stdout.on("data", data => {
//   //   grep.stdin.write(1 + data);
//   // });
//   //
//   // cmd.stderr.on("data", data => {
//   //   console.error(`ps 的 stderr: ${data}`);
//   // });
//   //
//   // cmd.on("close", code => {
//   //   if (code !== 0) {
//   //     console.log(`ps 进程退出，退出码 ${code}`);
//   //   }
//   //   grep.stdin.end();
//   // });
//
//   return;
// }
//
// // SSR Mode
// if ([`ssr`].includes(m || mode)) {
// }
//
// console.log(111, argv);
//
// Program.parse(process.argv);
//
// // console.log(8888, Program);
//
// console.log(222, Program.opts());
//
// process.exit();
// // Mock CMD
// const CMDs = [
//   {
//     command: `-d <arg>, --dev`,
//     message: `output development mode`,
//     handler: ({ arg }) => {
//       console.log(`in handler arg is ${arg}`);
//     }
//   }
// ];
