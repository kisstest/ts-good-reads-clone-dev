<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <p>사용자 검색</p>
      <div class="autocomplete">
        <input
          id="search"
          type="input"
          placeholder="검색하고 싶은 사용자 아이디를 입력해주세요"
        />
        <ul id="suggestLayer"></ul>
        <div id="loading">
          <i class="fas fa-spinner fa-pulse"></i>
        </div>
      </div>
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { fromEvent, Observable } from 'rxjs';
import { map, mergeMap, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  mounted() {
    const search = document.getElementById('search');
    function setSubscribed(target: object) {
      const keyup$ = fromEvent(target, 'keyup').pipe(
        map((event: Event) => event.target.value),
        map((query: string) =>
          ajax.getJSON(`https://api.github.com/search/users?q=${query}`),
        ),
        mergeAll(),
      );
      // keyup$.subscribe((data: object) => this.drawLayer(data.items));
      keyup$.subscribe((res: any) => this.drawLayer(res.items));
    }
    search?.setSubscribed()
  }
  /**
   * drawLayer
   */
  drawLayer(items: any) {
    const suggestLayer = document.getElementById('suggestLayer');
    if (suggestLayer) {
      suggestLayer.innerHTML = items
        .map((user: object) => {
          return `<li class="user">
            <img src="${user.avatar_url}" width="50px" height="50px"/>
            <p><a href="${user.html_url}" target="_blank">${user.login}</a></p>
          </li>`;
        })
        .join('');
    }
  }
}
</script>
