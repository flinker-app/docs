# Interface: Components\_Element\_2

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Index Signature

```ts
[qualifiedName: `${string}:${string}`]: string | undefined
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
  | Component_Element_3)[];
```

***

<a id="name"></a>

### name

```ts
name: "Components";
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
