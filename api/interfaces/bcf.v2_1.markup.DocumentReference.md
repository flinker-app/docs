# Interface: DocumentReference

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  Guid?: string;
  isExternal?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### Guid?

```ts
optional Guid?: string;
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
  | ReferencedDocument
  | Description_2)[];
```

***

<a id="name"></a>

### name

```ts
name: "DocumentReference";
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
