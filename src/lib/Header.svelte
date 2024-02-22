<script lang='ts'>
    import  {Link} from 'svelte-routing';

</script>

<header class="px-8 py-6 z-10 absolute top-0 left-0 flex justify-center md:justify-between w-screen">
    <Link to="/compsem-24-web" >
        <h3 class="md:text-2xl text-gray-200">Compsem<span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-red-400">'24</span></h3>
    </Link>

    <nav class="md:flex hidden text-sm justify-evenly w-1/3 text-gray-200">
        <Link to="compsem-24-web/" class="p-2 rounded-md hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Home</Link>
        <Link to="compsem-24-web/events/technical" class="p-2 hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Technical Events</Link>
        <Link to="compsem-24-web/events/nontechnical" class="p-2 hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Non Technical Events</Link>
        <a href="/compsem-24-web/#contacts" class="p-2 hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Contact Us</a>
    </nav>
</header>
