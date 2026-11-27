# Type Alias: ProjectStoreActions

> **ProjectStoreActions** = `object`

Defined in: [types/stores/project.ts:71](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L71)

The actions of the project store

Every collection of the project - its layers, images, labels, points, shapes
and tables - is manipulated through the same five families of actions:
`add*` inserts an object, `update*` overwrites some of its properties,
`move*` reorders it, `delete*` removes it, and `clear*` empties the whole
collection. Objects are addressed by their ID, and their order within a
collection is meaningful: it is the order in which they are listed and
rendered.

Adding an object whose ID is already taken, referring to one that is not
part of the project, or passing an index outside of a collection's bounds is
an error.

The lists of maps are not reordered, so they have no `move*` actions.

## Properties

### addColorMap

> **addColorMap**: (`map`) => `void`

Defined in: [types/stores/project.ts:152](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L152)

Adds a color map to the project

#### Parameters

##### map

[`GroupValueMap`](GroupValueMap.md)\<[`Color`](Color.md)\>

The map to add

#### Returns

`void`

***

### addImage

> **addImage**: (`image`, `index?`) => `void`

Defined in: [types/stores/project.ts:95](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L95)

Adds an image to the project

#### Parameters

##### image

[`Image`](Image.md)

The image to add

##### index?

`number`

The index to insert at, defaulting to the end of the
collection

#### Returns

`void`

***

### addLabels

> **addLabels**: (`labels`, `index?`) => `void`

Defined in: [types/stores/project.ts:104](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L104)

Adds labels to the project

#### Parameters

##### labels

[`Labels`](Labels.md)

The labels to add

##### index?

`number`

The index to insert at, defaulting to the end of the
collection

#### Returns

`void`

***

### addLayer

> **addLayer**: (`layer`, `index?`) => `void`

Defined in: [types/stores/project.ts:86](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L86)

Adds a layer to the project

#### Parameters

##### layer

[`Layer`](Layer.md)

The layer to add

##### index?

`number`

The index to insert at, defaulting to the end of the
collection

#### Returns

`void`

***

### addMarkerMap

> **addMarkerMap**: (`map`) => `void`

Defined in: [types/stores/project.ts:138](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L138)

Adds a marker map to the project

#### Parameters

##### map

[`GroupValueMap`](GroupValueMap.md)\<[`Marker`](Marker.md)\>

The map to add

#### Returns

`void`

***

### addOpacityMap

> **addOpacityMap**: (`map`) => `void`

Defined in: [types/stores/project.ts:166](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L166)

Adds an opacity map to the project

#### Parameters

##### map

[`GroupValueMap`](GroupValueMap.md)\<`number`\>

The map to add

#### Returns

`void`

***

### addPoints

> **addPoints**: (`points`, `index?`) => `void`

Defined in: [types/stores/project.ts:113](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L113)

Adds points to the project

#### Parameters

##### points

[`Points`](Points.md)

The points to add

##### index?

`number`

The index to insert at, defaulting to the end of the
collection

#### Returns

`void`

***

### addShapes

> **addShapes**: (`shapes`, `index?`) => `void`

Defined in: [types/stores/project.ts:122](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L122)

Adds shapes to the project

#### Parameters

##### shapes

[`Shapes`](Shapes.md)

The shapes to add

##### index?

`number`

The index to insert at, defaulting to the end of the
collection

#### Returns

`void`

***

### addSizeMap

> **addSizeMap**: (`map`) => `void`

Defined in: [types/stores/project.ts:145](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L145)

Adds a size map to the project

#### Parameters

##### map

[`GroupValueMap`](GroupValueMap.md)\<`number`\>

The map to add

#### Returns

`void`

***

### addTable

> **addTable**: (`table`, `index?`) => `void`

Defined in: [types/stores/project.ts:131](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L131)

Adds a table to the project

#### Parameters

##### table

[`Table`](Table.md)

The table to add

##### index?

`number`

The index to insert at, defaulting to the end of the
collection

#### Returns

`void`

***

### addVisibilityMap

> **addVisibilityMap**: (`map`) => `void`

Defined in: [types/stores/project.ts:159](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L159)

Adds a visibility map to the project

#### Parameters

##### map

[`GroupValueMap`](GroupValueMap.md)\<`boolean`\>

The map to add

#### Returns

`void`

***

### clear

> **clear**: () => `void`

Defined in: [types/stores/project.ts:513](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L513)

Replaces the project with a new, empty one

#### Returns

`void`

***

### clearColorMaps

> **clearColorMaps**: () => `void`

Defined in: [types/stores/project.ts:440](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L440)

Removes all color maps from the project

#### Returns

`void`

***

