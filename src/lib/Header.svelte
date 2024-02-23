<script lang='ts'>
    import  {Link} from 'svelte-routing';

    let menuToggle = false;
    let mdScreen = screen.width > 768;
</script>

<header class="px-8 py-6 z-10 absolute top-0 left-0 flex flex-col md:flex-row items-center justify-center md:justify-between w-screen">
    <Link to="/compsem-24-web" >
        <h3 class="font-anta text-3xl text-gray-200">Compsem<span class="font-anta bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-red-400">'24</span></h3>
    </Link>

   <button on:click={
        () => {menuToggle = ! menuToggle}
    } class="p-2 text-gray-200 md:hidden transition-transform duration-75 ease-in-out hover:scale-125 rounded-md  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">
        Menu
   </button>

    <nav class="flex bg-gray-800/40 md:bg-transparent {mdScreen ? '' : menuToggle ? 'border-2 border-rose-400 animate-clip-text-from-above flex-col text-center rounded-md items-center backdrop-blur-sm' : 'hidden'} text-sm justify-evenly md:gap-4  text-gray-200">
        <Link on:click= {() => menuToggle = false} to="compsem-24-web/" class="p-2 transition-transform duration-75 ease-in-out hover:scale-125 rounded-md hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Home</Link>
        <Link on:click= {() => menuToggle = false} to="compsem-24-web/events/technical" class="p-2  transition-transform duration-75 ease-in-out hover:scale-125 hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Technical Events</Link>
        <Link on:click= {() => menuToggle = false} to="compsem-24-web/events/nontechnical" class="p-2  transition-transform duration-75 ease-in-out hover:scale-125 hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Non Technical Events</Link>
        <a href="/compsem-24-web/#contacts" class="p-2 transition-transform duration-75 ease-in-out hover:scale-125 hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Contact Us</a>
    </nav>
</header>
