# Todo app

## Learned

### Configure `@` as an alias for `src` for the imports

- install `vite-tsconfig-paths`
- add `viteTsconfigPaths()` to the list of plugins in vite.config.ts
- add `"baseUrl": ".", "paths": { "@/*": ["./src/*"] },` in `"compilerOptions"` in tsconfig.app.json

### Using a reducer

The way I update the todo list (checked and unchecked) is done with a reducer. Thanks to Typescript it's easy to type the actions passed:

```typescript
export type TaskReducerAction =
  | { type: "check"; payload: { title: string } }
  | { type: "uncheck"; payload: { title: string } }
  | { type: "add"; payload: { task: Task } };
```
