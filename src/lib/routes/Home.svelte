<script>
  import metapatcher from 'metapatcher';
  import {link} from 'svelte-routing'
  import {_} from 'svelte-i18n'
  import {viewport} from '@/lib/store/viewport'

  metapatcher.setPageMeta({
    title: $_('app.name')
  })
</script>

Home.

<style>

</style>