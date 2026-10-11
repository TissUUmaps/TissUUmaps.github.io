# Type Alias: ShapesGeometry

> **ShapesGeometry** = `object`

Defined in: [storage/shapes.ts:17](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/shapes.ts#L17)

Geometry for shapes (multi-polygons) stored in CSR-style format

Shapes are organized in a shapes -> polygons -> rings -> vertices structure,
using CSR-style offset arrays to define the relationships between these elements.
Typed arrays are used for efficient storage and transfer across worker boundaries.

- Shape `s` owns polygons `[shapePolygonOffsets[s], shapePolygonOffsets[s+1])`
- Polygon `p` owns rings `[polygonRingOffsets[p], polygonRingOffsets[p+1])`
- Ring `r` owns vertices `[ringVertexOffsets[r], ringVertexOffsets[r+1])`
- Vertex `v` has coordinates at `coords[2*v]` (x) and `coords[2*v + 1]` (y)

## Properties

### coords

> **coords**: `Float32Array`

Defined in: [storage/shapes.ts:52](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/shapes.ts#L52)

Vertex coordinates

Length: 2 * number of vertices

Two entries per vertex, giving the x and y coordinates of each vertex; the coordinates of vertex i are at indices 2*i and 2*i + 1 (interleaved).

***

### polygonRingOffsets

> **polygonRingOffsets**: `Uint32Array`

Defined in: [storage/shapes.ts:34](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/shapes.ts#L34)

Polygon --> ring offsets

Length: number of polygons + 1 (last entry is total ring count)

One entry per polygon, giving the starting ring index for each polygon; the first ring is the shell, and any subsequent rings are holes.

***

### ringVertexOffsets

> **ringVertexOffsets**: `Uint32Array`

Defined in: [storage/shapes.ts:43](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/shapes.ts#L43)

Ring --> vertex offsets

Length: number of rings + 1 (last entry is total vertex count)

One entry per ring, giving the starting vertex index for each ring; the last vertex of a ring is implicitly connected to the first vertex.

***

### shapePolygonOffsets

> **shapePolygonOffsets**: `Uint32Array`

Defined in: [storage/shapes.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/shapes.ts#L25)

Shape --> polygon offsets

Length: number of shapes + 1 (last entry is total polygon count)

One entry per shape (multi-polygon), giving the starting polygon index for each shape.
