# Function: createXmlFile()

```ts
function createXmlFile(root: Extensions): {
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
  root: Extensions;
  schema: "bcf-3.0/extensions";
};
```

Create a bcf-3.0/extensions XML document. Save validates it against the official XSD.

## Parameters

### root

[`Extensions`](../interfaces/bcf.v3_0.extensions.Extensions.md)

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
  root: Extensions;
  schema: "bcf-3.0/extensions";
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
root: Extensions;
```

### schema

```ts
schema: "bcf-3.0/extensions";
```

## See

https://raw.githubusercontent.com/buildingSMART/BCF-XML/bc48611d0d7a1587f028a2b69677a1aafd5cd0a8/Schemas/extensions.xsd
