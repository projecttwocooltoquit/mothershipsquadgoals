const axios = require('axios');
const { json } = require('body-parser');
const fs = require('fs');
const { builtinModules } = require('module');

for (i = 1; i < 732; i++) {
  axios
    .get('https://superheroapi.com/api/490413012253040/' + i)
    .then((res) => {
      // console.log(res.data);
      fs.appendFileSync(
        'heros.js',
        JSON.stringify(res.data) + ',' + '\n',
        (err) => {
          if (err) {
            return console.error(err);
          }
        }
      );
    })
    .catch((err) => console.error(err));
}
