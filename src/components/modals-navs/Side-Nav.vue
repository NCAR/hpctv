<template >
  <div class="side-nav" v-if="$route.name != 'not-found'">
    <button class="prev"
      :class="{'invisible': isFirstPage}"
      :disabled="isFirstPage"
      @click="prevPage()"
    >
        <img src="../../assets/icon/nav-arrow.svg" alt="previous">
      </button>

    <button class="next"
      @click="nextPage()"
    >
      <img class="return" :class="{'invisible': !isLastPage}" src="../../assets/icon/go-back-arrow.svg" alt="next">
      <img :class="{'invisible': isLastPage}" src="../../assets/icon/nav-arrow.svg" alt="next">
    </button>
  </div>
</template>

<script>
export default {
  name: 'side-nav',

  data() {
    return {
      pages: []
    };
  },

  computed: {
    isFirstPage() {
      return this.$route.path === '/';
    },

    isLastPage() {
      return this.$route.name === this.pages[this.pages.length - 1];
    },

    getCurrentPageIndex() {
      return this.pages.indexOf(this.$route.name);
    }
  },

  methods: {
    nextPage() {
      if (this.isLastPage) {
        window.location.href = window.location.origin;
      } else {
        this.$parent.slideDirection = 1;
        let currentPage = this.getCurrentPageIndex;
        this.$router.push(this.pages[(currentPage += 1)]);
      }
    },

    prevPage() {
      this.$parent.slideDirection = -1;
      let currentPage = this.getCurrentPageIndex;
      this.$router.push(this.pages[(currentPage -= 1)]);
    },

    getAllRoutes() {
      const routeNames = [];
      this.$router.options.routes.forEach(route => {
        if (route.name !== 'not-found') {
          routeNames.push(route.name);
        }
      });
      this.pages = routeNames;
    }
  },

  created() {
    this.getAllRoutes();
  }
};
</script>
