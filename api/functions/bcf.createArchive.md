# Function: createArchive()

```ts
function createArchive(specification: "bcf-2.1" | "bcf-3.0", entries: Record<string, 
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
           attributes: Record<string, ... | ...> & {
            [qualifiedName: `${(...)}:${(...)}`]: ... | ...;
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
  };
}
  | {
  bytes: Uint8Array;
  date?: Date;
}>): {
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
              attributes: Record<..., ...> & {
               [qualifiedName: ...]: ...;
              };
              content: (string | XmlComment | XmlInstruction | GenericElement)[];
              name: string;
              namespaces?: Record<..., ...>;
              namespaceURI: string;
              prefix?: string;
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
};
```

Create an archive from XML documents and binary attachments. Required files and paths follow the BCF-XML specification; save validates them.

## Parameters

### specification

`"bcf-2.1"` \| `"bcf-3.0"`

### entries

`Record`\<`string`, 
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
           `attributes`: `Record`\<`string`, ... \| ...\> & \{
            \[`qualifiedName`: `` `${(...)}:${(...)}` ``\]: ... \| ...;
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
  \};
\}
  \| \{
  `bytes`: `Uint8Array`;
  `date?`: `Date`;
\}\>

## Returns

```ts
{
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
              attributes: Record<..., ...> & {
               [qualifiedName: ...]: ...;
              };
              content: (string | XmlComment | XmlInstruction | GenericElement)[];
              name: string;
              namespaces?: Record<..., ...>;
              namespaceURI: string;
              prefix?: string;
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
```

### entries

```ts
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
           attributes: Record<..., ...> & {
            [qualifiedName: ...]: ...;
           };
           content: (string | XmlComment | XmlInstruction | GenericElement)[];
           name: string;
           namespaces?: Record<..., ...>;
           namespaceURI: string;
           prefix?: string;
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
```

### kind

```ts
kind: "archive";
```

### specification

```ts
specification: string;
```
