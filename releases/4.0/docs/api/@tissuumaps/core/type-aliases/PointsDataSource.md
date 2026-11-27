# Type Alias: PointsDataSource\<TType\>

> **PointsDataSource**\<`TType`\> = [`AnnotatedDataSource`](AnnotatedDataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawPointsDataSource`](../interfaces/RawPointsDataSource.md)\<`TType`\>, keyof *typeof* [`pointsDataSourceDefaults`](../variables/pointsDataSourceDefaults.md)\>\> & `Omit`\<[`RawPointsDataSource`](../interfaces/RawPointsDataSource.md)\<`TType`\>, keyof *typeof* [`pointsDataSourceDefaults`](../variables/pointsDataSourceDefaults.md)\>

Defined in: [model/points.ts:141](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L141)

A [RawPointsDataSource](../interfaces/RawPointsDataSource.md) with [pointsDataSourceDefaults](../variables/pointsDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