### clearImages

> **clearImages**: () => `void`

Defined in: [types/stores/project.ts:405](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L405)

Removes all images from the project

#### Returns

`void`

***

### clearLabels

> **clearLabels**: () => `void`

Defined in: [types/stores/project.ts:410](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L410)

Removes all labels from the project

#### Returns

`void`

***

### clearLayers

> **clearLayers**: () => `void`

Defined in: [types/stores/project.ts:400](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L400)

Removes all layers from the project

#### Returns

`void`

***

### clearMarkerMaps

> **clearMarkerMaps**: () => `void`

Defined in: [types/stores/project.ts:430](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L430)

Removes all marker maps from the project

#### Returns

`void`

***

### clearOpacityMaps

> **clearOpacityMaps**: () => `void`

Defined in: [types/stores/project.ts:450](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L450)

Removes all opacity maps from the project

#### Returns

`void`

***

### clearPoints

> **clearPoints**: () => `void`

Defined in: [types/stores/project.ts:415](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L415)

Removes all points from the project

#### Returns

`void`

***

### clearShapes

> **clearShapes**: () => `void`

Defined in: [types/stores/project.ts:420](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L420)

Removes all shapes from the project

#### Returns

`void`

***

### clearSizeMaps

> **clearSizeMaps**: () => `void`

Defined in: [types/stores/project.ts:435](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L435)

Removes all size maps from the project

#### Returns

`void`

***

### clearTables

> **clearTables**: () => `void`

Defined in: [types/stores/project.ts:425](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L425)

Removes all tables from the project

#### Returns

`void`

***

### clearVisibilityMaps

> **clearVisibilityMaps**: () => `void`

Defined in: [types/stores/project.ts:445](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L445)

Removes all visibility maps from the project

#### Returns

`void`

***

### deleteColorMap

> **deleteColorMap**: (`mapId`) => `void`

Defined in: [types/stores/project.ts:381](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L381)

Removes a color map from the project

#### Parameters

##### mapId

`string`

The ID of the map to remove

#### Returns

`void`

***

### deleteImage

> **deleteImage**: (`imageId`) => `void`

Defined in: [types/stores/project.ts:332](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L332)

Removes an image from the project

#### Parameters

##### imageId

`string`

The ID of the image to remove

#### Returns

`void`

***

### deleteLabels

> **deleteLabels**: (`labelsId`) => `void`

Defined in: [types/stores/project.ts:339](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L339)

Removes labels from the project

#### Parameters

##### labelsId

`string`

The ID of the labels to remove

#### Returns

`void`

***

### deleteLayer

> **deleteLayer**: (`layerId`) => `void`

Defined in: [types/stores/project.ts:325](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L325)

Removes a layer from the project

#### Parameters

##### layerId

`string`

The ID of the layer to remove

#### Returns

`void`

***

### deleteMarkerMap

> **deleteMarkerMap**: (`mapId`) => `void`

Defined in: [types/stores/project.ts:367](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L367)

Removes a marker map from the project

#### Parameters

##### mapId

`string`

The ID of the map to remove

#### Returns

`void`

***

### deleteOpacityMap

> **deleteOpacityMap**: (`mapId`) => `void`

Defined in: [types/stores/project.ts:395](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L395)

Removes an opacity map from the project

#### Parameters

##### mapId

`string`

The ID of the map to remove

#### Returns

`void`

***

### deletePoints

> **deletePoints**: (`pointsId`) => `void`

Defined in: [types/stores/project.ts:346](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L346)

Removes points from the project

#### Parameters

##### pointsId

`string`

The ID of the points to remove

#### Returns

`void`

***

### deleteShapes

> **deleteShapes**: (`shapesId`) => `void`

Defined in: [types/stores/project.ts:353](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L353)

Removes shapes from the project

#### Parameters

##### shapesId

`string`

The ID of the shapes to remove

#### Returns

`void`

***

### deleteSizeMap

> **deleteSizeMap**: (`mapId`) => `void`

Defined in: [types/stores/project.ts:374](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L374)

Removes a size map from the project

#### Parameters

##### mapId

`string`

The ID of the map to remove

#### Returns

`void`

***

### deleteTable

> **deleteTable**: (`tableId`) => `void`

Defined in: [types/stores/project.ts:360](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L360)

Removes a table from the project

#### Parameters

##### tableId

`string`

The ID of the table to remove

#### Returns

`void`

***

### deleteVisibilityMap

> **deleteVisibilityMap**: (`mapId`) => `void`

Defined in: [types/stores/project.ts:388](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L388)

Removes a visibility map from the project

#### Parameters

##### mapId

`string`

The ID of the map to remove

#### Returns

