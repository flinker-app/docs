# Function: createXmlFile()

```ts
function createXmlFile(root: Markup): {
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
  root: Markup;
  schema: "bcf-2.1/markup";
};
```

Create a bcf-2.1/markup XML document. Save validates it against the official XSD.

## Parameters

### root

[`Markup`](../interfaces/bcf.v2_1.markup.Markup.md)

## Returns

```ts
{
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
  root: Markup;
  schema: "bcf-2.1/markup";
}
```

### after?

```ts
optional after?: (
  | {
  kind: "comment";
  value: string;
}
  | {
  kind: "instruction";
  target: string;
  value: string;
})[];
```

### before?

```ts
optional before?: (
  | {
  kind: "comment";
  value: string;
}
  | {
  kind: "instruction";
  target: string;
  value: string;
})[];
```

### kind

```ts
kind: "xml";
```

### root

```ts
root: Markup;
```

### schema

```ts
schema: "bcf-2.1/markup";
```

## See

https://raw.githubusercontent.com/buildingSMART/BCF-XML/92fdcf4bfaa8f0576e7562730f341fc7781e2065/Schemas/markup.xsd
