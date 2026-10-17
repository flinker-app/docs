# Function: load()

## Call Signature

```ts
function load<S extends 
  | "bcf-2.1/markup"
  | "bcf-2.1/project"
  | "bcf-2.1/version"
  | "bcf-2.1/visinfo"
  | "bcf-3.0/documents"
  | "bcf-3.0/extensions"
  | "bcf-3.0/markup"
  | "bcf-3.0/project"
  | "bcf-3.0/version"
  | "bcf-3.0/visinfo">(source: string | ArrayBuffer | Uint8Array | Blob, options: Omit<{
  fallbackSpecification?: string;
  limits?: {
     maxEntries?: number;
     maxEntryBytes?: number;
     maxInputBytes?: number;
     maxTotalBytes?: number;
  };
  schema?: string;
  trimXmlDeclaration?: boolean;
  validate?: boolean;
}, "schema"> & {
  schema?:   | "bcf-2.1/markup"
     | "bcf-2.1/project"
     | "bcf-2.1/version"
     | "bcf-2.1/visinfo"
     | "bcf-3.0/documents"
     | "bcf-3.0/extensions"
     | "bcf-3.0/markup"
     | "bcf-3.0/project"
     | "bcf-3.0/version"
     | "bcf-3.0/visinfo";
} & {
  schema: S;
}): Promise<
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Markup;
  schema: "bcf-2.1/markup";
}, {
  schema: S;
}>
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: ProjectExtension;
  schema: "bcf-2.1/project";
}, {
  schema: S;
}>
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Version;
  schema: "bcf-2.1/version";
}, {
  schema: S;
}>
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: VisualizationInfo;
  schema: "bcf-2.1/visinfo";
}, {
  schema: S;
}>
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: DocumentInfo;
  schema: "bcf-3.0/documents";
}, {
  schema: S;
}>
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Extensions;
  schema: "bcf-3.0/extensions";
}, {
  schema: S;
}>
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Markup;
  schema: "bcf-3.0/markup";
}, {
  schema: S;
}>
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: ProjectInfo;
  schema: "bcf-3.0/project";
}, {
  schema: S;
}>
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Version;
  schema: "bcf-3.0/version";
}, {
  schema: S;
}>
  | Extract<{
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: VisualizationInfo;
  schema: "bcf-3.0/visinfo";
}, {
  schema: S;
}>>;
```

Read XML or a BCF archive, validating against the pinned official schemas by default.

### Type Parameters

<a id="loads"></a>

#### S

`S` *extends* 
  \| `"bcf-2.1/markup"`
  \| `"bcf-2.1/project"`
  \| `"bcf-2.1/version"`
  \| `"bcf-2.1/visinfo"`
  \| `"bcf-3.0/documents"`
  \| `"bcf-3.0/extensions"`
  \| `"bcf-3.0/markup"`
  \| `"bcf-3.0/project"`
  \| `"bcf-3.0/version"`
  \| `"bcf-3.0/visinfo"`

### Parameters

#### source

`string` \| `ArrayBuffer` \| `Uint8Array` \| `Blob`

#### options

`Omit`\<\{
  `fallbackSpecification?`: `string`;
  `limits?`: \{
     `maxEntries?`: `number`;
     `maxEntryBytes?`: `number`;
     `maxInputBytes?`: `number`;
     `maxTotalBytes?`: `number`;
  \};
  `schema?`: `string`;
  `trimXmlDeclaration?`: `boolean`;
  `validate?`: `boolean`;
\}, `"schema"`\> & \{
  `schema?`:   \| `"bcf-2.1/markup"`
     \| `"bcf-2.1/project"`
     \| `"bcf-2.1/version"`
     \| `"bcf-2.1/visinfo"`
     \| `"bcf-3.0/documents"`
     \| `"bcf-3.0/extensions"`
     \| `"bcf-3.0/markup"`
     \| `"bcf-3.0/project"`
     \| `"bcf-3.0/version"`
     \| `"bcf-3.0/visinfo"`;
\} & \{
  `schema`: `S`;
\}

### Returns

`Promise`\<
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Markup`](../interfaces/bcf.v2_1.markup.Markup.md);
  `schema`: `"bcf-2.1/markup"`;
\}, \{
  `schema`: `S`;
\}\>
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`ProjectExtension`](../interfaces/bcf.v2_1.project.ProjectExtension.md);
  `schema`: `"bcf-2.1/project"`;
\}, \{
  `schema`: `S`;
\}\>
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Version`](../interfaces/bcf.v2_1.version.Version.md);
  `schema`: `"bcf-2.1/version"`;
