# Interface: Xs\_documentation

## Properties

<a id="attributes"></a>

### attributes

```ts
attributes: {
  source?: string;
  xml:lang?: string;
} & Record<string, string | undefined> & {
[qualifiedName: `${string}:${string}`]: string | undefined;
};
```

#### Type Declaration

##### source?

```ts
optional source?: string;
```

##### xml:lang?

```ts
optional xml:lang?: string;
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
  | {
  attributes: Record<string, string | undefined> & {
   [qualifiedName: `${string}:${string}`]: string | undefined;
  };
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
     | {
     attributes: Record<string, string | undefined> & {
      [qualifiedName: `${string}:${string}`]: string | undefined;
     };
     content: (string | XmlComment | XmlInstruction | GenericElement)[];
     name: string;
     namespaces?: Record<string, string>;
     namespaceURI: string;
     prefix?: string;
  })[];
  name: string;
  namespaces?: Record<string, string>;
  namespaceURI: string;
  prefix?: string;
})[];
```

***

<a id="name"></a>

### name

```ts
name: "documentation";
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
namespaceURI: "http://www.w3.org/2001/XMLSchema";
```

***

<a id="prefix"></a>

### prefix?

```ts
optional prefix?: string;
```
