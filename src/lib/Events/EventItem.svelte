<!--
   - Notification Component
  ) -->
<script lang="ts">
    import {Link} from 'svelte-routing';
    import {calcDate} from '../common';
    export let heading: string;
    export let oneliner: string;
    export let date: Date;
    export let to:string;
</script>
<Link class="border-rose-400 border-2 group text-blue-400 h-48 py-10 px-4 w-64 md:w-96 flex justify-center rounded-md items-center flex-col cursor-pointer hover:bg-slate-500/20" to="compsem-24-web/event/{to}">
    <div class="font-anta text-sm md:text-xl w-full text-wrap text-center group-hover:text-2xl text-wrap uppercase leading-tight ">{heading}</div>
    <span class="text-center">
        <div class="glass group-hover:text-md font-thin uppercase rounded-full px-2 py-1 text-xs m-[2px]">{oneliner}</div>
        <div class="font-kdam text-xs group-hover:text-lg md:text-md">{calcDate(date)}</div>
    </span>
</Link>
