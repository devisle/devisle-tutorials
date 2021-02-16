# The difference between statically and dynamically typed

We will also be talking about the difference between strongly typed and weakly typed.

## Statically Typed

Statically typed languages do the type checking which is the process of verifying and enforcing the constraints of types at compile-time.
The process of verifying and enforcing the constraints of types meaning that variable types are static, so that once you declare a var to a type, you can't change it.
It's because statically typing is associated with the variable rather than the value.

Examples of Statically typed languages: C, C++ and Java

## Dynamically Typed

Dynamically typed languages do the type checking at run-time which brings some performance cost.
In dynamically typed languages variables are dynamic, meaning you can change the value after you set the var to a type.

Examples of Dynamically typed: Python, JavaScript, Ruby and scripting languages

### Strongly typed

Python is a language that is dynamically typed and strongly typed.

Here is a quick example of strongly typing:

```Python
a = 1
b = "1"

print(a + b)
```

This causes an concatenation error, because you can't add and an integer and string together.

### Weakly typed

 A string containing only digits doesn't magically become a number, as may happen in weakly typed languages like JavaScript and Perl. Every change of type requires an explicit type conversion (aka casting).

JavaScript is dynamically typed and weakly typed.

Here is a quick example of weakly typing:

```javascript
a = 1
b = "1"

console.log(a + b);
```

Doesn't cause an error and it actually gives 11.
