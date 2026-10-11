# Class: WebGLPointsRenderer

Defined in: [webgl/WebGLPointsRenderer.ts:71](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L71)

WebGL renderer for two-dimensional point clouds

Manages a shader program, a marker atlas texture, and per-object GPU
buffers. Points are rendered as `gl.POINTS` using per-vertex attributes (x,
y, size, color, marker), one draw call per object.

Every object owns its vertex array and attribute buffers. Synchronizing
compares the current model against the snapshot those buffers were loaded
from, and re-uploads only the attributes whose inputs changed. An attribute
whose configuration is a constant has no buffer at all: its value is
supplied as a generic vertex attribute when drawing, which saves the buffer,
its upload and the resolve (see \_backAttribute).
Layer- and object-level properties (transforms, point size factors,
visibility and opacity) are shader uniforms, so changing them never touches
the buffers, and never requires a synchronization (see
[WebGLRendererBase.setModel](#setmodel)).

## Extends

- `WebGLRendererBase`\<[`Points`](../../core/type-aliases/Points.md), [`PointsData`](../../core/interfaces/PointsData.md), `WebGLPointsSyncContext`, `PreparedPoints`, `RenderedPoints`\>

## Constructors

### Constructor

> **new WebGLPointsRenderer**(`context`, `onInitialized`, `onError`, `options?`): `WebGLPointsRenderer`

Defined in: [webgl/WebGLPointsRenderer.ts:117](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L117)

Creates the shader program and retrieves uniform locations

The marker atlas texture is loaded asynchronously, so the renderer must not
be drawn before `onInitialized` has been called; `onError` is called instead
if loading it failed or was aborted, or if the renderer was destroyed
meanwhile, in which case the texture is released right away.

#### Parameters

##### context

[`WebGLContext`](WebGLContext.md)

The WebGL context to use for rendering

##### onInitialized

() => `void`

Called once the marker atlas texture has been loaded

##### onError

(`error`) => `void`

Called if the marker atlas texture could not be loaded

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`WebGLPointsRenderer`

#### Overrides

`WebGLRendererBase< Points, PointsData, WebGLPointsSyncContext, PreparedPoints, RenderedPoints >.constructor`

## Properties

### context

> `readonly` **context**: [`WebGLContext`](WebGLContext.md)

Defined in: [webgl/WebGLRendererBase.ts:62](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L62)

#### Inherited from

`WebGLRendererBase.context`

***

### renderOptions

> **renderOptions**: [`WebGLPointsRenderOptions`](../../core/type-aliases/WebGLPointsRenderOptions.md) = `projectDefaults.glOptions.pointsRenderOptions`

Defined in: [webgl/WebGLPointsRenderer.ts:89](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L89)

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

`RenderedPoints`

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

> `protected` **createRenderedObject**(`newRef`, `prepared`): `RenderedPoints`

Defined in: [webgl/WebGLPointsRenderer.ts:531](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L531)

Creates the vertex array and attributes of a new object

#### Parameters

##### newRef

`PointsRef`

The object

##### prepared

`PreparedPoints`

Its preparation, which holds every attribute

#### Returns

`RenderedPoints`

The rendered object

#### Overrides

`WebGLRendererBase.createRenderedObject`

***

### destroy()

> **destroy**(): `void`

Defined in: [webgl/WebGLPointsRenderer.ts:299](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L299)

Releases the shader program, the marker atlas texture, and all per-object
GPU resources

A marker atlas texture that is still loading is released once it has
loaded (see the constructor).

#### Returns

`void`

***

### destroyRenderedObject()

> `protected` **destroyRenderedObject**(`renderedPoints`): `void`

Defined in: [webgl/WebGLPointsRenderer.ts:612](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L612)

Deletes the vertex array and all attribute buffers owned by a single
rendered object

#### Parameters

##### renderedPoints

`RenderedPoints`

The rendered object whose GPU resources to delete

#### Returns

`void`

#### Overrides

`WebGLRendererBase.destroyRenderedObject`

***

### draw()

> **draw**(): `void`

Defined in: [webgl/WebGLPointsRenderer.ts:189](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L189)

Issues the WebGL draw calls for all synchronized points

Binds the shader program, configures the global uniforms (transform,
viewport, canvas size in device pixels), binds the marker atlas texture,
and then draws every object in its own `gl.POINTS` call with alpha
blending, with its data → world matrix, point size factor and opacity
factor as uniforms, computed from the current model (see
[getRenderPasses](#getrenderpasses)), and with the constants of its per-point
attributes as generic vertex attributes (see \_backAttribute).
Objects whose layer or object is invisible are skipped.

#### Returns

`void`

#### Throws

Error if the renderer has not been initialized

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

> `protected` **getObjectSyncState**(`points`): `object`

Defined in: [webgl/WebGLPointsRenderer.ts:320](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L320)

Returns the state of a points object that a synchronization depends on

Blanks out the object-level point size factor, and the units of the point
size configuration, on top of what the base class blanks out: the sizes are
uploaded without their unit, which is applied as part of the point size
factor uniform instead (see \_computePointSizeFactor).

#### Parameters

##### points

[`Points`](../../core/type-aliases/Points.md)

The points object to return the state of

#### Returns

`object`

The points object without the properties that are applied when drawing

#### Overrides

`WebGLRendererBase.getObjectSyncState`

***

### getRenderedBounds()

> **getRenderedBounds**(): [`Rect`](../../core/type-aliases/Rect.md) \| `null`

Defined in: [webgl/WebGLRendererBase.ts:131](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L131)

Gets the bounding box of all drawn objects, in world coordinates

Reads the transforms from the current model (see
[getRenderPasses](#getrenderpasses)), so the bounds follow a model that requires no
resynchronization.

#### Returns

[`Rect`](../../core/type-aliases/Rect.md) \| `null`

The bounds, or null if nothing is drawn

#### Inherited from

`WebGLRendererBase.getRenderedBounds`

***

### getRenderOptionsSyncState()

> `protected` **getRenderOptionsSyncState**(): `object` \| `undefined`

Defined in: [webgl/WebGLRendererBase.ts:319](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L319)

Returns the state of the render options that a synchronization depends on

Render options that are applied when drawing need no synchronization and
are left out. Nothing by default; a renderer whose GPU resources are built
for a render option overrides this to return it.

#### Returns

`object` \| `undefined`

The state, or `undefined` if no render option needs a synchronization

#### Inherited from

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

`WebGLPointsSyncContext`

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

> `protected` **prepareRenderedObject**(`newRef`, `renderedPoints`, `syncContext`, `options?`): `Promise`\<`PreparedPoints`\>

Defined in: [webgl/WebGLPointsRenderer.ts:349](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L349)

Prepares everything that has to be uploaded for an object

Decides what the object's buffers need - the geometry for a new object,
and the markers, sizes and colors whose configurations or referenced maps
changed (see \_createRenderConfigSnapshot) - requests all of it
before the first `await`, and then computes the bounds and folds the
resolved visibilities and opacities into the colors. An attribute whose
configuration is a constant is not resolved per point: it is prepared as
the one packed value all points share (see \_backAttribute).

See WebGLRendererBase.prepareRenderedObject for when this runs.

#### Parameters

##### newRef

`PointsRef`

The object to prepare

##### renderedPoints

`RenderedPoints` \| `undefined`

The object's current GPU state, if it is reused

##### syncContext

`WebGLPointsSyncContext`

The inputs of the current synchronization

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`PreparedPoints`\>

The snapshot the decisions were based on, the masked geometry
(new objects only), the bounds, and the attributes that have to be
uploaded, each resolved per point or as a constant

#### Overrides

`WebGLRendererBase.prepareRenderedObject`

***

### removeRenderedObject()

> `protected` **removeRenderedObject**(`renderedObject`): `void`

Defined in: [webgl/WebGLRendererBase.ts:557](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLRendererBase.ts#L557)

Drops a rendered object and releases its GPU resources

#### Parameters

##### renderedObject

`RenderedPoints`

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

[`Points`](../../core/type-aliases/Points.md)[]

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

`WebGLPointsSyncContext`

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

> `protected` **updateRenderedObject**(`renderedPoints`, `prepared`): `boolean`

Defined in: [webgl/WebGLPointsRenderer.ts:566](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLPointsRenderer.ts#L566)

Backs the attributes of an object that were resolved again

The snapshot is adopted last, so that an update that throws is retried by
the next synchronization.

#### Parameters

##### renderedPoints

`RenderedPoints`

The rendered object to update in place

##### prepared

`PreparedPoints`

Its preparation, holding the attributes that changed

#### Returns

`boolean`

Whether any attribute was backed again

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
