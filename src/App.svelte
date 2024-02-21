<script>
    import {Router, Route} from 'svelte-routing';
    import HomePage from './pages/Home.svelte';
    import TechEventPage from './pages/Tech_Events.svelte';
    import NonTechEventPage from './pages/Non_Tech_Events.svelte';

    export let url = "";
</script>

<Router url={url}>
    <Route path="/compsem-24-web/"><HomePage/></Route>
    <Route path="/compsem-24-web/tech_events"><TechEventPage/></Route>
    <Route path="/compsem-24-web/non_tech_events"><NonTechEventPage/></Route>
</Router>
