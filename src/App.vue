

<template>
  <main>
    <RouterView />
  </main>
</template>

<script>

import { RouterView } from 'vue-router'
import * as services from './services';

export default {
  provide: { ...services },
  
  components: {
    RouterView
  },
}
</script>
