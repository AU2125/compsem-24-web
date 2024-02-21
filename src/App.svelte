<script>
    import {Router, Route} from 'svelte-routing';
    import HomePage from './pages/Home.svelte';
    import EventsPage from './pages/EventsPage.svelte';

    export let url = "";
</script>

<Router url={url}>
    <Route path="/compsem-24-web/"><HomePage/></Route>
    <Route path="/compsem-24-web/events/:evType" component={EventsPage}></Route>
</Router>
