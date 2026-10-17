# Variable: createXs\_simpleType

```ts
const createXs_simpleType: (attributes: Omit<Omit<Omit<Record<string, ... | ...> & {
[qualifiedName: `${(...)}:${(...)}`]: ... | ...;
}, "id"> & {
  id?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "name" | "final"> & {
  final?: string;
  name?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "name" | "final"> & Record<string, string | undefined> & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, content: 
  | Xs_simpleType_Element$Children
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
  | Xs_restriction
  | Xs_annotation
  | Xs_list
  | Xs_union)[]) => Xs_simpleType_Element & {
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
  }) => Xs_simpleType_Element[];
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
  }) => Xs_simpleType_Element[];
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
     | Xs_simpleType_Element
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
  }) => element is Xs_simpleType_Element;
  namespaceURI: string;
} & {
  defaults: Partial<Omit<Omit<Omit<Record<..., ...> & {
   [qualifiedName: ...]: ...;
   }, "id"> & {
     id?: string;
   } & {
   [qualifiedName: `${string}:${string}`]: string | undefined;
   }, "name" | "final"> & {
     final?: string;
     name?: string;
   } & {
   [qualifiedName: `${string}:${string}`]: string | undefined;
   }, "name" | "final"> & Record<string, string | undefined> & {
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
     attributes: Omit<Omit<Omit<... & ..., "id"> & {
        id?: ... | ...;
      } & {
      [qualifiedName: `${(...)}:${(...)}`]: ... | ...;
      }, "name" | "final"> & {
        final?: string;
        name?: string;
      } & {
      [qualifiedName: `${string}:${string}`]: string | undefined;
      }, "name" | "final"> & Record<string, string | undefined> & {
      [qualifiedName: `${string}:${string}`]: string | undefined;
     };
     children: {
        annotation: Xs_annotation;
        list: Xs_list;
        restriction: Xs_restriction;
        union: Xs_union;
     };
   }
    | undefined;
  update(element: Xs_simpleType_Element, attributes: Partial<E["attributes"]>, changes: Partial<F>): Xs_simpleType_Element;
};
```

Create/read the XML simpleType element. Named children follow XSD order and occurrence constraints.

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
}) => Xs_simpleType_Element[];
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

[`Xs_simpleType_Element`](../interfaces/ids.v1_0.Xs_simpleType_Element.md)[]

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
}) => Xs_simpleType_Element[];
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

[`Xs_simpleType_Element`](../interfaces/ids.v1_0.Xs_simpleType_Element.md)[]

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
  | Xs_simpleType_Element
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

  \| [`Xs_simpleType_Element`](../interfaces/ids.v1_0.Xs_simpleType_Element.md)
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
}) => element is Xs_simpleType_Element;
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

`element is Xs_simpleType_Element`

### namespaceURI

```ts
namespaceURI: string = definition.namespaceURI;
```

### defaults

```ts
defaults: Partial<Omit<Omit<Omit<Record<..., ...> & {
[qualifiedName: ...]: ...;
}, "id"> & {
  id?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "name" | "final"> & {
  final?: string;
  name?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "name" | "final"> & Record<string, string | undefined> & {
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
  attributes: Omit<Omit<Omit<... & ..., "id"> & {
     id?: ... | ...;
   } & {
   [qualifiedName: `${(...)}:${(...)}`]: ... | ...;
   }, "name" | "final"> & {
     final?: string;
     name?: string;
   } & {
   [qualifiedName: `${string}:${string}`]: string | undefined;
   }, "name" | "final"> & Record<string, string | undefined> & {
   [qualifiedName: `${string}:${string}`]: string | undefined;
  };
  children: {
     annotation: Xs_annotation;
     list: Xs_list;
     restriction: Xs_restriction;
     union: Xs_union;
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
  `attributes`: `Omit`\<`Omit`\<`Omit`\<... & ..., `"id"`\> & \{
     `id?`: ... \| ...;
   \} & \{
   \[`qualifiedName`: `` `${(...)}:${(...)}` ``\]: ... \| ...;
   \}, `"name"` \| `"final"`\> & \{
     `final?`: `string`;
     `name?`: `string`;
   \} & \{
   \[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
   \}, `"name"` \| `"final"`\> & `Record`\<`string`, `string` \| `undefined`\> & \{
   \[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
  \};
  `children`: \{
     `annotation`: [`Xs_annotation`](../interfaces/ids.v1_0.Xs_annotation.md);
     `list`: [`Xs_list`](../interfaces/ids.v1_0.Xs_list.md);
     `restriction`: [`Xs_restriction`](../interfaces/ids.v1_0.Xs_restriction.md);
     `union`: [`Xs_union`](../interfaces/ids.v1_0.Xs_union.md);
  \};
\}
  \| `undefined`

### update()

```ts
update(
   element: Xs_simpleType_Element, 
   attributes: Partial<E["attributes"]>, 
   changes: Partial<F>
): Xs_simpleType_Element;
```

#### Parameters

##### element

[`Xs_simpleType_Element`](../interfaces/ids.v1_0.Xs_simpleType_Element.md)

##### attributes

`Partial`\<`E`\[`"attributes"`\]\>

##### changes

`Partial`\<`F`\>

#### Returns

[`Xs_simpleType_Element`](../interfaces/ids.v1_0.Xs_simpleType_Element.md)
