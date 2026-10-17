# Function: createXmlFile()

```ts
function createXmlFile(root: ProjectInfo): {
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
  root: ProjectInfo;
  schema: "bcf-3.0/project";
};
```

Create a bcf-3.0/project XML document. Save validates it against the official XSD.

## Parameters

### root

[`ProjectInfo`](../interfaces/bcf.v3_0.project.ProjectInfo.md)

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
  root: ProjectInfo;
  schema: "bcf-3.0/project";
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
root: ProjectInfo;
```

### schema

```ts
schema: "bcf-3.0/project";
```

## See

https://raw.githubusercontent.com/buildingSMART/BCF-XML/bc48611d0d7a1587f028a2b69677a1aafd5cd0a8/Schemas/project.xsd
