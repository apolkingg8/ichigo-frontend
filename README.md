# Ichigo Front-end Interview - Eddie Hsu
A simple React todo list.

## Run
```bash
# Require: Node.js 12+, Yarn 1.x
yarn install
yarn run dev
```
The demo will run in `localhost:3001`.

## Why
First of all, the issue is that some of the grids in mobile layout are sorted in an unusual way. 
I think the CSS Grid can handle this, but I don't use this feature very often, so I choose to using flex layout and switch between two types of DOM layout. 
I like to handle most things in JS, so I choose CSS-in-JS and use `useMeasure`.

