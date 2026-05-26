<script>
	import { Navbar, NavbarElement, NavbarSeparator } from "@valerius_petrini/corekit-ui";

    import CodeXML from "@lucide/svelte/icons/code-xml";
</script>

<Navbar class="z-1000">
    <NavbarElement class="font-semibold" href="/">
        <CodeXML class="text-primary-500"/>
        UIL CS Toolkit
    </NavbarElement>
    <NavbarSeparator/>
    <NavbarElement class="text-sub-text" href="/topics">Topics</NavbarElement>
    <NavbarElement class="text-sub-text" href="/resources">Resources</NavbarElement>
    <NavbarElement class="text-sub-text" href="/reference">Reference</NavbarElement>
    <NavbarElement href="https://github.com/Villy-P/UIL-CS-Toolkit" external>
        <img class="h-6" src="/social/github-mark-white.svg" alt="Github Page"/>
    </NavbarElement>
</Navbar>