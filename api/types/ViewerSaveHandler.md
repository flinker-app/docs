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

Current BCF bytes, generated before the handler is called.

#### name

`string`

Source filename for one file, or topics.bcf for a combined export.

## Returns

`void` \| `Promise`\<`void`\>
