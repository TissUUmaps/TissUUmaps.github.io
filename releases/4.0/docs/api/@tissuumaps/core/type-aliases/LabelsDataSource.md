# Type Alias: LabelsDataSource\<TType\>

> **LabelsDataSource**\<`TType`\> = [`AnnotatedDataSource`](AnnotatedDataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawLabelsDataSource`](../interfaces/RawLabelsDataSource.md)\<`TType`\>, keyof *typeof* [`labelsDataSourceDefaults`](../variables/labelsDataSourceDefaults.md)\>\> & `Omit`\<[`RawLabelsDataSource`](../interfaces/RawLabelsDataSource.md)\<`TType`\>, keyof *typeof* [`labelsDataSourceDefaults`](../variables/labelsDataSourceDefaults.md)\>

Defined in: [model/labels.ts:93](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/labels.ts#L93)

A [RawLabelsDataSource](../interfaces/RawLabelsDataSource.md) with [labelsDataSourceDefaults](../variables/labelsDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
