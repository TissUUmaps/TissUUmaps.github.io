# Type Alias: NormalizedTIFFImageDataSource

> **NormalizedTIFFImageDataSource** = `Required`\<`Pick`\<[`TIFFImageDataSource`](../interfaces/TIFFImageDataSource.md), keyof *typeof* [`tiffImageDataSourceDefaults`](../variables/tiffImageDataSourceDefaults.md)\>\> & `Omit`\<[`TIFFImageDataSource`](../interfaces/TIFFImageDataSource.md), keyof *typeof* [`tiffImageDataSourceDefaults`](../variables/tiffImageDataSourceDefaults.md)\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts:44](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts#L44)

A [TIFFImageDataSource](../interfaces/TIFFImageDataSource.md) with [tiffImageDataSourceDefaults](../variables/tiffImageDataSourceDefaults.md)
applied and its source normalized
