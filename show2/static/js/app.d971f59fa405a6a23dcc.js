webpackJsonp([1],{100:function(t,e){},101:function(t,e){},102:function(t,e){},103:function(t,e){},104:function(t,e){},105:function(t,e){},108:function(t,e,a){function o(t){a(104)}var n=a(6)(a(76),a(116),o,"data-v-7a18aee9",null);t.exports=n.exports},109:function(t,e,a){function o(t){a(105)}var n=a(6)(a(77),a(117),o,"data-v-b272dea0",null);t.exports=n.exports},110:function(t,e,a){function o(t){a(101)}var n=a(6)(a(79),a(113),o,null,null);t.exports=n.exports},111:function(t,e,a){function o(t){a(100)}var n=a(6)(a(80),a(112),o,"data-v-141ed7b7",null);t.exports=n.exports},112:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{position:"fixed",height:"100%",width:"5%",left:"0",top:"0"}},[a("leftNav")],1),t._v(" "),a("div",{staticStyle:{position:"fixed",height:"100%",width:"95%",left:"5%",top:"0"}},[a("listCenter")],1)])},staticRenderFns:[]}},113:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData5}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData5,border:""}},[a("el-table-column",{attrs:{prop:" scope.row.name ",label:"日期",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"scope.row.name",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"scope.row.name",label:"地址"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"订单ID",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{label:"订单时间",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"总金额",prop:"desc"}})],1)},staticRenderFns:[]}},114:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-nav"},[a("div",[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/list"}},[t._v("订单")])],1),t._v(" "),a("li",[t._v("会员")]),t._v(" "),a("li",[t._v("设置")])])])])},staticRenderFns:[]}},115:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{position:"fixed",height:"100%",width:"5%",left:"0",top:"0"}},[a("leftNav")],1),t._v(" "),a("div",{staticStyle:{position:"fixed",height:"100%",width:"95%",left:"5%",top:"0"}},[a("center")],1)])},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pos"},[a("div",[a("el-row",[a("el-col",{attrs:{span:7}},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"点餐"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品"}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.del(e.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.add(e.row)}}},[t._v("增加")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.jianshao(e.row)}}},[t._v("减少")])]}}])})],1),t._v(" "),a("p",[t._v("总计"+t._s(t.totalCount)+"  总额"+t._s(t.totalMoney))]),t._v(" "),a("div",[a("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:t.delAllGoods}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.check}},[t._v("结账")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"挂单"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","show-summary":""}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品"}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("增加")])]}}])})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"外卖"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品"}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("增加")])]}}])})],1)],1)],1)],1),t._v(" "),a("el-col",{staticStyle:{"padding-left":"20px","border-left":"1px solid #D3DCE6"},attrs:{span:17}},[a("div",{staticClass:"often-goods"},[a("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),a("div",{staticClass:"often-goods-list"},t._l(t.oftenGoods,function(e){return a("ul",[a("li",{on:{click:function(a){t.add(e)}}},[a("span",[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"o-price"},[t._v("￥"+t._s(e.price)+"元")])])])}))]),t._v(" "),a("div",{staticClass:"goods-type"},[a("div",{staticClass:"title"},[t._v("所有商品")]),t._v(" "),a("el-tabs",[a("el-tab-pane",{attrs:{label:"汉堡"}},t._l(t.typeGoods[0],function(e){return a("ul",{staticClass:"cookList"},[a("li",{on:{click:function(a){t.add(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price)+"元")])])])})),t._v(" "),a("el-tab-pane",{attrs:{label:"小食"}},t._l(t.typeGoods[1],function(e){return a("ul",{staticClass:"cookList"},[a("li",{on:{click:function(a){t.add(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price)+"元")])])])})),t._v(" "),a("el-tab-pane",{attrs:{label:"饮料"}},t._l(t.typeGoods[2],function(e){return a("ul",{staticClass:"cookList"},[a("li",{on:{click:function(a){t.add(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price)+"元")])])])})),t._v(" "),a("el-tab-pane",{attrs:{label:"套餐"}},t._l(t.typeGoods[3],function(e){return a("ul",{staticClass:"cookList"},[a("li",{on:{click:function(a){t.add(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price)+"元")])])])}))],1)],1)])],1)],1)])},staticRenderFns:[]}},31:function(t,e,a){function o(t){a(102)}var n=a(6)(a(78),a(114),o,null,null);t.exports=n.exports},32:function(t,e,a){"use strict";var o=a(3),n=a(118),s=a(108),l=a.n(s),i=a(111),r=a.n(i);o.default.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",components:{default:l.a}},{path:"/list",name:"list",components:{default:r.a}}]})},34:function(t,e){},35:function(t,e,a){function o(t){a(103)}var n=a(6)(a(75),a(115),o,null,null);t.exports=n.exports},75:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},76:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(31),n=a.n(o),s=a(109),l=a.n(s),i=a(10),r=a.n(i);e.default={name:"hello",created:function(){var t=this;r.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(e){console.log(e),t.oftenGoods=e.data}).catch(function(t){console.log(t),alert("网络错误，不能访问")})},data:function(){return{oftenGoods:[]}},components:{center:l.a,leftNav:n.a}}},77:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(10),n=a.n(o);e.default={name:"center",created:function(){var t=this;n.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(e){console.log(e),t.oftenGoods=e.data}).catch(function(t){console.log(t),alert("网络错误，不能访问")}),n.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(e){console.log(e),t.typeGoods=e.data}).catch(function(t){console.log(t),alert("网络错误，不能访问")})},data:function(){return{tableData:[],oftenGoods:[],typeGoods:[],totalCount:0,totalMoney:0}},methods:{add:function(t){for(var e=!1,a=0;a<this.tableData.length;a++)this.tableData[a].goodsId==t.goodsId&&(e=!0);if(e){this.tableData.filter(function(e){return e.goodsId==t.goodsId})[0].count++}else{var o={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(o)}this.getAllMoney()},jianshao:function(t){var e=this.tableData.filter(function(e){return e.goodsId==t.goodsId});1==e[0].count?this.tableData=this.tableData.filter(function(e){return e.goodsId!=t.goodsId}):e[0].count--,this.getAllMoney()},del:function(t){this.tableData=this.tableData.filter(function(e){return e.goodsId!=t.goodsId}),this.getAllMoney()},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(e){t.totalCount+=e.count,t.totalMoney=t.totalMoney+e.price*e.count})},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},check:function(){if(0==this.tableData.length||0==this.totalCount)return alert("还没选择商品，无法结账"),!1;n()({method:"post",url:"http://localhost:8080/vueOrder",params:{order_data:this.tableData}}).then(function(t){console.log(t),alert("结账成功,加油！")}).catch(function(t){console.log(t),alert("网络错误，不能访问")})}},computed:{}}},78:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"leftNav",data:function(){return{}}}},79:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tableData5:[{id:"12987122",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987123",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987125",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987126",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"}]}}}},80:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(31),n=a.n(o),s=a(110),l=a.n(s),i=a(10);a.n(i);e.default={name:"list",data:function(){return{oftenGoods:[]}},components:{listCenter:l.a,leftNav:n.a}}},81:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(3),n=a(33),s=a.n(n),l=a(34),i=(a.n(l),a(35)),r=a.n(i),c=a(32);o.default.use(s.a),o.default.config.productionTip=!1,new o.default({el:"#app",render:function(t){return t(r.a)},router:c.a,template:"<App/>",components:{App:r.a}})}},[81]);
//# sourceMappingURL=app.d971f59fa405a6a23dcc.js.map