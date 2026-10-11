# Class: OpenSeadragonLabelsRenderer

Defined in: [openseadragon/OpenSeadragonLabelsRenderer.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonLabelsRenderer.ts#L67)

Renderer for the tiled images of [Labels](../../core/type-aliases/Labels.md) data objects

The tiles of a labels object carry label IDs rather than colors, and are
recolored by a data transfer (see
[OpenSeadragonContext.updateTiledImageDataTransfer](OpenSeadragonContext.md#updatetiledimagedatatransfer)) that looks each
ID up in a color lookup table, which folds the visibility and opacity into
the alpha channel. Layer and object opacity are not part of it; OpenSeadragon
applies them when drawing the tiled image.

A label image does not enumerate its labels (see [LabelsData](../../core/interfaces/LabelsData.md)), so the
lookup table is resolved per object for the labels that the referenced table
lists, in the same way as the WebGL renderers resolve the appearance of their
items, and every other label is resolved as it is first drawn (see
\_resolveDataTransfer).

As data transfers are compared by identity, each object's data transfer is
kept (see [resolveObject](#resolveobject)) until its data, one of the configurations
it was resolved from, or one of the group-to-value maps those configurations
reference changes, so that tiles are only recolored when needed. Maps are
never mutated - an edit replaces the map object - so they are compared by
identity, which is why the maps passed to a synchronization have to keep
their identity for as long as they are unchanged.

## Extends

- `OpenSeadragonRendererBase`\<[`Labels`](../../core/type-aliases/Labels.md), [`LabelsData`](../../core/interfaces/LabelsData.md), `OpenSeadragonLabelsSyncContext`\>

## Constructors

### Constructor

> **new OpenSeadragonLabelsRenderer**(`context`, `onInitialized`, `onError`, `options?`): `OpenSeadragonLabelsRenderer`

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:93](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L93)

Creates a new OpenSeadragonRendererBase instance and asynchronously adds its anchor

The renderer must not be used before `onInitialized` has been called;
`onError` is called instead if adding the anchor failed or was aborted.

#### Parameters

##### context

[`OpenSeadragonContext`](OpenSeadragonContext.md)

The OpenSeadragon context that provides access to the viewer and other shared state

##### onInitialized

() => `void`

Called once the anchor has been added to the world

##### onError

(`error`) => `void`

Called if the anchor could not be added

##### options?

Optional abort signal and world index at which to insert
the anchor, behind the context's world background (i.e. `1` or higher)

###### anchorIndex?

`number`

###### signal?

`AbortSignal`

#### Returns

`OpenSeadragonLabelsRenderer`

#### Inherited from

`OpenSeadragonRendererBase< Labels, LabelsData, OpenSeadragonLabelsSyncContext >.constructor`

## Properties

### context

> `readonly` **context**: [`OpenSeadragonContext`](OpenSeadragonContext.md)

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:73](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L73)

#### Inherited from

`OpenSeadragonRendererBase.context`

## Methods

### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:300](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L300)

Destroys the renderer by removing the anchor tiled image and all rendered objects from the OpenSeadragon viewer, and its bounds from the context

Rendered objects whose tiled images have not been added to the world yet are
only marked for deletion, and are removed as soon as they arrive.

The renderer is unusable afterwards: it has no anchor anymore, so
[updateBounds](#updatebounds) does nothing, \_cleanRenderedObjects throws, and
tiled images that still arrive are removed right away.

The bounds are removed from the context without waiting for the world
background to be resized, and a failure to resize it is only logged: the
background waits for being drawn, which never happens while the page is
hidden, and the teardown of the renderer, and thereby of the context, must
not depend on it.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`OpenSeadragonRendererBase.destroy`

***

### getLayerSyncState()

> `protected` **getLayerSyncState**(`layer`): `object`

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:354](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L354)

Returns the state of a layer that a synchronization depends on

The counterpart of [getObjectSyncState](#getobjectsyncstate) for layers. The point size
factor is blanked out as well, as nothing rendered here depends on it, and
so is the name.

#### Parameters

##### layer

[`Layer`](../../core/type-aliases/Layer.md)

The layer to return the state of

#### Returns

`object`

The layer without the properties that are applied by
[setModel](#setmodel), and without the cosmetic ones

#### Inherited from

`OpenSeadragonRendererBase.getLayerSyncState`

***

### getObjectSyncState()

> `protected` **getObjectSyncState**(`object`): `object`

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:382](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L382)

Returns the state of an object that a synchronization depends on

Everything but the properties that are applied by [setModel](#setmodel), and
but the cosmetic ones, which nothing rendered depends on. Those are blanked
out rather than dropped, so that a property added to the model later is
part of the state, and thereby requires a resynchronization, unless it is
blanked out here as well. Subclasses override this to blank out the
properties that they apply from the current model themselves.

The result is only ever deep-compared against that of another object, hence
the opaque return type.

#### Parameters

##### object

[`Labels`](../../core/type-aliases/Labels.md)

The object (image or labels) to return the state of

#### Returns

`object`

The object without the properties that are applied by
[setModel](#setmodel), and without the cosmetic ones

#### Inherited from

`OpenSeadragonRendererBase.getObjectSyncState`

***

### getSyncState()

> `protected` **getSyncState**(): `object` \| `undefined`

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:331](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L331)

Returns the state of the current model that a synchronization depends on

Unlike the WebGL renderers, whose draw order is read from the model on
every draw, the order of the layers and objects is part of the state: it
is the order of the tiled images in the world, which only a
synchronization can change (see \_cleanRenderedObjects). See
[getLayerSyncState](#getlayersyncstate) and [getObjectSyncState](#getobjectsyncstate) for what else is.

#### Returns

`object` \| `undefined`

The state, or `undefined` if no model has been set

#### Inherited from

`OpenSeadragonRendererBase.getSyncState`

***

### getTiledImageOpacity()

> `protected` **getTiledImageOpacity**(`ref`, `_index`): `number`

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:496](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L496)

Computes the effective opacity for one of an object's tiled images

Returns `0` when either the layer or the object is invisible; otherwise
multiplies layer and object opacities. The channel index is ignored here,
i.e. all tiled images of an object share the same opacity; subclasses
override this to additionally apply per-channel visibility and opacity. The
channel index is omitted for an object's backdrop, which carries the opacity
of the object itself.

#### Parameters

##### ref

`ObjectRef`\<[`Labels`](../../core/type-aliases/Labels.md), [`LabelsData`](../../core/interfaces/LabelsData.md)\>

The object reference for which to compute the opacity

##### \_index

`number` \| `null`

The index of the tiled image (e.g. channel), or `null` for the object's backdrop

#### Returns

`number`

The effective opacity for the tiled image

#### Inherited from

`OpenSeadragonRendererBase.getTiledImageOpacity`

***

### getTileSources()

> `protected` **getTileSources**(`data`): (`string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md))[]

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:449](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L449)

Returns the tile sources for the given object data

#### Parameters

##### data

[`LabelsData`](../../core/interfaces/LabelsData.md)

The object data (image or labels) for which to retrieve the tile sources

#### Returns

(`string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md))[]

The tile sources, one per tiled image of the object. Defaults to
the single tile source of the data; renderers of multi-channel data
override this.

#### Inherited from

`OpenSeadragonRendererBase.getTileSources`

***

### needsSynchronization()

> **needsSynchronization**(): `boolean`

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:154](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L154)

Returns whether the rendered objects have to be synchronized with the
current model

Compares the state that a synchronization depends on (see
[getSyncState](#getsyncstate)) against the one the last synchronization was based
on, which [synchronize](#synchronize) records before its first `await` and forgets
again if it fails. Everything else about the model - the properties that
tiled images take directly - is fully applied by [setModel](#setmodel).

#### Returns

`boolean`

#### Inherited from

`OpenSeadragonRendererBase.needsSynchronization`

***

### resolveObject()

> `protected` **resolveObject**(`labels`, `data`, `context`, `options?`): `Promise`\<`void`\>

Defined in: [openseadragon/OpenSeadragonLabelsRenderer.ts:117](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonLabelsRenderer.ts#L117)

Resolves the data transfer of a labels object, unless it is up to date

An object's data transfer is kept as long as its data, its label color,
visibility and opacity configurations, and the group-to-value maps those
configurations resolve from (see [ConfigUtils.findGroupByMap](../../core/classes/ConfigUtils.md#findgroupbymap)) are
unchanged, and is resolved anew otherwise (see
\_resolveDataTransfer). Configurations are compared by value, maps
by identity. If resolving from the referenced table fails, e.g. because the
table failed to load, the failure is logged and the object's labels are
resolved without table data instead, until its data, one of its
configurations or one of its maps changes.

#### Parameters

##### labels

[`Labels`](../../core/type-aliases/Labels.md)

The labels object to resolve

##### data

[`LabelsData`](../../core/interfaces/LabelsData.md)

The loaded data of the labels object

##### context

`OpenSeadragonLabelsSyncContext`

The inputs of the current synchronization

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`void`\>

A promise that resolves once the data transfer has been resolved

#### Overrides

`OpenSeadragonRendererBase.resolveObject`

***

### resolveTiledImageDataTransfer()

> `protected` **resolveTiledImageDataTransfer**(`ref`): `DataTransfer` \| `undefined`

Defined in: [openseadragon/OpenSeadragonLabelsRenderer.ts:174](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonLabelsRenderer.ts#L174)

Returns the data transfer resolved for the given labels object

A labels object has a single tiled image, whose tiles carry the label IDs,
and no backdrop, so the index is not looked at.

#### Parameters

##### ref

`ObjectRef`\<[`Labels`](../../core/type-aliases/Labels.md), [`LabelsData`](../../core/interfaces/LabelsData.md)\>

The labels reference for which to get the data transfer

#### Returns

`DataTransfer` \| `undefined`

The data transfer resolved by [resolveObject](#resolveobject), or
`undefined` if the object has not been resolved

#### Overrides

`OpenSeadragonRendererBase.resolveTiledImageDataTransfer`

***

### retainObjects()

> `protected` **retainObjects**(`labels`): `void`

Defined in: [openseadragon/OpenSeadragonLabelsRenderer.ts:90](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonLabelsRenderer.ts#L90)

Drops the data transfers of all labels objects other than the given ones

#### Parameters

##### labels

[`Labels`](../../core/type-aliases/Labels.md)[]

The labels objects about to be displayed

#### Returns

`void`

#### Overrides

`OpenSeadragonRendererBase.retainObjects`

***

### setModel()

> **setModel**(`layers`, `objects`): `void`

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:135](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L135)

Sets the layers and objects to render

The properties that tiled images take directly - the layer and object
transforms, visibility and opacity, and whatever else a subclass reads from
the current model when updating a tiled image (see
[getTiledImageOpacity](#gettiledimageopacity) and [resolveTiledImageDataTransfer](#resolvetiledimagedatatransfer)) -
are applied to the rendered objects right away (see
\_updateRenderedObject), and need no synchronization.
Every other change - a different set or order of layers or objects, layer
memberships, data sources or the configurations that subclasses resolve
from - requires a resynchronization, which the caller is expected to
trigger whenever [needsSynchronization](#needssynchronization) says so.

Does not resize the anchor: a transform change moves the tiled images, so
the caller is expected to call [updateBounds](#updatebounds) afterwards.

The layers and objects are cloned, so that what the renderer compares
against later - in [needsSynchronization](#needssynchronization), and in the references of
a synchronization - is what it was given, whatever the caller does with its
instances afterwards.

#### Parameters

##### layers

[`Layer`](../../core/type-aliases/Layer.md)[]

The layers to render

##### objects

[`Labels`](../../core/type-aliases/Labels.md)[]

The objects (images or labels) to render

#### Returns

`void`

#### Inherited from

`OpenSeadragonRendererBase.setModel`

***

### synchronize()

> **synchronize**(`context`, `options?`): `Promise`\<`void`\>

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:185](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L185)

Synchronizes the viewer's tiled images with the current model

Starts loading the objects on the layers of the model (see
[setModel](#setmodel)), and right away removes the tiled images that are no
longer needed (see \_cleanRenderedObjects). Each object is then
synchronized as soon as it has loaded, without waiting for the others: its
tiled images are updated, or created at its position in the world (see
\_synchronizeRenderedObject).

Resolves once the tiled images of all objects are in the world. The model
is read once, so the synchronization sees one consistent state, but the
properties applied to the tiled images come from the current model (see
\_updateRenderedObject).

Objects whose data fails to load, or whose tiled images cannot be created
(e.g. without tile sources), are logged and dropped. A synchronization that
fails or is aborted leaves the model unsynchronized (see
[needsSynchronization](#needssynchronization)).

#### Parameters

##### context

`OpenSeadragonLabelsSyncContext`

The inputs to synchronize with: an immutable snapshot of
the tables and maps that the objects resolve from and the loaders that the
renderer needs. It carries inputs only; a renderer that derives state from
an object does so in [resolveObject](#resolveobject).

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`void`\>

#### Throws

Error if no model has been set (see [setModel](#setmodel))

#### Inherited from

`OpenSeadragonRendererBase.synchronize`

***

### updateBounds()

> **updateBounds**(`options?`): `Promise`\<`void`\>

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:249](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L249)

Resizes the anchor to the bounding box of all tiled images, and registers it with the context

Rendered objects whose tiled images have not been added to the world yet are
ignored; they update the anchor themselves upon arrival (see
\_createRenderedObject). Resolves once the context's world
background covers the bounds, too (see
[OpenSeadragonContext.setContentBounds](OpenSeadragonContext.md#setcontentbounds)). The bounds are registered
after the anchor task rather than within it, so that the anchor task
queue, and with it [destroy](#destroy), never waits for the background, which
waits for being drawn. Does nothing once the renderer has been destroyed,
as there is no anchor to resize anymore.

#### Parameters

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`OpenSeadragonRendererBase.updateBounds`

***

### usesAdditiveBlending()

> `protected` **usesAdditiveBlending**(`_data`): `boolean`

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:478](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L478)

Returns whether the channels of the given object data are blended additively

The channels of an object that blends additively are composited with
OpenSeadragon's "lighter" operation onto an opaque black backdrop below
them, so that they add up among themselves while the backdrop hides
whatever is below the object, thereby compositing the object as a whole over
it. Objects that do not blend additively have no backdrop and keep
OpenSeadragon's default composite operation, i.e. each of their channels is
composited over the one below it.

This only composites correctly onto an opaque canvas: "lighter" adds alpha
as well as color, so onto the transparent canvas that OpenSeadragon clears
to, an object with opacity below one would accumulate alpha from each
channel and fade out to the wrong color, in wrong proportions, instead of
fading out to the background behind the viewer. The context's world
background (see [OpenSeadragonContext.setContentBounds](OpenSeadragonContext.md#setcontentbounds)) therefore makes the
canvas opaque wherever objects are.

#### Parameters

##### \_data

[`LabelsData`](../../core/interfaces/LabelsData.md)

The object data (image or labels) to check

#### Returns

`boolean`

Whether the object's channels are blended additively. Defaults to `false`.

#### Inherited from

`OpenSeadragonRendererBase.usesAdditiveBlending`
