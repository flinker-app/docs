# Interface: BimSnippet\_Element

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  isExternal?: string;
  SnippetType: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### isExternal?

```ts
optional isExternal?: string;
```

##### SnippetType

```ts
SnippetType: string;
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
  | Reference_2
  | ReferenceSchema)[];
```

***

<a id="name"></a>

### name

```ts
name: "BimSnippet";
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
