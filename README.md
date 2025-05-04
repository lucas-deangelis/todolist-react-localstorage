# Todo app

A todolist, with local storage to save/load it.

To install the project and use it in dev mode, after cloning it:

```
$ npm install
$ npm run dev
```

To build the project:

```
$ npm run build
```

You then need to serve the index.html that's in `/dist`. For example:

```
$ cd dist
$ python -m http.server # and then navigate to localhost:8000
```

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
  | { type: "add"; payload: { task: Task } }
  | { type: "set_initial_tasks"; payload: { tasks: Task[] } };
```

### Using local storage to save the tasks

A few things here:

- local storage get/set is done through `useEffect`, since this is not React but an "external" source/side effect
- the initial tasks array is filled through the reducer, which then needs a `set_initial_tasks`
- there are two effects needed
  - one to load the initial data, used only once, so it has en empty dependency array
  - one to save the data each time the tasks change, so it has a dependency on `tasks`
