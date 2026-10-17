# Interface: Comment\_Element

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
  | Date_2
  | Author
  | Comment_Element_2
  | Viewpoint
  | ModifiedDate_2
  | ModifiedAuthor_2)[];
```

***

<a id="name"></a>

### name

```ts
name: "Comment";
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
