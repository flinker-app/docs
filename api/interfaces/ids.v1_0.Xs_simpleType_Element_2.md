# Interface: Xs\_simpleType\_Element\_2

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: Omit<Omit<Omit<Record<string, string | undefined> & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "id"> & {
  id?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "name" | "final"> & {
  final?: string;
  name?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "name" | "final"> & Record<string, string | undefined> & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
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
  | Xs_restriction
  | Xs_annotation
  | Xs_list
  | Xs_union)[];
```

***

<a id="name"></a>

### name

```ts
name: "simpleType";
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
