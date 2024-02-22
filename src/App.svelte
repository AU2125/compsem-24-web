<script>
    import {Router,  Route} from 'svelte-routing';
    import HomePage from './pages/Home.svelte';
    import EventsPage from './pages/EventsPage.svelte';
    import Header from './lib/Header.svelte';
    export let url = "";
</script>

<Router url={url}>
    <Header />
    <Route path="/compsem-24-web/"><HomePage/></Route>
    <Route path="/compsem-24-web/events/:evType" component={EventsPage}></Route>
</Router>
