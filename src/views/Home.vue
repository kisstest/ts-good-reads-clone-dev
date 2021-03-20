<template>
  <div class="container mx-auto px-4">
    <form>
      <input
        class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..."
      />
      <button
        class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
      >
        Sign up
      </button>
    </form>
    <div>
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  mounted() {
    console.log(`${this.$options.name}`);
  }
}
</script>
