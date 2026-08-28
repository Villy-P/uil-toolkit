export async function checkIfExists(url: string, fetch: typeof global.fetch): Promise<boolean> {
    let exists = false;
    try {
        const request = await fetch(url, { method: 'HEAD' });
        exists = request.ok;
    } catch {
        exists = false;
    }
    return exists;
}

export function checkIfFolderExists(folderURL: string): boolean {
    const allFiles = import.meta.glob('../../static/**/*', { query: '?raw', eager: true });

    const targetPathSegment = `/static/subject/${folderURL}/`;
    const folderContainsFiles = Object.keys(allFiles).some(filePath => 
        filePath.includes(targetPathSegment)
    );

    return folderContainsFiles;
}

export function getResource(subject: string): string | null {
    const allFiles = import.meta.glob('../../static/subject/**/*.md', {
        query: '?raw',
        eager: true,
    }) as Record<string, string | { default: string }>;

    const targetPathSegment = `/static/subject/${subject}/resources.md`;
    const resourceFile = Object.keys(allFiles).find(filePath => 
        filePath.includes(targetPathSegment)
    );

    if (!resourceFile) {
        return null;
    }

    const resource = allFiles[resourceFile];
    return typeof resource === 'string' ? resource : resource.default;
}