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
  schema: "bcf-3.0/markup";
};
```

Create a bcf-3.0/markup XML document. Save validates it against the official XSD.

## Parameters

### root

[`Markup`](../interfaces/bcf.v3_0.markup.Markup.md)

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
  schema: "bcf-3.0/markup";
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
schema: "bcf-3.0/markup";
```

## See

https://raw.githubusercontent.com/buildingSMART/BCF-XML/bc48611d0d7a1587f028a2b69677a1aafd5cd0a8/Schemas/markup.xsd
