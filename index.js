/*
Copyright 2018 Myles Borins

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// I <3 destrucuturing
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { readFile } = require('fs').promises;
const { resolve } = require('path');

const licensePath = resolve('./LICENSE');
const readmePath = resolve('./README.md');

// squee rest paramaters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
async function getFiles(...files) {
  files = files.map(file => {
    return readFile(file, 'utf-8');
  });
  files = await Promise.all(files);
  return files;
}

async function main() {
  // it all comes together here!
  let license, readme;
  try {
    [license, readme] = await getFiles(licensePath, readmePath);
    console.log(`Our license is ${license.length} characters long`);
    console.log(`Our readme ${readme.length !== 0 ? 'is not' : 'is'} empty`);
  }
  catch (e) {
    console.error(e);
  }
}

main();
