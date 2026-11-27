# Function: createAnnotatedDataSource()

> **createAnnotatedDataSource**\<`TType`\>(`rawAnnotatedDataSource`): [`AnnotatedDataSource`](../type-aliases/AnnotatedDataSource.md)\<`TType`\>

Defined in: [model/base.ts:381](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L381)

Creates an [AnnotatedDataSource](../type-aliases/AnnotatedDataSource.md) from a [RawAnnotatedDataSource](../interfaces/RawAnnotatedDataSource.md) by applying [annotatedDataSourceDefaults](../variables/annotatedDataSourceDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

## Parameters

### rawAnnotatedDataSource

[`RawAnnotatedDataSource`](../interfaces/RawAnnotatedDataSource.md)\<`TType`\>

The raw annotated data source

## Returns

[`AnnotatedDataSource`](../type-aliases/AnnotatedDataSource.md)\<`TType`\>

The complete annotated data source with the default values of missing or `undefined` properties
