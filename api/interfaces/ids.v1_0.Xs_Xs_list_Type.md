# Interface: Xs\_Xs\_list\_Type\<$Name *extends* `string` = `string`, $Namespace *extends* `string` = `string`\>

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
attributes: Omit<Omit<Record<string, string | undefined> & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "id"> & {
  id?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
}, "itemType"> & {
  itemType?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### itemType?

```ts
optional itemType?: string;
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
  | Xs_annotation
  | Xs_simpleType_Element_2)[];
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
