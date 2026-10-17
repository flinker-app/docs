# Interface: entity\_3

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: Omit<{
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "instructions"> & {
  instructions?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### instructions?

```ts
optional instructions?: string;
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
  | name
  | predefinedType)[];
```

***

<a id="name"></a>

### name

```ts
name: "entity";
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