\}, \{
  `schema`: `S`;
\}\>
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`VisualizationInfo`](../interfaces/bcf.v2_1.visinfo.VisualizationInfo.md);
  `schema`: `"bcf-2.1/visinfo"`;
\}, \{
  `schema`: `S`;
\}\>
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`DocumentInfo`](../interfaces/bcf.v3_0.documents.DocumentInfo.md);
  `schema`: `"bcf-3.0/documents"`;
\}, \{
  `schema`: `S`;
\}\>
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Extensions`](../interfaces/bcf.v3_0.extensions.Extensions.md);
  `schema`: `"bcf-3.0/extensions"`;
\}, \{
  `schema`: `S`;
\}\>
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Markup`](../interfaces/bcf.v3_0.markup.Markup.md);
  `schema`: `"bcf-3.0/markup"`;
\}, \{
  `schema`: `S`;
\}\>
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`ProjectInfo`](../interfaces/bcf.v3_0.project.ProjectInfo.md);
  `schema`: `"bcf-3.0/project"`;
\}, \{
  `schema`: `S`;
\}\>
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Version`](../interfaces/bcf.v3_0.version.Version.md);
  `schema`: `"bcf-3.0/version"`;
\}, \{
  `schema`: `S`;
\}\>
  \| `Extract`\<\{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`VisualizationInfo`](../interfaces/bcf.v3_0.visinfo.VisualizationInfo.md);
  `schema`: `"bcf-3.0/visinfo"`;
\}, \{
  `schema`: `S`;
\}\>\>

## Call Signature

```ts
function load(source: string | ArrayBuffer | Uint8Array | Blob, options?: Omit<{
  fallbackSpecification?: string;
  limits?: {
     maxEntries?: number;
     maxEntryBytes?: number;
     maxInputBytes?: number;
     maxTotalBytes?: number;
  };
  schema?: string;
  trimXmlDeclaration?: boolean;
  validate?: boolean;
}, "schema"> & {
  schema?:   | "bcf-2.1/markup"
     | "bcf-2.1/project"
     | "bcf-2.1/version"
     | "bcf-2.1/visinfo"
     | "bcf-3.0/documents"
     | "bcf-3.0/extensions"
     | "bcf-3.0/markup"
     | "bcf-3.0/project"
     | "bcf-3.0/version"
     | "bcf-3.0/visinfo";
}): Promise<
  | {
  entries: Record<string, 
     | {
     date?: Date;
     document: {
        after?: (
           | {
           kind: ...;
           value: ...;
         }
           | {
           kind: ...;
           target: ...;
           value: ...;
        })[];
        before?: (
           | {
           kind: ...;
           value: ...;
         }
           | {
           kind: ...;
           target: ...;
           value: ...;
        })[];
        kind: "xml";
        root: {
           attributes: Record<string, ... | ...> & {
            [qualifiedName: `${(...)}:${(...)}`]: ... | ...;
           };
           content: (
              | string
              | {
              kind: ...;
              value: ...;
            }
              | {
              kind: ...;
              target: ...;
              value: ...;
            }
              | {
              attributes: ...;
              content: ...;
              name: ...;
              namespaces?: ...;
              namespaceURI: ...;
              prefix?: ...;
           })[];
           name: string;
           namespaces?: Record<string, string>;
           namespaceURI: string;
           prefix?: string;
        };
        schema: string;
     };
   }
     | {
     bytes: Uint8Array;
     date?: Date;
  }>;
  kind: "archive";
  specification: string;
}
  | 
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Markup;
  schema: "bcf-2.1/markup";
}
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: ProjectExtension;
  schema: "bcf-2.1/project";
}
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Version;
  schema: "bcf-2.1/version";
}
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: VisualizationInfo;
  schema: "bcf-2.1/visinfo";
}
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: DocumentInfo;
  schema: "bcf-3.0/documents";
}
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Extensions;
  schema: "bcf-3.0/extensions";
}
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Markup;
  schema: "bcf-3.0/markup";
}
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: ProjectInfo;
  schema: "bcf-3.0/project";
}
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: Version;
  schema: "bcf-3.0/version";
}
  | {
  after?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  before?: (
     | {
     kind: "comment";
     value: string;
   }
     | {
     kind: "instruction";
     target: string;
     value: string;
  })[];
  kind: "xml";
  root: VisualizationInfo;
  schema: "bcf-3.0/visinfo";
}>;
```

Read XML or a BCF archive, validating against the pinned official schemas by default.

### Parameters

#### source

`string` \| `ArrayBuffer` \| `Uint8Array` \| `Blob`

#### options?

`Omit`\<\{
  `fallbackSpecification?`: `string`;
  `limits?`: \{
     `maxEntries?`: `number`;
     `maxEntryBytes?`: `number`;
     `maxInputBytes?`: `number`;
     `maxTotalBytes?`: `number`;
  \};
  `schema?`: `string`;
  `trimXmlDeclaration?`: `boolean`;
  `validate?`: `boolean`;
\}, `"schema"`\> & \{
  `schema?`:   \| `"bcf-2.1/markup"`
     \| `"bcf-2.1/project"`
     \| `"bcf-2.1/version"`
     \| `"bcf-2.1/visinfo"`
     \| `"bcf-3.0/documents"`
     \| `"bcf-3.0/extensions"`
     \| `"bcf-3.0/markup"`
     \| `"bcf-3.0/project"`
     \| `"bcf-3.0/version"`
     \| `"bcf-3.0/visinfo"`;
\}

### Returns

`Promise`\<
  \| \{
  `entries`: `Record`\<`string`, 
     \| \{
     `date?`: `Date`;
     `document`: \{
        `after?`: (
           \| \{
           `kind`: ...;
           `value`: ...;
         \}
           \| \{
           `kind`: ...;
           `target`: ...;
           `value`: ...;
        \})[];
        `before?`: (
           \| \{
           `kind`: ...;
           `value`: ...;
         \}
           \| \{
           `kind`: ...;
           `target`: ...;
           `value`: ...;
        \})[];
        `kind`: `"xml"`;
        `root`: \{
           `attributes`: `Record`\<`string`, ... \| ...\> & \{
            \[`qualifiedName`: `` `${(...)}:${(...)}` ``\]: ... \| ...;
           \};
           `content`: (
              \| `string`
              \| \{
              `kind`: ...;
              `value`: ...;
            \}
              \| \{
              `kind`: ...;
              `target`: ...;
              `value`: ...;
            \}
              \| \{
              `attributes`: ...;
              `content`: ...;
              `name`: ...;
              `namespaces?`: ...;
              `namespaceURI`: ...;
              `prefix?`: ...;
           \})[];
           `name`: `string`;
           `namespaces?`: `Record`\<`string`, `string`\>;
           `namespaceURI`: `string`;
           `prefix?`: `string`;
        \};
        `schema`: `string`;
     \};
   \}
     \| \{
     `bytes`: `Uint8Array`;
     `date?`: `Date`;
  \}\>;
  `kind`: `"archive"`;
  `specification`: `string`;
\}
  \| 
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Markup`](../interfaces/bcf.v2_1.markup.Markup.md);
  `schema`: `"bcf-2.1/markup"`;
