The solution is to ensure that the prop `someProp` passed to `MyComponent` is a number. Here is how you can fix it:

```javascript
// Correcting the prop type
<MyComponent someProp={parseInt(somePropString, 10)} />

// Or, if someProp is already a number
<MyComponent someProp={somePropNumber} />

// Or, using PropTypes for type validation (better practice):
MyComponent.propTypes = {
  someProp: PropTypes.number.isRequired,
};
```

By explicitly converting the string to a number using `parseInt` or using `PropTypes` for type checking, you ensure that `MyComponent` receives the expected prop type, resolving the warning.