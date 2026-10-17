# Interface: specification

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  description?: string;
  identifier?: string;
  ifcVersion: string;
  instructions?: string;
  name: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### description?

```ts
optional description?: string;
```

##### identifier?

```ts
optional identifier?: string;
```

##### ifcVersion

```ts
ifcVersion: string;
```

##### instructions?

```ts
optional instructions?: string;
```

##### name

```ts
name: string;
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
  | applicability
  | requirements)[];
```

***

<a id="name"></a>

### name

```ts
name: "specification";
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
