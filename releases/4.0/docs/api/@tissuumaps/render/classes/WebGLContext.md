# Class: WebGLContext

Defined in: [webgl/WebGLContext.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L7)

A wrapper around a WebGL2RenderingContext that provides utility methods for
creating shaders, programs, buffers, and textures

## Constructors

### Constructor

> **new WebGLContext**(`canvas`): `WebGLContext`

Defined in: [webgl/WebGLContext.ts:21](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L21)

Creates a new WebGLContext for the given canvas element

#### Parameters

##### canvas

`HTMLCanvasElement`

The HTML canvas element to use for rendering

#### Returns

`WebGLContext`

#### Throws

Error if the browser does not support WebGL 2.0

## Properties

### gl

> `readonly` **gl**: `WebGL2RenderingContext`

Defined in: [webgl/WebGLContext.ts:11](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L11)

***

### maxTextureSize

> `readonly` **maxTextureSize**: `number`

Defined in: [webgl/WebGLContext.ts:13](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L13)

The largest width and height of a texture that the GPU supports, in texels

## Methods

### allocateBuffer()

> **allocateBuffer**(`target`, `buffer`, `data`, `usage`): `void`

Defined in: [webgl/WebGLContext.ts:445](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L445)

Allocates (or re-allocates) storage for a buffer and fills it with the
given data, discarding previous contents

#### Parameters

##### target

`number`

Buffer binding target (e.g. `gl.ARRAY_BUFFER`)

##### buffer

`WebGLBuffer`

The buffer to allocate

##### data

[`IntOrUintArray`](../../core/type-aliases/IntOrUintArray.md) \| `Float16Array`\<`ArrayBufferLike`\> \| `Float32Array`\<`ArrayBufferLike`\>

The data to fill the buffer with; sets its size

##### usage

`number`

Usage hint (e.g. `gl.STATIC_DRAW`)

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [webgl/WebGLContext.ts:70](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L70)

Clears the color buffer with transparent black

#### Returns

`void`

***

### configureVertexFloatAttribute()

> **configureVertexFloatAttribute**(`target`, `buffer`, `index`, `size`, `type`, `options?`): `void`

Defined in: [webgl/WebGLContext.ts:186](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L186)

Binds a buffer to a vertex attribute as a floating-point attribute

#### Parameters

##### target

`number`

Buffer binding target

##### buffer

`WebGLBuffer`

The buffer containing attribute data

##### index

`number`

Attribute location index

##### size

`number`

Number of components per vertex attribute

##### type

`number`

Data type (e.g. `gl.FLOAT`)

##### options?

Optional normalized, stride, offset, and divisor settings

###### divisor?

`number`

###### normalized?

`boolean`

###### offset?

`number`

###### stride?

`number`

#### Returns

`void`

***

### configureVertexIntAttribute()

> **configureVertexIntAttribute**(`target`, `buffer`, `index`, `size`, `type`, `options?`): `void`

Defined in: [webgl/WebGLContext.ts:222](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L222)

Binds a buffer to a vertex attribute as an integer attribute

#### Parameters

##### target

`number`

Buffer binding target

##### buffer

`WebGLBuffer`

The buffer containing attribute data

##### index

`number`

Attribute location index

##### size

`number`

Number of components per vertex attribute

##### type

`number`

Data type (e.g. `gl.UNSIGNED_INT`)

##### options?

Optional stride, offset, and divisor settings

###### divisor?

`number`

###### offset?

`number`

###### stride?

`number`

#### Returns

`void`

***

### createBuffer()

> **createBuffer**(): `WebGLBuffer`

Defined in: [webgl/WebGLContext.ts:428](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L428)

Creates a new WebGL buffer

#### Returns

`WebGLBuffer`

#### Throws

Error if buffer creation fails

***

### createDataTexture()

> **createDataTexture**(`internalformat`, `width`, `height`, `format`, `type`, `data?`): `WebGLTexture`

Defined in: [webgl/WebGLContext.ts:250](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L250)

Creates an immutable 2D data texture with nearest-neighbor filtering
and clamp-to-edge wrapping

#### Parameters

##### internalformat

`number`

Internal texture format (e.g. `gl.RGBA32F`)

##### width

`number`

Texture width in texels

##### height

`number`

Texture height in texels

##### format

`number`

Pixel data format (e.g. `gl.RGBA`)

##### type

`number`

Pixel data type (e.g. `gl.FLOAT`)

##### data?

[`TypedArray`](../../core/type-aliases/TypedArray.md)

Optional initial pixel data

#### Returns

`WebGLTexture`

#### Throws

Error if texture creation fails

***

### createProgram()

> **createProgram**(`vertexShaderSource`, `fragmentShaderSource`): `WebGLProgram`

Defined in: [webgl/WebGLContext.ts:85](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L85)

