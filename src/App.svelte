<script>
    import {Router,  Route} from 'svelte-routing';
    import HomePage from './pages/Home.svelte';
    import EventsPage from './pages/EventsPage.svelte';
    import Header from './lib/Header.svelte';
    import EventInfoPage from './pages/EventInfoPage.svelte';
    export let url = "";
</script>

<Router url={url}>
    <Header />
    <Route path="/compsem-24-web/"><HomePage/></Route>
    <Route path="/compsem-24-web/events/:evType" component={EventsPage}></Route>
    <Route path="/compsem-24-web/event/:eventId" component={EventInfoPage}></Route>
</Router>