\}
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`ProjectExtension`](../interfaces/bcf.v2_1.project.ProjectExtension.md);
  `schema`: `"bcf-2.1/project"`;
\}
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Version`](../interfaces/bcf.v2_1.version.Version.md);
  `schema`: `"bcf-2.1/version"`;
\}
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`VisualizationInfo`](../interfaces/bcf.v2_1.visinfo.VisualizationInfo.md);
  `schema`: `"bcf-2.1/visinfo"`;
\}
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`DocumentInfo`](../interfaces/bcf.v3_0.documents.DocumentInfo.md);
  `schema`: `"bcf-3.0/documents"`;
\}
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Extensions`](../interfaces/bcf.v3_0.extensions.Extensions.md);
  `schema`: `"bcf-3.0/extensions"`;
\}
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Markup`](../interfaces/bcf.v3_0.markup.Markup.md);
  `schema`: `"bcf-3.0/markup"`;
\}
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`ProjectInfo`](../interfaces/bcf.v3_0.project.ProjectInfo.md);
  `schema`: `"bcf-3.0/project"`;
\}
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`Version`](../interfaces/bcf.v3_0.version.Version.md);
  `schema`: `"bcf-3.0/version"`;
\}
  \| \{
  `after?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `before?`: (
     \| \{
     `kind`: `"comment"`;
     `value`: `string`;
   \}
     \| \{
     `kind`: `"instruction"`;
     `target`: `string`;
     `value`: `string`;
  \})[];
  `kind`: `"xml"`;
  `root`: [`VisualizationInfo`](../interfaces/bcf.v3_0.visinfo.VisualizationInfo.md);
  `schema`: `"bcf-3.0/visinfo"`;
\}\>
