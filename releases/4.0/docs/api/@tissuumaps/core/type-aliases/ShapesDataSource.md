# Type Alias: ShapesDataSource\<TType\>

> **ShapesDataSource**\<`TType`\> = [`AnnotatedDataSource`](AnnotatedDataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawShapesDataSource`](../interfaces/RawShapesDataSource.md)\<`TType`\>, keyof *typeof* [`shapesDataSourceDefaults`](../variables/shapesDataSourceDefaults.md)\>\> & `Omit`\<[`RawShapesDataSource`](../interfaces/RawShapesDataSource.md)\<`TType`\>, keyof *typeof* [`shapesDataSourceDefaults`](../variables/shapesDataSourceDefaults.md)\>

Defined in: [model/shapes.ts:143](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L143)

A [RawShapesDataSource](../interfaces/RawShapesDataSource.md) with [shapesDataSourceDefaults](../variables/shapesDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
