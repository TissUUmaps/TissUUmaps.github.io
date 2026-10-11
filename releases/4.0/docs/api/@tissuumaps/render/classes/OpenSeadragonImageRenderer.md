# Class: OpenSeadragonImageRenderer

Defined in: [openseadragon/OpenSeadragonImageRenderer.ts:65](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonImageRenderer.ts#L65)

Renderer for the tiled images of [Image](../../core/type-aliases/Image.md) data objects

Multi-channel image data provides one tiled image per channel, whose tiles
carry the channel's values rather than colors. Each channel is recolored by a
data transfer (see [OpenSeadragonContext.updateTiledImageDataTransfer](OpenSeadragonContext.md#updatetiledimagedatatransfer))
that scales the values between the channel's contrast limits and multiplies
them with the channel's color. Color and contrast limits are resolved by
[ImageUtils.getChannelColor](../../core/classes/ImageUtils.md#getchannelcolor) and
[ImageUtils.getChannelContrastLimits](../../core/classes/ImageUtils.md#getchannelcontrastlimits); channels without contrast
limits are stretched over the value range of each tile's data type. In the
grayscale view mode, every channel is colorized white instead of its color.
Channels whose data does not provide values are drawn as they are, as is
image data that is not multi-channel. Channel visibility and opacity are not
part of the transfer: like layer and image opacity, OpenSeadragon applies
them when drawing the tiled image, which is also where the single-channel
view modes hide all but the image's active channel (see
[getTiledImageOpacity](#gettiledimageopacity)).

Channel colors, contrast limits and the view mode need no synchronization:
like visibility and opacity, they are read from the current model whenever
the image's tiled images are updated (see
[resolveTiledImageDataTransfer](#resolvetiledimagedatatransfer)), so changing them only requires
[setModel](#setmodel). As data transfers are compared by identity, each channel's
data transfer is kept until the image's data, or the channel's resolved color
(white in grayscale) or contrast limits change, so that tiles are only
recolored when needed.

## Extends

- `OpenSeadragonRendererBase`\<[`Image`](../../core/type-aliases/Image.md), [`ImageData`](../../core/interfaces/ImageData.md), `OpenSeadragonImageSyncContext`\>

## Constructors

### Constructor

> **new OpenSeadragonImageRenderer**(`context`, `onInitialized`, `onError`, `options?`): `OpenSeadragonImageRenderer`

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

`OpenSeadragonImageRenderer`

#### Inherited from

`OpenSeadragonRendererBase< Image, ImageData, OpenSeadragonImageSyncContext >.constructor`

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

> `protected` **getObjectSyncState**(`image`): `object`

Defined in: [openseadragon/OpenSeadragonImageRenderer.ts:95](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonImageRenderer.ts#L95)

Returns the state of an image that a synchronization depends on

Blanks out the channel view mode and active channel, and the name,
visibility, opacity, color and contrast limits of every channel on top of
what the base class blanks out: they are applied from the current model
when updating the channel's tiled image (see [getTiledImageOpacity](#gettiledimageopacity)
and [resolveTiledImageDataTransfer](#resolvetiledimagedatatransfer)), except for the name, which is
cosmetic.

#### Parameters

##### image

[`Image`](../../core/type-aliases/Image.md)

The image to return the state of

#### Returns

`object`

The image without the properties that are applied by
[setModel](#setmodel), and without the cosmetic ones

#### Overrides

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

> `protected` **getTiledImageOpacity**(`ref`, `index`): `number`

Defined in: [openseadragon/OpenSeadragonImageRenderer.ts:180](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonImageRenderer.ts#L180)

Computes the effective opacity for one of an image's tiled images

Multiplies the layer and image opacity computed by the base class with the
visibility and opacity of the channel that the tiled image renders. Channels
are only applied to multi-channel image data, and channels that the image
does not define are visible at full opacity. In the single-channel view
modes, only the image's active channel is visible (see
[ImageUtils.getActiveChannel](../../core/classes/ImageUtils.md#getactivechannel)). Without a channel index, i.e. for the
image's backdrop, the layer and image opacity is returned as is.

#### Parameters

##### ref

`ObjectRef`\<[`Image`](../../core/type-aliases/Image.md), [`ImageData`](../../core/interfaces/ImageData.md)\>

The image reference for which to compute the opacity

##### index

`number` \| `null`

The index of the tiled image (channel), or `null` for the image's backdrop

#### Returns

`number`

The effective opacity for the tiled image

#### Overrides

`OpenSeadragonRendererBase.getTiledImageOpacity`

***

### getTileSources()

> `protected` **getTileSources**(`data`): (`string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md))[]

Defined in: [openseadragon/OpenSeadragonImageRenderer.ts:134](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonImageRenderer.ts#L134)

Returns the tile sources for the given image data

Multi-channel image data provides one tile source per channel, in channel
order; all other image data provides a single tile source.

#### Parameters

##### data

[`ImageData`](../../core/interfaces/ImageData.md)

The image data for which to retrieve the tile sources

#### Returns

(`string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md))[]

The tile sources, one per channel for multi-channel image data and
a single one otherwise

#### Overrides

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

> `protected` **resolveObject**(`_object`, `_data`, `_context`, `_options?`): `Promise`\<`void`\>

Defined in: [openseadragon/OpenSeadragonRendererBase.ts:428](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonRendererBase.ts#L428)

Resolves what a renderer derives from an object, once its data has loaded

Called by \_loadObjects for each object, concurrently, once its data
has loaded and before its tiled images are created or updated. An object
that cannot be resolved is logged, but kept: its tiled images are still
created or updated, with whatever the synchronous hooks return for it.

Does nothing here. Subclasses override this to resolve what their
synchronous hooks return later (see [resolveTiledImageDataTransfer](#resolvetiledimagedatatransfer))
from the object, its data and the inputs of the synchronization, and to
keep it for as long as its outcome would not change.

#### Parameters

##### \_object

[`Image`](../../core/type-aliases/Image.md)

The object (image or labels) to resolve

##### \_data

[`ImageData`](../../core/interfaces/ImageData.md)

The loaded data of the object

##### \_context

`OpenSeadragonImageSyncContext`

The inputs of the current synchronization

##### \_options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`void`\>

A promise that resolves once the object has been resolved

#### Inherited from

`OpenSeadragonRendererBase.resolveObject`

***

### resolveTiledImageDataTransfer()

> `protected` **resolveTiledImageDataTransfer**(`ref`, `index`): `DataTransfer` \| `undefined`

Defined in: [openseadragon/OpenSeadragonImageRenderer.ts:219](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonImageRenderer.ts#L219)

Resolves the data transfer for one of an image's tiled images, unless it is up to date

Only the tiled images of the channels of multi-channel image data are
recolored, never the backdrop. A channel's color and contrast limits are
resolved (see [ImageUtils.getChannelColor](../../core/classes/ImageUtils.md#getchannelcolor) and
[ImageUtils.getChannelContrastLimits](../../core/classes/ImageUtils.md#getchannelcontrastlimits)), with every channel white in
the grayscale view mode. The channel's data transfer is kept as long as the
image's data and the resolved values are unchanged, and is created anew
otherwise (see \_createDataTransfer). Channels are resolved
independently, so that changing one channel only recolors the tiles of that
channel.

#### Parameters

##### ref

`ObjectRef`\<[`Image`](../../core/type-aliases/Image.md), [`ImageData`](../../core/interfaces/ImageData.md)\>

The image reference for which to get the data transfer, holding
the image as it currently is in the model

##### index

`number` \| `null`

The index of the tiled image (channel), or `null` for the image's backdrop

#### Returns

`DataTransfer` \| `undefined`

The channel's data transfer, or `undefined` if the channel has none

#### Overrides

`OpenSeadragonRendererBase.resolveTiledImageDataTransfer`

***

### retainObjects()

> `protected` **retainObjects**(`images`): `void`

Defined in: [openseadragon/OpenSeadragonImageRenderer.ts:116](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonImageRenderer.ts#L116)

Drops the data transfers of all images other than the given ones

#### Parameters

##### images

[`Image`](../../core/type-aliases/Image.md)[]

The images about to be displayed

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

[`Image`](../../core/type-aliases/Image.md)[]

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

`OpenSeadragonImageSyncContext`

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

> `protected` **usesAdditiveBlending**(`data`): `boolean`

Defined in: [openseadragon/OpenSeadragonImageRenderer.ts:161](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/openseadragon/OpenSeadragonImageRenderer.ts#L161)

Returns whether the channels of the given image data are blended additively

Multi-channel image data blends additively, so that its channels add up
rather than hide one another. Image data that is not multi-channel has a
single tile source, so there is nothing to add up, and it keeps
OpenSeadragon's default compositing, which preserves the transparency of its
tiles.

#### Parameters

##### data

[`ImageData`](../../core/interfaces/ImageData.md)

The image data to check

#### Returns

`boolean`

Whether the image's channels are blended additively

#### Overrides

`OpenSeadragonRendererBase.usesAdditiveBlending`
