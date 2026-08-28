<script>
	import { page } from '$app/state';
    import SEO from '../../../components/SEO.svelte';
    import { Text } from '@valerius_petrini/corekit-ui';
</script>

<div class="flex flex-col gap-4 pt-10 w-11/12 m-auto pb-2">
    <Text tag="h1">Reference Sheet</Text>
    <Text>This is the class reference sheet. You'll get one at every competition. You can also <Text tag="a" href="/subject/{page.params.subject}/reference.pdf" target="_blank">open it in a new tab.</Text></Text>
</div>
<div class="w-11/12 m-auto h-[calc(100vh-100px)] py-5">
    <embed src="/subject/{page.params.subject}/reference.pdf" style="width: 100%;height: 100%;border: none;" title="Class Reference Sheet"/>
</div>

<SEO title="Reference Sheet" description="This is the class reference sheet. You'll get one at every competition."/>