`void`

***

### moveImage

> **moveImage**: (`imageId`, `newIndex`) => `void`

Defined in: [types/stores/project.ts:294](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L294)

Moves an image of the project to another index

#### Parameters

##### imageId

`string`

The ID of the image to move

##### newIndex

`number`

The index to move the image to

#### Returns

`void`

***

### moveLabels

> **moveLabels**: (`labelsId`, `newIndex`) => `void`

Defined in: [types/stores/project.ts:302](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L302)

Moves labels of the project to another index

#### Parameters

##### labelsId

`string`

The ID of the labels to move

##### newIndex

`number`

The index to move the labels to

#### Returns

`void`

***

### moveLayer

> **moveLayer**: (`layerId`, `newIndex`) => `void`

Defined in: [types/stores/project.ts:286](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L286)

Moves a layer of the project to another index

#### Parameters

##### layerId

`string`

The ID of the layer to move

##### newIndex

`number`

The index to move the layer to

#### Returns

`void`

***

### movePoints

> **movePoints**: (`pointsId`, `newIndex`) => `void`

Defined in: [types/stores/project.ts:310](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L310)

Moves points of the project to another index

#### Parameters

##### pointsId

`string`

The ID of the points to move

##### newIndex

`number`

The index to move the points to

#### Returns

`void`

***

### moveShapes

> **moveShapes**: (`shapesId`, `newIndex`) => `void`

Defined in: [types/stores/project.ts:318](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L318)

Moves shapes of the project to another index

#### Parameters

##### shapesId

`string`

The ID of the shapes to move

##### newIndex

`number`

The index to move the shapes to

#### Returns

`void`

***

### setColorbarsVisibility

> **setColorbarsVisibility**: (`colorbarsVisibility`) => `void`

Defined in: [types/stores/project.ts:506](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L506)

Shows or hides the colorbars

#### Parameters

##### colorbarsVisibility

[`Project`](Project.md)\[`"colorbarsVisibility"`\]

Whether the viewer shows the colorbars of colors
taken from table columns

#### Returns

`void`

***

### setGLOptions

> **setGLOptions**: (`glOptions`) => `void`

Defined in: [types/stores/project.ts:464](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L464)

Sets the project's WebGL render options

#### Parameters

##### glOptions

[`Project`](Project.md)\[`"glOptions"`\]

The WebGL options to apply

#### Returns

`void`

***

### setName

> **setName**: (`name`) => `void`

Defined in: [types/stores/project.ts:77](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L77)

Renames the project

#### Parameters

##### name

`string`

The new project name

#### Returns

`void`

***

### setOSOptions

> **setOSOptions**: (`osOptions`) => `void`

Defined in: [types/stores/project.ts:457](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L457)

Sets the project's OpenSeadragon viewer options

#### Parameters

##### osOptions

[`Project`](Project.md)\[`"osOptions"`\]

The OpenSeadragon options to apply

#### Returns

`void`

***

### setPhysicalUnit

> **setPhysicalUnit**: (`physicalUnit`) => `void`

Defined in: [types/stores/project.ts:489](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L489)

Sets the unit of the project's physical unit size

#### Parameters

##### physicalUnit

[`Project`](Project.md)\[`"physicalUnit"`\]

The physical unit, one of the `PhysicalUnit` names
or any other text, or `undefined` if it is unknown

#### Returns

`void`

***

### setPhysicalUnitSize

> **setPhysicalUnitSize**: (`physicalUnitSize`) => `void`

Defined in: [types/stores/project.ts:481](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L481)

Sets the project's physical unit size

#### Parameters

##### physicalUnitSize

[`Project`](Project.md)\[`"physicalUnitSize"`\]

The physical size of one world unit, in the
physical unit, or `undefined` if it is unknown

#### Returns

`void`

***

### setScalebarVisibility

> **setScalebarVisibility**: (`scalebarVisibility`) => `void`

Defined in: [types/stores/project.ts:496](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L496)

Shows or hides the scalebar

#### Parameters

##### scalebarVisibility

[`Project`](Project.md)\[`"scalebarVisibility"`\]

Whether the viewer shows the scalebar

#### Returns

`void`

***

### setViewerBackgroundColor

> **setViewerBackgroundColor**: (`viewerBackgroundColor`) => `void`

Defined in: [types/stores/project.ts:471](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L471)

Sets the project's viewer background color

#### Parameters

##### viewerBackgroundColor

[`Project`](Project.md)\[`"viewerBackgroundColor"`\]

The viewer background color to apply

#### Returns

`void`

***

### updateColorMap

> **updateColorMap**: (`mapId`, `updates`) => `void`

Defined in: [types/stores/project.ts:253](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L253)

