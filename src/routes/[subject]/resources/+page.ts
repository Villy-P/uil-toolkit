import { checkIfExists, getResource } from '$lib/helper';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    const resourcesURL = `/subject/${params.subject}/resources.md`;
    const resourcesExists = await checkIfExists(resourcesURL, fetch);

    if (!resourcesExists)
        throw error(404, `Resources for subject "${params.subject}" do not exist.`);

    const resource = getResource(params.subject);

    return { resource };
}