# Javascript Engine

The Javascript language is processed by an engine which turns the code into byte code or machine code.

There are many many engines, they are referred to as ECMAScript Engines.
Here is what a javascript engine does in order, specifically Google's V8 engine:

1. Lexical analysis breaks the code down into tokens to identify their meaning.

2. The tokens form an AST, an abstract syntax tree. See a live example here: [AST Explorer](https://astexplorer.net/)

3. This stage is referred to as Ignition, the interpreter, translates and reads the files line by line on the fly, translating to Bytecode.

4. The profiler, monitors the translated code and looks at how it can be optimised, for example, if similar lines of code are reused, this code will be put forward to the compiler.

5. The compiler translates any profiled Bytecode ahead of time into a lower level language such as Machine code. which will run faster the next time our application is run.

6. The result is optimised code, whereby some constantly changing parts are written initially in Javascript then translated into Bytecode, but some repeated non-changing parts are optimised from Bytecode into Machine Code, so our Javascript application can run faster.
