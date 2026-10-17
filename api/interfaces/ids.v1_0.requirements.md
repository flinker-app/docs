# Interface: requirements

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: Omit<{
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "description"> & {
  description?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### description?

```ts
optional description?: string;
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
  | entity_3
  | partOf_2
  | classification_2
  | attribute_2
  | property_2
  | material_2)[];
```

***

<a id="name"></a>

### name

```ts
name: "requirements";
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
