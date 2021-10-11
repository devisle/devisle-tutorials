# The difference between statically and dynamically typed

We will also be talking about the difference between strongly typed and weakly typed.

## Statically Typed

Statically typed languages do the type checking which is the process of verifying and enforcing the constraints of types at compile-time.
The process of verifying and enforcing the constraints of types meaning that variable types are static, so that once you declare a variable to a type, you can't change it.
It's because statically typing is associated with the variable rather than the value.

Examples of Statically typed languages: C, C++ and Java.

A quick example of statically typed:

```Java
int a = 1;
a = "foo";
```

This causes an error, because a is supposed to be an integer only.

## Dynamically Typed

Dynamically typed languages do the type checking at run-time which brings some performance cost.
In dynamically typed languages variables are dynamic, meaning you can change the value after you set the variable to a type.

Examples of Dynamically typed: Python, JavaScript, Ruby and scripting languages.

A quick example of dynamically typed:

```python
a = 1
a = "foo"
```

However doesn't give an error.

### Strongly typed

Python is a language that is dynamically typed and strongly typed.

Here is a quick example of strong typing:

```Python
a = 1
b = "1"

print(a + b)
```

This causes an concatenation error, because you can't add an integer and string together.

In strongly typed languages a string containing only digits doesn't magically become a number.

A quick example on how to fix the concatenation error:

```Python
print(a + int(b))
```

### Weakly typed

In weakly typed languages you don't need to specify types, but the result might not be what you wanted, see the example below.

JavaScript is dynamically typed and weakly typed.

Here is a quick example of weak typing:

```javascript
a = 1
b = "1"

console.log(a + b);
```

Doesn't cause an error and it actually gives 11.
