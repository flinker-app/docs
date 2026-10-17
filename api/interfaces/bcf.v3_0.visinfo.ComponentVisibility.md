# Interface: ComponentVisibility\<$Name *extends* `string` = `string`, $Namespace *extends* `string` = `string`\>

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
attributes: {
  DefaultVisibility?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### DefaultVisibility?

```ts
optional DefaultVisibility?: string;
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
  | ViewSetupHints_Element
  | Exceptions)[];
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
