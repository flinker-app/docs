# Interface: Markup

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
  | Header_Element
  | Topic_Element
  | Comment_Element
  | Viewpoints)[];
```

***

<a id="name"></a>

### name

```ts
name: "Markup";
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
