<script>
	import { Text, Button, Card } from "@valerius_petrini/corekit-ui";
	import SEO from "../components/SEO.svelte";

    import ChevronRight from "@lucide/svelte/icons/chevron-right";
    import FileText from "@lucide/svelte/icons/file-text";
</script>

<div class="w-full h-[calc(100vh-56px)] flex items-center border-b-2 border-gray-400 overflow-hidden">
    <div class="px-10 flex flex-col gap-4 z-100">
        <Text tag="h1">Ace the <Text tag="span" class="text-primary-500 text-4xl">UIL Computer Science</Text> Test</Text>
        <Text class="text-sub-text">An all-in-one toolkit for everything you need for the University Interscholastic League Computer Science Competition, from cheatsheets and guides about important topics, to questions directly from UIL tests to help you improve.</Text>
        <div class="flex gap-3">
            <Button href="/topics">
                View Topics
                <ChevronRight size={16}/>
            </Button>
            <Button variant="outline" color="white" href="/reference">
                <FileText size={16}/>
                Reference Sheet
            </Button>
        </div>
    </div>
</div>
<div class="w-full flex items-center justify-center flex-wrap gap-5 my-20 px-5 z-100 relative">
    <Card class="flex flex-col gap-5 h-72">
        <Text tag="h3">Resources</Text>
        <Text>View Resources relating to Java topics. This can range from other websites to practice Java programming, to Java fundamentals, to focusing on certain subtopics like strings or bases. Practice programming with LeetCode or study Java fundamentals with W3Schools</Text>
        <Button href="/resources" color="blue" class="mt-auto">
            View Resources
            <img src="/icons/right-arrow.svg" class="w-4 h-4 ml-2 mt-0.5" alt="Right Arrow"/>
        </Button>
    </Card>

    <Card class="flex flex-col gap-5 h-72">
        <Text tag="h3">Reference Sheet</Text>
        <Text>Check out reference material that is given to you on the day of the UIL competition.</Text>
        <Button href="/reference" color="blue" class="mt-auto">
            View Reference Sheet
            <img src="/icons/right-arrow.svg" class="w-4 h-4 ml-2 mt-0.5" alt="Right Arrow"/>
        </Button>
    </Card>

    <Card class="flex flex-col gap-5 h-72">
        <Text tag="h3">Topics</Text>
        <Text>View different topics to help you get better, from strings, arrays, bases, Big O, etc. Quickly go over important topics using cheatsheets and view long form resources for learning more about topics.</Text>
        <Button href="/topics" color="blue" class="mt-auto">
            View Topics
            <img src="/icons/right-arrow.svg" class="w-4 h-4 ml-2 mt-0.5" alt="Right Arrow"/>
        </Button>
    </Card>
</div>

<SEO title="UIL CS Toolkit" description="An all-in-one toolkit for everything you need for the University Interscholastic League Computer Science Competition, from cheatsheets and guides about important topics, to questions directly from UIL tests to help you improve."/>
