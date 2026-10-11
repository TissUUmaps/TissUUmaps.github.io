# @tissuumaps/storage

Official data provider distribution for
[TissUUmaps](https://github.com/TissUUmaps/TissUUmaps): implementations of the
data provider interfaces of `@tissuumaps/core` for images, labels, points,
shapes and tables.

## Installation

```sh
npm install @tissuumaps/storage
```

Its peer dependencies `@tissuumaps/core`, `openseadragon`, `ome-zarr.js` and
`zarrita` are installed automatically by npm 7+, pnpm and Bun; with Yarn,
install them yourself.

## Entry points

Each format has its own entry point, so that only the providers you use are
bundled; the package root exports all of them.

| Entry point                         | Data providers                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------------- |
| `@tissuumaps/storage/csv`           | [CSV](https://tissuumaps.github.io/docs/supported-data/csv/) tables                   |
| `@tissuumaps/storage/geojson`       | [GeoJSON](https://tissuumaps.github.io/docs/supported-data/geojson/) shapes           |
| `@tissuumaps/storage/hdf5`          | [HDF5](https://tissuumaps.github.io/docs/supported-data/hdf5/) tables                 |
| `@tissuumaps/storage/ome-zarr`      | [OME-Zarr](https://tissuumaps.github.io/docs/supported-data/ome-zarr/) images, labels |
| `@tissuumaps/storage/openseadragon` | OpenSeadragon [images](https://tissuumaps.github.io/docs/supported-data/image/)       |
| `@tissuumaps/storage/parquet`       | [Parquet](https://tissuumaps.github.io/docs/supported-data/parquet/) shapes, tables   |
| `@tissuumaps/storage/table`         | [points from tables](https://tissuumaps.github.io/docs/supported-data/table/)         |
| `@tissuumaps/storage/tiff`          | [TIFF](https://tissuumaps.github.io/docs/supported-data/tiff/) images, labels         |
| `@tissuumaps/storage/zarr`          | [Zarr](https://tissuumaps.github.io/docs/supported-data/zarr/) tables                 |

The CSV, GeoJSON, HDF5 and Parquet providers parse, and the TIFF providers
decode, in web workers loaded from `blob:` URLs. Under a Content Security Policy,
allow them with `worker-src blob:`. The HDF5 provider, and the Parquet and TIFF
providers for some compressions, run WebAssembly in these workers; allow it with
`script-src 'wasm-unsafe-eval'`.

## Documentation

- [API reference](https://tissuumaps.github.io/docs/api/@tissuumaps/storage/)
- [Supported data](https://tissuumaps.github.io/docs/supported-data/)

## Known issues

### geotiff needs to be patched

geotiff 3.0.5 misreads deferred tag values of big-endian TIFFs, and corrupts
LZW-compressed tiles that it decodes on the main thread. The fixes are merged
upstream but not yet released. Until they are, apply
[`geotiff@3.0.5.patch`](https://github.com/TissUUmaps/TissUUmaps/blob/8a972b9de0b86f0ace08ca41541a746ee2405022/patches/geotiff@3.0.5.patch)
to geotiff 3.0.5 in your project. This package depends on exactly that
version, so the patch applies as long as your project does not override it.
With pnpm, save it as
`patches/geotiff@3.0.5.patch` and register it in `pnpm-workspace.yaml`:

```yaml
patchedDependencies:
  geotiff@3.0.5: patches/geotiff@3.0.5.patch
```

The patch is a git diff relative to the geotiff package root, so it can also
be applied with other package managers' patching mechanisms. See
[Dependencies](https://tissuumaps.github.io/docs/development/dependencies/)
for details.

## Classes

- [CSVTableData](classes/CSVTableData.md)
- [CSVTableDataProvider](classes/CSVTableDataProvider.md)
- [GeoJSONShapesData](classes/GeoJSONShapesData.md)
- [GeoJSONShapesDataProvider](classes/GeoJSONShapesDataProvider.md)
- [HDF5TableData](classes/HDF5TableData.md)
- [HDF5TableDataProvider](classes/HDF5TableDataProvider.md)
- [OMEZarrImageData](classes/OMEZarrImageData.md)
- [OMEZarrImageDataProvider](classes/OMEZarrImageDataProvider.md)
- [OMEZarrLabelsData](classes/OMEZarrLabelsData.md)
- [OMEZarrLabelsDataProvider](classes/OMEZarrLabelsDataProvider.md)
- [OpenSeadragonImageData](classes/OpenSeadragonImageData.md)
- [OpenSeadragonImageDataProvider](classes/OpenSeadragonImageDataProvider.md)
- [ParquetShapesData](classes/ParquetShapesData.md)
- [ParquetShapesDataProvider](classes/ParquetShapesDataProvider.md)
- [ParquetTableData](classes/ParquetTableData.md)
- [ParquetTableDataProvider](classes/ParquetTableDataProvider.md)
- [TablePointsData](classes/TablePointsData.md)
- [TablePointsDataProvider](classes/TablePointsDataProvider.md)
- [TIFFImageData](classes/TIFFImageData.md)
- [TIFFImageDataProvider](classes/TIFFImageDataProvider.md)
- [TIFFLabelsData](classes/TIFFLabelsData.md)
- [TIFFLabelsDataProvider](classes/TIFFLabelsDataProvider.md)
- [ZarrTableData](classes/ZarrTableData.md)
- [ZarrTableDataProvider](classes/ZarrTableDataProvider.md)

## Interfaces

- [CSVTableDataSource](interfaces/CSVTableDataSource.md)
- [GeoJSONShapesDataSource](interfaces/GeoJSONShapesDataSource.md)
- [HDF5TableDataSource](interfaces/HDF5TableDataSource.md)
- [OMEZarrImageDataSource](interfaces/OMEZarrImageDataSource.md)
- [OMEZarrLabelsDataSource](interfaces/OMEZarrLabelsDataSource.md)
- [OpenSeadragonImageDataSource](interfaces/OpenSeadragonImageDataSource.md)
- [ParquetShapesDataSource](interfaces/ParquetShapesDataSource.md)
- [ParquetTableDataSource](interfaces/ParquetTableDataSource.md)
- [TablePointsDataSource](interfaces/TablePointsDataSource.md)
- [TIFFImageDataSource](interfaces/TIFFImageDataSource.md)
- [TIFFLabelsDataSource](interfaces/TIFFLabelsDataSource.md)
- [ZarrTableDataSource](interfaces/ZarrTableDataSource.md)

## Type Aliases

- [NormalizedCSVTableDataSource](type-aliases/NormalizedCSVTableDataSource.md)
- [NormalizedGeoJSONShapesDataSource](type-aliases/NormalizedGeoJSONShapesDataSource.md)
- [NormalizedHDF5TableDataSource](type-aliases/NormalizedHDF5TableDataSource.md)
- [NormalizedOMEZarrImageDataSource](type-aliases/NormalizedOMEZarrImageDataSource.md)
- [NormalizedOMEZarrLabelsDataSource](type-aliases/NormalizedOMEZarrLabelsDataSource.md)
- [NormalizedOpenSeadragonImageDataSource](type-aliases/NormalizedOpenSeadragonImageDataSource.md)
- [NormalizedParquetShapesDataSource](type-aliases/NormalizedParquetShapesDataSource.md)
- [NormalizedParquetTableDataSource](type-aliases/NormalizedParquetTableDataSource.md)
- [NormalizedTablePointsDataSource](type-aliases/NormalizedTablePointsDataSource.md)
- [NormalizedTIFFImageDataSource](type-aliases/NormalizedTIFFImageDataSource.md)
- [NormalizedTIFFLabelsDataSource](type-aliases/NormalizedTIFFLabelsDataSource.md)
- [NormalizedZarrTableDataSource](type-aliases/NormalizedZarrTableDataSource.md)
- [ParquetSource](type-aliases/ParquetSource.md)
- [TIFFChannel](type-aliases/TIFFChannel.md)
- [TIFFChannelMetadata](type-aliases/TIFFChannelMetadata.md)

## Variables

- [csvTableDataSourceDefaults](variables/csvTableDataSourceDefaults.md)
- [csvTableDataSourceType](variables/csvTableDataSourceType.md)
- [geoJSONShapesDataSourceDefaults](variables/geoJSONShapesDataSourceDefaults.md)
- [geoJSONShapesDataSourceType](variables/geoJSONShapesDataSourceType.md)
- [hdf5TableDataSourceDefaults](variables/hdf5TableDataSourceDefaults.md)
- [hdf5TableDataSourceType](variables/hdf5TableDataSourceType.md)
- [omeZarrImageDataSourceDefaults](variables/omeZarrImageDataSourceDefaults.md)
- [omeZarrImageDataSourceType](variables/omeZarrImageDataSourceType.md)
- [omeZarrLabelsDataSourceDefaults](variables/omeZarrLabelsDataSourceDefaults.md)
- [omeZarrLabelsDataSourceType](variables/omeZarrLabelsDataSourceType.md)
- [openSeadragonImageDataSourceDefaults](variables/openSeadragonImageDataSourceDefaults.md)
- [openSeadragonImageDataSourceType](variables/openSeadragonImageDataSourceType.md)
- [parquetShapesDataSourceDefaults](variables/parquetShapesDataSourceDefaults.md)
- [parquetShapesDataSourceType](variables/parquetShapesDataSourceType.md)
- [parquetTableDataSourceDefaults](variables/parquetTableDataSourceDefaults.md)
- [parquetTableDataSourceType](variables/parquetTableDataSourceType.md)
- [tablePointsDataSourceDefaults](variables/tablePointsDataSourceDefaults.md)
- [tablePointsDataSourceType](variables/tablePointsDataSourceType.md)
- [tiffImageDataSourceDefaults](variables/tiffImageDataSourceDefaults.md)
- [tiffImageDataSourceType](variables/tiffImageDataSourceType.md)
- [tiffLabelsDataSourceDefaults](variables/tiffLabelsDataSourceDefaults.md)
- [tiffLabelsDataSourceType](variables/tiffLabelsDataSourceType.md)
- [zarrTableDataSourceDefaults](variables/zarrTableDataSourceDefaults.md)
- [zarrTableDataSourceType](variables/zarrTableDataSourceType.md)

## Functions

- [openOMEZarr](functions/openOMEZarr.md)
