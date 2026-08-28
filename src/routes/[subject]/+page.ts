import { error } from '@sveltejs/kit';

async function checkIfExists(url: string, fetch: typeof global.fetch): Promise<boolean> {
    let exists = false;
    try {
        const request = await fetch(url, { method: 'HEAD' });
        exists = request.ok;
    } catch {
        exists = false;
    }
    return exists;
}

function checkIfFolderExists(folderURL: string): boolean {
    const allFiles = import.meta.glob('../../../static/**/*', { query: '?raw', eager: true });

    const targetPathSegment = `/static/subject/${folderURL}/`;
    const folderContainsFiles = Object.keys(allFiles).some(filePath => 
        filePath.includes(targetPathSegment)
    );

    return folderContainsFiles;
}

export async function load({ params, fetch }) {
    const subject = params.subject; 

    const folderExists = checkIfFolderExists(subject);
    if (!folderExists)
        throw error(404, `Folder for subject "${subject}" does not exist.`);
    
    const referenceURL = `/subject/${subject}/reference.pdf`;
    const referenceExists = await checkIfExists(referenceURL, fetch);

    const resourcesURL = `/subject/${subject}/resources.md`;
    const resourcesExists = await checkIfExists(resourcesURL, fetch);

    return {
        subject,
        referenceExists,
        resourcesExists
    };
}