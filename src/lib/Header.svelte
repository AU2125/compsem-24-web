<script lang='ts'>
    import  {Link} from 'svelte-routing';

</script>

<header class="bg-transparent text-2xl px-8 py-6 z-10 flex justify-between w-screen">
    <Link to="/compsem-24-web" >
        <h3 class="text-gray-200">Compsem <span class="text-gray-800">'24</span></h3>
    </Link>

    <nav class="flex text-sm justify-evenly w-1/3 text-gray-200">
        <Link to="compsem-24-web/" class="p-2 rounded-md hover:bg-gray-500 hover:text-gray-100">Home</Link>
        <Link to="compsem-24-web/events/technical" class="p-2 rounded-md hover:bg-gray-500 hover:text-gray-100">Technical Events</Link>
        <Link to="compsem-24-web/events/nontechnical" class="p-2 rounded-md hover:bg-gray-500 hover:text-gray-100">Non Technical Events</Link>
    </nav>
</header>
