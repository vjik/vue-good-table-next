import{_ as a,r,o as n,c as s,a as c}from"./app.f00b8de7.js";const l={name:"search-demo",props:["trigger"],data(){return{columns:[{label:"Name",field:"name",filterOptions:{enabled:!1}},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"yyyy-MM-dd",dateOutputFormat:"MMM do yy"},{label:"Percent",field:"score",type:"percentage"}],rows:[{id:1,name:"John",age:20,createdAt:"2011-07-02",score:.03343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.03343}]}},computed:{},methods:{},mounted(){},components:{}};function d(m,u,t,p,e,_){const o=r("vue-good-table");return n(),s("div",null,[c(o,{"search-options":{enabled:!0,trigger:t.trigger},columns:e.columns,rows:e.rows},null,8,["search-options","columns","rows"])])}var g=a(l,[["render",d],["__file","search-demo.vue"]]);export{g as default};
