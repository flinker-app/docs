# Interface: property\_2

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: Omit<{
  dataType?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "uri" | "instructions" | "cardinality"> & {
  cardinality?: conditionalCardinality;
  instructions?: string;
  uri?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### cardinality?

```ts
optional cardinality?: conditionalCardinality;
```

##### instructions?

```ts
optional instructions?: string;
```

##### uri?

```ts
optional uri?: string;
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
  | propertySet
  | baseName
  | value_3)[];
```

***

<a id="name"></a>

### name

```ts
name: "property";
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
namespaceURI: "http://standards.buildingsmart.org/IDS";
```

***

<a id="prefix"></a>

### prefix?

```ts
optional prefix?: string;
```
