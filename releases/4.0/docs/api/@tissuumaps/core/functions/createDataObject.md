# Function: createDataObject()

> **createDataObject**\<`TType`, `TRawDataSource`\>(`rawDataObject`): [`DataObject`](../type-aliases/DataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

Defined in: [model/base.ts:69](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L69)

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

The complete data object with default values applied