Applies updates to a color map of the project

#### Parameters

##### mapId

`string`

The ID of the map to update

##### updates

`Partial`\<`Omit`\<[`GroupValueMap`](GroupValueMap.md)\<[`Color`](Color.md)\>, `"id"`\>\>

The properties to overwrite on the map

#### Returns

`void`

***

### updateImage

> **updateImage**: (`imageId`, `updates`) => `void`

Defined in: [types/stores/project.ts:182](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L182)

Applies updates to an image of the project

#### Parameters

##### imageId

`string`

The ID of the image to update

##### updates

`Partial`\<`Omit`\<[`Image`](Image.md), `"id"`\>\>

The properties to overwrite on the image

#### Returns

`void`

***

### updateLabels

> **updateLabels**: (`labelsId`, `updates`) => `void`

Defined in: [types/stores/project.ts:190](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L190)

Applies updates to labels of the project

#### Parameters

##### labelsId

`string`

The ID of the labels to update

##### updates

`Partial`\<`Omit`\<[`Labels`](Labels.md), `"id"`\>\>

The properties to overwrite on the labels

#### Returns

`void`

***

### updateLayer

> **updateLayer**: (`layerId`, `updates`) => `void`

Defined in: [types/stores/project.ts:174](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L174)

Applies updates to a layer of the project

#### Parameters

##### layerId

`string`

The ID of the layer to update

##### updates

`Partial`\<`Omit`\<[`Layer`](Layer.md), `"id"`\>\>

The properties to overwrite on the layer

#### Returns

`void`

***

### updateMarkerMap

> **updateMarkerMap**: (`mapId`, `updates`) => `void`

Defined in: [types/stores/project.ts:231](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L231)

Applies updates to a marker map of the project

#### Parameters

##### mapId

`string`

The ID of the map to update

##### updates

`Partial`\<`Omit`\<[`GroupValueMap`](GroupValueMap.md)\<[`Marker`](Marker.md)\>, `"id"`\>\>

The properties to overwrite on the map

#### Returns

`void`

***

### updateOpacityMap

> **updateOpacityMap**: (`mapId`, `updates`) => `void`

Defined in: [types/stores/project.ts:275](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L275)

Applies updates to an opacity map of the project

#### Parameters

##### mapId

`string`

The ID of the map to update

##### updates

`Partial`\<`Omit`\<[`GroupValueMap`](GroupValueMap.md)\<`number`\>, `"id"`\>\>

The properties to overwrite on the map

#### Returns

`void`

***

### updatePoints

> **updatePoints**: (`pointsId`, `updates`) => `void`

Defined in: [types/stores/project.ts:201](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L201)

Applies updates to points of the project

#### Parameters

##### pointsId

`string`

The ID of the points to update

##### updates

`Partial`\<`Omit`\<[`Points`](Points.md), `"id"`\>\>

The properties to overwrite on the points

#### Returns

`void`

***

### updateShapes

> **updateShapes**: (`shapesId`, `updates`) => `void`

Defined in: [types/stores/project.ts:212](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L212)

Applies updates to shapes of the project

#### Parameters

##### shapesId

`string`

The ID of the shapes to update

##### updates

`Partial`\<`Omit`\<[`Shapes`](Shapes.md), `"id"`\>\>

The properties to overwrite on the shapes

#### Returns

`void`

***

### updateSizeMap

> **updateSizeMap**: (`mapId`, `updates`) => `void`

Defined in: [types/stores/project.ts:242](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L242)

Applies updates to a size map of the project

#### Parameters

##### mapId

`string`

The ID of the map to update

##### updates

`Partial`\<`Omit`\<[`GroupValueMap`](GroupValueMap.md)\<`number`\>, `"id"`\>\>

The properties to overwrite on the map

#### Returns

`void`

***

### updateTable

> **updateTable**: (`tableId`, `updates`) => `void`

Defined in: [types/stores/project.ts:223](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L223)

Applies updates to a table of the project

#### Parameters

##### tableId

`string`

The ID of the table to update

##### updates

`Partial`\<`Omit`\<[`Table`](Table.md), `"id"`\>\>

The properties to overwrite on the table

#### Returns

`void`

***

### updateVisibilityMap

> **updateVisibilityMap**: (`mapId`, `updates`) => `void`

Defined in: [types/stores/project.ts:264](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L264)

Applies updates to a visibility map of the project

#### Parameters

##### mapId

`string`

The ID of the map to update

##### updates

`Partial`\<`Omit`\<[`GroupValueMap`](GroupValueMap.md)\<`boolean`\>, `"id"`\>\>

The properties to overwrite on the map

#### Returns

`void`
