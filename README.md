# Flip What 
#### NPM Version

A simple spin on the classic ascii table flip `(╯°□°）╯︵ ┻━┻`

## Installation:
```
npm install @xcsrz/flipwhat
```

## Usage:

### ES6:
```
import fw from 'flipwhat';

console.log(fw('GOOGLE'));
console.log(fw());
```
Yields:
```
(╯°□°）╯︵    ǝʃƃooƃ
(╯°□°）╯︵    ┻━┻
```

### CommonJS:
```
const flipwhat = require('@xcsrz/flipwhat').default

console.log(flipwhat())
console.log(flipwhat('FaCeBooK'));
```
Yields:
```
(╯°□°）╯︵    ┻━┻
(╯°□°）╯︵    ʞooqǝɔɐɟ
```
