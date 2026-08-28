import { checkIfExists, checkIfFolderExists } from '$lib/helper';
import { error } from '@sveltejs/kit';

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