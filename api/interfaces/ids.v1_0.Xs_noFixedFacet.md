# Interface: Xs\_noFixedFacet\<$Name *extends* `string` = `string`, $Namespace *extends* `string` = `string`\>

## Type Parameters

<a id="name"></a>

### $Name

`$Name` *extends* `string` = `string`

<a id="namespace"></a>

### $Namespace

`$Namespace` *extends* `string` = `string`

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: Omit<Omit<Omit<Record<string, string | undefined> & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "id"> & {
  id?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "value" | "fixed"> & {
  fixed?: string;
  value: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "fixed"> & Record<string, string | undefined> & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
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
  | Xs_annotation)[];
```

***

<a id="name-1"></a>

### name

```ts
name: $Name;
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
namespaceURI: $Namespace;
```

***

<a id="prefix"></a>

### prefix?

```ts
optional prefix?: string;
```
