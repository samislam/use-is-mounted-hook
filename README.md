# use-is-mounted-hook

a simple package that includes two hooks `useIsMountedRef` and `useIsMountedState` to detect if the component has been mounted on the DOM or not.

# Usage:

You have two options that you might want to try:
- the `useIsMountedState` hook which depends on the `useState()` method under the hood.
- the `useIsMountedRef` hook which depends on the `useRef()` method under the hood.

The `useIsMountedState` hook uses the react `useState()` hook under the hood to determine if the component has been mounted on the DOM or not yet
```tsx
import React from 'react'
import { useIsMountedState } from 'use-is-mounted-hook'
const MyComponent = ()=>{
	const isMounted = useIsMountedState()
	if(!isMounted) return "Mounting..."
	else return <div>Component has been mounted!</div>
}
```

The `useIsMountedRef` hook uses the react `useRef()` hook under the hood to determine if the component has been mounted on the DOM or not yet
```tsx
import React from 'react'
import { useIsMountedRef } from 'use-is-mounted-hook'
const MyComponent = ()=>{
	const isMounted = useIsMountedRef()
	if(!isMounted) return "Mounting..."
	else return <div>Component has been mounted!</div>
}
```

# Contributing 
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run ./src/index.ts
```

