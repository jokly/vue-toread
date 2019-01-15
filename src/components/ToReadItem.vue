<template>
  <b-list-group-item>
    <div class="row">
      <div class="col-md-1 my-md-auto mb-2 mb-md-0">
        <font-awesome-icon icon="check-circle"
                          :class="{ 'text-success': toread.completed }"
                          class="button-complete d-block mx-auto mb-0 h5"
                          @click.prevent="changeCompleted" />
      </div>
      <div v-show="!editing" class="col-md-9">
        <div class="row h-100">
          <div class="col-md-10 d-flex">
            <label @dblclick="changeEditing"
                  :class="{ 'disabled-group-item': toread.completed }"
                  class="d-block align-self-center mx-auto m-md-0">
              {{ toread.caption }}
            </label>
          </div>
          <div class="col-md-2 d-flex">
            <b-link :href="toread.link" target="_blank" class="align-self-center mx-auto m-md-0">
              <b-badge pill variant="primary">
                <font-awesome-icon icon="link" />
              </b-badge>
            </b-link>
          </div>
        </div>
      </div>
      <div v-show="editing" class="col-md-9">
        <div class="row">
          <b-form-input type="text"
                        v-model="toread.caption"
                        required
                        v-bind:placeholder="$t('placeholders.caption')"
                        @keyup.enter.native="changeEditing"
                        class="col-md">
          </b-form-input>
          <b-form-input type="text"
                        v-model="toread.link"
                        required
                        v-bind:placeholder="$t('placeholders.link')"
                        @keyup.enter.native="changeEditing"
                        class="col-md ml-md-2 mt-2 mt-md-0">
          </b-form-input>
        </div>
      </div>
      <div class="col-md-2 d-flex justify-content-center justify-content-md-end mt-2 mt-md-0">
        <b-button size="sm" variant="warning" @click.prevent="changeEditing" class="align-self-center">
          <font-awesome-icon icon="pen" class="text-white"/>
        </b-button>
        <b-button size="sm" variant="danger" @click.prevent="deleteItem" class="align-self-center ml-2">
          <font-awesome-icon icon="trash-alt" />
        </b-button>
      </div>
    </div>
  </b-list-group-item>
</template>

<script>
import { DELETE_TOREAD } from '../store/mutations-type.js'
export default {
  name: 'toread-item',
  props: {
    toread: {
      type: Object,
      default: null
    }
  },
  data: function () {
    return {
      editing: false
    }
  },
  methods: {
    changeCompleted () {
      this.toread.completed = !this.toread.completed
    },
    changeEditing () {
      console.log('Editing')
      this.editing = !this.editing
      if (!this.toread.caption) {
        this.deleteItem()
      }
    },
    deleteItem () {
      this.$store.commit(DELETE_TOREAD, this.toread.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
}

.button-complete {
  color: #6c757d;
}

.button-complete:hover {
  cursor: pointer;
  animation: jump 1s ease 0s normal;
}

@keyframes jump {
  0%{
    transform: translateY(0);
  }
  20%{
    transform: translateY(0);
  }
  40%{
    transform: translateY(-10px);
  }
  50%{
    transform: translateY(0);
  }
  60%{
    transform: translateY(0);
  }
  80%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(0);
  }
}

.disabled-group-item, .disabled-group-item:hover {
  color: #6c757d;
  text-decoration: line-through;
}
</style>
