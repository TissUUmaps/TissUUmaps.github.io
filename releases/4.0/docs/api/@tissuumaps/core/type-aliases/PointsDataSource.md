# Type Alias: PointsDataSource\<TType\>

> **PointsDataSource**\<`TType`\> = [`AnnotatedDataSource`](AnnotatedDataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawPointsDataSource`](../interfaces/RawPointsDataSource.md)\<`TType`\>, keyof *typeof* [`pointsDataSourceDefaults`](../variables/pointsDataSourceDefaults.md)\>\> & `Omit`\<[`RawPointsDataSource`](../interfaces/RawPointsDataSource.md)\<`TType`\>, keyof *typeof* [`pointsDataSourceDefaults`](../variables/pointsDataSourceDefaults.md)\>

Defined in: [model/points.ts:132](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/points.ts#L132)

A [RawPointsDataSource](../interfaces/RawPointsDataSource.md) with [pointsDataSourceDefaults](../variables/pointsDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
