/* eslint-disable no-console */
// Node Modules
const Table = require('cli-table2');
const chalk = require('chalk');
const emoji = require('node-emoji');

// Emojis
const coffeeji = emoji.get('coffee');
const keymoji = emoji.get('key');
const praymoji = emoji.get('pray');
const tadaji = emoji.get('tada');

// Chalk
const greenChalk = {
  colSpan: 50,
  content: chalk.green('~~~~~~~~~~~~~~~~~~~~~~~~\n'),
  hAlign: 'center',
  vAlign: 'center',
};

// Dividers
const dividerFlat = chalk.black(`\n${Array(76).join('-')}`);
const dividerCurly = chalk.bgRed(`\n${Array(76).join('~')}`);
// const dividerPipes = chalk.cyan('|||');

const tableIntroduction = new Table({
  colAligns: [],
  colWidths: [],
  head: [`Major ${keymoji}  coming in for you:\n\nYou smaht. You loyal. Bless up. ${praymoji}`],
  style: {
    'padding-left': 1,
    'padding-right': 1,
    border: ['white'],
    head: ['green'],
    compact: false,
  },
}).toString();

const tableAccessUrlTable = (ip, port, urlLocation) => {
  const tableUrl = new Table({
    style: {
      head: ['pink'],
      border: ['yellow'],
      compact: false,
    },
    chars: {
      'left': '', 'left-mid': '', 'mid': '', 'mid-mid': '', 'middle': '', 'right': '', 'right-mid': '', // eslint-disable-line quote-props
    },
  });

  tableUrl.push(
    [{ colSpan: 50, content: chalk.bold('Access URLs:'), hAlign: 'center', vAlign: 'center' }],
    [greenChalk],
    [{ colSpan: 25, content: 'Localhost: ', hAlign: 'right' }],
    [{ colSpan: 50, content: chalk.magenta(`${urlLocation}`), hAlign: 'center' }],
    [greenChalk],
    [{ colSpan: 25, content: 'LAN:', hAlign: 'right' }],
    [{ colSpan: 50, content: `${chalk.magenta(`http://${ip.address()}:${port}`)}`, hAlign: 'center' }],
    [greenChalk],
    [{ colSpan: 50, content: chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`), hAlign: 'center', vAlign: 'center' }]
  );
  return tableUrl.toString();
};

const logger = (ip, port, urlLocation) => {
  console.log(dividerCurly);
  console.log(tableIntroduction);
  console.log(dividerCurly);
  console.log(dividerFlat);
  console.log(tableAccessUrlTable(ip, port, urlLocation));
  console.log(dividerCurly);
  console.log(dividerFlat);
  console.log(`Webpack is in the process of building... ${tadaji}  ${tadaji}  ${tadaji}`);
  console.log(`It may take a few seconds so grab a ${coffeeji}  while you wait.`);
  console.log(dividerFlat);
};

module.exports = logger;
/* eslint-enable no-console */
