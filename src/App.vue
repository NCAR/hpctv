<template>
  <div id="app">
    <side-nav v-if="startClicked || $route.path !=='/'" />
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <footer class="app-footer" v-if="$route.path === '/'">
      <ul class="sponsors">
        <li><img src="./assets/img/sponsor-logo-cisl.png" alt="CISL Logo"></li>
        <li><img src="./assets/img/sponsor-logo-nsf.png" alt="NSF Logo" style="height:65px"></li>
        <li><img src="./assets/img/sponsor-logo-ncar-ucar.png" alt="UCAR / NCAR Logo" id="autoplayTrigger" @click="handleAutoplayGesture()"></li>
        <li><img src="./assets/img/sponsor-logo-nwsc.png" alt="NWSC Logo"></li>
      </ul>
    </footer>

    <footer class="sponsor-bugs" v-else>
      <ul class="sponsors around">
        <li><img src="./assets/img/sponsor-logo-nsf.png" alt="NSF Logo" style="height:65px"></li>
        <li><img src="./assets/img/sponsor-logo-ncar-ucar.png" alt="UCAR / NCAR Logo" id="autoplayTrigger" @click="handleAutoplayGesture()"></li>
      </ul>
    </footer>
  </div>
</template>

<script>
  import SideNav from './components/modals-navs/Side-Nav';

  export default {
    name: 'HPCTV',
    components: {
      SideNav
    },
    data() {
      return {
        orderedRoutes: ['/', 'specs', 'live-data', 'projects'],
        transitionName: 'forward-full-page-slide'
      };
    },

    computed: {
      startClicked() {
        return !this.$store.state.home.showSplash;
      },
    },

    watch: {
      /**
       * Determines based on index in orderedRoutes which direction screen should slide. Transitions are defined in global.scss
       * @param {Object} to Automatically passed by router. the users current route information
       * @param {Object} from Automatically passed by router. The users selected destination route information.
       */

      $route(to, from) {
        if (this.orderedRoutes.indexOf(to.name) > this.orderedRoutes.indexOf(from.name)) {
          this.transitionName = 'forward-full-page-slide';
        } else {
          this.transitionName = 'backward-full-page-slide';
        }
      },

      mounted() {
        document.querySelector('#app');
      }
    }
  };
</script>

<style src="./assets/scss/global.scss" lang="scss"></style>