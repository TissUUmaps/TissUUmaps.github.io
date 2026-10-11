# Type Alias: ImageDataSource\<TType\>

> **ImageDataSource**\<`TType`\> = [`DataSource`](DataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawImageDataSource`](../interfaces/RawImageDataSource.md)\<`TType`\>, keyof *typeof* [`imageDataSourceDefaults`](../variables/imageDataSourceDefaults.md)\>\> & `Omit`\<[`RawImageDataSource`](../interfaces/RawImageDataSource.md)\<`TType`\>, keyof *typeof* [`imageDataSourceDefaults`](../variables/imageDataSourceDefaults.md)\>

Defined in: [model/image.ts:167](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L167)

A [RawImageDataSource](../interfaces/RawImageDataSource.md) with [imageDataSourceDefaults](../variables/imageDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
