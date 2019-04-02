/**
 * date: 2019/4/3
 * npm: Chalk
 * desc: 输出正确的终端样式
 * Background colors
 * Colors
 * Modifiers
 */

const chalk = require('chalk');
const log = console.log;
 
exports.dangerLog  =  function (text) {
  log(chalk.red(text));
}

exports.successLog = function (text) {
  log(chalk.green(text))
}

exports.warnLog = function (text) {
  log(chalk.yellow(text))
}
