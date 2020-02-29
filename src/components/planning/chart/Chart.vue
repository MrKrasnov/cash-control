<template>
    <div class="canvas">
        <canvas width="990" height="5" ref="canvas" id="drawing-pad" class="chartstyle">
        </canvas>
    </div>
</template>
<script>
export default {
  name: 'chart',
  data() {
    return {
      ctx: null,
    };
  },
  mounted() {
    const vm = this;
    vm.ctx = this.$refs.canvas.getContext('2d');
    this.updateCanvas();
  },
  methods: {
    updateCanvas() {
      const { ctx } = this;
      // нижняя полоса - background
      ctx.fillStyle = '#acece6';
      ctx.fillRect(1000, 0, -900, 5);
      // верхная полоса
      ctx.fillStyle = '#59c77e';
      ctx.fillRect(400, 0, -1000, 5);
    },
  },    
}
</script>
<style lang="sass">
    .canvas
        width: 100%
        & canvas
            border-radius: 20px
</style>