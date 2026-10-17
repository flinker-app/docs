# Function: createXmlFile()

```ts
function createXmlFile(root: Version): {
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
  root: Version;
  schema: "bcf-2.1/version";
};
```

Create a bcf-2.1/version XML document. Save validates it against the official XSD.

## Parameters

### root

[`Version`](../interfaces/bcf.v2_1.version.Version.md)

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
  root: Version;
  schema: "bcf-2.1/version";
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
root: Version;
```

### schema

```ts
schema: "bcf-2.1/version";
```

## See

https://raw.githubusercontent.com/buildingSMART/BCF-XML/92fdcf4bfaa8f0576e7562730f341fc7781e2065/Schemas/version.xsd
