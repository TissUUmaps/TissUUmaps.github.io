# Type Alias: DataStoreState

> **DataStoreState** = `object`

Defined in: [types/stores/data.ts:33](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/data.ts#L33)

The state of the data store, holding the data of the current project

Each map is keyed by object ID; objects whose data is neither loaded nor
being loaded are absent.

## Properties

### imageDataRefs

> **imageDataRefs**: `Map`\<`string`, [`DataRef`](DataRef.md)\<[`ImageData`](../interfaces/ImageData.md)\>\>

Defined in: [types/stores/data.ts:35](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/data.ts#L35)

The data references of the project's images

***

### labelsDataRefs

> **labelsDataRefs**: `Map`\<`string`, [`DataRef`](DataRef.md)\<[`LabelsData`](../interfaces/LabelsData.md)\>\>

Defined in: [types/stores/data.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/data.ts#L38)

The data references of the project's labels

***

### pointsDataRefs

> **pointsDataRefs**: `Map`\<`string`, [`DataRef`](DataRef.md)\<[`PointsData`](../interfaces/PointsData.md)\>\>

Defined in: [types/stores/data.ts:41](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/data.ts#L41)

The data references of the project's points

***

### shapesDataRefs

> **shapesDataRefs**: `Map`\<`string`, [`DataRef`](DataRef.md)\<[`ShapesData`](../interfaces/ShapesData.md)\>\>

Defined in: [types/stores/data.ts:44](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/data.ts#L44)

The data references of the project's shapes

***

### tableDataRefs

> **tableDataRefs**: `Map`\<`string`, [`DataRef`](DataRef.md)\<[`TableData`](../interfaces/TableData.md)\>\>

Defined in: [types/stores/data.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/data.ts#L47)

The data references of the project's tables
