# Type Alias: AppStoreActions

> **AppStoreActions** = `object`

Defined in: [types/stores/app.ts:169](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L169)

The actions of the app store

Registering a data provider for a data source type that is already taken
replaces the previously registered provider, which invalidates the data
loaded through it. Registering a project provider for a project type that is
already taken replaces the previously registered project provider.

## Properties

### registerImageDataProvider

> **registerImageDataProvider**: (`type`, `dataProvider`) => `void`

Defined in: [types/stores/app.ts:265](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L265)

Registers an image data provider

#### Parameters

##### type

`string`

The data source type the provider handles

##### dataProvider

[`ImageDataProvider`](../interfaces/ImageDataProvider.md)\<[`ImageDataSource`](ImageDataSource.md), [`ImageData`](../interfaces/ImageData.md)\>

The data provider to register

#### Returns

`void`

***

### registerLabelsDataProvider

> **registerLabelsDataProvider**: (`type`, `dataProvider`) => `void`

Defined in: [types/stores/app.ts:276](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L276)

Registers a labels data provider

#### Parameters

##### type

`string`

The data source type the provider handles

##### dataProvider

[`LabelsDataProvider`](../interfaces/LabelsDataProvider.md)\<[`LabelsDataSource`](LabelsDataSource.md), [`LabelsData`](../interfaces/LabelsData.md)\>

The data provider to register

#### Returns

`void`

***

### registerPointsDataProvider

> **registerPointsDataProvider**: (`type`, `dataProvider`) => `void`

Defined in: [types/stores/app.ts:287](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L287)

Registers a points data provider

#### Parameters

##### type

`string`

The data source type the provider handles

##### dataProvider

[`PointsDataProvider`](../interfaces/PointsDataProvider.md)\<[`PointsDataSource`](PointsDataSource.md), [`PointsData`](../interfaces/PointsData.md)\>

The data provider to register

#### Returns

`void`

***

### registerProjectProvider

> **registerProjectProvider**: (`type`, `projectProvider`) => `void`

Defined in: [types/stores/app.ts:320](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L320)

Registers a project provider

#### Parameters

##### type

`string`

The project type the provider handles

##### projectProvider

[`ProjectProvider`](../interfaces/ProjectProvider.md)

The project provider to register

#### Returns

`void`

***

### registerShapesDataProvider

> **registerShapesDataProvider**: (`type`, `dataProvider`) => `void`

Defined in: [types/stores/app.ts:298](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L298)

Registers a shapes data provider

#### Parameters

##### type

`string`

The data source type the provider handles

##### dataProvider

[`ShapesDataProvider`](../interfaces/ShapesDataProvider.md)\<[`ShapesDataSource`](ShapesDataSource.md), [`ShapesData`](../interfaces/ShapesData.md)\>

The data provider to register

#### Returns

`void`

***

### registerTableDataProvider

> **registerTableDataProvider**: (`type`, `dataProvider`) => `void`

Defined in: [types/stores/app.ts:309](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L309)

Registers a table data provider

#### Parameters

##### type

`string`

The data source type the provider handles

##### dataProvider

[`TableDataProvider`](../interfaces/TableDataProvider.md)\<[`TableDataSource`](TableDataSource.md), [`TableData`](../interfaces/TableData.md)\>

The data provider to register

#### Returns

`void`

***

### setActivePanelId

> **setActivePanelId**: (`activePanelId`) => `void`

Defined in: [types/stores/app.ts:222](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L222)

Makes a panel the active panel, bringing its tab to the front

An ID that does not identify a panel of the layout, e.g. that of the viewer
or of a plugin that is not mounted, is reverted, leaving the layout
unchanged.

#### Parameters

##### activePanelId

`string`

The ID of the panel, see
[AppStoreState.activePanelId](AppStoreState.md#activepanelid)

#### Returns

`void`

***

### setExpandedImageIds

> **setExpandedImageIds**: (`expandedImageIds`) => `void`

Defined in: [types/stores/app.ts:229](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L229)

Sets the images whose entries are expanded in the Images panel

#### Parameters

##### expandedImageIds

`string`[]

The IDs of the images, in any order

#### Returns

`void`

***

### setExpandedLabelsIds

> **setExpandedLabelsIds**: (`expandedLabelsIds`) => `void`

Defined in: [types/stores/app.ts:236](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L236)

Sets the labels whose entries are expanded in the Labels panel

#### Parameters

##### expandedLabelsIds

`string`[]

The IDs of the labels, in any order

#### Returns

`void`

***

### setExpandedPointsIds

> **setExpandedPointsIds**: (`expandedPointsIds`) => `void`

Defined in: [types/stores/app.ts:243](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L243)

Sets the points whose entries are expanded in the Points panel

#### Parameters

##### expandedPointsIds

`string`[]

The IDs of the points, in any order

#### Returns

`void`

***

### setExpandedShapesIds

> **setExpandedShapesIds**: (`expandedShapesIds`) => `void`

Defined in: [types/stores/app.ts:250](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L250)

Sets the shapes whose entries are expanded in the Shapes panel

#### Parameters

##### expandedShapesIds

`string`[]

The IDs of the shapes, in any order

#### Returns

`void`

***

### setExpandedTableIds

> **setExpandedTableIds**: (`expandedTableIds`) => `void`

Defined in: [types/stores/app.ts:257](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L257)

Sets the tables whose entries are expanded in the Tables panel

#### Parameters

##### expandedTableIds

`string`[]

The IDs of the tables, in any order

#### Returns

`void`

***

### setHighlightedItemGroup

> **setHighlightedItemGroup**: (`highlightedItemGroup`) => `void`

Defined in: [types/stores/app.ts:208](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L208)

Highlights a group of an object in the viewer

#### Parameters

##### highlightedItemGroup

[`HighlightedItemGroup`](HighlightedItemGroup.md) \| `null`

The group to highlight, or `null` to highlight
none

#### Returns

`void`

***

### setImageChannelPreview

> **setImageChannelPreview**: (`imageChannelPreview`) => `void`

Defined in: [types/stores/app.ts:191](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L191)

Previews a single image channel on its own, or ends the preview

#### Parameters

##### imageChannelPreview

[`ImageChannelPreview`](ImageChannelPreview.md) \| `null`

The image and channel to preview, or `null` to
end the preview

#### Returns

`void`

***

### setInteractionMode

> **setInteractionMode**: (`interactionMode`) => `void`

Defined in: [types/stores/app.ts:183](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L183)

Sets how mouse events in the viewer are interpreted

#### Parameters

##### interactionMode

[`InteractionMode`](InteractionMode.md)

The interaction mode to switch to

#### Returns

`void`

***

### setProjectOpen

> **setProjectOpen**: (`projectOpen`) => `void`

Defined in: [types/stores/app.ts:200](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L200)

Marks a project as open, or as closed

#### Parameters

##### projectOpen

`boolean`

Whether a project is open

#### Returns

`void`

***

### setWorkspace

> **setWorkspace**: (`workspace`) => `void`

Defined in: [types/stores/app.ts:176](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L176)

Opens a workspace, against which local data source paths are resolved

#### Parameters

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the workspace, or `null` to
close the open workspace

#### Returns

`void`
