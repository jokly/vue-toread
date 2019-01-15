<template>
  <div>
    <div class="row mb-3">
      <b-button-group size="sm" class="mx-auto">
        <b-button variant="primary" @click.prevent="changeFilter(filtersType.ALL)">
          {{ $t('buttons.filter_all') }}
        </b-button>
        <b-button variant="info" @click.prevent="changeFilter(filtersType.ACTIVE)">
          {{ $t('buttons.filter_active') }}
        </b-button>
        <b-button variant="success" @click.prevent="changeFilter(filtersType.COMPLETED)">
          {{ $t('buttons.filter_completed') }}
        </b-button>
      </b-button-group>
    </div>
    <div class="row">
      <b-list-group v-if="toreads.length > 0" class="col p-0">
        <toread-item v-for="toread in toreads"
                    :key="toread.id"
                    :toread="toread">
        </toread-item>
      </b-list-group>
      <label v-else class="col p-0 h5 text-center">
        List is empty.
      </label>
    </div>
  </div>
</template>

<script>
import * as filtersType from '../store/filters-type'
import ToReadItem from './ToReadItem'

export default {
  name: 'toread-list',
  components: {
    'toread-item': ToReadItem
  },
  data: function () {
    return {
      filtersType: filtersType,
      currentFilter: filtersType.ALL
    }
  },
  computed: {
    toreads () {
      return this.$store.getters[this.currentFilter]
    }
  },
  methods: {
    changeFilter (filterType) {
      this.currentFilter = filterType
      console.log(filterType)
    }
  }
}
</script>
