# Interface: PerspectiveCamera\_Element

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Index Signature

```ts
[qualifiedName: `${string}:${string}`]: string | undefined
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
  | CameraViewPoint_2
  | CameraDirection_2
  | CameraUpVector_2
  | FieldOfView)[];
```

***

<a id="name"></a>

### name

```ts
name: "PerspectiveCamera";
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
