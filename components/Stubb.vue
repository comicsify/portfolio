<template>
  <div>
    <h2>Display list of images</h2>
    <cld-image cloud-name="cepcam" public-id="jo_s7qbyy.jpg" width="300">
      <cld-transformation
        effect="auto_saturation"
        quality="auto:eco"
        radius="14"
        width="300"
        crop="scale"
      />
      <cld-transformation angle="0" />
    </cld-image>

    <cld-image
      cloud-name="cepcam"
      public-id="hunter_teen_bxfikc.jpg"
      width="300"
    >
      <cld-transformation
        effect="auto_saturation"
        quality="auto:eco"
        radius="14"
        width="300"
        crop="scale"
      />
      <cld-transformation angle="0" />
    </cld-image>
  </div>
</template>

<script>
import { CldImage, CldTransformation } from 'cloudinary-vue'

export default {
  components: {
    CldImage,
    CldTransformation
  },
  computed: {
    info() {
      return 'Stretch'
    }
  }
}
</script>
