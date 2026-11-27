# Type Alias: ImageDataSource\<TType\>

> **ImageDataSource**\<`TType`\> = [`DataSource`](DataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawImageDataSource`](../interfaces/RawImageDataSource.md)\<`TType`\>, keyof *typeof* [`imageDataSourceDefaults`](../variables/imageDataSourceDefaults.md)\>\> & `Omit`\<[`RawImageDataSource`](../interfaces/RawImageDataSource.md)\<`TType`\>, keyof *typeof* [`imageDataSourceDefaults`](../variables/imageDataSourceDefaults.md)\>

Defined in: [model/image.ts:168](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L168)

A [RawImageDataSource](../interfaces/RawImageDataSource.md) with [imageDataSourceDefaults](../variables/imageDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
