## new URLSearchParams

- The URLSearchParams is an interface provided by the Web API's URL standard, which allows manipulation of the query string of a URL. The query string is the part of a URL that comes after the question mark ?.

In JavaScript, you can create a new URLSearchParams object by passing either a string representing the query string or a JavaScript object with key-value pairs that will be converted into a query string. Here's an example:

```js
const params = new URLSearchParams("?name=John&age=30");

// Or

const params = new URLSearchParams({ name: "John", age: 30 });
```

## Thanks a lot to great instructor John Smilga

- www.johnsmilga.com
- coding addict on youtube
