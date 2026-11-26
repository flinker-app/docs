# Type Alias: ViewerOptions

```ts
type ViewerOptions = {
  ui?:   | boolean
     | {
     activityBar?: boolean;
     statusBar?: boolean;
     viewBar?: boolean;
   };
};
```

## Properties

<a id="ui"></a>

### ui?

```ts
optional ui?: 
  | boolean
  | {
  activityBar?: boolean;
  statusBar?: boolean;
  viewBar?: boolean;
};
```

Show or hide all controls, or configure each bar separately. Defaults to true.

#### Union Members

`boolean`

***

##### Type Literal

```ts
{
  activityBar?: boolean;
  statusBar?: boolean;
  viewBar?: boolean;
}
```

##### activityBar?

```ts
optional activityBar?: boolean;
```

The activity bar, its panels, and selection tools. Defaults to true.

##### statusBar?

```ts
optional statusBar?: boolean;
```

Loading progress, messages, and active-mode notices. Defaults to true.

##### viewBar?

```ts
optional viewBar?: boolean;
```

The camera, rendering, and map controls. Defaults to true.
