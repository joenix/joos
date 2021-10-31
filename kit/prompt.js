// Use Inquirer
const Inquirer = require("inquirer");

/**
 * Choose Propmt
 * ======== ======== ======== ======== ========
 * @param type { string }
 *  @property list     - require `type`, `name`, `message`, `choices`
 *  @property rawlist  - ordered as list
 *  @property expand   - set `key` in choices
 *  @property checkbox - `checked: true` in choices
 *  @property confirm  - `default` must be boolean
 *  @property input    - input
 *  @property password - password
 *  @property editor   - open ide
 *
 * @param question     { json }
 *  @property type     { string }
 *  @property name     { string }
 *  @property message  { function | string }
 *  @property default  { function | string | number | array }
 *  @property choices  { function | array }
 *  @property validate { function }
 *  @property filter   { function }
 *  @property when     { function | boolean }
 *  @property pageSize { number }
 *
 * @param callback { function }
 * ======== ======== ========
 */
module.exports = (type, question, callback) => {
  // Set Type into Question
  question.type = type;

  // Set Prompt
  Inquirer.prompt([question]).then(callback);
};
