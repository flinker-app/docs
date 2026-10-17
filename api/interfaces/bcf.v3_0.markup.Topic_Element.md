# Interface: Topic\_Element

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  Guid: string;
  ServerAssignedId?: string;
  TopicStatus: string;
  TopicType: string;
} & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### Guid

```ts
Guid: string;
```

##### ServerAssignedId?

```ts
optional ServerAssignedId?: string;
```

##### TopicStatus

```ts
TopicStatus: string;
```

##### TopicType

```ts
TopicType: string;
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
  | ReferenceLinks
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
  | DocumentReferences
  | RelatedTopics
  | Comments
  | Viewpoints)[];
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
