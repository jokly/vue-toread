<template>
  <div>
    <b-btn v-b-toggle.new-form variant="primary" class="btn-block">{{ $t('buttons.addNew') }}</b-btn>
    <b-collapse id="new-form" class="mt-2">
      <b-card>
        <b-form @submit.prevent="onSubmit">
          <b-form-group id="captionFormGroup"
                        v-bind:label="$t('labels.caption')"
                        label-for="captionInput">
            <b-form-textarea id="captionInput"
                          type="text"
                          v-model="caption"
                          required
                          :rows="2"
                          v-bind:placeholder="$t('placeholders.caption')">
            </b-form-textarea>
          </b-form-group>
          <b-form-group id="linkFormGroup"
                        v-bind:label="$t('labels.link')"
                        label-for="linkInput">
            <b-form-input id="linkInput"
                          type="text"
                          v-model="link"
                          required
                          v-bind:placeholder="$t('placeholders.link')">
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" class="d-block mx-auto">{{ $t('buttons.submit') }}</b-button>
        </b-form>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { ADD_TOREAD } from '../store/mutations-type'

export default {
  name: 'new-toread-form',
  data: function () {
    return {
      caption: '',
      link: ''
    }
  },
  methods: {
    onSubmit () {
      this.$store.commit(ADD_TOREAD, { caption: this.caption, link: this.link })
    }
  }
}
</script>
