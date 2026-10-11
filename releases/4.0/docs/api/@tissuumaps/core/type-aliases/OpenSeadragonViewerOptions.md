# Type Alias: OpenSeadragonViewerOptions

> **OpenSeadragonViewerOptions** = `Omit`\<`OpenSeadragon.Options`, `"element"` \| `"compositeOperation"`\> & `object`

Defined in: [types/openseadragon.ts:50](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/openseadragon.ts#L50)

OpenSeadragon viewer options, without options requiring a DOM element reference

Viewer options may originate from a serialized project, which cannot carry DOM
element references. Options taking an element are therefore either narrowed to
an element ID or disallowed. In addition, `element` is omitted, as the viewer
sets it to its own container element (which takes precedence over
OpenSeadragon's `id` option), and `compositeOperation` is omitted, as viewer
options are applied to every tiled image in the world, which would overwrite
the composite operations that the renderers set per tiled image.

## Type Declaration

### fullPageButton?

> `optional` **fullPageButton?**: `string`

Element ID of the full-page toggle button

### homeButton?

> `optional` **homeButton?**: `string`

Element ID of the home (reset zoom) button

### navigatorElement?

> `optional` **navigatorElement?**: `never`

Unsupported, use `navigatorId` instead

### nextButton?

> `optional` **nextButton?**: `string`

Element ID of the next-page button

### previousButton?

> `optional` **previousButton?**: `string`

Element ID of the previous-page button

### referenceStripElement?

> `optional` **referenceStripElement?**: `never`

Unsupported

### rotateLeftButton?

> `optional` **rotateLeftButton?**: `string`

Element ID of the rotate-left button

### rotateRightButton?

> `optional` **rotateRightButton?**: `string`

Element ID of the rotate-right button

### toolbar?

> `optional` **toolbar?**: `string`

Element ID of the toolbar container

### zoomInButton?

> `optional` **zoomInButton?**: `string`

Element ID of the zoom-in button

### zoomOutButton?

> `optional` **zoomOutButton?**: `string`

Element ID of the zoom-out button
