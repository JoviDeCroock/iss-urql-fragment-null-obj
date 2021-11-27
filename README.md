### The problem

When you navigate to `/` it query the `Player:1` object.

When you navigate to `/team/1` it query the `Team:1` object.

If you goback to `/` the `Player` is `null` now!

### The steps

- `git clone https://github.com/frederikhors/iss-urql-fragment-null-obj`
- `npm install`
- go to https://codesandbox.io/s/apollo-server-urql-svelte-crud-h1pcl to start the server
- `npm run dev`

### The gif
![issue](https://user-images.githubusercontent.com/41120635/143720552-de19bca4-408c-4421-873d-3540fd4b5bc6.gif)
