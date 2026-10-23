# Class: Viewer

Embeddable viewer for models, drawings, and point clouds.
Mount it by passing a CSS selector or HTMLElement as the target.

## Example

```ts
const viewer = new Viewer("#ifc-viewer");
await viewer.ready;
await viewer.add("model.ifc", bytes);
```

## Constructors

<a id="constructor"></a>

### Constructor

```ts
new Viewer(target?: string | HTMLElement): Viewer;
```

#### Parameters

##### target?

`string` \| `HTMLElement` = `DEFAULT_VIEWER_SELECTOR`

CSS selector string or HTMLElement where the viewer will be mounted.
  Defaults to `"#ifc-viewer"`.

#### Returns

`Viewer`

## Properties

<a id="ready"></a>

### ready

```ts
readonly ready: Promise<void>;
```

Resolves once the viewer is fully mounted and ready to accept models.
Always `await viewer.ready` before calling other methods.

***

<a id="supportedfiletypes"></a>

### supportedFileTypes

```ts
readonly static supportedFileTypes: readonly (
  | ".ifc"
  | ".ifczip"
  | ".bcf"
  | ".bcfzip"
  | ".ids"
  | ".xml"
  | ".pdf"
  | ".dxf"
  | ".dwg"
  | ".las"
  | ".laz"
  | ".ply"
  | ".xyz")[];
```

Supported file extensions for host upload controls.

## Accessors

<a id="ifcapi"></a>

### IfcAPI

#### Get Signature

```ts
get IfcAPI(): Promise<IfcAPI>;
```

