# Function: createXmlFile()

```ts
function createXmlFile(root: ids): {
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
  root: ids;
  schema: "ids-1.0/ids";
};
```

Create a ids-1.0/ids XML document. Save validates it against the official XSD.

## Parameters

### root

[`ids`](../interfaces/ids.v1_0.ids.md)

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
  root: ids;
  schema: "ids-1.0/ids";
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
root: ids;
```

### schema

```ts
schema: "ids-1.0/ids";
```

## See

https://raw.githubusercontent.com/buildingSMART/IDS/4949bfcba2cd324f76b480f6f85e0b25dc7fa98f/Schema/ids.xsd
