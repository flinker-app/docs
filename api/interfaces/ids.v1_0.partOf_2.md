# Interface: partOf\_2

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: Omit<{
  relation?: relations;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "instructions" | "cardinality"> & {
  cardinality?: simpleCardinality;
  instructions?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### cardinality?

```ts
optional cardinality?: simpleCardinality;
```

##### instructions?

```ts
optional instructions?: string;
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
  | entity_2)[];
```

***

<a id="name"></a>

### name

```ts
name: "partOf";
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
