<script>
    import {Router, Link, Route} from 'svelte-routing';
    import HomePage from './pages/Home.svelte';
    import EventsPage from './pages/EventsPage.svelte';
    import Header from './lib/Header.svelte';
    import EventInfoPage from './pages/EventInfoPage.svelte';
    export let url = "";
</script>

<Router url={url}>
    <header class="bg-transparent text-2xl px-8 py-6 z-10 flex w-screen">
        <Link to="/compsem-24-web" >
            <h3 class="text-gray-200">Compsem <span class="text-gray-800">'24</span></h3>
        </Link>


    </header>
    <Route path="/compsem-24-web/"><HomePage/></Route>
    <Route path="/compsem-24-web/events/:evType" component={EventsPage}></Route>
    <Route path="/compsem-24-web/event/:eventId" component={EventInfoPage}></Route>
</Router>
