# Class: OpenSeadragonContext

Defined in: [openseadragon/OpenSeadragonContext.ts:82](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L82)

A wrapper around an OpenSeadragon viewer

In addition to creating and destroying the viewer, this class manages viewer
options (including temporary overrides while the viewer is animating) and
mutations of the viewer's world.

Additions are split in two: tile sources are opened concurrently, but the
world itself is mutated one operation at a time. World indices are shared
mutable state that every addition and removal invalidates, and OpenSeadragon
applies the `index` option only once an addition is committed - a microtask or
more after it was requested - so an index is valid only while nothing else
touches the world in between. Removals therefore go through the same queue as
additions, rather than being applied right away. Reordering the world
afterwards is not an alternative: the navigator mirrors index changes
positionally and on a timer, and corrupts its own world if it has not caught
up yet.

Queued world mutations are ordered by request, so a caller that removes tiled
images before requesting additions still resolves its indices against the
world as it is once those removals have been applied.

Tiled images can also be recolored: a tiled image whose pixels carry values
rather than colors is drawn by mapping each value to an RGBA color (see
[updateTiledImageDataTransfer](#updatetiledimagedatatransfer)). As OpenSeadragon has no notion of a
per-image color mapping, it is applied to the tiles themselves, in a
`tile-invalidated` handler installed on the viewer. Data transfers are kept
per tile source, rather than per tiled image, which also covers the
navigator: it mirrors the world with tiled images of its own, but shares
their tile sources, and OpenSeadragon raises the invalidation events of its
tiles on this viewer. Its tiles are cached separately, though, so the
navigator's mirror of a tiled image is invalidated alongside the original
whenever the data transfer changes.

The context also owns the world background: an opaque single-tile image at
world index 0 that spans the bounds registered by every source via
[setContentBounds](#setcontentbounds) - the content of each renderer, and content rendered
outside OpenSeadragon, such as points and shapes. It thereby fits the world,
and with it the viewport, to all content, and it makes the drawer's canvas
opaque wherever content is drawn, which additive compositing relies on (see
`OpenSeadragonRendererBase.usesAdditiveBlending`). Its color is given on
construction and is expected to match the background behind the viewer,
which shows outside of it. Renderers insert their anchors after it, i.e. at
world index 1 and up. See \_resizeBackground for how it is resized
without ever uncovering the canvas.

## Constructors

### Constructor

> **new OpenSeadragonContext**(`viewerElement`, `backgroundColor`, `viewerOptions?`): `OpenSeadragonContext`

Defined in: [openseadragon/OpenSeadragonContext.ts:139](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L139)

Creates a new OpenSeadragonContext instance and initializes the OpenSeadragon viewer

#### Parameters

##### viewerElement

`HTMLElement`

DOM element in which the OpenSeadragon viewer is created

##### backgroundColor

[`Color`](../../core/type-aliases/Color.md)

Color of the world background (see the class
documentation), which has to match the background of `viewerElement`

##### viewerOptions?

[`OpenSeadragonViewerOptions`](../../core/type-aliases/OpenSeadragonViewerOptions.md)

Options for configuring the OpenSeadragon viewer (optional)

#### Returns

`OpenSeadragonContext`

## Properties

### viewer

> `readonly` **viewer**: `Viewer`

Defined in: [openseadragon/OpenSeadragonContext.ts:104](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L104)

## Methods

### addTiledImage()

> **addTiledImage**(`tiledImageOptions`, `options?`): `Promise`\<`TiledImage`\>

Defined in: [openseadragon/OpenSeadragonContext.ts:438](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L438)

Adds a tiled image to the OpenSeadragon viewer

The tile source is opened right away, i.e. concurrently with the tile sources
of other additions, but the tiled images are added to the world one after
another, in the order in which they were requested. The index is resolved in
between, when nothing else can shift the world anymore.

The tile source may also be a promise of an already opened tile source,
which is only awaited once the addition is executed. Callers can thus derive
a tile source from another one that is still being opened, without giving up
their place in the queue and thereby their world index.

Rejects right away once the context has been destroyed.

Aborting before the addition is executed skips it entirely. Later than that,
the pending tile source load cannot be canceled anymore: the tiled image is
added, immediately removed again, and the returned promise rejects with the
signal's reason. Aborting a replacement (`tiledImageOptions.replace`) instead
resolves, as the replaced tiled image is already gone by then and removing
the new one, too, would leave a gap in the world.

#### Parameters

##### tiledImageOptions

`Omit`\<`OpenSeadragon.TileSourceSpecifier`, `"success"` \| `"error"`\>

Options for adding the tiled image, including the tile source

##### options?

Optional abort signal and index resolver. The latter takes
precedence over `tiledImageOptions.index`, and appends the tiled image to the
world if it returns `undefined`.

###### getIndex?

() => `number` \| `undefined`

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`TiledImage`\>

A promise that resolves with the added tiled image, or rejects if
adding it failed or the operation was aborted

***

### configureAnimationHandlers()

> **configureAnimationHandlers**(`viewerAnimationStartOptions`, `viewerAnimationFinishOptions`): `void`

Defined in: [openseadragon/OpenSeadragonContext.ts:235](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L235)

Installs OpenSeadragon `animation-start` and `animation-finish` handlers

On animation start, the current values of all keys of the start options are
saved (for the viewer and for each tiled image having such a property) and
the start options are applied. On animation finish, the saved values are
restored, overridden by the finish options.

Only keys of the start options are saved and restored; keys appearing solely
in the finish options are applied without ever being reverted. Likewise, only
tiled images present at animation start have their values restored.

Calling this method again replaces any previously installed handlers.

#### Parameters

##### viewerAnimationStartOptions

[`OpenSeadragonViewerOptions`](../../core/type-aliases/OpenSeadragonViewerOptions.md)

Options to apply when an animation starts

##### viewerAnimationFinishOptions

[`OpenSeadragonViewerOptions`](../../core/type-aliases/OpenSeadragonViewerOptions.md)

Options to apply when an animation finishes

#### Returns

`void`

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: [openseadragon/OpenSeadragonContext.ts:622](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L622)

Destroys the OpenSeadragon viewer and cleans up resources

The context is marked as destroyed immediately (see [isDestroyed](#isdestroyed)), but
the viewer is only destroyed once no world mutation is pending anymore, as
their callbacks would otherwise run against a destroyed viewer. Marking the
context as destroyed also stops further world mutations from being enqueued,
so awaiting the queue's current tail is enough to drain it.

#### Returns

`Promise`\<`void`\>

***

### getContainerSize()

> **getContainerSize**(): [`Dims`](../../core/type-aliases/Dims.md)

Defined in: [openseadragon/OpenSeadragonContext.ts:327](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L327)

Returns the size of the viewer container element, in screen-space pixels

#### Returns

[`Dims`](../../core/type-aliases/Dims.md)

***

### getTiledImageIndex()

> **getTiledImageIndex**(`tiledImage`): `number`

Defined in: [openseadragon/OpenSeadragonContext.ts:494](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L494)

Returns the index of a tiled image in the OpenSeadragon viewer's world

#### Parameters

##### tiledImage

`TiledImage`

The tiled image for which to get the index

#### Returns

`number`

The index of the tiled image, or -1 if it is not in the world

***

### getViewport()

> **getViewport**(): [`Rect`](../../core/type-aliases/Rect.md)

Defined in: [openseadragon/OpenSeadragonContext.ts:314](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L314)

Returns the currently visible viewport bounds in world coordinates

Reflects the current viewport, not the target of an ongoing animation.

#### Returns

[`Rect`](../../core/type-aliases/Rect.md)

***

### isDestroyed()

> **isDestroyed**(): `boolean`

Defined in: [openseadragon/OpenSeadragonContext.ts:305](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L305)

Returns whether [destroy](#destroy) has been called

Turns `true` as soon as destruction starts, i.e. before pending world
mutations have settled and before the viewer is actually destroyed. Further
additions are rejected and further removals are ignored from that point on.

#### Returns

`boolean`

***

### openTileSource()

> **openTileSource**(`tiledImageOptions`, `options?`): `Promise`\<`TileSource`\>

Defined in: [openseadragon/OpenSeadragonContext.ts:394](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L394)

Resolves a tile source specifier to a ready-to-use OpenSeadragon tile source

Fetches the image information if the specifier is a URL, awaits promised
tile sources, and passes ready tile sources through. Doing this before an
addition keeps the loading concurrent, while the additions themselves stay
serialized (see [addTiledImage](#addtiledimage)).

Rejects as soon as the operation is aborted, so that nothing waits for an
abandoned open; the open itself cannot be canceled, and settles unobserved.

#### Parameters

##### tiledImageOptions

`Omit`\<`OpenSeadragon.TileSourceSpecifier`, `"success"` \| `"error"`\>

Options containing the tile source to open

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`TileSource`\>

A promise that resolves with the opened tile source

***

### removeTiledImage()

> **removeTiledImage**(`tiledImage`): `Promise`\<`void`\>

Defined in: [openseadragon/OpenSeadragonContext.ts:479](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L479)

Removes a tiled image from the OpenSeadragon viewer

The removal is queued behind the world mutations requested before it, so
that it cannot shift the world while an addition is waiting for
OpenSeadragon to apply its index. Does nothing once the context has been
destroyed, as the viewer tears down its world itself.

#### Parameters

##### tiledImage

`TiledImage`

The tiled image to remove

#### Returns

`Promise`\<`void`\>

A promise that resolves once the tiled image has been removed.

***

### resetViewport()

> **resetViewport**(): `void`

Defined in: [openseadragon/OpenSeadragonContext.ts:608](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L608)

Hands viewport control back to the renderers

Fits the viewport to the bounds of the world, and resumes doing so whenever
they change, until the user pans or zooms again. Call this when the content
of the viewer is replaced, e.g. on opening a project.

#### Returns

`void`

***

### setContentBounds()

> **setContentBounds**(`source`, `bounds`, `options?`): `Promise`\<`void`\>

Defined in: [openseadragon/OpenSeadragonContext.ts:588](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L588)

Sets the bounds of the content that a source contributes to the world

The world background (see the class documentation) is resized to the
bounding box of the bounds of all sources, or to
\_emptyWorldBounds if there are none (see
\_resizeBackground). Renderers register the bounds of their tiled
images under themselves; the bounds of content rendered outside
OpenSeadragon are registered under any other stable object. Passing no
bounds removes the source.

#### Parameters

##### source

`object`

The object under which to register the bounds

##### bounds

[`Rect`](../../core/type-aliases/Rect.md)[]

The bounds contributed by the source, in world coordinates

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`void`\>

A promise that resolves once the background covers the bounds,
i.e. once it has been drawn wherever they are in the viewport

***

### setViewerOptions()

> **setViewerOptions**(`viewerOptions`): `void`

Defined in: [openseadragon/OpenSeadragonContext.ts:341](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L341)

Applies viewer options to the OpenSeadragon viewer and all existing tiled images

For each option key, performs a shallow merge (one level deep) of nested objects
on both the viewer instance and every tiled image in the world. `showNavigator`
shows or hides the navigator, as OpenSeadragon reads it only on construction.

#### Parameters

##### viewerOptions

[`OpenSeadragonViewerOptions`](../../core/type-aliases/OpenSeadragonViewerOptions.md)

Options to apply

#### Returns

`void`

***

### updateTiledImageDataTransfer()

> **updateTiledImageDataTransfer**(`tiledImage`, `dataTransfer`): `void`

Defined in: [openseadragon/OpenSeadragonContext.ts:534](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonContext.ts#L534)

Updates the data transfer of a tiled image

The data transfer is applied per tile: the tile's pixel values are
extracted and each is replaced by the color it maps to (see
DataTransfer). Passing `undefined` leaves the tiles as they are. It
is applied to every tile of the tiled image, including those loaded later.

The data transfer is remembered per tile source, until the tile source is
garbage-collected. Tiled images that share a tile source therefore also
share a data transfer, with the last one set winning - including the tiled
images of the navigator, which mirror those of this viewer and are
recolored along with them. As the navigator keeps a tile cache of its own,
which the invalidation of `tiledImage` does not reach, its tiled images
that share the tile source are invalidated explicitly, too. Those are few
low-resolution tiles, so this stays cheap; invalidating the whole viewer
would re-run every data transfer on every loaded tile instead.

A tiled image keeps up to the whole tile cache loaded, most of it outside
the viewport, so only the tiles drawn in the viewport are invalidated. The
others are recolored once they are drawn again (see
\_recolorStaleTiles), which keeps the cost of a change proportional
to the viewport rather than to the tile cache. Removing a data transfer
invalidates every tile of the tiled image instead, as tiles without a data
transfer are not caught up with.

Data transfers are compared by identity: the tiles are only invalidated,
and thereby recolored from their original data, if a different data
transfer object is passed. Callers are expected to pass the same object for
as long as its outcome would not change, as invalidating the tiles re-runs
the data transfer on every tile in the viewport, and on every other loaded
tile of the tile source once it is drawn.

#### Parameters

##### tiledImage

`TiledImage`

The tiled image to update

##### dataTransfer

`DataTransfer` \| `undefined`

The data transfer to apply, or `undefined` for none

#### Returns

`void`
