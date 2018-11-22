# I <3 this pattern
> I really do

## What are the features I'm using that I love?

* Destructuring
* Rest Paramaters
* Async Functions and Await
* Await Promise.all!!!

## Destrucuturing

[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```js
const { readFile } = require('fs').promises
const { resolve } = require('path');
```

## Rest Parameters

[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
}

sum(1);
// 1
sum(1, 1);
// 2
sum(1, 1, 2);
// 4
sum(1, 1, 2, 3);
// 7
sum(1, 1, 2, 3, 5);
// 12
```

### Why use this instead of arguments?

Did you notice that `numbers` has the `Array.prototype` methods 🎉

## Async Functions and Await

[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

```js
async function latestCurrentNode () {
  const response = await fetch('https://nodejs.org/download/release/index.tab');
  const tab = await response.text();
  const [version, date] = tab.split('\n')[1].split('\t');
  console.log(`The latest release of node is ${version}.\nIt was released on ${date}.`);
}

latestCurrentNode().catch(e => console.log(e));
```

## Await Promise.all

[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

See [index.js](./index.js) 😉
