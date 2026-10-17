# Function: validate()

```ts
function validate(source: 
  | string
  | ArrayBuffer
  | Uint8Array
  | Blob
  | {
  entries: Record<string, 
     | {
     date?: Date;
     document: {
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
        root: {
           attributes: Record<string, string | undefined> & {
            [qualifiedName: `${string}:${string}`]: string | undefined;
           };
           content: (
              | string
              | {
              kind: "comment";
              value: string;
            }
              | {
              kind: "instruction";
              target: string;
              value: string;
            }
              | {
              attributes: ... & ...;
              content: (string | XmlComment | XmlInstruction | GenericElement)[];
              name: string;
              namespaces?: ... | ...;
              namespaceURI: string;
              prefix?: ... | ...;
           })[];
           name: string;
           namespaces?: Record<string, string>;
           namespaceURI: string;
           prefix?: string;
        };
        schema: string;
     };
   }
     | {
     bytes: Uint8Array;
     date?: Date;
  }>;
  kind: "archive";
  specification: string;
}
  | {
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
  root: {
     attributes: Record<string, string | undefined> & {
      [qualifiedName: `${string}:${string}`]: string | undefined;
     };
     content: (
        | string
        | {
        kind: "comment";
        value: string;
      }
        | {
        kind: "instruction";
        target: string;
        value: string;
      }
        | {
        attributes: Record<string, string | undefined> & {
         [qualifiedName: `${string}:${string}`]: string | undefined;
        };
        content: (string | XmlComment | XmlInstruction | GenericElement)[];
        name: string;
        namespaces?: Record<string, string>;
        namespaceURI: string;
        prefix?: string;
     })[];
     name: string;
     namespaces?: Record<string, string>;
     namespaceURI: string;
     prefix?: string;
  };
  schema: string;
}, options?: {
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
}): Promise<{
  diagnostics: {
     code: "schema" | "xml" | "limit" | "archive" | "xsd";
     column?: number;
     line?: number;
     message: string;
     path?: string;
     xpath?: string;
  }[];
  valid: boolean;
}>;
```

Check XML structure and XSD constraints. This does not evaluate IFC models or certify semantic conformance.

## Parameters

### source

  \| `string`
  \| `ArrayBuffer`
  \| `Uint8Array`
  \| `Blob`
  \| \{
  `entries`: `Record`\<`string`, 
     \| \{
     `date?`: `Date`;
     `document`: \{
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
        `root`: \{
           `attributes`: `Record`\<`string`, `string` \| `undefined`\> & \{
            \[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
           \};
           `content`: (
              \| `string`
              \| \{
              `kind`: `"comment"`;
              `value`: `string`;
            \}
              \| \{
              `kind`: `"instruction"`;
              `target`: `string`;
              `value`: `string`;
            \}
              \| \{
              `attributes`: ... & ...;
              `content`: (string \| XmlComment \| XmlInstruction \| GenericElement)\[\];
              `name`: `string`;
              `namespaces?`: ... \| ...;
              `namespaceURI`: `string`;
              `prefix?`: ... \| ...;
           \})[];
           `name`: `string`;
           `namespaces?`: `Record`\<`string`, `string`\>;
           `namespaceURI`: `string`;
           `prefix?`: `string`;
        \};
        `schema`: `string`;
     \};
   \}
     \| \{
     `bytes`: `Uint8Array`;
     `date?`: `Date`;
  \}\>;
  `kind`: `"archive"`;
  `specification`: `string`;
\}
  \| \{
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
  `root`: \{
     `attributes`: `Record`\<`string`, `string` \| `undefined`\> & \{
      \[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
     \};
     `content`: (
        \| `string`
        \| \{
        `kind`: `"comment"`;
        `value`: `string`;
      \}
        \| \{
        `kind`: `"instruction"`;
        `target`: `string`;
        `value`: `string`;
      \}
        \| \{
        `attributes`: `Record`\<`string`, `string` \| `undefined`\> & \{
         \[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
        \};
        `content`: (string \| XmlComment \| XmlInstruction \| GenericElement)\[\];
        `name`: `string`;
        `namespaces?`: `Record`\<`string`, `string`\>;
        `namespaceURI`: `string`;
        `prefix?`: `string`;
     \})[];
     `name`: `string`;
     `namespaces?`: `Record`\<`string`, `string`\>;
     `namespaceURI`: `string`;
     `prefix?`: `string`;
  \};
  `schema`: `string`;
\}

### options?

#### fallbackSpecification?

`string`

Explicit archive family when its version file is absent; validation still reports the missing file.

#### limits?

\{
  `maxEntries?`: `number`;
  `maxEntryBytes?`: `number`;
  `maxInputBytes?`: `number`;
  `maxTotalBytes?`: `number`;
\}

#### limits.maxEntries?

`number`

#### limits.maxEntryBytes?

`number`

#### limits.maxInputBytes?

`number`

#### limits.maxTotalBytes?

`number`

#### schema?

`string`

#### trimXmlDeclaration?

`boolean`

Accept whitespace before an XML declaration without changing document content.

#### validate?

`boolean`

## Returns

`Promise`\<\{
  `diagnostics`: \{
     `code`: `"schema"` \| `"xml"` \| `"limit"` \| `"archive"` \| `"xsd"`;
     `column?`: `number`;
     `line?`: `number`;
     `message`: `string`;
     `path?`: `string`;
     `xpath?`: `string`;
  \}[];
  `valid`: `boolean`;
\}\>
