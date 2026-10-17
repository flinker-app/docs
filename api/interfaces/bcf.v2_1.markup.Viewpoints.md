# Interface: Viewpoints

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  Guid: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### Guid

```ts
Guid: string;
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
  | Viewpoint_2
  | Snapshot
  | Index_2)[];
```

***

<a id="name"></a>

### name

```ts
name: "Viewpoints";
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
