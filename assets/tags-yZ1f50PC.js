import{_ as z}from"./YunCard.vue_vue_type_script_setup_true_lang-HibbEtMS.js";import{_ as A}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-wW8b8w1p.js";import{d as b,o as t,e as _,f as c,t as p,ad as D,ae as E,a as I,u as j,B as H,x as K,K as O,au as W,m as $,z as G,C as J,ag as M,a8 as Q,q as U,c as a,w as s,r as X,h as r,af as Z,l as e,F as S,k as ee,n as te,s as se,ac as ne}from"./app-TBqKw1R4.js";import{_ as oe}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-QTqAMj2a.js";const ae={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},re={"inline-flex":""},le={"inline-flex":"",text:"xs"},ie=b({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(k){return(l,f)=>(t(),_("span",ae,[c("span",re,"#"+p(l.title),1),c("span",le,"["+p(l.count)+"]",1)]))}}),ce={class:"yun-text-light",text:"center",p:"2"},ue={class:"justify-center items-end",flex:"~ wrap",gap:"1"},ge=b({__name:"tags",setup(k){D([E({"@type":"CollectionPage"})]);const l=I(),f=j(),w=H(),{t:d}=K(),u=O(),{tags:g,getTagStyle:T}=W({primary:w.value.colors.primary}),i=$(()=>l.query.tag||""),P=G(),Y=$(()=>P.postList.filter(o=>o.tags?typeof o.tags=="string"?o.tags===i.value:o.tags.includes(i.value):!1)),y=J(),{show:B}=M(y);function V(n){f.push({query:{tag:n}}),B()}const L=Q(u);return(n,o)=>{const h=ne,v=oe,R=ie,C=U("RouterView"),q=A,F=z;return t(),_(S,null,[n.$slots["sidebar-child"]?(t(),a(h,{key:0},{default:s(()=>[X(n.$slots,"sidebar-child")]),_:3})):(t(),a(h,{key:1})),r(C,null,{default:s(({Component:N})=>[(t(),a(Z(N),null,{"main-header":s(()=>[r(v,{title:e(L)||e(d)("menu.tags"),icon:e(u).icon||"i-ri-tag-line",color:e(u).color},null,8,["title","icon","color"])]),"main-content":s(()=>[c("div",ce,p(e(d)("counter.tags",Array.from(e(g)).length)),1),c("div",ue,[(t(!0),_(S,null,ee(Array.from(e(g)).sort(),([m,x])=>(t(),a(R,{key:m,title:m,count:x.count,style:te(e(T)(x.count)),onClick:me=>V(m.toString())},null,8,["title","count","style","onClick"]))),128))]),r(C)]),"main-nav-before":s(()=>[i.value?(t(),a(F,{key:0,ref_key:"collapse",ref:y,m:"t-4",w:"full"},{default:s(()=>[r(v,{title:i.value,icon:"i-ri-hashtag"},null,8,["title"]),r(q,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:Y.value},null,8,["posts"])]),_:1},512)):se("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{ge as default};