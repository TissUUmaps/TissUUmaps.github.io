# Function: createAnnotatedDataSource()

> **createAnnotatedDataSource**\<`TType`\>(`rawAnnotatedDataSource`): [`AnnotatedDataSource`](../type-aliases/AnnotatedDataSource.md)\<`TType`\>

Defined in: [model/base.ts:361](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L361)

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

The complete annotated data source with default values applied
