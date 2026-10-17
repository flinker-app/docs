# Interface: Xs\_restriction

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
}, "base"> & {
  base?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### base?

```ts
optional base?: string;
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
  | Xs_annotation
  | Xs_simpleType_Element
  | Xs_minExclusive
  | Xs_minInclusive
  | Xs_maxExclusive
  | Xs_maxInclusive
  | Xs_totalDigits
  | Xs_fractionDigits
  | Xs_length
  | Xs_minLength
  | Xs_maxLength
  | Xs_enumeration
  | Xs_whiteSpace
  | Xs_pattern)[];
```

***

<a id="name"></a>

### name

```ts
name: "restriction";
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
