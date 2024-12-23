# Unexpected Prop Type Warning in React Native

This repository demonstrates a common error in React Native: the 'Unexpected prop type' warning.  The error arises when a component receives a prop of an unexpected type, causing the application to malfunction. This example showcases the error and its solution.

## Problem

The `MyComponent` expects a numerical `someProp`, but the code passes a string.  This results in the 'Unexpected prop type' warning.

## Solution

The solution involves ensuring that the prop passed to `MyComponent` is of the correct type (number in this case).  This can be achieved through explicit type checking or data transformation before passing the prop.