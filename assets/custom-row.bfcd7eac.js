import{_ as r,r as c,o,c as t,a as l,w as d,b as m,t as n}from"./app.f00b8de7.js";const u={name:"custom-row",props:[],data(){return{columns:[{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"yyyy-MM-dd",dateOutputFormat:"MMM do yy"},{label:"Percent",field:"score",type:"percentage"}],rows:[{id:1,name:"John",age:20,createdAt:"2011-07-02",score:.03343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.03343}]}},computed:{},methods:{},mounted(){},components:{}},_={key:0},i={style:{"font-weight":"bold",color:"blue"}},p={key:1};function f(y,w,g,b,a,v){const s=c("vue-good-table");return o(),t("div",null,[l(s,{columns:a.columns,rows:a.rows},{"table-row":d(e=>[e.column.field=="age"?(o(),t("span",_,[m("span",i,n(e.row.age),1)])):(o(),t("span",p,n(e.formattedRow[e.column.field]),1))]),_:1},8,["columns","rows"])])}var x=r(u,[["render",f],["__file","custom-row.vue"]]);export{x as default};
