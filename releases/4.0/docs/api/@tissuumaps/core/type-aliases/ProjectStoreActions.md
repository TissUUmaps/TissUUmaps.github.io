# Type Alias: ProjectStoreActions

> **ProjectStoreActions** = `object`

Defined in: [types/stores/project.ts:55](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L55)

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

Defined in: [types/stores/project.ts:136](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L136)

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

Defined in: [types/stores/project.ts:79](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L79)

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

Defined in: [types/stores/project.ts:88](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L88)

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

Defined in: [types/stores/project.ts:70](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L70)

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

Defined in: [types/stores/project.ts:122](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L122)

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

Defined in: [types/stores/project.ts:150](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L150)

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

Defined in: [types/stores/project.ts:97](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L97)

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

Defined in: [types/stores/project.ts:106](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L106)

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

Defined in: [types/stores/project.ts:129](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L129)

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

Defined in: [types/stores/project.ts:115](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L115)

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

Defined in: [types/stores/project.ts:143](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L143)

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

Defined in: [types/stores/project.ts:462](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L462)

Replaces the project with a new, empty one

#### Returns

`void`

***

### clearColorMaps

> **clearColorMaps**: () => `void`

Defined in: [types/stores/project.ts:424](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L424)

Removes all color maps from the project

#### Returns

`void`

***

### clearImages

> **clearImages**: () => `void`

Defined in: [types/stores/project.ts:389](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L389)

Removes all images from the project

#### Returns

`void`

***

### clearLabels

> **clearLabels**: () => `void`

Defined in: [types/stores/project.ts:394](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L394)

Removes all labels from the project

#### Returns

`void`

***

### clearLayers

> **clearLayers**: () => `void`

Defined in: [types/stores/project.ts:384](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L384)

Removes all layers from the project

#### Returns

`void`

***

### clearMarkerMaps

> **clearMarkerMaps**: () => `void`

Defined in: [types/stores/project.ts:414](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L414)

Removes all marker maps from the project

#### Returns

`void`

***

### clearOpacityMaps

> **clearOpacityMaps**: () => `void`

Defined in: [types/stores/project.ts:434](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L434)

Removes all opacity maps from the project

#### Returns

`void`

***

### clearPoints

> **clearPoints**: () => `void`

Defined in: [types/stores/project.ts:399](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L399)

Removes all points from the project

#### Returns

`void`

***

### clearShapes

> **clearShapes**: () => `void`

Defined in: [types/stores/project.ts:404](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L404)

Removes all shapes from the project

#### Returns

`void`

***

### clearSizeMaps

> **clearSizeMaps**: () => `void`

Defined in: [types/stores/project.ts:419](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L419)

Removes all size maps from the project

#### Returns

`void`

***

### clearTables

> **clearTables**: () => `void`

Defined in: [types/stores/project.ts:409](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L409)

Removes all tables from the project

#### Returns

`void`

***

### clearVisibilityMaps

> **clearVisibilityMaps**: () => `void`

Defined in: [types/stores/project.ts:429](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L429)

Removes all visibility maps from the project

#### Returns

`void`

***

### deleteColorMap

> **deleteColorMap**: (`mapId`) => `void`

Defined in: [types/stores/project.ts:365](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L365)

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

Defined in: [types/stores/project.ts:316](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L316)

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

Defined in: [types/stores/project.ts:323](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L323)

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

Defined in: [types/stores/project.ts:309](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L309)

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

Defined in: [types/stores/project.ts:351](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L351)

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

Defined in: [types/stores/project.ts:379](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L379)

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

Defined in: [types/stores/project.ts:330](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L330)

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

Defined in: [types/stores/project.ts:337](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L337)

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

Defined in: [types/stores/project.ts:358](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L358)

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

Defined in: [types/stores/project.ts:344](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L344)

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

Defined in: [types/stores/project.ts:372](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L372)

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

Defined in: [types/stores/project.ts:278](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L278)

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

Defined in: [types/stores/project.ts:286](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L286)

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

Defined in: [types/stores/project.ts:270](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L270)

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

Defined in: [types/stores/project.ts:294](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L294)

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

Defined in: [types/stores/project.ts:302](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L302)

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

### setGLOptions

> **setGLOptions**: (`glOptions`) => `void`

Defined in: [types/stores/project.ts:448](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L448)

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

Defined in: [types/stores/project.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L61)

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

Defined in: [types/stores/project.ts:441](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L441)

Sets the project's OpenSeadragon viewer options

#### Parameters

##### osOptions

[`Project`](Project.md)\[`"osOptions"`\]

The OpenSeadragon options to apply

#### Returns

`void`

***

### setViewerBackgroundColor

> **setViewerBackgroundColor**: (`viewerBackgroundColor`) => `void`

Defined in: [types/stores/project.ts:455](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L455)

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

Defined in: [types/stores/project.ts:237](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L237)

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

Defined in: [types/stores/project.ts:166](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L166)

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

Defined in: [types/stores/project.ts:174](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L174)

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

Defined in: [types/stores/project.ts:158](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L158)

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

Defined in: [types/stores/project.ts:215](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L215)

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

Defined in: [types/stores/project.ts:259](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L259)

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

Defined in: [types/stores/project.ts:185](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L185)

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

Defined in: [types/stores/project.ts:196](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L196)

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

Defined in: [types/stores/project.ts:226](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L226)

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

Defined in: [types/stores/project.ts:207](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L207)

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

Defined in: [types/stores/project.ts:248](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L248)

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
