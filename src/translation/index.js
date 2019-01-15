import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    buttons: {
      addNew: 'Add New',
      submit: 'Submit',
      filter_all: 'All',
      filter_active: 'Active',
      filter_completed: 'Completed'
    },
    labels: {
      caption: 'Caption',
      link: 'Link'
    },
    placeholders: {
      caption: 'Enter caption',
      link: 'Enter link'
    }
  },
  ru: {
    buttons: {
      addNew: 'Добавить',
      submit: 'Применить',
      filter_all: 'Все',
      filter_active: 'Активные',
      filter_completed: 'Завершенные'
    },
    labels: {
      caption: 'Заголовок',
      link: 'Ссылка'
    },
    placeholders: {
      caption: 'Введите заголовок',
      link: 'Введите ссылку'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
