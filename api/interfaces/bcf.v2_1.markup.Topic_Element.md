# Interface: Topic\_Element

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  Guid: string;
  TopicStatus?: string;
  TopicType?: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### Guid

```ts
Guid: string;
```

##### TopicStatus?

```ts
optional TopicStatus?: string;
```

##### TopicType?

```ts
optional TopicType?: string;
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
  | ReferenceLink
  | Title
  | Priority
  | Index
  | Labels
  | CreationDate
  | CreationAuthor
  | ModifiedDate
  | ModifiedAuthor
  | DueDate
  | AssignedTo
  | Stage
  | Description
  | BimSnippet_Element
  | DocumentReference
  | RelatedTopic)[];
```

***

<a id="name"></a>

### name

```ts
name: "Topic";
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
