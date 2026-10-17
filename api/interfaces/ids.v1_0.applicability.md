# Interface: applicability

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  maxOccurs?: string;
  minOccurs?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### maxOccurs?

```ts
optional maxOccurs?: string;
```

##### minOccurs?

```ts
optional minOccurs?: string;
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
  | entity
  | partOf
  | classification
  | attribute
  | property
  | material)[];
```

***

<a id="name"></a>

### name

```ts
name: "applicability";
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
