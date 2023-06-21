
import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import VueHook from 'alova/vue';
import EventBus from '@/arch/common/event-bus';

const httpService = createAlova({
  baseURL: import.meta.env.VITE_BASE_API_URL || '/',

  statesHook: VueHook,

  requestAdapter: GlobalFetch(),

  beforeRequest(method) {
    // Add token antes de enviar a request
    method.config.headers.token = 'token';
  },

  responded: {
    onSuccess: async (response, method) => {
      
      if (response.status >= 400) {
        //TODO: Exemplo de emissão de evento direto no lugar de lançar exception
        //EventBus.$emit('unhandledError', response.statusText + '1');
        throw new Error(response.statusText + '1');
      }

      const json = await response.json();
      if (response.status !== 200) {
        throw new Error(json.message);
      }

      // transformData hook
      return json.data;
    },

    //TODO: Intercepta falha na request. Gerar cenários.
    onError: (err, method) => {
      throw new Error(error.message);
    }
  }
})



export default httpService;
