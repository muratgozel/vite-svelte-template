<script>
  import {link} from 'svelte-routing'
  import {viewport} from '@/lib/store/viewport'
</script>

<div class="header">
  <div class="logo">
    <a href="/" use:link title="Home">Protein Proposal App</a>
  </div>
  <div></div>
</div>

<style>
  .header {
    width: 1024px;
    height: 92px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header .logo a {
    font-size: 24px;
    color: black;
    text-decoration: none;
  }
</style>