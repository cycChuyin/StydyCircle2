<template>
  <div></div>
</template>

<script>
export default {
  props: ['Id'],
  created () {
    const Id = this.Id
    this.$apiHelper.get(`api/activity/id/${Id}`).then((res) => {
      console.log(res)
    })
  }
}
</script>
