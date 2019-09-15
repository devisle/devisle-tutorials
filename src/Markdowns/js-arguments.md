# Function Arguments

## Bad

```javascript
function create(title, description, submitText, errorMessage) {
  // ...
}
```

## Good

```javascript
function createPost({ title, description, content }) {
  // ...
}
```

Functions need to be clearly name representing a single **responsibility**.

Destructured **arguments** kept to three are easily digested, they are also cloned.
