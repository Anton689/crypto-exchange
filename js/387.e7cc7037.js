"use strict";(self["webpackChunkcrypto_exchange"]=self["webpackChunkcrypto_exchange"]||[]).push([[387],{3387:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"search"},[t("div",{staticClass:"search__inner"},[t("input",{staticClass:"innerInput",attrs:{placeholder:"Search",type:"text"}}),t("div",{staticClass:"innerClose",on:{click:e.closeDropdownHandler}})])]),t("div",{staticClass:"dropdown"},e._l(e.currenciesList,(function(s,n){return t("div",{key:n,staticClass:"dropdown__dropdownItem",on:{click:function(t){return e.clickHandler(s)}}},[s.image?t("img",{staticClass:"dropdownItemLogo",attrs:{src:s.image,alt:":("}}):t("div",{staticClass:"logoCap"}),t("div",{staticClass:"dropdownItemTicker"},[e._v(e._s(s.ticker.toUpperCase()))]),t("div",{staticClass:"dropdownItemTitle"},[e._v(e._s(s.name))])])})),0)])},i=[],c=s(408),r={created(){window.addEventListener("click",this.clickInElement)},beforeDestroy(){window.removeEventListener("click",this.clickInElement)},methods:{clickInElement(e){this.$el.contains(e.target)||this.closeDropdownHandler()}}},a={mixins:[r],name:"DropdownItem",computed:{...(0,c.rn)({currenciesList:e=>e.exchanger.currenciesList})},methods:{clickHandler(e){this.$emit("chooseTickerHandle",e)},closeDropdownHandler(){this.$emit("closeDropdownHandle")}}},o=a,l=s(1001),d=(0,l.Z)(o,n,i,!1,null,"3a95a244",null),p=d.exports}}]);
//# sourceMappingURL=387.e7cc7037.js.map