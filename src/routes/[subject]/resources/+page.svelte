<script lang="ts">
	import SEO from './../../../components/SEO.svelte';
	import Markdown from "../../../components/Markdown.svelte";

    let { data } = $props();
</script>

<div class="flex flex-col gap-4 pt-10 w-11/12 m-auto pb-10">
    <Markdown content={data.resource || "No resources available."}/>
</div>

<SEO title="Resources" description="This page contains a list of all resources available to help you study for the UIL test."/>
