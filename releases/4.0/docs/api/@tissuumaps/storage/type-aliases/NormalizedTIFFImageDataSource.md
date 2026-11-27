# Type Alias: NormalizedTIFFImageDataSource

> **NormalizedTIFFImageDataSource** = `Required`\<`Pick`\<[`TIFFImageDataSource`](../interfaces/TIFFImageDataSource.md), keyof *typeof* [`tiffImageDataSourceDefaults`](../variables/tiffImageDataSourceDefaults.md)\>\> & `Omit`\<[`TIFFImageDataSource`](../interfaces/TIFFImageDataSource.md), keyof *typeof* [`tiffImageDataSourceDefaults`](../variables/tiffImageDataSourceDefaults.md)\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts:44](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts#L44)

A [TIFFImageDataSource](../interfaces/TIFFImageDataSource.md) with [tiffImageDataSourceDefaults](../variables/tiffImageDataSourceDefaults.md)
applied and its source normalized
