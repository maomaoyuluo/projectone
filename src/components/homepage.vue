<template>
    <div class="homepage">
      <!--<navs/>-->
      <scroll/>
      <contentThree/>
      <contentlast/>
      <scrolltop/>
      <footers/>
      <active/>
      <!--<control/>-->

    </div>
</template>

<script>
  import navs from '@/components/nav/navs'
  import active from '@/components/active/active'
  import footers from '@/components/footers/footers'
  import scroll from '@/components/contents/scroll'
  import contentThree from '@/components/contents/contentThree'
  import contentlast from '@/components/contents/contentlast'
  import scrolltop from '@/components/contents/scrolltop'
  import control from '@/components/control/productC'
    export default {
      name: "homepage",
      components: {
        scroll,
        contentThree,
        footers,
        active,
        contentlast,
        scrolltop,
        control
      },

    }
</script>

<style scoped>

</style>
