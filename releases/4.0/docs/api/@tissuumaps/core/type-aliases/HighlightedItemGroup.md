# Type Alias: HighlightedItemGroup

> **HighlightedItemGroup** = `object`

Defined in: [types/stores/app.ts:26](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L26)

The items of one group of a labels, points or shapes object, highlighted in the viewer

## Properties

### annotatedObject

> **annotatedObject**: \{ `labelsId`: `string`; \} \| \{ `pointsId`: `string`; \} \| \{ `shapesId`: `string`; \}

Defined in: [types/stores/app.ts:31](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L31)

The object whose items are grouped, by the ID of its labels, points or
shapes; IDs are only unique within each of these lists

***

### group

> **group**: `string`

Defined in: [types/stores/app.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L38)

The group, i.e. the cell value as a string

***

### groupBy

> **groupBy**: [`TableColumnRef`](TableColumnRef.md)

Defined in: [types/stores/app.ts:35](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/app.ts#L35)

The categorical table column
