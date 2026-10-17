# Interface: File\_Type\<$Name *extends* `string` = `string`, $Namespace *extends* `string` = `string`\>

## Type Parameters

<a id="name"></a>

### $Name

`$Name` *extends* `string` = `string`

<a id="namespace"></a>

### $Namespace

`$Namespace` *extends* `string` = `string`

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

<a id="name-1"></a>

### name

```ts
name: $Name;
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
namespaceURI: $Namespace;
```

***

<a id="prefix"></a>

### prefix?

```ts
optional prefix?: string;
```
