# Type Alias: NormalizedOpenSeadragonImageDataSource

> **NormalizedOpenSeadragonImageDataSource** = `Required`\<`Pick`\<[`OpenSeadragonImageDataSource`](../interfaces/OpenSeadragonImageDataSource.md), keyof *typeof* [`openSeadragonImageDataSourceDefaults`](../variables/openSeadragonImageDataSourceDefaults.md)\>\> & `Omit`\<`Omit`\<[`OpenSeadragonImageDataSource`](../interfaces/OpenSeadragonImageDataSource.md), keyof *typeof* [`openSeadragonImageDataSourceDefaults`](../variables/openSeadragonImageDataSourceDefaults.md)\>, `"source"` \| `"tileSource"`\> & \{ `source`: `string`; `tileSource?`: `undefined`; \} \| \{ `source?`: `undefined`; `tileSource`: [`TileSourceConfig`](../../core/type-aliases/TileSourceConfig.md); \}

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts:13](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts#L13)
