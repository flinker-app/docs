# Interface: attribute\_2

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: Omit<{
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "instructions" | "cardinality"> & {
  cardinality?: conditionalCardinality;
  instructions?: string;
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
  | name_2
  | value_2)[];
```

***

<a id="name"></a>

### name

```ts
name: "attribute";
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
