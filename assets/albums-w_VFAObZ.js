import{d as m,o as t,c as r,w as l,f as c,l as a,t as f,i as $,e as i,F as h,k,x as Y,K as A,a8 as C,ad as w,ae as B,m as L,q as P,r as S,h as u,af as V,ac as F}from"./app-TBqKw1R4.js";import{o as D}from"./index-nlSmcLJj.js";import{_ as E}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-QTqAMj2a.js";const I=["title"],N=["src","alt","on-error"],R=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,n)=>{const s=$;return t(),r(s,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":a(D)},null,40,N),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,I)]),_:1},8,["to"])}}}),q={class:"yun-album-list"},z=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,n)=>{const s=R;return t(),i("div",q,[(t(!0),i(h,null,k(e.albums,o=>(t(),r(s,{key:o.url,album:o},null,8,["album"]))),128))])}}}),H={text:"center",class:"yun-text-light",p:"2"},j=m({__name:"albums",setup(_){const{t:e}=Y(),n=A(),s=C(n);w([B({"@type":"CollectionPage"})]);const o=L(()=>n.value.albums||[]);return(p,K)=>{const d=F,g=E,y=z,b=P("RouterView");return t(),i(h,null,[p.$slots["sidebar-child"]?(t(),r(d,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(d,{key:1})),u(b,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(g,{title:a(s)||a(e)("title.album"),icon:a(n).icon||"i-ri-gallery-line",color:a(n).color},null,8,["title","icon","color"])]),"main-content":l(()=>[c("div",H,f(a(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(b)]),_:2},1024))]),_:1})],64)}}});export{j as default};
