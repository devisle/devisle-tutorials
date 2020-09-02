# Call Stack and Memory Heap

Inside of the Javascript Engine:

### What is the Memory Heap?

This is where the memory allocation happens.

```javascript
const num = 1; // Please allocate memory
```

### What is the Callstack?

This is where the engine can keeps track of where the code is.

First, we allocate memory:

```javascript
// Allocate memory to calculate
function subtractTwo(num) {
  return num - 2;
}

// Allocate memory to calculate
function calculate() {
  const totalSum = 4 + 5;
  return subtractTwo(totalSum);
}

// Enter call stack
calculate();
```

Then when we call the function, we are effectively placing it in a call stack like so until it returns or exits the function.

```javascript
calculate(); // First we enter calculate
```

```javascript
subtractTwo(); // Then we enter substractTwo
```

```javascript
calculate(); // First we enter calculate
```

```javascript
calculate(); // Then we pop subtractTwo off the callstack
```

As a tip, in google developer tools, go to:
`sources > snippets > new snippet` to see how the above code is run and the call stack is stepped through.

We can use the **debugger** to pause the walk through in the developer console.

The state of a call stack at any point, is referred to as the **stack frame**.

The call stack works as a **First In Last Out queue**.
