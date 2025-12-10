---
title: "JavaScript Notes"
date: 2023-05-04T09:00:00+05:30
draft: false
tags: ["JavaScript", "Notes"]
categories: ["JavaScript"]
description: "JavaScript starter notes for Python developers covering setup, basics, and best practices."
---

### Prerequisite
- Basics of HTML and CSS

> These notes assume you write Python—comparisons are called out where it helps make the mental switch.

### Python → JS quick map
- `list` ≈ `Array`, `dict` ≈ plain object `{ key: value }`.
- No indentation-based blocks; braces `{}` define scope, and semicolons end statements (optional but recommended).
- Prefer `const` (no reassignment) or `let` (reassignment) instead of the legacy `var`.
- `None` in Python maps to `null` in JS; uninitialized variables are `undefined`.
- Use strict equality `===`/`!==` instead of `==`/`!=` to avoid implicit type coercion.
- Truthy/falsey rules are broader than Python—watch out for `""`, `0`, `null`, `undefined`, and `NaN`.

## What is JavaScript?
- JavaScript was primarily used for building webpages.
- With technological advances and heavy investments, you can use JavaScript to build web and mobile apps, CLI tools, games, and ML-powered web apps.
- JS script code is executed by the JS engine that ships with browsers.

### External assistant tools
- [CodePen: Online Code Editor and Front End Web Developer Community](https://codepen.io/)

### Tools
- No fancy setup required apart from a text editor/IDE and a web browser.
- Optional for local tooling: install Node.js from the official website.
- VS Code: Live Server extension refreshes the webpage each time a change is made.

### Step 1: Some HTML skeleton to get started
- Type `!` and hit enter to populate HTML boilerplate code.
- Separation of concern: keep JS code separated for different responsibilities.
- Place your JS code at the bottom of the body section so that all the elements have been rendered. You can also put the script in the header section but it is not recommended.

### Variables

```js
let var_name = "saurabh"; // can be modified
const var_name = 3.14; // cannot be modified
```

- Strings, numbers, booleans, objects (dicts), and arrays (lists) feel familiar, but JS has a single number type (double precision).
- JS is case sensitive and block scope comes from braces `{}`—indentation is just style.
- By default, the value of JS variables is `undefined` (similar to Python’s `NameError` only when you reference an undeclared identifier).
- Use meaningful names in camelCase notation; prefer `const` unless you need reassignment.
- Dictionaries are called objects in JS; it can be misleading when you think of an object as a class instance.
- Statements should be ended with `;`—this is annoying because it often will not throw an error if missed.
- Comments are given by `//`.
- Similar to Python there are reserved keywords in JS.
- Use strict equality `===`/`!==` to avoid surprise type coercion from `==`/`!=`.
- Template literals (`` `Hello ${name}` ``) replace most f-string use cases.
- `Events` refer to actions that happen on the webpage (e.g., clicking a button).
- Shortcut for control: `CTRL + SHIFT + I`.
- To convert string to number: `Number(some_string)`.
- Functions are defined as:

```js
function add() {
  alert("hello world");
}
```

### Control flow and functions
- Arrow functions are concise and keep `this` from the surrounding scope; regular functions have their own `this` (similar to methods with `self`).
- Default params work like Python: `function greet(name = "world") {}`; rest params mirror `*args`: `function sum(...nums) {}`; spread `...arr` unpacks arrays/objects.
- Destructuring mirrors tuple unpacking: `const [first, second] = arr; const { name } = obj;`.
- Use `for...of` to loop arrays/strings, `for...in` to loop object keys; avoid `for...in` on arrays.
- Array helpers (`map`, `filter`, `reduce`, `some`, `every`) cover most list comprehension use cases.
- Optional chaining `obj?.prop` prevents “cannot read property” errors; `??` is like Python’s `x if x is not None else y` for null/undefined.

### Modules
- ES modules use `export`/`import` instead of `import x` in Python. Example: `export function add(){}` and `import { add } from "./math.js";`.
- Default export is similar to a single unnamed export: `export default function foo(){}` then `import foo from "./file.js";`.

### Async basics
- Promises are the async primitive; `async/await` feels like Python’s `asyncio` syntax.
- `fetch` returns a promise: `const res = await fetch(url); const data = await res.json();`.
- Error handling stays with `try/catch` and `await`: `try { await task(); } catch (err) { ... }`.
- Top-level `await` works inside ES modules.

### Objects and classes
- Classes are syntactic sugar over prototypes; methods live on the prototype.
- `this` depends on call-site; bind it with arrow functions for callbacks, but prefer regular methods on classes to keep `this` as the instance.
- There is no enforced privacy; naming convention uses `_privateLike` or use `#privateField` for true private fields.

### DOM essentials
- Query elements with `document.querySelector(".class")`/`querySelectorAll`; attach events with `element.addEventListener("click", handler)`.
- `textContent` for plain text; `innerHTML` when you must inject HTML (escape inputs to avoid XSS).

### VS Code shortcut
- To insert an HTML comment type `<!--` and hit enter.

### Best practices
- Do not insert JS snippets within HTML files. Instead have a separate file for JS code.
