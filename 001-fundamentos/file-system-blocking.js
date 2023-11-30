const fs = require('fs');

const data = fs.readFileSync('README-React.md', { encoding: 'utf8' });
const newData = data.replace(/React/ig, 'Angular');

console.log(newData);

fs.writeFileSync('README-Angular.md', newData);