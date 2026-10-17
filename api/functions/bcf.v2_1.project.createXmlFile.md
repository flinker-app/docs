# Function: createXmlFile()

```ts
function createXmlFile(root: ProjectExtension): {
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
  root: ProjectExtension;
  schema: "bcf-2.1/project";
};
```

Create a bcf-2.1/project XML document. Save validates it against the official XSD.

## Parameters

### root

[`ProjectExtension`](../interfaces/bcf.v2_1.project.ProjectExtension.md)

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
  root: ProjectExtension;
  schema: "bcf-2.1/project";
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
root: ProjectExtension;
```

### schema

```ts
schema: "bcf-2.1/project";
```

## See

https://raw.githubusercontent.com/buildingSMART/BCF-XML/92fdcf4bfaa8f0576e7562730f341fc7781e2065/Schemas/project.xsd
