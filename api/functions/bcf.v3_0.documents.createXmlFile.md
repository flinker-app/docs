# Function: createXmlFile()

```ts
function createXmlFile(root: DocumentInfo): {
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
  root: DocumentInfo;
  schema: "bcf-3.0/documents";
};
```

Create a bcf-3.0/documents XML document. Save validates it against the official XSD.

## Parameters

### root

[`DocumentInfo`](../interfaces/bcf.v3_0.documents.DocumentInfo.md)

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
  root: DocumentInfo;
  schema: "bcf-3.0/documents";
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
root: DocumentInfo;
```

### schema

```ts
schema: "bcf-3.0/documents";
```

## See

https://raw.githubusercontent.com/buildingSMART/BCF-XML/bc48611d0d7a1587f028a2b69677a1aafd5cd0a8/Schemas/documents.xsd
