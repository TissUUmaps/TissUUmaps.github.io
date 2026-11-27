# Function: createProject()

> **createProject**(`rawProject`): [`Project`](../type-aliases/Project.md)

Defined in: [model/project.ts:264](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L264)

Creates a [Project](../type-aliases/Project.md) from a [RawProject](../interfaces/RawProject.md) by applying [projectDefaults](../variables/projectDefaults.md)

## Parameters

### rawProject

[`RawProject`](../interfaces/RawProject.md)

The raw project

## Returns

[`Project`](../type-aliases/Project.md)

The complete project with the default values of missing or `undefined` properties
