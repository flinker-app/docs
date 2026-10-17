# Interface: ViewSetupHints\_Element

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  OpeningsVisible?: string;
  SpaceBoundariesVisible?: string;
  SpacesVisible?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### OpeningsVisible?

```ts
optional OpeningsVisible?: string;
```

##### SpaceBoundariesVisible?

```ts
optional SpaceBoundariesVisible?: string;
```

##### SpacesVisible?

```ts
optional SpacesVisible?: string;
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
})[];
```

***

<a id="name"></a>

### name

```ts
name: "ViewSetupHints";
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
