import{r as y,b as w,o,d as m,w as C,e as b,f as l,u as s,i as x,t as h,g as B,h as r,j as S,k as D,c as u,F as g,l as F,m as v}from"./index-eeba86cf.js";const L={alt:"",class:"main__catalog-list-item-img"},P={class:"main__catalog-list-item-title"},$={__name:"CatalogItem",props:{item:Object,type:String},setup(t){return(e,n)=>{const i=y("router-link"),a=w("lazy");return o(),m(i,{to:t.type+"/"+t.item.id,class:"main__catalog-list-item"},{default:C(()=>[b(l("img",L,null,512),[[a,s(x)+t.item.backdrop_path]]),l("h2",P,h(t.item.name||t.item.title),1)]),_:1},8,["to"])}}},j={key:0,class:"main__catalog"},z={class:"container"},H={class:"main__catalog-title"},M={class:"main__catalog-list"},V={__name:"Catalog",props:{type:String},setup(t){const e=t,n=B();let i=r(1),a=r([]),c=r(!1);const _=async()=>{if(!c.value){c.value=!0,await n.getPopular({type:e.type,page:i.value});const p=e.type=="movie"?n.popularMovies:e.type=="tv"?n.popularTvs:"";a.value.push(...p),setTimeout(()=>c.value=!1,1e3),i.value++}};S(()=>{window.onscroll=()=>{scrollY+window.innerHeight>=document.body.scrollHeight-100&&_()},_()});const f=D(()=>e.type=="movie"?"Все фильмы":e.type=="tv"?"Все сериалы":"");return(p,N)=>{const k=y("Loader");return o(),u(g,null,[s(a)?(o(),u("div",j,[l("div",z,[l("h2",H,h(f.value),1),l("div",M,[(o(!0),u(g,null,F(s(a),d=>(o(),m($,{key:d.id,item:d,type:t.type},null,8,["item","type"]))),128))])])])):v("",!0),!s(a)||s(c)?(o(),m(k,{key:1})):v("",!0)],64)}}};export{V as _};
