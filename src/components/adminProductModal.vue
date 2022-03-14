<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <product-modal
      :temp-product="tempProduct"
      :is-new="isNew"
      v-on:get-products="getProducts"
    ></product-modal>
  </div>
</template>

<script>
const productModal = {}

export default {
  props: ['tempProduct', 'isNew'],
  template: '#templateForProductModal',
  methods: {
    updateProduct () {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let method = 'post'

      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        method = 'put'
      } // 如果是編輯的話 就代id並改成put

      this.$http[method](url, { data: this.tempProduct }) // 資料的格式要參照api的格式
        .then((res) => {
          console.log(res)
          // this.getProducts();  //沒有get Product (外層方法)
          this.$emit('get-products')
          productModal.hide()
        })
    }
  }
}
</script>
