<script lang="ts">
	import SEO from './../../../components/SEO.svelte';
	import { Text, Button } from '@valerius_petrini/corekit-ui';

    let { data } = $props();
</script>

<div class="flex flex-col gap-4 pt-10 w-11/12 m-auto pb-2">
    <Text tag="h1">Topics</Text>
    <Text>This page contains a list of all current topics covered on the UIL test. Each one contains a cheatsheet, and may contain a guide over the topic or questions relating to the topic to improve your skills.</Text>
</div>
<div class="w-full flex justify-center pt-10 gap-5 flex-wrap">
    {#each data.topics as topic}
        <Button variant="outline" color="white" href="/{data.subject}/topics/{topic}/cheatsheet">
            {topic}
        </Button>
    {/each}
</div>

<SEO title="Topics" description="This page contains a list of all current topics covered on the UIL test. Each one contains a cheatsheet, and may contain a guide over the topic or questions relating to the topic to improve your skills."/>
