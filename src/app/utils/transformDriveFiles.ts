export function transformDriveFiles(files?: DriveFile[]): Record<string, DriveFile> {
    const obj = {};

    if (!files) return obj;

    for (const file of files) {
        const name = file.name.split(".")[0];
        Object.assign(obj, { [name]: file });
    }

    return obj;
}