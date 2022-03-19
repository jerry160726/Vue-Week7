"use strict";(self["webpackChunkweek7"]=self["webpackChunkweek7"]||[]).push([[554],{4554:function(t,e,l){l.r(e),l.d(e,{default:function(){return ne}});var o=l(6252),a=l(3577);const d={class:"container"},s={class:"text-end mt-4"},r={class:"table mt-4"},i=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",null,"產品名稱"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"100"},"是否啟用"),(0,o._)("th",{width:"120"},"編輯")])],-1),c={class:"text-end"},n={class:"text-end"},u={key:0,class:"text-success"},p={key:1},m={class:"btn-group"},_=["onClick"],h=["onClick"];function b(t,e,l,b,g,w){const y=(0,o.up)("pagination"),f=(0,o.up)("product-modal"),v=(0,o.up)("del-product-modal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",d,[(0,o._)("div",s,[(0,o._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>w.openModal("isNew"))}," 建立新的產品 ")]),(0,o._)("table",r,[i,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.products,(t=>((0,o.wg)(),(0,o.iD)("tbody",{key:t.id},[(0,o._)("tr",null,[(0,o._)("td",null,(0,a.zw)(t.category),1),(0,o._)("td",null,(0,a.zw)(t.title),1),(0,o._)("td",c,(0,a.zw)(t.origin_price),1),(0,o._)("td",n,(0,a.zw)(t.price),1),(0,o._)("td",null,[t.is_enabled?((0,o.wg)(),(0,o.iD)("span",u,"啟用")):((0,o.wg)(),(0,o.iD)("span",p,"未啟用"))]),(0,o._)("td",null,[(0,o._)("div",m,[(0,o._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>w.openModal("edit",t)}," 編輯 ",8,_),(0,o._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>w.openModal("delete",t)}," 刪除 ",8,h)])])])])))),128))]),(0,o.Wm)(y,{pages:g.pagination,onGetProduct:w.getProducts},null,8,["pages","onGetProduct"])]),(0,o.Wm)(f,{"temp-product":g.tempProduct,"is-new":g.isNew,onGetProducts:w.getProducts,ref:"productModal"},null,8,["temp-product","is-new","onGetProducts"]),(0,o.Wm)(v,{"temp-product":g.tempProduct,onGetProducts:w.getProducts,ref:"delProductModal"},null,8,["temp-product","onGetProducts"])],64)}var g=l(9963);const w={"aria-label":"Page navigation example"},y={class:"pagination"},f=(0,o._)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,o._)("span",{"aria-hidden":"true"},"«")],-1),v=[f],k=["onClick"],x=(0,o._)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,o._)("span",{"aria-hidden":"true"},"»")],-1),P=[x];function M(t,e,l,d,s,r){return(0,o.wg)(),(0,o.iD)("nav",w,[(0,o._)("ul",y,[(0,o._)("li",{class:(0,a.C_)(["page-item",{disabled:!l.pages.has_pre}])},v,2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.pages.total_pages,(e=>((0,o.wg)(),(0,o.iD)("li",{class:(0,a.C_)(["page-item",{active:e===l.pages.current_page}]),key:e+"page"},[(0,o._)("a",{class:"page-link",href:"#",onClick:(0,g.iM)((l=>t.$emit("get-product",e)),["prevent"])},(0,a.zw)(e),9,k)],2)))),128)),(0,o._)("li",{class:(0,a.C_)(["page-item",{disabled:!l.pages.has_next}])},P,2)])])}var U={props:["pages"]},D=l(3744);const C=(0,D.Z)(U,[["render",M]]);var $=C;const z={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},V={class:"modal-dialog modal-xl"},N={class:"modal-content border-0"},L=(0,o._)("div",{class:"modal-header bg-dark text-white"},[(0,o._)("h5",{id:"productModalLabel",class:"modal-title"},[(0,o._)("span",null,"新增產品")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),G={class:"modal-body"},H={class:"row"},Y={class:"col-sm-4"},A={class:"mb-3"},O=(0,o._)("label",{for:"imageUrl",class:"form-label"},"主圖網址",-1),E=["src"],K={class:"mb-3"},Z=(0,o._)("h3",null,"多圖新增",-1),q={key:0},W=(0,o.Uk)(" 是不是Array "),F=["onUpdate:modelValue"],T=["src"],j={class:"col-sm-8"},B={class:"mb-3"},I=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),J={class:"row"},Q={class:"mb-3 col-md-6"},R=(0,o._)("label",{for:"category",class:"form-label"},"分類",-1),S={class:"mb-3 col-md-6"},X=(0,o._)("label",{for:"price",class:"form-label"},"單位",-1),tt={class:"row"},et={class:"mb-3 col-md-6"},lt=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),ot={class:"mb-3 col-md-6"},at=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),dt=(0,o._)("hr",null,null,-1),st={class:"mb-3"},rt=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),it={class:"mb-3"},ct=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),nt={class:"mb-3"},ut={class:"form-check"},pt=(0,o._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),mt={class:"modal-footer"},_t=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ht(t,e,l,a,d,s){return(0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",V,[(0,o._)("div",N,[L,(0,o._)("div",G,[(0,o._)("div",H,[(0,o._)("div",Y,[(0,o._)("div",A,[O,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"imageUrl","onUpdate:modelValue":e[0]||(e[0]=t=>d.product.imageUrl=t)},null,512),[[g.nr,d.product.imageUrl]]),(0,o._)("img",{src:d.product.imageUrl,class:"img-fluid",alt:""},null,8,E),(0,o._)("div",K,[Z,Array.isArray(d.product.imagesUrl)?((0,o.wg)(),(0,o.iD)("div",q,[W,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.product.imagesUrl,((t,e)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:e+"12345"},[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t=>d.product.imagesUrl[e]=t},null,8,F),[[g.nr,d.product.imagesUrl[e]]]),(0,o._)("img",{src:d.product.imagesUrl[e],class:"img-fluid",alt:""},null,8,T)],64)))),128)),!d.product.imagesUrl.length||d.product.imagesUrl[d.product.imagesUrl.length-1]?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"btn btn-primary w-100",onClick:e[1]||(e[1]=t=>d.product.imagesUrl.push(""))}," ADD ")):((0,o.wg)(),(0,o.iD)("button",{key:1,type:"button",class:"btn btn-outline-danger w-100",onClick:e[2]||(e[2]=t=>d.product.imagesUrl.pop())}," DELETE "))])):(0,o.kq)("",!0)])])]),(0,o._)("div",j,[(0,o._)("div",B,[I,(0,o.wy)((0,o._)("input",{id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>d.product.title=t),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[g.nr,d.product.title]])]),(0,o._)("div",J,[(0,o._)("div",Q,[R,(0,o.wy)((0,o._)("input",{id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>d.product.category=t),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[g.nr,d.product.category]])]),(0,o._)("div",S,[X,(0,o.wy)((0,o._)("input",{id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>d.product.unit=t),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[g.nr,d.product.unit]])])]),(0,o._)("div",tt,[(0,o._)("div",et,[lt,(0,o.wy)((0,o._)("input",{id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>d.product.origin_price=t),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[g.nr,d.product.origin_price,void 0,{number:!0}]])]),(0,o._)("div",ot,[at,(0,o.wy)((0,o._)("input",{id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>d.product.price=t),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[g.nr,d.product.price,void 0,{number:!0}]])])]),dt,(0,o._)("div",st,[rt,(0,o.wy)((0,o._)("textarea",{id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>d.product.description=t),type:"text",class:"form-control",placeholder:"請輸入產品描述"},"\r\n                ",512),[[g.nr,d.product.description]])]),(0,o._)("div",it,[ct,(0,o.wy)((0,o._)("textarea",{id:"description","onUpdate:modelValue":e[9]||(e[9]=t=>d.product.content=t),type:"text",class:"form-control",placeholder:"請輸入說明內容"},"\r\n                ",512),[[g.nr,d.product.content]])]),(0,o._)("div",nt,[(0,o._)("div",ut,[(0,o.wy)((0,o._)("input",{id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=t=>d.product.is_enabled=t),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[g.e8,d.product.is_enabled]]),pt])])])])]),(0,o._)("div",mt,[_t,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=(...t)=>s.updateProduct&&s.updateProduct(...t))}," 確認 ")])])])],512)}var bt=l(7424),gt=l.n(bt),wt={props:["tempProduct","isNew"],template:"#templateForProductModal",data(){return{product:{},bsModal:{}}},watch:{tempProduct(){this.product=this.tempProduct}},methods:{updateProduct(){let t="https://vue3-course-api.hexschool.io/v2/api/ttest/admin/product",e="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/v2/api/ttest/admin/product/${this.tempProduct.id}`,e="put"),this.$http[e](t,{data:this.tempProduct}).then((t=>{this.$emit("get-products"),this.bsModal.hide()}))}},mounted(){this.bsModal=new(gt())(this.$refs.productModal)}};const yt=(0,D.Z)(wt,[["render",ht]]);var ft=yt;const vt={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"},kt={class:"modal-dialog modal-xl",role:"document"},xt={class:"modal-content border-0"},Pt=(0,o._)("div",{class:"modal-header bg-dark text-white"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,o._)("span",null,"訂單細節")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Mt={class:"modal-body"},Ut={class:"row"},Dt={class:"col-md-4"},Ct=(0,o._)("h3",null,"用戶資料",-1),$t={class:"table"},zt={key:0},Vt=(0,o._)("th",{style:{width:"100px"}},"姓名",-1),Nt=(0,o._)("th",null,"Email",-1),Lt=(0,o._)("th",null,"電話",-1),Gt=(0,o._)("th",null,"地址",-1),Ht={class:"col-md-8"},Yt=(0,o._)("h3",null,"訂單細節",-1),At={class:"table"},Ot=(0,o._)("th",{style:{width:"100px"}},"訂單編號",-1),Et=(0,o._)("th",null,"下單時間",-1),Kt=(0,o._)("th",null,"付款時間",-1),Zt={key:0},qt={key:1},Wt=(0,o._)("th",null,"付款狀態",-1),Ft={key:0,class:"text-success"},Tt={key:1,class:"text-muted"},jt=(0,o._)("th",null,"總金額",-1),Bt=(0,o._)("h3",null,"選購商品",-1),It={class:"table"},Jt=(0,o._)("thead",null,[(0,o._)("tr")],-1),Qt={class:"text-end"},Rt={class:"d-flex justify-content-end"},St={class:"form-check"},Xt={class:"form-check-label",for:"flexCheckDefault"},te={key:0},ee={key:1},le={class:"modal-footer"},oe=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ae(t,e,l,d,s,r){return(0,o.wg)(),(0,o.iD)("div",vt,[(0,o._)("div",kt,[(0,o._)("div",xt,[Pt,(0,o._)("div",Mt,[(0,o._)("div",Ut,[(0,o._)("div",Dt,[Ct,(0,o._)("table",$t,[s.product.user?((0,o.wg)(),(0,o.iD)("tbody",zt,[(0,o._)("tr",null,[Vt,(0,o._)("td",null,(0,a.zw)(s.product.user.name),1)]),(0,o._)("tr",null,[Nt,(0,o._)("td",null,(0,a.zw)(s.product.user.email),1)]),(0,o._)("tr",null,[Lt,(0,o._)("td",null,(0,a.zw)(s.product.user.tel),1)]),(0,o._)("tr",null,[Gt,(0,o._)("td",null,(0,a.zw)(s.product.user.address),1)])])):(0,o.kq)("",!0)])]),(0,o._)("div",Ht,[Yt,(0,o._)("table",At,[(0,o._)("tbody",null,[(0,o._)("tr",null,[Ot,(0,o._)("td",null,(0,a.zw)(s.product.id),1)]),(0,o._)("tr",null,[Et,(0,o._)("td",null,(0,a.zw)(s.product.create_at),1)]),(0,o._)("tr",null,[Kt,(0,o._)("td",null,[s.product.paid_date?((0,o.wg)(),(0,o.iD)("span",Zt,(0,a.zw)(s.product.paid_date),1)):((0,o.wg)(),(0,o.iD)("span",qt,"時間不正確"))])]),(0,o._)("tr",null,[Wt,(0,o._)("td",null,[s.product.is_paid?((0,o.wg)(),(0,o.iD)("strong",Ft,"已付款")):((0,o.wg)(),(0,o.iD)("span",Tt,"尚未付款"))])]),(0,o._)("tr",null,[jt,(0,o._)("td",null,(0,a.zw)(s.product.total),1)])])]),Bt,(0,o._)("table",It,[Jt,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.product.products,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("th",null,(0,a.zw)(t.product.title),1),(0,o._)("td",null,(0,a.zw)(t.qty)+" / "+(0,a.zw)(t.product.unit),1),(0,o._)("td",Qt,(0,a.zw)(t.final_total),1)])))),128))])]),(0,o._)("div",Rt,[(0,o._)("div",St,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=t=>s.product.is_paid=t)},null,512),[[g.e8,s.product.is_paid]]),(0,o._)("label",Xt,[s.product.is_paid?((0,o.wg)(),(0,o.iD)("span",te,"已付款")):((0,o.wg)(),(0,o.iD)("span",ee,"未付款"))])])])])])]),(0,o._)("div",le,[oe,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=(...t)=>r.updateProduct&&r.updateProduct(...t))}," 修改付款狀態 ")])])])],512)}var de={props:["tempOrder"],template:"#templateForProductModal",data(){return{product:{},bsModal:{}}},watch:{tempOrder(){this.product=this.tempOrder}},methods:{updateProduct(){const t=`https://vue3-course-api.hexschool.io/v2/api/ttest/admin/order/${this.tempOrder.id}`;this.$http.put(t,{data:this.tempOrder}).then((t=>{console.log(t),this.$emit("get-orders"),this.bsModal.hide()}))}},mounted(){this.bsModal=new(gt())(this.$refs.orderModal)}};const se=(0,D.Z)(de,[["render",ae]]);var re=se,ie={components:{pagination:$,productModal:ft,delProductModal:re},data(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!1,pagination:{}}},methods:{checkLogin(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common["Authorization"]=t;const e="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.post(e).then((()=>{this.getProducts()}))},getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/v2/api/ttest/admin/products/?page=${t}`;this.$http.get(e).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination}))},openModal(t,e){"isNew"===t?(this.tempProduct={imagesUrl:[]},this.$refs.productModal.bsModal.show(),this.isNew=!0):"edit"===t?(this.tempProduct={...e},this.$refs.productModal.bsModal.show(),this.isNew=!1):"delete"===t&&(this.$refs.delProductModal.bsModal.show(),this.tempProduct={...e})}},mounted(){this.checkLogin()}};const ce=(0,D.Z)(ie,[["render",b]]);var ne=ce}}]);
//# sourceMappingURL=554.1d3e1ae1.js.map