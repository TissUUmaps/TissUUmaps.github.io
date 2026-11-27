# Type Alias: AnnotatedDataSource\<TType\>

> **AnnotatedDataSource**\<`TType`\> = [`DataSource`](DataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawAnnotatedDataSource`](../interfaces/RawAnnotatedDataSource.md)\<`TType`\>, keyof *typeof* [`annotatedDataSourceDefaults`](../variables/annotatedDataSourceDefaults.md)\>\> & `Omit`\<[`RawAnnotatedDataSource`](../interfaces/RawAnnotatedDataSource.md)\<`TType`\>, keyof *typeof* [`annotatedDataSourceDefaults`](../variables/annotatedDataSourceDefaults.md)\>

Defined in: [model/base.ts:362](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L362)

A [RawAnnotatedDataSource](../interfaces/RawAnnotatedDataSource.md) with [annotatedDataSourceDefaults](../variables/annotatedDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
