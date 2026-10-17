# Function: save()

```ts
function save(document: 
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
}
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
}, options?: Pick<{
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
}, "limits">): Promise<Uint8Array>;
```

Validate and serialize a document. Rejects invalid XML instead of writing it.

## Parameters

### document

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

### options?

`Pick`\<\{
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
\}, `"limits"`\> = `{}`

## Returns

`Promise`\<`Uint8Array`\>
