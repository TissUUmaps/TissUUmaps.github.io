# Type Alias: LabelsDataSource\<TType\>

> **LabelsDataSource**\<`TType`\> = [`AnnotatedDataSource`](AnnotatedDataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawLabelsDataSource`](../interfaces/RawLabelsDataSource.md)\<`TType`\>, keyof *typeof* [`labelsDataSourceDefaults`](../variables/labelsDataSourceDefaults.md)\>\> & `Omit`\<[`RawLabelsDataSource`](../interfaces/RawLabelsDataSource.md)\<`TType`\>, keyof *typeof* [`labelsDataSourceDefaults`](../variables/labelsDataSourceDefaults.md)\>

Defined in: [model/labels.ts:94](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/labels.ts#L94)

A [RawLabelsDataSource](../interfaces/RawLabelsDataSource.md) with [labelsDataSourceDefaults](../variables/labelsDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
