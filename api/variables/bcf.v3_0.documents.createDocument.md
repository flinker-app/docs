# Variable: createDocument

```ts
const createDocument: (attributes: {
  Guid: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, content: 
  | Document_Element$Children
  | (
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
  | Filename
  | Description)[]) => Document_Element & {
  all: (parent?: {
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
  }) => Document_Element[];
  descendants: (parent?: {
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
  }) => Document_Element[];
  elementName: string;
  from: (parent?: {
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
   }) => 
     | Document_Element
    | undefined;
  is: (element?: {
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
  }) => element is Document_Element;
  namespaceURI: string;
} & {
  defaults: Partial<{
     Guid: string;
   } & {
   [qualifiedName: `${string}:${string}`]: string | undefined;
  }>;
  read(element?: {
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
   }): 
     | {
     attributes: {
        Guid: string;
      } & {
      [qualifiedName: `${string}:${string}`]: string | undefined;
     };
     children: {
        Description: Description;
        Filename: Filename | undefined;
     };
   }
    | undefined;
  update(element: Document_Element, attributes: Partial<E["attributes"]>, changes: Partial<F>): Document_Element;
};
```

Create/read the XML Document element. Named children follow XSD order and occurrence constraints.

## Type Declaration

### all

```ts
all: (parent?: {
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
}) => Document_Element[];
```

#### Parameters

##### parent?

###### attributes

`Record`\<`string`, `string` \| `undefined`\> & \{
\[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
\}

###### content

(
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
\})[]

###### name

`string`

###### namespaces?

`Record`\<`string`, `string`\>

###### namespaceURI

`string`

###### prefix?

`string`

#### Returns

[`Document_Element`](../interfaces/bcf.v3_0.documents.Document_Element.md)[]

### descendants

```ts
descendants: (parent?: {
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
}) => Document_Element[];
```

#### Parameters

##### parent?

###### attributes

`Record`\<`string`, `string` \| `undefined`\> & \{
\[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
\}

###### content

(
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
\})[]

###### name

`string`

###### namespaces?

`Record`\<`string`, `string`\>

###### namespaceURI

`string`

###### prefix?

`string`

#### Returns

[`Document_Element`](../interfaces/bcf.v3_0.documents.Document_Element.md)[]

### elementName

```ts
elementName: string = definition.name;
```

### from

```ts
from: (parent?: {
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
}) => 
  | Document_Element
  | undefined;
```

#### Parameters

##### parent?

###### attributes

`Record`\<`string`, `string` \| `undefined`\> & \{
\[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
\}

###### content

(
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
\})[]

###### name

`string`

###### namespaces?

`Record`\<`string`, `string`\>

###### namespaceURI

`string`

###### prefix?

`string`

#### Returns

  \| [`Document_Element`](../interfaces/bcf.v3_0.documents.Document_Element.md)
  \| `undefined`

### is

```ts
is: (element?: {
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
}) => element is Document_Element;
```

#### Parameters

##### element?

###### attributes

`Record`\<`string`, `string` \| `undefined`\> & \{
\[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
\}

###### content

(
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
\})[]

###### name

`string`

###### namespaces?

`Record`\<`string`, `string`\>

###### namespaceURI

`string`

###### prefix?

`string`

#### Returns

`element is Document_Element`

### namespaceURI

```ts
namespaceURI: string = definition.namespaceURI;
```

### defaults

```ts
defaults: Partial<{
  Guid: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}>;
```

### read()

```ts
read(element?: {
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
}): 
  | {
  attributes: {
     Guid: string;
   } & {
   [qualifiedName: `${string}:${string}`]: string | undefined;
  };
  children: {
     Description: Description;
     Filename: Filename | undefined;
  };
}
  | undefined;
```

#### Parameters

##### element?

###### attributes

`Record`\<`string`, `string` \| `undefined`\> & \{
\[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
\}

###### content

(
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
\})[]

###### name

`string`

###### namespaces?

`Record`\<`string`, `string`\>

###### namespaceURI

`string`

###### prefix?

`string`

#### Returns

  \| \{
  `attributes`: \{
     `Guid`: `string`;
   \} & \{
   \[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
  \};
  `children`: \{
     `Description`: [`Description`](../interfaces/bcf.v3_0.documents.Description.md);
     `Filename`: [`Filename`](../interfaces/bcf.v3_0.documents.Filename.md) \| `undefined`;
  \};
\}
  \| `undefined`

### update()

```ts
update(
   element: Document_Element, 
   attributes: Partial<E["attributes"]>, 
   changes: Partial<F>
): Document_Element;
```

#### Parameters

##### element

[`Document_Element`](../interfaces/bcf.v3_0.documents.Document_Element.md)

##### attributes

`Partial`\<`E`\[`"attributes"`\]\>

##### changes

`Partial`\<`F`\>

#### Returns

[`Document_Element`](../interfaces/bcf.v3_0.documents.Document_Element.md)
