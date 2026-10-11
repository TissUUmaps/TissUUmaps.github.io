# Type Alias: AnnotatedDataSource\<TType\>

> **AnnotatedDataSource**\<`TType`\> = [`DataSource`](DataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawAnnotatedDataSource`](../interfaces/RawAnnotatedDataSource.md)\<`TType`\>, keyof *typeof* [`annotatedDataSourceDefaults`](../variables/annotatedDataSourceDefaults.md)\>\> & `Omit`\<[`RawAnnotatedDataSource`](../interfaces/RawAnnotatedDataSource.md)\<`TType`\>, keyof *typeof* [`annotatedDataSourceDefaults`](../variables/annotatedDataSourceDefaults.md)\>

Defined in: [model/base.ts:342](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L342)

A [RawAnnotatedDataSource](../interfaces/RawAnnotatedDataSource.md) with [annotatedDataSourceDefaults](../variables/annotatedDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
