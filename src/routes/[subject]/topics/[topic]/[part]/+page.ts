import { checkIfExists } from '$lib/helper';

export async function load({ params, fetch }) {
    const subject = params.subject; 
    const topic = params.topic;
    const part = params.part;

    const cheetsheetURL = `/subject/${subject}/topics/${topic}/cheatsheet.md`;
    const cheetsheetExists = await checkIfExists(cheetsheetURL, fetch);

    const guideURL = `/subject/${subject}/topics/${topic}/guide.md`;
    const guideExists = await checkIfExists(guideURL, fetch);

    const questionsURL = `/subject/${subject}/topics/${topic}/questions.json`;
    const questionsExists = await checkIfExists(questionsURL, fetch);

    return {
        subject,
        topic,
        part,
        
        cheetsheetExists,
        guideExists,
        questionsExists,

        cheetsheetURL,
        guideURL,
        questionsURL
    };
}