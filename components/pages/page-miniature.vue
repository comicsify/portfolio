<script>
import { CldImage } from 'cloudinary-vue'
export default {
  name: `page-miniature`,
  components: {
    CldImage
  },
  props: {
    publicId: { type: String, required: true }
  }
}
</script>

<template>
  <div class="page">
    <cld-image
      :publicId="publicId"
      cloud-name="cepcam"
      secure="true"
      height="80px"
    ></cld-image>
  </div>
</template>

<style scoped>
.page {
  box-shadow: 6px 10px 18px -12px rgba(0, 0, 0, 0.75);
}
</style>
