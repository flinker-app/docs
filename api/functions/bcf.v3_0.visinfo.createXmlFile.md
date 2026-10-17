# Function: createXmlFile()

```ts
function createXmlFile(root: VisualizationInfo): {
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
  root: VisualizationInfo;
  schema: "bcf-3.0/visinfo";
};
```

Create a bcf-3.0/visinfo XML document. Save validates it against the official XSD.

## Parameters

### root

[`VisualizationInfo`](../interfaces/bcf.v3_0.visinfo.VisualizationInfo.md)

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
  root: VisualizationInfo;
  schema: "bcf-3.0/visinfo";
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
root: VisualizationInfo;
```

### schema

```ts
schema: "bcf-3.0/visinfo";
```

## See

https://raw.githubusercontent.com/buildingSMART/BCF-XML/bc48611d0d7a1587f028a2b69677a1aafd5cd0a8/Schemas/visinfo.xsd
