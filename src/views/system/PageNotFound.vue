<template>
    <div>
        <router-link :to="'/'">
            <div @click="currentRouteName = ''">На главную</div>
          </router-link>
    </div>
</template>
<script>
export default {
  name: 'PageNotFound',
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="sass">

</style>