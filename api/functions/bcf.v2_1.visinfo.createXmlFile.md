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
  schema: "bcf-2.1/visinfo";
};
```

Create a bcf-2.1/visinfo XML document. Save validates it against the official XSD.

## Parameters

### root

[`VisualizationInfo`](../interfaces/bcf.v2_1.visinfo.VisualizationInfo.md)

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
  schema: "bcf-2.1/visinfo";
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
schema: "bcf-2.1/visinfo";
```

## See

https://raw.githubusercontent.com/buildingSMART/BCF-XML/92fdcf4bfaa8f0576e7562730f341fc7781e2065/Schemas/visinfo.xsd
