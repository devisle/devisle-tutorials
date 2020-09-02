# Writing Optimized code for the V8 Engine

## The V8 Engine is a JIT Compiler that combines the best of:

Interpreters ability to run javascript code on the fly
Compilers ability to compile code but be faster afterwards

Avoid:

- Eval() - Able to change Scope chains
- Many Arguments (around 3 is good)
- For In loops
- With - Able to change Scope chains
- Delete

Why?

**Inline Caching**, repeated code with the same arguments will be optimised to just returning the same expected values.

**Hidden classes**, mutating class instances will make the compiler run slower.
