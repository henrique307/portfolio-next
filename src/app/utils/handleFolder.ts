export function handleFolder(folder: string | null) {
    switch (folder) {
        case "imagens":
            return process.env.GOOGLE_DRIVE_IMAGENS_FOLDER
        case "idiomas":
            return process.env.GOOGLE_DRIVE_IDIOMAS_FOLDER
        case "videos":
            return process.env.GOOGLE_DRIVE_VIDEOS_FOLDER
        case "curriculos":
            return process.env.GOOGLE_DRIVE_CURRICULOS_FOLDER
        default:
            return undefined;
    }
}