The complete, unmodified native web-ifc instance, loaded on first access.
`await viewer.IfcAPI` returns the same instance on repeated access. Its
JavaScript and WASM assets are supplied with this SDK release; ordinary
viewing does not request them. Call `await api.Init()` to initialize WASM.
Native methods run on the main thread. Open models explicitly with
`api.OpenModel(bytes)` and use the returned numeric model IDs and native vectors.
This instance owns its models independently of the viewer's workers and
[add](#add); native edits do not automatically update rendered models.
Pass `api.SaveModel(modelID)` to [add](#add) to display an edited model.
Release native objects, close models and call `api.Dispose()` when finished.
[clear](#clear) affects the viewer and does not dispose this developer-owned API.
A failed asset load can be retried by accessing the property again.
See the [complete web-ifc API reference](https://thatopen.github.io/engine_web-ifc/docs/classes/web-ifc.IfcAPI.html).

##### Example

```js
const api = await viewer.IfcAPI;
await api.Init();
const modelID = api.OpenModel(bytes);
try {
  console.log(api.GetModelSchema(modelID));
} finally {
  api.CloseModel(modelID);
  api.Dispose();
}
```

##### Returns

`Promise`\<[`IfcAPI`](https://thatopen.github.io/engine_web-ifc/docs/classes/web-ifc.IfcAPI.html)\>

## Methods

<a id="add"></a>

### add()

```ts
add(name: string | null | undefined, source: Uint8Array | Blob): Promise<
  | void
  | {
  application: "failed" | "partial" | "pending" | "not-applied" | "applied";
  coloredComponents?: number;
  filename?: string;
  issues: {
     code: string;
     file?: string;
     message: string;
     severity: "error" | "warning";
     viewpointGuid?: string;
  }[];
  loaded: boolean;
  operation: "import" | "viewpoint";
  selectedComponents?: number;
  summary: string;
  viewpointGuid?: string;
  visibility?: "failed" | "applied" | "preserved";
}>;
```

Load any supported viewer file using the shared format registry.
See `Viewer.supportedFileTypes`.

#### Parameters

##### name

`string` \| `null` \| `undefined`

Original filename and identifier for [get](#get). Missing or incorrect IFC filenames are repaired by inspecting the file header.

##### source

`Uint8Array` \| `Blob`

Raw file contents as a `Uint8Array` or `Blob`.

#### Returns

`Promise`\<
  \| `void`
  \| \{
  `application`: `"failed"` \| `"partial"` \| `"pending"` \| `"not-applied"` \| `"applied"`;
  `coloredComponents?`: `number`;
  `filename?`: `string`;
  `issues`: \{
     `code`: `string`;
     `file?`: `string`;
     `message`: `string`;
     `severity`: `"error"` \| `"warning"`;
     `viewpointGuid?`: `string`;
  \}[];
  `loaded`: `boolean`;
  `operation`: `"import"` \| `"viewpoint"`;
  `selectedComponents?`: `number`;
  `summary`: `string`;
  `viewpointGuid?`: `string`;
  `visibility?`: `"failed"` \| `"applied"` \| `"preserved"`;
\}\>

A BCF import report for BCF archives; undefined for other file types.

#### Throws

If the file extension is not supported or the import fails.

***

<a id="applylicense"></a>

### applyLicense()

```ts
applyLicense(context: {
  app?: string;
  billingUrl?: string;
  buyUrl?: string;
  client?: string;
  email?: string;
  host?: string;
  key?: string;
  onBillingClick?: (url?: string) => void;
  onBuyClick?: (url?: string) => void;
  onSignInClick?: (url?: string) => void | Promise<void>;
  onSignOutClick?: (url?: string) => void | Promise<void>;
  plan?: string;
  signInUrl?: string;
  signOutUrl?: string;
  version?: string;
}): Promise<boolean>;
```

Initialize licensing and reveal the account button, using the host's user context.

#### Parameters

##### context

###### app?

`string`

###### billingUrl?

`string`

###### buyUrl?

`string`

###### client?

`string`

###### email?

`string`

###### host?

`string`

###### key?

`string`

###### onBillingClick?

(`url?`: `string`) => `void`

###### onBuyClick?

(`url?`: `string`) => `void`

###### onSignInClick?

(`url?`: `string`) => `void` \| `Promise`\<`void`\>

###### onSignOutClick?

(`url?`: `string`) => `void` \| `Promise`\<`void`\>

###### plan?

`string`

###### signInUrl?

`string`

###### signOutUrl?

`string`

###### version?

`string`

#### Returns

`Promise`\<`boolean`\>

***

<a id="clear"></a>

### clear()

```ts
clear(): Promise<void>;
```

Unload all models and BCF data and reset the viewer to a clean state.
Disposes geometry, clipping planes, measurements, filters, and event listeners.

#### Returns

`Promise`\<`void`\>

***

<a id="createtopic"></a>

### createTopic()

#### Call Signature

```ts
createTopic(topic: 
  | Topic_Element
  | undefined, options: {
  includeTopics?: boolean;
  signal?: AbortSignal;
  snapshot?: boolean;
} & {
  output: "bytes";
}): Promise<Uint8Array>;
```

Create a BCF-XML 3.0 archive containing a topic, the current viewpoint and its images.
Captures camera, selection, visibility, colors, clipping and markup through the shared view state.
Optional topic metadata uses the generated BCF XML element. Defaults to a new "View" topic
with the configured BCF author. Its Viewpoints section is supplied by the capture.
Extension definitions follow the supplied metadata. External snippet and document URLs
are preserved; internal snippet/document references are rejected because no attachment files are supplied.
Includes a PNG snapshot by default; pass `{ snapshot: false }` for a smaller archive.
Validates against the official schemas and checks referenced files before returning.
Serialize with `bcf.save(archive)`. Import with [add](#add) to edit or select the topic in the viewer.
Pass `{ output: 'bytes' }` to return a validated ZIP directly without a second serialization.
Pass `{ includeTopics: true }` to include all loaded BCF topics and their attachments.
Large component sets are transferred in batches; XML validation and ZIP creation run in a worker.
Creating the archive leaves the loaded topic list unchanged.

##### Parameters

###### topic

  \| [`Topic_Element`](../interfaces/bcf.v3_0.markup.Topic_Element.md)
  \| `undefined`

###### options

\{
  `includeTopics?`: `boolean`;
  `signal?`: `AbortSignal`;
  `snapshot?`: `boolean`;
\} & \{
  `output`: `"bytes"`;
\}

##### Returns

`Promise`\<`Uint8Array`\>

#### Call Signature

```ts
createTopic(topic?: Topic_Element, options?: {
  includeTopics?: boolean;
  signal?: AbortSignal;
  snapshot?: boolean;
} & {
  output?: "archive";
}): Promise<{
  entries: Record<string, 
     | {
     date?: Date;
     document: {
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
        root: {
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
              attributes: ... & ...;
              content: (string | XmlComment | XmlInstruction | GenericElement)[];
              name: string;
              namespaces?: ... | ...;
              namespaceURI: string;
              prefix?: ... | ...;
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
}>;
```

Create a BCF-XML 3.0 archive containing a topic, the current viewpoint and its images.
Captures camera, selection, visibility, colors, clipping and markup through the shared view state.
Optional topic metadata uses the generated BCF XML element. Defaults to a new "View" topic
with the configured BCF author. Its Viewpoints section is supplied by the capture.
Extension definitions follow the supplied metadata. External snippet and document URLs
are preserved; internal snippet/document references are rejected because no attachment files are supplied.
Includes a PNG snapshot by default; pass `{ snapshot: false }` for a smaller archive.
Validates against the official schemas and checks referenced files before returning.
Serialize with `bcf.save(archive)`. Import with [add](#add) to edit or select the topic in the viewer.
Pass `{ output: 'bytes' }` to return a validated ZIP directly without a second serialization.
Pass `{ includeTopics: true }` to include all loaded BCF topics and their attachments.
Large component sets are transferred in batches; XML validation and ZIP creation run in a worker.
Creating the archive leaves the loaded topic list unchanged.

##### Parameters

###### topic?

[`Topic_Element`](../interfaces/bcf.v3_0.markup.Topic_Element.md)

###### options?

\{
  `includeTopics?`: `boolean`;
  `signal?`: `AbortSignal`;
  `snapshot?`: `boolean`;
\} & \{
  `output?`: `"archive"`;
\}

##### Returns

`Promise`\<\{
  `entries`: `Record`\<`string`, 
     \| \{
     `date?`: `Date`;
     `document`: \{
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
        `root`: \{
           `attributes`: `Record`\<`string`, `string` \| `undefined`\> & \{
            \[`qualifiedName`: `` `${string}:${string}` ``\]: `string` \| `undefined`;
           \};
           `content`: (
              \| `string`
              \| \{
              `kind`: `"comment"`;
              `value`: `string`;
            \}
              \| \{
              `kind`: `"instruction"`;
              `target`: `string`;
              `value`: `string`;
            \}
              \| \{
              `attributes`: ... & ...;
              `content`: (string \| XmlComment \| XmlInstruction \| GenericElement)\[\];
              `name`: `string`;
              `namespaces?`: ... \| ...;
              `namespaceURI`: `string`;
              `prefix?`: ... \| ...;
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
\}\>

***

<a id="enablecopilot"></a>

### enableCopilot()

```ts
enableCopilot(): Promise<void>;
```

Initialize Copilot and reveal its toolbar button. Repeated calls are safe.
Files opened after enabling are retained for Copilot; [clear](#clear) preserves this opt-in.

#### Returns

`Promise`\<`void`\>

***

<a id="get"></a>

### get()

```ts
get(name: string): Promise<Uint8Array>;
```

Export a loaded BCF file using the same filename passed to [add](#add).
Serializes its current topics, comments, viewpoints and attachments on demand.
The result is an independent byte array suitable for download, storage or [add](#add).
Filenames are matched without case or surrounding whitespace, like the file registry.

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`Uint8Array`\>

#### Throws

If the file is missing, still loading, failed, or is not BCF data.

***

<a id="oncopilotfilesgenerated"></a>

### onCopilotFilesGenerated()

```ts
onCopilotFilesGenerated(listener: (files: ({
  mimeType: string;
  name: string;
  size: number;
  url: string;
} & {
  bytes: Uint8Array;
})[]) => void): () => void;
```

Listen for files produced by the Copilot panel, including their metadata and bytes.
Call after `await viewer.ready`. Returns a function that removes the listener.

#### Parameters

##### listener

(`files`: (\{
  `mimeType`: `string`;
  `name`: `string`;
  `size`: `number`;
  `url`: `string`;
\} & \{
  `bytes`: `Uint8Array`;
\})[]) => `void`

#### Returns

() => `void`

***

<a id="onviewchange"></a>

### onViewChange()

```ts
onViewChange(listener: (view: {
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
}) => void): () => void;
```

Receive the current view and subsequent changes as a generated BCF 3.0
VisualizationInfo document, serializable with `bcf.save(view)`.
Includes camera, selection, visibility, coloring, clipping and displayed BCF markup.
Call after `await viewer.ready`. Delivery is asynchronous, after camera motion
and damping settle or a selection/appearance/clipping operation commits.
Related operations in one task are coalesced. Each document is captured fresh;
there is no BCF-state cache or periodic capture loop. Observation is active only
while subscribed, and detaches after the last listener unsubscribes.
Reuses selection, filter and appearance state without scanning rendered components.
Bitmap image bytes and screenshots are separate from the view document.
Returns a function that removes the listener. Subscriptions survive `clear()`.

#### Parameters

##### listener

(`view`: \{
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
\}) => `void`

#### Returns

() => `void`

***

<a id="selecttopic"></a>

### selectTopic()

```ts
selectTopic(id: string): Promise<{
  application: "failed" | "partial" | "pending" | "not-applied" | "applied";
  coloredComponents?: number;
  filename?: string;
  issues: {
     code: string;
     file?: string;
     message: string;
     severity: "error" | "warning";
     viewpointGuid?: string;
  }[];
  loaded: boolean;
  operation: "import" | "viewpoint";
  selectedComponents?: number;
  summary: string;
  viewpointGuid?: string;
  visibility?: "failed" | "applied" | "preserved";
}>;
```

Select a loaded BCF topic and display its default viewpoint.

#### Parameters

##### id

`string`

GUID of the loaded BCF topic whose default viewpoint is displayed.

#### Returns

`Promise`\<\{
  `application`: `"failed"` \| `"partial"` \| `"pending"` \| `"not-applied"` \| `"applied"`;
  `coloredComponents?`: `number`;
  `filename?`: `string`;
  `issues`: \{
     `code`: `string`;
     `file?`: `string`;
     `message`: `string`;
     `severity`: `"error"` \| `"warning"`;
     `viewpointGuid?`: `string`;
  \}[];
  `loaded`: `boolean`;
  `operation`: `"import"` \| `"viewpoint"`;
  `selectedComponents?`: `number`;
  `summary`: `string`;
  `viewpointGuid?`: `string`;
  `visibility?`: `"failed"` \| `"applied"` \| `"preserved"`;
\}\>

A BCF report with application state, issues and a summary.

#### Throws

If the topic does not exist or selection fails.

***

<a id="setexportexcelhandler"></a>

### setExportExcelHandler()

```ts
setExportExcelHandler(handler: ViewerSaveHandler | null): Promise<void>;
```

Override the host Excel export action for selection properties and measurements.
The handler receives { name, data }, with the XLSX bytes already generated,
using the same contract as [setSaveTopicsHandler](#setsavetopicshandler).
Return the save promise; the button remains disabled until it settles.
Pass null to remove the override and restore the app integration hint.
Registration survives [clear](#clear).

#### Parameters

##### handler

[`ViewerSaveHandler`](../types/ViewerSaveHandler.md) \| `null`

#### Returns

`Promise`\<`void`\>

***

<a id="setmessage"></a>

### setMessage()

```ts
setMessage(textOrNull: string | null, options?: {
  dismissible?: boolean;
  link?: {
     href: string;
     label: string;
  };
  progress?: number;
  type?: "info" | "loading" | "error" | "warning" | "success";
}): Promise<void>;
```

Set a custom status message, or pass `null` to clear it.
Defaults to an informational message. Clearing preserves import progress and license notices.

#### Parameters

##### textOrNull

`string` \| `null`

##### options?

###### dismissible?

`boolean`

###### link?

\{
  `href`: `string`;
  `label`: `string`;
\}

###### link.href

`string`

###### link.label

`string`

###### progress?

`number`

Progress from 0 to 100. Omit for indeterminate loading.

###### type?

`"info"` \| `"loading"` \| `"error"` \| `"warning"` \| `"success"`

#### Returns

`Promise`\<`void`\>

***

<a id="setsavetopicshandler"></a>

### setSaveTopicsHandler()

```ts
setSaveTopicsHandler(handler: ViewerSaveHandler | null): Promise<void>;
```

Override the Save topics button, or pass null to restore the local save dialog.
The handler receives { name, data }, with the current BCF bytes already exported.
Return the save promise; the button remains disabled until it settles.
Use setMessage() for progress, success and hiding host messages. Unhandled failures
appear as host error messages. Custom saves do not add native save status messages.
Registration survives clear(); setting null does not show or hide messages.

#### Parameters

##### handler

[`ViewerSaveHandler`](../types/ViewerSaveHandler.md) \| `null`

#### Returns

`Promise`\<`void`\>

***

<a id="togglemap"></a>

### toggleMap()

```ts
toggleMap(enabled?: boolean): Promise<boolean>;
```

Toggle the selected map, or explicitly show or hide it.
Preserves the map style and camera and synchronizes the viewer controls.

#### Parameters

##### enabled?

`boolean`

#### Returns

`Promise`\<`boolean`\>

Whether the map is enabled after the operation completes.

#### Throws

When enabling without a usable geographic location, or loading fails.