Compiles vertex and fragment shaders, links them into a program, and
returns the linked program

The individual shaders are flagged for deletion after linking.

#### Parameters

##### vertexShaderSource

`string`

GLSL source for the vertex shader

##### fragmentShaderSource

`string`

GLSL source for the fragment shader

#### Returns

`WebGLProgram`

#### Throws

Error if shader compilation or program linking fails

***

### createVertexArray()

> **createVertexArray**(): `WebGLVertexArrayObject`

Defined in: [webgl/WebGLContext.ts:168](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L168)

Creates a new vertex array object (VAO)

#### Returns

`WebGLVertexArrayObject`

#### Throws

Error if VAO creation fails

***

### destroy()

> **destroy**(): `void`

Defined in: [webgl/WebGLContext.ts:518](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L518)

Destroys the WebGLContext by forcing the underlying WebGL context to be
lost, releasing its GPU resources immediately.

Browsers cap the number of concurrently live WebGL contexts, so a context
that is never released (e.g. across React StrictMode / HMR remounts)
eventually prevents new contexts from being created. Callers are expected
to have already destroyed any resources (programs, buffers, textures, VAOs)
they created through this context.

#### Returns

`void`

***

### disableAlphaBlending()

> **disableAlphaBlending**(): `void`

Defined in: [webgl/WebGLContext.ts:497](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L497)

Disables blending and restores the default blend state

#### Returns

`void`

***

### enableAlphaBlending()

> **enableAlphaBlending**(): `void`

Defined in: [webgl/WebGLContext.ts:479](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L479)

Enables premultiplied-alpha blending (Porter-Duff "over" operator)

#### Returns

`void`

***

### getUniformLocation()

> **getUniformLocation**(`program`, `name`): `WebGLUniformLocation`

Defined in: [webgl/WebGLContext.ts:152](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L152)

Returns the location of a uniform variable in a shader program

#### Parameters

##### program

`WebGLProgram`

The shader program

##### name

`string`

The uniform name as declared in the shader

#### Returns

`WebGLUniformLocation`

#### Throws

Error if the uniform is not found

***

### loadBuffer()

> **loadBuffer**(`target`, `buffer`, `data`, `options?`): `void`

Defined in: [webgl/WebGLContext.ts:464](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L464)

Uploads typed array data into a region of an existing buffer

#### Parameters

##### target

`number`

Buffer binding target

##### buffer

`WebGLBuffer`

The target buffer

##### data

[`IntOrUintArray`](../../core/type-aliases/IntOrUintArray.md) \| `Float16Array`\<`ArrayBufferLike`\> \| `Float32Array`\<`ArrayBufferLike`\>

The data to upload

##### options?

Optional element offset within the buffer

###### offset?

`number`

#### Returns

`void`

***

### loadDataTexture()

> **loadDataTexture**(`texture`, `width`, `height`, `format`, `type`, `data`): `void`

Defined in: [webgl/WebGLContext.ts:318](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L318)

Uploads new pixel data into an existing immutable 2D data texture

#### Parameters

##### texture

`WebGLTexture`

The target texture

##### width

`number`

Texture width in texels

##### height

`number`

Texture height in texels

##### format

`number`

Pixel data format (e.g. `gl.RGBA`)

##### type

`number`

Pixel data type (e.g. `gl.FLOAT`)

##### data

[`TypedArray`](../../core/type-aliases/TypedArray.md)

The pixel data to upload

#### Returns

`void`

***

### loadImageTextureFromUrl()

> **loadImageTextureFromUrl**(`url`, `options?`): `Promise`\<`WebGLTexture`\>

Defined in: [webgl/WebGLContext.ts:352](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L352)

Loads an image from a URL and creates a WebGL texture from it

If the image fails to load, or the operation is aborted, the pending image load is
cancelled and the texture is deleted again before rejecting.

#### Parameters

##### url

`string`

The image URL

##### options?

Optional mipmap generation flag and abort signal

###### mipmap?

`boolean`

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`WebGLTexture`\>

#### Throws

Error if texture creation fails, the image fails to load, or the
operation was aborted

***

### resizeCanvas()

> **resizeCanvas**(`canvas`, `newCanvasSize`): `boolean`

Defined in: [webgl/WebGLContext.ts:44](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/webgl/WebGLContext.ts#L44)

Resizes the canvas to match the given screen-space dimensions,
accounting for `devicePixelRatio` and clamping to \_maxCanvasSize

#### Parameters

##### canvas

`HTMLCanvasElement`

The HTML canvas element to resize

##### newCanvasSize

[`Dims`](../../core/type-aliases/Dims.md)

Desired canvas size in screen-space pixels

#### Returns

`boolean`

`true` if the canvas size actually changed, `false` otherwise
