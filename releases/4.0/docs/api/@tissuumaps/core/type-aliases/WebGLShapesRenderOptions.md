# Type Alias: WebGLShapesRenderOptions

> **WebGLShapesRenderOptions** = `object`

Defined in: [types/webgl.ts:27](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/webgl.ts#L27)

Options for rendering shapes

## Properties

### binWidthFactor

> **binWidthFactor**: `number`

Defined in: [types/webgl.ts:56](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/webgl.ts#L56)

Width of the x-bins of the scanlines a shapes object is rasterized into
(see [edgesPerScanline](#edgesperscanline)), relative to the median width of its shapes

The bin width bounds the number of shapes a fragment considers. Narrower
bins mean fewer shapes to consider per fragment, at the cost of a larger
scanline texture, as shapes spanning several bins are listed in each of
them.

***

### edgesPerScanline

> **edgesPerScanline**: `number`

Defined in: [types/webgl.ts:45](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/webgl.ts#L45)

Number of polygon edges of a typical shape that a scanline holds, when
rasterizing a shapes object

The rasterizer divides a shapes object's bounding box into horizontal
scanlines, and each scanline into x-bins, and lists for each of them the
shapes and polygon edges reaching into it (including their padding, see
[shapePadding](#shapepadding)), so that the fragment shader only has to consider
those. As edges are only assigned to scanlines, the scanline height bounds
the number of edges a fragment tests per shape. Fewer edges per scanline
mean fewer edges to test per fragment, at the cost of a larger scanline
texture, as shapes and edges spanning several scanlines are listed in each
of them.

***

### shapePadding

> **shapePadding**: `number`

Defined in: [types/webgl.ts:72](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/webgl.ts#L72)

Fraction of the median height and width of the shapes that shapes and
polygon edges are padded by on either side when rasterizing a shapes
object (see [edgesPerScanline](#edgesperscanline))

Strokes and anti-aliased edges reaching beyond a shape are only drawn
within the padding, i.e. half the stroke width is limited to this fraction
of the median shape height vertically and of the median shape width
horizontally, whatever the numbers of scanlines and bins. Zoomed out far
enough that the padding is only about a pixel, even the thinnest strokes
and anti-aliased edges are cut off. Larger paddings let strokes reach
further, at the cost of more shapes and edges to test per fragment and a
larger scanline texture.

***

### strokeWidth

> **strokeWidth**: `number`

Defined in: [types/webgl.ts:29](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/webgl.ts#L29)

Width of the shape outlines, in world coordinates
