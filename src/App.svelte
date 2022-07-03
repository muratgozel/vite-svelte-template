<script>
  import metapatcher from 'metapatcher';
  import {Router, Link, Route} from 'svelte-routing';
  import Notifications from 'svelte-notifications';
  import Loading from "./lib/components/Loading.svelte";
  import Home from './lib/routes/Home.svelte';
  import {auth} from './lib/store/auth.js';

  if (import.meta.env.PROD !== true) metapatcher.robots('noindex')

  export let url = '';
</script>

<Notifications>
  <div class="body">
    
    <Router url={url} basepath="/">
      <Route path="/"><Home /></Route>
    </Router>
    
  </div>
</Notifications>

<style>
  .body {
    width: 1024px;
    margin: 0 auto;
    padding: 0 24px;
  }
  @media (max-width: 1124px) {
    .body {
      width: auto;
      margin: unset;
      padding: 0 24px;
    }
  }
</style>
