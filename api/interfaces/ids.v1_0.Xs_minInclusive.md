# Interface: Xs\_minInclusive

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: Omit<Omit<Record<string, string | undefined> & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "id"> & {
  id?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "value" | "fixed"> & {
  fixed?: string;
  value: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### fixed?

```ts
optional fixed?: string;
```

##### value

```ts
value: string;
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
  | Xs_annotation)[];
```

***

<a id="name"></a>

### name

```ts
name: "minInclusive";
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
namespaceURI: "http://www.w3.org/2001/XMLSchema";
```

***

<a id="prefix"></a>

### prefix?

```ts
optional prefix?: string;
```
