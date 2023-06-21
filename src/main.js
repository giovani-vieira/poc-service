import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './arch/store';
import './assets/main.css'
import { makeServer } from "./server"

makeServer();

const app = createApp(App)
app.use(pinia);
app.use(router)

import { initVueErrorHandler } from './arch/common/error-handlers';
initVueErrorHandler(app);

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
  timeout: 5000,
};

app.use(Toast, options);

// import { getErrorMessage } from '@/arch/common/error-handlers';
// import EventBus from '@/arch/common/event-bus';
// import { useToast } from "vue-toastification";
// const toast = useToast();
// EventBus.$on('unhandledError', async (error) => {
//       try {
//         console.error(error);
//         toast(await getErrorMessage(error), {
//           type: 'error',
//           timeout: 2000
//         });
//       }
//       catch (ex) {
//         console.error('Unhandled error in App.vue onUnhandledError (oops)', ex?.description || ex);
//         toast('Unhandled error in App.vue onUnhandledError (oops)', {
//           title: 'Error',
//         });
//       }
//     },);

app.mount('#app')