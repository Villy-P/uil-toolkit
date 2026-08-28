import { getListOfTopics } from '$lib/helper';

export async function load({ params }) {
    const subject = params.subject; 

    const topics = getListOfTopics(subject);

    return {
        topics,
        subject
    };
}