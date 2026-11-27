# Type Alias: HighlightedItemGroup

> **HighlightedItemGroup** = `object`

Defined in: [types/stores/app.ts:27](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L27)

The items of one group of a labels, points or shapes object, highlighted in the viewer

## Properties

### annotatedObject

> **annotatedObject**: \{ `labelsId`: `string`; \} \| \{ `pointsId`: `string`; \} \| \{ `shapesId`: `string`; \}

Defined in: [types/stores/app.ts:32](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L32)

The object whose items are grouped, by the ID of its labels, points or
shapes; IDs are only unique within each of these lists

***

### group

> **group**: `string`

Defined in: [types/stores/app.ts:39](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L39)

The group, i.e. the cell value as a string

***

### groupBy

> **groupBy**: [`TableColumnRef`](TableColumnRef.md)

Defined in: [types/stores/app.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/app.ts#L36)

The categorical table column
