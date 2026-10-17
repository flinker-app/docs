# Interface: Version

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  VersionId?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### VersionId?

```ts
optional VersionId?: string;
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
  | DetailedVersion)[];
```

***

<a id="name"></a>

### name

```ts
name: "Version";
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
