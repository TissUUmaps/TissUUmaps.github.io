# Type Alias: AppStoreState

> **AppStoreState** = `object`

Defined in: [types/stores/app.ts:45](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L45)

The state of the app store, holding what is not part of the project

## Properties

### activePanelId

> **activePanelId**: `string`

Defined in: [types/stores/app.ts:123](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L123)

The ID of the active panel, i.e. the panel whose tab was selected last

Either the ID of a built-in panel or that of a mounted plugin's panel, as
listed in the plugin documentation. Kept in sync with the panel layout in
both directions: selecting a tab sets it, and setting it brings that
panel's tab to the front and activates its group. The viewer has no tab and
is never the active panel, so focusing it leaves this unchanged.

***

### expandedImageIds

> **expandedImageIds**: `string`[]

Defined in: [types/stores/app.ts:130](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L130)

The IDs of the images whose entries are expanded in the Images panel

Cleared whenever another project is loaded or the project is closed.

***

### expandedLabelsIds

> **expandedLabelsIds**: `string`[]

Defined in: [types/stores/app.ts:137](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L137)

The IDs of the labels whose entries are expanded in the Labels panel

Cleared whenever another project is loaded or the project is closed.

***

### expandedPointsIds

> **expandedPointsIds**: `string`[]

Defined in: [types/stores/app.ts:144](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L144)

The IDs of the points whose entries are expanded in the Points panel

Cleared whenever another project is loaded or the project is closed.

***

### expandedShapesIds

> **expandedShapesIds**: `string`[]

Defined in: [types/stores/app.ts:151](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L151)

The IDs of the shapes whose entries are expanded in the Shapes panel

Cleared whenever another project is loaded or the project is closed.

***

### expandedTableIds

> **expandedTableIds**: `string`[]

Defined in: [types/stores/app.ts:158](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L158)

The IDs of the tables whose entries are expanded in the Tables panel

Cleared whenever another project is loaded or the project is closed.

***

### highlightedItemGroup

> **highlightedItemGroup**: [`HighlightedItemGroup`](HighlightedItemGroup.md) \| `null`

Defined in: [types/stores/app.ts:65](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L65)

The group shown alone in the viewer, hiding every other item of its
object, or `null` for none

***

### imageChannelPreview

> **imageChannelPreview**: [`ImageChannelPreview`](ImageChannelPreview.md) \| `null`

Defined in: [types/stores/app.ts:59](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L59)

The channel previewed on its own while it is hovered, if any

***

### imageDataProviders

> **imageDataProviders**: `Map`\<`string`, [`ImageDataProvider`](../interfaces/ImageDataProvider.md)\<[`ImageDataSource`](ImageDataSource.md), [`ImageData`](../interfaces/ImageData.md)\>\>

Defined in: [types/stores/app.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L68)

The registered image data providers, by data source type

***

### interactionMode

> **interactionMode**: [`InteractionMode`](InteractionMode.md)

Defined in: [types/stores/app.ts:56](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L56)

How mouse events in the viewer are currently interpreted

***

### labelsDataProviders

> **labelsDataProviders**: `Map`\<`string`, [`LabelsDataProvider`](../interfaces/LabelsDataProvider.md)\<[`LabelsDataSource`](LabelsDataSource.md), [`LabelsData`](../interfaces/LabelsData.md)\>\>

Defined in: [types/stores/app.ts:74](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L74)

The registered labels data providers, by data source type

***

### plugins

> **plugins**: `Map`\<`string`, \{ `container?`: `HTMLElement`; `mountable`: `boolean`; `name`: `string`; \}\>

Defined in: [types/stores/app.ts:109](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L109)

The registered plugins, by plugin ID, each as its human-readable name,
whether it has a user interface that can be mounted, and the element its
user interface is mounted into while it is mounted

Written by the plugin registry, which owns the plugin lifecycle and keeps
the plugin objects themselves to itself, so that nothing a plugin owns ends
up frozen in the store.

***

### pointsDataProviders

> **pointsDataProviders**: `Map`\<`string`, [`PointsDataProvider`](../interfaces/PointsDataProvider.md)\<[`PointsDataSource`](PointsDataSource.md), [`PointsData`](../interfaces/PointsData.md)\>\>

Defined in: [types/stores/app.ts:80](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L80)

The registered points data providers, by data source type

***

### projectOpen

> **projectOpen**: `boolean`

Defined in: [types/stores/app.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L53)

Whether a project is open, possibly an empty one; the Project tab shows
its welcome view otherwise

***

### projectProviders

> **projectProviders**: `Map`\<`string`, [`ProjectProvider`](../interfaces/ProjectProvider.md)\>

Defined in: [types/stores/app.ts:98](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L98)

The registered project providers, by project type

***

### shapesDataProviders

> **shapesDataProviders**: `Map`\<`string`, [`ShapesDataProvider`](../interfaces/ShapesDataProvider.md)\<[`ShapesDataSource`](ShapesDataSource.md), [`ShapesData`](../interfaces/ShapesData.md)\>\>

Defined in: [types/stores/app.ts:86](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L86)

The registered shapes data providers, by data source type

***

### tableDataProviders

> **tableDataProviders**: `Map`\<`string`, [`TableDataProvider`](../interfaces/TableDataProvider.md)\<[`TableDataSource`](TableDataSource.md), [`TableData`](../interfaces/TableData.md)\>\>

Defined in: [types/stores/app.ts:92](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L92)

The registered table data providers, by data source type

***

### workspace

> **workspace**: `FileSystemDirectoryHandle` \| `null`

Defined in: [types/stores/app.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L47)

The directory handle of the open workspace, if any
