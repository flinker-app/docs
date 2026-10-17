# Interface: File

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  IfcProject?: string;
  IfcSpatialStructureElement?: string;
  isExternal?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### IfcProject?

```ts
optional IfcProject?: string;
```

##### IfcSpatialStructureElement?

```ts
optional IfcSpatialStructureElement?: string;
```

##### isExternal?

```ts
optional isExternal?: string;
```

***

<a id="content"></a>

### content

```ts
content: (
  | string
  | {
  kind: "comment";
  value: string;
}
  | {
  kind: "instruction";
  target: string;
  value: string;
}
  | Filename
  | Date
  | Reference)[];
```

***

<a id="name"></a>

### name

```ts
name: "File";
```

***

<a id="namespaces"></a>

### namespaces?

```ts
optional namespaces?: Record<string, string>;
```

***

<a id="namespaceuri"></a>

### namespaceURI

```ts
namespaceURI: "";
```

***

<a id="prefix"></a>

### prefix?

```ts
optional prefix?: string;
```
