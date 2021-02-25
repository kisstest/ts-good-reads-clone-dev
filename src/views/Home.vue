<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <p>사용자 검색</p>
      <!-- <div class="autocomplete">
		<input id="search" type="input" placeholder="검색하고 싶은 사용자 아이디를 입력해주세요"></input>
		<ul id="suggestLayer"></ul>
		<div id="loading">
			<i class="fas fa-spinner fa-pulse"></i>
		</div> -->
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import { fromEvent } from 'rxjs';
// import { map, mergeMap } from 'rxjs/operators';
// import { ajax } from 'rxjs/ajax';

@Component({
  components: {
    HelloWorld,
  },
  // mounted() {
  //   const keyup$ = fromEvent(document.getElementById('search'), 'keyup').pipe(
  //     map(event => event.target.value),
  //     mergeMap(query =>
  //       ajax.getJSON(`https://api.github.com/search/users?q=${query}`),
  //     ),
  //     // map(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
  //     // mergeAll()
  //   );
  //   keyup$.subscribe(data => this.drawLayer(data.items));
  // },
})
export default class Home extends Vue {}
</script>
