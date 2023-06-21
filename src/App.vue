

<template>
  <main>
    <loading :active="loading"
      :can-cancel="false"
      color="#2ecc71"
      height="128"
      width="128"
      is-full-page
    /> 
    <RouterView />
  </main>
</template>

<script>

import { RouterView } from 'vue-router'
import * as services from './services';
import { getErrorMessage } from '@/arch/common/error-handlers';
import EventBus from '@/arch/common/event-bus';
import { useToast } from "vue-toastification";
import { BToast } from "bootstrap-vue-next"
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


export default {
  provide: { ...services },

  setup() {    
    const toast = useToast();
    return { toast }
  },
  
  components: {
    RouterView,
    BToast,
    Loading
  },

  created() {
    EventBus.$on('unhandledError', this.onUnhandledError);
    //BToast.show()
  },

  unmounted() {
    EventBus.$off('unhandledError', this.onUnhandledError);
  },

  computed: {
    loading() {
      return services?.fruitsService?.getLoading()
    }
  },

  methods: {
    showToast(message, options) {
      this.toast(message, options);
    },

    async onUnhandledError(error) {
      try {
        this.showToast(await getErrorMessage(error), {
          type: 'error',
          timeout: 2000
        });
      }
      catch (ex) {
        this.showToast('Unhandled error in App.vue onUnhandledError (oops)', {
          title: 'Error',
        });
      }
    },

  }
}
</script>
