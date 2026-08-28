import { checkIfExists } from '$lib/helper';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    const subject = params.subject; 

    const referenceURL = `/subject/${subject}/reference.pdf`;
    const referenceExists = await checkIfExists(referenceURL, fetch);

    if (!referenceExists)
        throw error(404, `Reference for subject "${subject}" does not exist.`);
}