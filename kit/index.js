// Use Commander
const { Command } = require("commander");

// Set Program
const program = new Command();

// Use Yargs
const { argv } = require("yargs");

// Use Exec
const { exec, execSync, spawn, spawnSync } = require("child_process");

// Registry
const registry = require("./registry");

// Choose
const prompt = require("./prompt");

// Export
module.exports = {
  // Program
  program,
  // Argv
  argv,

  // Registry
  registry,
  // Prompt
  prompt,

  exec,
  execSync,
  spawn,
  spawnSync
};
