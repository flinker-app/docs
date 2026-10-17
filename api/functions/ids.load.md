# Function: load()

## Call Signature

```ts
function load<S extends "ids-1.0/ids">(source: string | ArrayBuffer | Uint8Array | Blob, options: Omit<{
  fallbackSpecification?: string;
  limits?: {
     maxEntries?: number;
     maxEntryBytes?: number;
     maxInputBytes?: number;
     maxTotalBytes?: number;
  };
  schema?: string;
  trimXmlDeclaration?: boolean;
  validate?: boolean;
}, "schema"> & {
  schema?: "ids-1.0/ids";
} & {
  schema: S;
}): Promise<Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: ids;
  schema: "ids-1.0/ids";
}, {
  schema: S;
}>>;
```

Read XML, validating against the pinned official schemas by default.

### Type Parameters

<a id="loads"></a>

#### S

`S` *extends* `"ids-1.0/ids"`

### Parameters

#### source

`string` \| `ArrayBuffer` \| `Uint8Array` \| `Blob`

#### options

`Omit`\<\{
  `fallbackSpecification?`: `string`;
  `limits?`: \{
     `maxEntries?`: `number`;
     `maxEntryBytes?`: `number`;
     `maxInputBytes?`: `number`;
     `maxTotalBytes?`: `number`;
  \};
  `schema?`: `string`;
  `trimXmlDeclaration?`: `boolean`;
  `validate?`: `boolean`;
\}, `"schema"`\> & \{
  `schema?`: `"ids-1.0/ids"`;
\} & \{
  `schema`: `S`;
\}

### Returns

`Promise`\<`Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`ids`](../interfaces/ids.v1_0.ids.md);
  `schema`: `"ids-1.0/ids"`;
\}, \{
  `schema`: `S`;
\}\>\>

## Call Signature

```ts
function load(source: string | ArrayBuffer | Uint8Array | Blob, options?: Omit<{
  fallbackSpecification?: string;
  limits?: {
     maxEntries?: number;
     maxEntryBytes?: number;
     maxInputBytes?: number;
     maxTotalBytes?: number;
  };
  schema?: string;
  trimXmlDeclaration?: boolean;
  validate?: boolean;
}, "schema"> & {
  schema?: "ids-1.0/ids";
}): Promise<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: ids;
  schema: "ids-1.0/ids";
}>;
```

Read XML, validating against the pinned official schemas by default.

### Parameters

#### source

`string` \| `ArrayBuffer` \| `Uint8Array` \| `Blob`

#### options?

`Omit`\<\{
  `fallbackSpecification?`: `string`;
  `limits?`: \{
     `maxEntries?`: `number`;
     `maxEntryBytes?`: `number`;
     `maxInputBytes?`: `number`;
     `maxTotalBytes?`: `number`;
  \};
  `schema?`: `string`;
  `trimXmlDeclaration?`: `boolean`;
  `validate?`: `boolean`;
\}, `"schema"`\> & \{
  `schema?`: `"ids-1.0/ids"`;
\}

### Returns

`Promise`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`ids`](../interfaces/ids.v1_0.ids.md);
  `schema`: `"ids-1.0/ids"`;
\}\>
