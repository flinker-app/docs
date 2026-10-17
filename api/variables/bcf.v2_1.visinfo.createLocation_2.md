# Variable: createLocation\_2

```ts
const createLocation_2: (attributes: {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, content: 
  | Location_2$Children
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
  | X
  | Y
  | Z)[]) => Location_2 & {
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
  }) => Location_2[];
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
  }) => Location_2[];
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
     | Location_2
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
  }) => element is Location_2;
  namespaceURI: string;
} & {
  defaults: Partial<{
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
      [qualifiedName: `${string}:${string}`]: string | undefined;
     };
     children: {
        X: X | undefined;
        Y: Y | undefined;
        Z: Z | undefined;
     };
   }
    | undefined;
  update(element: Location_2, attributes: Partial<E["attributes"]>, changes: Partial<F>): Location_2;
};
```

Create/read the XML Location element. Named children follow XSD order and occurrence constraints.

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
}) => Location_2[];
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

[`Location_2`](../interfaces/bcf.v2_1.visinfo.Location_2.md)[]

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
}) => Location_2[];
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

[`Location_2`](../interfaces/bcf.v2_1.visinfo.Location_2.md)[]

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
  | Location_2
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

  \| [`Location_2`](../interfaces/bcf.v2_1.visinfo.Location_2.md)
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
}) => element is Location_2;
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

`element is Location_2`

### namespaceURI

```ts
namespaceURI: string = definition.namespaceURI;
```

### defaults

```ts
defaults: Partial<{
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
   [qualifiedName: `${string}:${string}`]: string | undefined;
  };
  children: {
     X: X | undefined;
     Y: Y | undefined;
     Z: Z | undefined;
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
   \[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
  \};
  `children`: \{
     `X`: [`X`](../interfaces/bcf.v2_1.visinfo.X.md) \| `undefined`;
     `Y`: [`Y`](../interfaces/bcf.v2_1.visinfo.Y.md) \| `undefined`;
     `Z`: [`Z`](../interfaces/bcf.v2_1.visinfo.Z.md) \| `undefined`;
  \};
\}
  \| `undefined`

### update()

```ts
update(
   element: Location_2, 
   attributes: Partial<E["attributes"]>, 
   changes: Partial<F>
): Location_2;
```

#### Parameters

##### element

[`Location_2`](../interfaces/bcf.v2_1.visinfo.Location_2.md)

##### attributes

`Partial`\<`E`\[`"attributes"`\]\>

##### changes

`Partial`\<`F`\>

#### Returns

[`Location_2`](../interfaces/bcf.v2_1.visinfo.Location_2.md)
