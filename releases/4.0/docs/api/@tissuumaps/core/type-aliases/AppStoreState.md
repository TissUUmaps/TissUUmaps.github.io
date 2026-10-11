# Type Alias: AppStoreState

> **AppStoreState** = `object`

Defined in: [types/stores/app.ts:44](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L44)

The state of the app store, holding what is not part of the project

## Properties

### activePanelId

> **activePanelId**: `string`

Defined in: [types/stores/app.ts:119](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L119)

The ID of the active panel, i.e. the panel whose tab was selected last

Either the ID of a built-in panel or that of a mounted plugin's panel, as
listed in the plugin documentation. Kept in sync with the panel layout in
both directions: selecting a tab sets it, and setting it brings that
panel's tab to the front and activates its group. The viewer has no tab and
is never the active panel, so focusing it leaves this unchanged.

***

### expandedImageIds

> **expandedImageIds**: `string`[]

Defined in: [types/stores/app.ts:126](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L126)

The IDs of the images whose entries are expanded in the Images panel

Cleared whenever another project is loaded or the project is closed.

***

### expandedLabelsIds

> **expandedLabelsIds**: `string`[]

Defined in: [types/stores/app.ts:133](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L133)

The IDs of the labels whose entries are expanded in the Labels panel

Cleared whenever another project is loaded or the project is closed.

***

### expandedPointsIds

> **expandedPointsIds**: `string`[]

Defined in: [types/stores/app.ts:140](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L140)

The IDs of the points whose entries are expanded in the Points panel

Cleared whenever another project is loaded or the project is closed.

***

### expandedShapesIds

> **expandedShapesIds**: `string`[]

Defined in: [types/stores/app.ts:147](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L147)

The IDs of the shapes whose entries are expanded in the Shapes panel

Cleared whenever another project is loaded or the project is closed.

***

### expandedTableIds

> **expandedTableIds**: `string`[]

Defined in: [types/stores/app.ts:154](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L154)

The IDs of the tables whose entries are expanded in the Tables panel

Cleared whenever another project is loaded or the project is closed.

***

### highlightedItemGroup

> **highlightedItemGroup**: [`HighlightedItemGroup`](HighlightedItemGroup.md) \| `null`

Defined in: [types/stores/app.ts:64](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L64)

The group shown alone in the viewer, hiding every other item of its
object, or `null` for none

***

### imageChannelPreview

> **imageChannelPreview**: [`ImageChannelPreview`](ImageChannelPreview.md) \| `null`

Defined in: [types/stores/app.ts:58](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L58)

The channel previewed on its own while it is hovered, if any

***

### imageDataProviders

> **imageDataProviders**: `Map`\<`string`, [`ImageDataProvider`](../interfaces/ImageDataProvider.md)\<[`ImageDataSource`](ImageDataSource.md), [`ImageData`](../interfaces/ImageData.md)\>\>

Defined in: [types/stores/app.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L67)

The registered image data providers, by data source type

***

### interactionMode

> **interactionMode**: [`InteractionMode`](InteractionMode.md)

Defined in: [types/stores/app.ts:55](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L55)

How mouse events in the viewer are currently interpreted

***

### labelsDataProviders

> **labelsDataProviders**: `Map`\<`string`, [`LabelsDataProvider`](../interfaces/LabelsDataProvider.md)\<[`LabelsDataSource`](LabelsDataSource.md), [`LabelsData`](../interfaces/LabelsData.md)\>\>

Defined in: [types/stores/app.ts:73](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L73)

The registered labels data providers, by data source type

***

### plugins

> **plugins**: `Map`\<`string`, \{ `container?`: `HTMLElement`; `mountable`: `boolean`; `name`: `string`; \}\>

Defined in: [types/stores/app.ts:105](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L105)

The registered plugins, by plugin ID, each as its human-readable name,
whether it has a user interface that can be mounted, and the element its
user interface is mounted into while it is mounted

Written by the plugin registry, which owns the plugin lifecycle and keeps
the plugin objects themselves to itself, so that nothing a plugin owns ends
up frozen in the store.

***

### pointsDataProviders

> **pointsDataProviders**: `Map`\<`string`, [`PointsDataProvider`](../interfaces/PointsDataProvider.md)\<[`PointsDataSource`](PointsDataSource.md), [`PointsData`](../interfaces/PointsData.md)\>\>

Defined in: [types/stores/app.ts:79](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L79)

The registered points data providers, by data source type

***

### projectOpen

> **projectOpen**: `boolean`

Defined in: [types/stores/app.ts:52](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L52)

Whether a project is open, possibly an empty one; the Project tab shows
its welcome view otherwise

***

### shapesDataProviders

> **shapesDataProviders**: `Map`\<`string`, [`ShapesDataProvider`](../interfaces/ShapesDataProvider.md)\<[`ShapesDataSource`](ShapesDataSource.md), [`ShapesData`](../interfaces/ShapesData.md)\>\>

Defined in: [types/stores/app.ts:85](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L85)

The registered shapes data providers, by data source type

***

### tableDataProviders

> **tableDataProviders**: `Map`\<`string`, [`TableDataProvider`](../interfaces/TableDataProvider.md)\<[`TableDataSource`](TableDataSource.md), [`TableData`](../interfaces/TableData.md)\>\>

Defined in: [types/stores/app.ts:91](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L91)

The registered table data providers, by data source type

***

### workspace

> **workspace**: `FileSystemDirectoryHandle` \| `null`

Defined in: [types/stores/app.ts:46](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L46)

The directory handle of the open workspace, if any
