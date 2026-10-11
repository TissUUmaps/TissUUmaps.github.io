# Class: WebGLShapesRenderer

Defined in: [webgl/WebGLShapesRenderer.ts:59](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L59)

WebGL renderer for two-dimensional shape clouds

Shapes are rasterized on the GPU via a scanline-based algorithm. Each shapes
object is represented by a quad covering its bounds within the viewport,
whose fragment shader samples a scanline data texture to determine polygon
membership, fill colors, and stroke colors.

Every object owns its textures. Synchronizing compares the current model
against the snapshot those textures were built from, and rebuilds only the
ones whose inputs changed. Layer- and object-level properties (transforms,
visibility and opacity) are shader uniforms, so changing them never touches
the textures, and never requires a synchronization (see
[WebGLRendererBase.setModel](WebGLPointsRenderer.md#setmodel)).

## Extends

- `WebGLRendererBase`\<[`Shapes`](../../core/type-aliases/Shapes.md), [`ShapesData`](../../core/interfaces/ShapesData.md), `WebGLShapesSyncContext`, `PreparedShapes`, `RenderedShapes`\>

## Constructors

### Constructor

> **new WebGLShapesRenderer**(`context`): `WebGLShapesRenderer`

Defined in: [webgl/WebGLShapesRenderer.ts:98](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L98)

Creates the shader program and retrieves uniform locations

#### Parameters

##### context

[`WebGLContext`](WebGLContext.md)

The WebGL context to use for rendering

#### Returns

`WebGLShapesRenderer`

#### Overrides

`WebGLRendererBase< Shapes, ShapesData, WebGLShapesSyncContext, PreparedShapes, RenderedShapes >.constructor`

## Properties

### context

> `readonly` **context**: [`WebGLContext`](WebGLContext.md)

Defined in: [webgl/WebGLRendererBase.ts:62](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L62)

#### Inherited from

`WebGLRendererBase.context`

***

### renderOptions

> **renderOptions**: [`WebGLShapesRenderOptions`](../../core/type-aliases/WebGLShapesRenderOptions.md) = `projectDefaults.glOptions.shapesRenderOptions`

Defined in: [webgl/WebGLShapesRenderer.ts:78](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L78)

***

### viewport

> **viewport**: [`Rect`](../../core/type-aliases/Rect.md)

Defined in: [webgl/WebGLRendererBase.ts:63](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L63)

#### Inherited from

`WebGLRendererBase.viewport`

## Methods

### addRenderedObject()

> `protected` **addRenderedObject**(`renderedObject`): `void`

Defined in: [webgl/WebGLRendererBase.ts:542](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L542)

Adds a newly created rendered object under its layer and object

#### Parameters

##### renderedObject

`RenderedShapes`

The rendered object to add

#### Returns

`void`

#### Inherited from

`WebGLRendererBase.addRenderedObject`

***

### clearRenderedObjects()

> `protected` **clearRenderedObjects**(): `void`

Defined in: [webgl/WebGLRendererBase.ts:567](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L567)

Drops all rendered objects and releases their GPU resources

#### Returns

`void`

#### Inherited from

`WebGLRendererBase.clearRenderedObjects`

***

### createRenderedObject()

> `protected` **createRenderedObject**(`newRef`, `prepared`): `RenderedShapes`

Defined in: [webgl/WebGLShapesRenderer.ts:625](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L625)

Creates the textures of a new object

#### Parameters

##### newRef

`ShapesRef`

The object

##### prepared

`PreparedShapes`

Its preparation, which holds every texture's data

#### Returns

`RenderedShapes`

The rendered object

#### Overrides

`WebGLRendererBase.createRenderedObject`

***

### destroy()

> **destroy**(): `void`

Defined in: [webgl/WebGLShapesRenderer.ts:278](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L278)

Releases the shader program and all per-object GPU textures

#### Returns

`void`

***

### destroyRenderedObject()

> `protected` **destroyRenderedObject**(`renderedShapes`): `void`

Defined in: [webgl/WebGLShapesRenderer.ts:711](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L711)

Deletes all GPU textures owned by a single rendered object

#### Parameters

##### renderedShapes

`RenderedShapes`

The rendered object whose textures to delete

#### Returns

`void`

#### Overrides

`WebGLRendererBase.destroyRenderedObject`

***

### draw()

> **draw**(): `void`

Defined in: [webgl/WebGLShapesRenderer.ts:162](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L162)

Issues the WebGL draw calls for all synchronized shapes

Renders each shapes object as a quad whose fragment shader performs
scanline-based polygon rasterization using the per-object scanline data
texture, with the viewport → world matrix as a global uniform and its
world → data matrix, bounds, numbers of scanlines and bins, half stroke
width and device pixel size in data units (for anti-aliasing) and opacity
factor as per-pass uniforms, computed from the current model (see
[getRenderPasses](#getrenderpasses)). The quad covers the object's bounds, dilated by
how far the anti-aliased strokes reach beyond them, within the viewport, so
that fragments are only shaded where the object can be; objects outside the
viewport, objects whose layer or object is invisible, and objects without
scanlines or bins are skipped.

#### Returns

`void`

***

### getLayerSyncState()

> `protected` **getLayerSyncState**(`layer`): `object`

Defined in: [webgl/WebGLRendererBase.ts:272](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L272)

Returns the state of a layer that a synchronization depends on

The counterpart of [getObjectSyncState](#getobjectsyncstate) for layers. The point size
factor is blanked out as well: it is a uniform of the points renderer, and
the shapes renderer never reads it. So is the name, which nothing rendered
depends on.

#### Parameters

##### layer

[`Layer`](../../core/type-aliases/Layer.md)

The layer to return the state of

#### Returns

`object`

The layer without the properties that are applied when drawing,
and without the cosmetic ones

#### Inherited from

`WebGLRendererBase.getLayerSyncState`

***

### getObjectSyncState()

> `protected` **getObjectSyncState**(`object`): `object`

Defined in: [webgl/WebGLRendererBase.ts:300](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L300)

Returns the state of an object that a synchronization depends on

Everything but the properties that are applied when drawing, which are read
from the current model on every draw (see [getRenderPasses](#getrenderpasses)) and
hence need no synchronization, and but the cosmetic ones, which nothing
rendered depends on. Those are blanked out rather than dropped, so that a
property added to the model later is part of the state, and thereby
requires a resynchronization, unless it is blanked out here as well.

The result is only ever deep-compared against that of another object, hence
the opaque return type.

#### Parameters

##### object

[`Shapes`](../../core/type-aliases/Shapes.md)

The object (points or shapes) to return the state of

#### Returns

`object`

The object without the properties that are applied when drawing,
and without the cosmetic ones

#### Inherited from

`WebGLRendererBase.getObjectSyncState`

***

### getRenderedBounds()

> **getRenderedBounds**(): [`Rect`](../../core/type-aliases/Rect.md) \| `null`

Defined in: [webgl/WebGLShapesRenderer.ts:290](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L290)

Gets the bounding box of all drawn shapes, in world coordinates

Dilates the bounds of the shapes by half the stroke width, as the strokes
reach beyond them, but not by the anti-aliasing margin, which depends on
the current zoom level (see \_computeQuad).

#### Returns

[`Rect`](../../core/type-aliases/Rect.md) \| `null`

#### Overrides

`WebGLRendererBase.getRenderedBounds`

***

### getRenderOptionsSyncState()

> `protected` **getRenderOptionsSyncState**(): `object`

Defined in: [webgl/WebGLShapesRenderer.ts:303](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L303)

Returns the grid render options (the number of edges per scanline, the
bin width factor and the shape padding), which the scanline data textures
are rasterized for, so that changing them requires a resynchronization

#### Returns

`object`

#### Overrides

`WebGLRendererBase.getRenderOptionsSyncState`

***

### getRenderPasses()

> `protected` **getRenderPasses**(): `object`[]

Defined in: [webgl/WebGLRendererBase.ts:667](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L667)

Returns one render pass per rendered object to draw, in draw order

A pass carries the layer and the object of the current model, and the
rendered object holding the GPU resources to draw them with.

The properties that are applied when drawing - the transforms, the
visibility, the opacity and the point size factors - are read from the
layer and the object returned here, never from the reference of a rendered
object: the reference holds the object as it was when it was loaded (see
ObjectRef), whereas these are the current ones, so that setting a
model that only changes them takes effect without a resynchronization.

The model is what is iterated, the way [loadObjects](#loadobjects) iterates it:
by layer, then by object, pairing an object with the layer it is assigned
to by ID, or with every layer if its items are assigned to layers by a
table column. That order is the draw order. Rendered objects whose layer or
object has been removed from the model, or whose object has moved to
another layer, are therefore never visited, until the resynchronization
that the change requires drops them. Before a model is set, there is
nothing to draw.

#### Returns

`object`[]

The render passes, in draw order

#### Inherited from

`WebGLRendererBase.getRenderPasses`

***

### getSyncState()

> `protected` **getSyncState**(): `object` \| `undefined`

Defined in: [webgl/WebGLRendererBase.ts:239](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L239)

Returns the state of the current model and render options that a
synchronization depends on

The layers and objects are keyed by ID, so that their order - the draw order
- is not part of the state (see [getLayerSyncState](#getlayersyncstate) and
[getObjectSyncState](#getobjectsyncstate) for what is, and
[getRenderOptionsSyncState](#getrenderoptionssyncstate) for the render options).

#### Returns

`object` \| `undefined`

The state, or `undefined` if no model has been set

#### Inherited from

`WebGLRendererBase.getSyncState`

***

### loadObjects()

> `protected` **loadObjects**(`syncContext`, `options?`): `object`[]

Defined in: [webgl/WebGLRendererBase.ts:348](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L348)

Starts loading the data of all objects to be rendered on the layers of the current model

An object assigned to a layer by layer ID is loaded for that layer only. An
object assigned per item by a table column is loaded for every layer, with
the items on each layer resolved from the table (see
\_getLayerItemsInfos). The data of an object, and of a table, is
loaded once, however many references share it.

Returns right away, with one loading per object and layer, ordered by layer
and then by object. Each loading settles on its own. It rejects if the
object's data or table fails to load, which is logged. It resolves to
`null` if the object has no items on the layer, which is not logged: empty
objects and empty tables are legitimate states, not failures. An object
whose items are assigned per item, but that has no table to resolve the
assignment from, is logged and gets no loading.

#### Parameters

##### syncContext

`WebGLShapesSyncContext`

The inputs of the current synchronization: the tables
that the objects resolve their item layers from, and the loaders for object
and table data

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`object`[]

One loading per object and layer, whose promise resolves to the
object's reference, or to `null` if the object has no items on the layer

#### Throws

Error if no model has been set (see [setModel](#setmodel))

#### Inherited from

`WebGLRendererBase.loadObjects`

***

### needsSynchronization()

> **needsSynchronization**(): `boolean`

Defined in: [webgl/WebGLRendererBase.ts:157](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L157)

Returns whether the rendered objects have to be synchronized with the
current model and render options

Compares the state that a synchronization depends on (see
[getSyncState](#getsyncstate)) against the one the last synchronization was based
on (see \_recordSyncState). Everything else about the model - the
properties that are applied when drawing, and the order of the layers and
objects - is fully applied by [setModel](#setmodel), and everything else about
the render options by the next draw.

#### Returns

`boolean`

Whether [synchronize](#synchronize) has to be called

#### Inherited from

`WebGLRendererBase.needsSynchronization`

***

### prepareRenderedObject()

> `protected` **prepareRenderedObject**(`newRef`, `renderedShapes`, `syncContext`, `options?`): `Promise`\<`PreparedShapes` \| `null`\>

Defined in: [webgl/WebGLShapesRenderer.ts:333](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L333)

Prepares everything that has to be uploaded for an object

Decides what the object's textures need - the geometry for a new object or
changed grid render options (see [getRenderOptionsSyncState](#getrenderoptionssyncstate)), and
the resolved fill and stroke colors whose configurations or referenced
maps changed (see \_createRenderConfigSnapshot) -
requests all of it before the first `await`, and then computes the bounds,
the grid size and the paddings, rasterizes the scanline data and folds the
resolved visibilities and opacities into the colors.

See WebGLRendererBase.prepareRenderedObject for when this runs.

#### Parameters

##### newRef

`ShapesRef`

The object to prepare

##### renderedShapes

`RenderedShapes` \| `undefined`

The object's current GPU state, if it is reused

##### syncContext

`WebGLShapesSyncContext`

The inputs of the current synchronization

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`PreparedShapes` \| `null`\>

The snapshot the decisions were based on, the bounds, the grid
render options and the numbers of scanlines and bins, the packed scanline
data (if the geometry was loaded) and the resolved colors that have to be
uploaded, or `null` if the shapes have no area

#### Overrides

`WebGLRendererBase.prepareRenderedObject`

***

### removeRenderedObject()

> `protected` **removeRenderedObject**(`renderedObject`): `void`

Defined in: [webgl/WebGLRendererBase.ts:557](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L557)

Drops a rendered object and releases its GPU resources

#### Parameters

##### renderedObject

`RenderedShapes`

The rendered object to remove

#### Returns

`void`

#### Inherited from

`WebGLRendererBase.removeRenderedObject`

***

### setModel()

> **setModel**(`layers`, `objects`): `boolean`

Defined in: [webgl/WebGLRendererBase.ts:111](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L111)

Sets the layers and objects to render

Layer- and object-level properties are drawn from uniforms, and the draw
order is the order of the model, so a change that affects nothing else
needs nothing done here: both are read from the new model by the next draw
(see [getRenderPasses](#getrenderpasses)).
Every other change - a different set of layers or objects, layer
memberships, data sources or item-level configurations - requires a
resynchronization, which the caller is expected to trigger whenever
[needsSynchronization](#needssynchronization) says so.

Does not redraw: a model that differs at all differs either in a property
that is applied when drawing, or in one that requires a resynchronization,
so the caller is expected to redraw whenever this returns `true`. A model
equal to the current one is ignored.

The layers and objects are cloned, so that what the renderer compares
against later - in [needsSynchronization](#needssynchronization), and in the references of
a synchronization - is what it was given, whatever the caller does with its
instances afterwards.

#### Parameters

##### layers

[`Layer`](../../core/type-aliases/Layer.md)[]

The layers to render

##### objects

[`Shapes`](../../core/type-aliases/Shapes.md)[]

The objects (points or shapes) to render

#### Returns

`boolean`

Whether the model differs from the current one

#### Inherited from

`WebGLRendererBase.setModel`

***

### synchronize()

> **synchronize**(`syncContext`, `options?`): `Promise`\<`void`\>

Defined in: [webgl/WebGLRendererBase.ts:192](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L192)

Synchronizes the rendered objects with the current model and render options

Starts loading the objects of the model (see [loadObjects](#loadobjects)), and
right away drops the rendered objects that none of them addresses. Each
object is then synchronized on its own, as soon as its data has loaded: the
object is prepared (see [prepareRenderedObject](#preparerenderedobject)), and the preparation
is uploaded in one synchronous block, either into the reused rendered
object or into one that replaces it (see [createRenderedObject](#createrenderedobject) and
[updateRenderedObject](#updaterenderedobject)). A draw thus never sees a half-updated
object, and a slow or failing object never holds back the others.

An object issues its requests right after its data has loaded, without
awaiting in between. Requests are shared with a superseded synchronization,
and cancelled once it abandons them, unless they are reclaimed within the
same task. Data that has already loaded allows that.

An object whose data or preparation fails, or that has nothing to render,
is logged and dropped. A synchronization that fails or is aborted leaves
the model unsynchronized (see \_discardSyncState).

#### Parameters

##### syncContext

`WebGLShapesSyncContext`

The inputs to synchronize with: the tables and
group-to-value maps that the objects resolve their properties from, and the
loaders for object and table data. It carries inputs only; what an object
was resolved from is captured per object (see ObjectRef)

##### options?

Optional abort signal, and a callback that is called
synchronously whenever a rendered object is added, updated or dropped, so
that the caller can draw each object as soon as it is ready

###### onChange?

() => `void`

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`void`\>

A promise that resolves once all objects have been synchronized

#### Throws

Error if no model has been set (see [setModel](#setmodel))

#### Inherited from

`WebGLRendererBase.synchronize`

***

### updateRenderedObject()

> `protected` **updateRenderedObject**(`renderedShapes`, `prepared`): `boolean`

Defined in: [webgl/WebGLShapesRenderer.ts:669](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLShapesRenderer.ts#L669)

Reloads the textures of an object whose data was prepared again

Refills the colors textures in place, and creates a new scanline data
texture before releasing the one it replaces, so that the old one survives
if creating the new one throws. The snapshot is adopted last, so that an
update that throws is retried by the next synchronization.

#### Parameters

##### renderedShapes

`RenderedShapes`

The rendered object to update in place

##### prepared

`PreparedShapes`

Its preparation, holding the texture data that changed

#### Returns

`boolean`

Whether any texture was reloaded

#### Overrides

`WebGLRendererBase.updateRenderedObject`

***

### computeOpacityFactor()

> `protected` `static` **computeOpacityFactor**(`layer`, `object`): `number`

Defined in: [webgl/WebGLRendererBase.ts:1010](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L1010)

Computes the factor that the alpha of every item of an object is
multiplied with when drawing

#### Parameters

##### layer

[`Layer`](../../core/type-aliases/Layer.md)

The layer the object is drawn on, as of the current model

##### object

[`Points`](../../core/type-aliases/Points.md) \| [`Shapes`](../../core/type-aliases/Shapes.md)

The object being drawn, as of the current model

#### Returns

`number`

The product of the layer and object opacities, or `0` if the
layer or the object is invisible

#### Inherited from

`WebGLRendererBase.computeOpacityFactor`

***

### createTableLoader()

> `protected` `static` **createTableLoader**(`ref`, `syncContext`): (`tableId`, `options?`) => `Promise`\<[`TableData`](../../core/interfaces/TableData.md)\>

Defined in: [webgl/WebGLRendererBase.ts:973](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L973)

Creates the loader for the tables that an object resolves its properties
from

A configuration may name a table other than the object's, in which case its
values are resolved by the item IDs of the object's own table.

#### Parameters

##### ref

`ObjectRef`\<[`Points`](../../core/type-aliases/Points.md) \| [`Shapes`](../../core/type-aliases/Shapes.md), [`PointsData`](../../core/interfaces/PointsData.md) \| [`ShapesData`](../../core/interfaces/ShapesData.md)\>

The object reference

##### syncContext

The inputs of the current synchronization: the tables to
look the configured table up in, and the loader for table data

###### loadTable

(`table`, `options?`) => `Promise`\<[`TableData`](../../core/interfaces/TableData.md)\>

###### tables

[`Table`](../../core/type-aliases/Table.md)[]

#### Returns

The loader, taking the ID of a table, or `undefined` for the
object's own table; it rejects if the object has no table, or the table was
not found

(`tableId`, `options?`) => `Promise`\<[`TableData`](../../core/interfaces/TableData.md)\>

#### Inherited from

`WebGLRendererBase.createTableLoader`
