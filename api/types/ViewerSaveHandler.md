# Type Alias: ViewerSaveHandler

```ts
type ViewerSaveHandler = (request: {
  data: Uint8Array;
  name: string;
}) => void | Promise<void>;
```

Return the save promise to keep the button disabled until saving finishes.

## Parameters

### request

#### data

`Uint8Array`

File bytes, generated before the handler is called.

#### name

`string`

Suggested filename, including its extension.

## Returns

`void` \| `Promise`\<`void`\>
