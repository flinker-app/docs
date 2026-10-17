# Interface: Component\_Element\_3

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  IfcGuid?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### IfcGuid?

```ts
optional IfcGuid?: string;
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
  | OriginatingSystem
  | AuthoringToolId)[];
```

***

<a id="name"></a>

### name

```ts
name: "Component";
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
