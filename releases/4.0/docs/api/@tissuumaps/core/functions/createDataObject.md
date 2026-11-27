# Function: createDataObject()

> **createDataObject**\<`TType`, `TRawDataSource`\>(`rawDataObject`): [`DataObject`](../type-aliases/DataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

Defined in: [model/base.ts:86](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L86)

Creates a [DataObject](../type-aliases/DataObject.md) from a [RawDataObject](../interfaces/RawDataObject.md) by applying [dataObjectDefaults](../variables/dataObjectDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

### TRawDataSource

`TRawDataSource` *extends* [`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>

## Parameters

### rawDataObject

[`RawDataObject`](../interfaces/RawDataObject.md)\<`TRawDataSource`\>

The raw data object

## Returns

[`DataObject`](../type-aliases/DataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

The complete data object with the default values of missing or `undefined` properties
