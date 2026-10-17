# Variable: createY\_2

```ts
const createY_2: (value: string) => Y_2 & {
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
  }) => Y_2[];
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
  }) => Y_2[];
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
  }) => Y_2 | undefined;
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
  }) => element is Y_2;
  namespaceURI: string;
} & {
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
  }): string | undefined;
};
```

Create/read the XML Y element. Named children follow XSD order and occurrence constraints.

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
}) => Y_2[];
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

[`Y_2`](../interfaces/bcf.v2_1.visinfo.Y_2.md)[]

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
}) => Y_2[];
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

[`Y_2`](../interfaces/bcf.v2_1.visinfo.Y_2.md)[]

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
}) => Y_2 | undefined;
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

[`Y_2`](../interfaces/bcf.v2_1.visinfo.Y_2.md) \| `undefined`

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
}) => element is Y_2;
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

`element is Y_2`

### namespaceURI

```ts
namespaceURI: string = definition.namespaceURI;
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
}): string | undefined;
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

`string` \| `undefined`
