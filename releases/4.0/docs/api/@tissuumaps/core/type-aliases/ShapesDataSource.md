# Type Alias: ShapesDataSource\<TType\>

> **ShapesDataSource**\<`TType`\> = [`AnnotatedDataSource`](AnnotatedDataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawShapesDataSource`](../interfaces/RawShapesDataSource.md)\<`TType`\>, keyof *typeof* [`shapesDataSourceDefaults`](../variables/shapesDataSourceDefaults.md)\>\> & `Omit`\<[`RawShapesDataSource`](../interfaces/RawShapesDataSource.md)\<`TType`\>, keyof *typeof* [`shapesDataSourceDefaults`](../variables/shapesDataSourceDefaults.md)\>

Defined in: [model/shapes.ts:166](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L166)

A [RawShapesDataSource](../interfaces/RawShapesDataSource.md) with [shapesDataSourceDefaults](../variables/shapesDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
