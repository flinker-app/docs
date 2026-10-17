# Interface: property

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  dataType?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### dataType?

```ts
optional dataType?: string;
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
  | propertySet
  | baseName
  | value_3)[];
```

***

<a id="name"></a>

### name

```ts
name: "property";
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
