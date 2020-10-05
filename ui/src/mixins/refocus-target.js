import { h } from 'vue'

export default {
  computed: {
    __refocusTargetEl () {
      if (this.disable !== true) {
        return h('span', {
          ref: 'refocusTarget',
          class: 'no-outline',
          tabindex: -1
        })
      }
    }
  },

  methods: {
    __refocusTarget (e) {
      if (e !== void 0 && e.type.indexOf('key') === 0) {
        if (document.activeElement !== this.$el && this.$el.contains(document.activeElement) === true) {
          this.$el.focus()
        }
      }
      else if ((e === void 0 || this.$el.contains(e.target) === true) && this.$refs.refocusTarget) {
        this.$refs.refocusTarget.focus()
      }
    }
  }
}
