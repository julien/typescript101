typescript101
=============

I'm playing around with [TypeScript] (http://www.typescriptlang.org/),
follow allong ...

This repo contains several examples of TypeScript "programs".


instructions
============

Make sure you have [Node.js] (http://www.nodejs.org) and
[TypeScript] (http://www.typescriptlang.org/) installed 
via [NPM](http://www.npmjs.org) (or Visual Studio if that's you thing)

``` npm install -g typescript ```

Compile your TypeScript code with:

```tsc --sourcemap --out OUTPUT_FILE INPUT_FILE``` 
or 
```tsc --out OUTPUT_FILE --watch INPUT_FILE```

To compile the "modules" use:
```tsc --declaration --module 'amd' --sourcemap --out OUTPUT_FILE INPUT_FILE```



