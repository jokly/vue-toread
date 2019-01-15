<template>
<div class="container mt-5">
  <div class="row">
    <div class="col-8 p-0 mx-auto">
      <new-toread-form></new-toread-form>
    </div>
  </div>
  <div class="row">
    <div class="col-8 mx-auto mt-5">
      <toread-list></toread-list>
    </div>
  </div>
</div>
</template>

<script>
import ToReadForm from './components/ToReadForm'
import ToReadList from './components/ToReadList'
import { LOAD_TOREADS } from './store/mutations-type'

export default {
  name: 'app',
  components: {
    'new-toread-form': ToReadForm,
    'toread-list': ToReadList
  },
  created: function () {
    this.$store.commit(LOAD_TOREADS)
  }
}
</script>

<style lang="scss">

</style>
