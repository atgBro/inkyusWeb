(this.webpackJsonpyogartreact=this.webpackJsonpyogartreact||[]).push([[0],{25:function(e,t,i){"use strict";i.r(t);var n,s=i(1),a=i.n(s),c=i(10),o=i.n(c),r=i(2),l=i(6),d=i.n(l),j=i(11),u=i(12),h=i(13),m=i(14),p=i(7),g=function(){function e(){Object(h.a)(this,e)}return Object(m.a)(e,null,[{key:"getGallerys",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t,i,s,a,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],i={id:0,description_art:"",description_yoga:"",description_index:"",description_page_nouvelle_peintures:"",nouveaute_plage_annuel:0},s={fiches_descriptions:"",videos_descriptions:""},a=[],c=[],o=Object(p.gql)(n||(n=Object(j.a)(['\n        {\n            galerie (filter:{status: {_eq: "published"}}, sort:"date_updated") {\n              titre\n              description\n              status\n              color\n              miniature{\n                  filename_disk\n                }\n              peintures{\n                peinture_id (sort:"annee_de_creation") {\n                  titre\n                  description\n                  photo{\n                    filename_disk\n                  }\n                  annee_de_creation \n                  technique_de_creation\n                }\n              }\n            }\n            fiche_yoga (filter:{status: {_eq: "published"}}) {\n              titre\n              description\n              thumbnail {\n                filename_disk\n              }\n              etapes {\n                titre\n                description\n                postures{\n                  titre\n                  mouvements{\n                    description\n                    etapes_img{\n                      directus_files_id{\n                        filename_disk\n                      }\n                    }\n                  }\n                }\n                sub_etapes{\n                  titre\n                  description\n                  postures{\n                    titre\n                    mouvements{\n                    description\n                      etapes_img{\n                      directus_files_id{\n                        filename_disk}\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            infos_generale {\n                id\n                description_art\n                description_yoga\n                description_index\n                description_page_nouvelle_peintures\n                nouveaute_plage_annuel\n            }\n            infos_yoga {\n                id\n                fiches_descriptions\n                videos_descriptions\n            }\n            video_yoga (filter:{status: {_eq: "published"}}) {\n                date_created\n                titre\n                video_posture\n                video_relaxation\n            }\n          }\n        ']))),e.next=8,Object(p.request)("https://christineapi.chiliwa.com/graphql",o).then((function(e){return t=e.galerie,i=e.infos_generale,a=e.fiche_yoga,s=e.infos_yoga,(c=e.video_yoga).map((function(e,t){void 0!==e.video_posture.split("/").pop()&&(c[t].video_posture=e.video_posture.split("/").pop().split("?v=").pop()),null!==e.video_relaxation&&void 0!==e.video_relaxation.split("/").pop()&&(c[t].video_relaxation=e.video_relaxation.split("/").pop().split("?v=").pop())})),{galerie:t,info:i,fiche_yoga:a,infos_Yoga:s,video_yoga:c}})).catch((function(e){return console.log("error: "+e)}));case 8:return e.abrupt("return",{galerie:t,info:i,infos_yoga:s,fiche_yoga:a,video_yoga:c});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),f=i(0),b=function e(t,i){var n=Array.from(document.getElementsByClassName(i));n.sort((function(e,t){return+e.style.order-+t.style.order})),"right"===t&&(n[n.length-1].style.order=(+n[0].style.order-1).toString()),"left"===t&&(n[0].style.order=(+n[n.length-1].style.order+1).toString()),n.sort((function(e,t){return+e.style.order-+t.style.order}));var s=n[Math.ceil((n.length-1)/2)].getAttribute("data-titre");document.getElementsByClassName("sliderNamePaint"+i)[0].innerHTML=s||"",n[Math.ceil((n.length-1)/2)].classList.contains("paintGalleryEmpty")&&e(t,i)},x=function(e){return Object(f.jsxs)("section",{className:"gallerySection",id:"gallery"+e.id,style:{background:'url("'.concat("https://christineapi.chiliwa.com/assets/"+e.gal.miniature.filename_disk,'")'),backgroundSize:"cover"},children:[Object(f.jsxs)("div",{className:"galleryTxt",children:[Object(f.jsx)("h2",{className:"galleryTitle",children:e.gal.titre}),Object(f.jsx)("p",{className:"galleryContent",children:e.gal.description})]}),Object(f.jsxs)("div",{className:"zoomPicGallery hide",id:"zoomPicGallery"+e.id,children:[Object(f.jsx)("div",{className:"zoomImg"}),Object(f.jsx)("p",{onClick:function(){var t;t="zoomPicGallery"+e.id,document.getElementById(t).classList.add("hide")},children:"\u2716"}),Object(f.jsx)("div",{className:"zoomInfo"})]}),Object(f.jsxs)("div",{className:"gallery",children:[Object(f.jsx)("div",{className:"galleryPrev BtngalInter",onClick:function(){b("right","paintGallery"+e.id)},children:Object(f.jsx)("i",{className:"fas fa-caret-left"})}),Object(f.jsx)("div",{className:"galleryNext BtngalInter",onClick:function(){b("left","paintGallery"+e.id)},children:Object(f.jsx)("i",{className:"fas fa-caret-right"})}),Object(f.jsxs)("div",{className:"slider",children:[e.gal.peintures.map((function(t,i){return Object(f.jsx)("div",{style:{background:'url("'.concat("https://christineapi.chiliwa.com/assets/"+t.peinture_id.photo.filename_disk,'")'),backgroundSize:"contain",order:i,backgroundRepeat:"no-repeat",backgroundPosition:"center"},"data-titre":t.peinture_id.titre,className:"paintGallery paintGallery"+e.id,onClick:function(){!function(e,t,i,n,s,a){var c=document.querySelector("#".concat(e," .zoomImg"));c.style.background='url("'.concat(t,'"),rgba(0, 0, 0, 0.507)'),c.style.backgroundSize="contain",c.style.backgroundRepeat="no-repeat",c.style.backgroundPosition="center",document.querySelector("#".concat(e," .zoomInfo")).innerHTML="\n    <h2>".concat(i,'</h2>\n    <p class="subTitle">').concat(a?a+" - ":"").concat(s||"","</p>\n    <p>").concat(n||"","</p>\n    "),document.getElementById(e).classList.remove("hide")}("zoomPicGallery"+e.id,"https://christineapi.chiliwa.com/assets/"+t.peinture_id.photo.filename_disk,t.peinture_id.titre,t.peinture_id.description,t.peinture_id.technique_de_creation,t.peinture_id.annee_de_creation)}},e.id+"paint"+i)})),e.gal.peintures.length%2!==1&&Object(f.jsx)("div",{className:"paintGalleryEmpty paintGallery"+e.id,style:{order:e.gal.peintures.length}})]})]}),Object(f.jsx)("p",{className:"sliderNamePaint sliderNamePaintpaintGallery"+e.id,children:e.gal.peintures[Math.ceil((e.gal.peintures.length-1)/2)].peinture_id.titre}),Object(f.jsx)("a",{href:0!==e.id?"#gallery"+(e.id-1):"#index",className:"BtnPrev BtnArt",children:Object(f.jsx)("i",{className:"fas fa-arrow-up"})}),Object(f.jsx)("a",{href:"#index",className:"BtnIndex BtnPrev  BtnArt",children:Object(f.jsx)("i",{className:"fas fa-angle-double-up"})}),Object(f.jsx)("a",{href:"#gallery"+(e.id+1),className:e.last?"BtnNext hide":"BtnNext BtnArt",children:Object(f.jsx)("i",{className:"fas fa-arrow-down"})})]},"keyGallery"+e.id)},v=function(e){return e.setsections(Object(f.jsxs)(s.Fragment,{children:[Object(f.jsx)(x,{id:0,gal:function(){var t=(new Date).getUTCFullYear()-e.info.nouveaute_plage_annuel,i=[];return e.gallerie.map((function(e){return e.peintures.map((function(e){return!!(e.peinture_id.annee_de_creation&&e.peinture_id.annee_de_creation>=t)&&(!i.includes(e)&&i.push(e),!0)})),!0})),{titre:"Nouveaut\xe9s",description:e.info.description_page_nouvelle_peintures,miniature:{filename_disk:i[0]&&i[0].peinture_id.photo.filename_disk},peintures:i,color:"#40B4D8"}}(),last:!1},"news0"),e.gallerie.map((function(t,i){return Object(f.jsx)(x,{id:i+1,gal:t,last:i+1===e.gallerie.length},t.titre+(i+1))}))]})),Object(f.jsxs)(s.Fragment,{children:[Object(f.jsxs)("div",{className:"artIndexInfo",children:[Object(f.jsx)("div",{className:"artTitle",children:Object(f.jsxs)("h1",{children:["Lecointe",Object(f.jsx)("br",{}),"Christine"]})}),Object(f.jsx)("div",{className:"artContent",children:Object(f.jsx)("p",{children:e.info.description_art})})]}),Object(f.jsxs)("div",{className:"artLinks",children:[Object(f.jsx)("a",{href:"#gallery0",style:{backgroundColor:"#40B4D8"},children:"Nouveaut\xe9s"}),e.gallerie.map((function(e,t){return Object(f.jsx)("a",{href:"#gallery"+(t+1),style:{backgroundColor:e.color},children:e.titre},"link"+t)}))]})]})},O=function(e){for(var t="",i=[],n=0;n<e.length;n++)":"===e[n]||"."===e[n]?(t+=e[n],i.push(t),t=""):t+=e[n];return""!==t&&i.push(t),i},_=function(e){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,i=-1!==t?t:0;if(e.fiche[i]){var n=document.getElementsByClassName("ficheYogaDetail")[0];-1!==t&&n.classList.remove("hideMobile");var s=e.fiche[i],a=Object(f.jsxs)("div",{className:"yogaBox","data-id":i,children:[Object(f.jsx)("h2",{children:s.titre}),Object(f.jsx)("p",{children:s.description}),s.etapes.map((function(t,i){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:t.titre}),O(t.description).map((function(e,t){return Object(f.jsx)("p",{className:0===t?"first":"",children:e},"text".concat(t,"-").concat(i))})),t.sub_etapes.map((function(t,i){return Object(f.jsx)("div",{children:Object(f.jsx)("h4",{children:t.titre})},e.id+"subEtp"+i)})),t.postures.map((function(t,n){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:t.titre}),t.mouvements.map((function(s,a){return Object(f.jsxs)("div",{children:[O(s.description).map((function(e,t){return Object(f.jsx)("p",{className:0===t?"first":"",children:e},"text".concat(t,"-").concat(n,"-").concat(a))})),Object(f.jsx)("div",{className:"wrapperImg",children:s.etapes_img.map((function(i,n){return Object(f.jsx)("img",{src:"https://christineapi.chiliwa.com/assets/"+i.directus_files_id.filename_disk,alt:"".concat(t.titre,"-").concat(a,"-").concat(n)},e.id+n+i.directus_files_id.filename_disk)}))})]},e.id+"mouv"+i+"_"+a+"_"+n+"_"+s.etapes_img.length)}))]},e.id+"posture"+n)}))]},e.id+"etp"+i)}))]}),o=document.getElementsByClassName("activeFiche");if(t>-1)for(var r=0;r<o.length;r++)o[r].classList.remove("activeFiche");if(t>-1&&document.getElementById("ficheYogaID".concat(t)).classList.add("activeFiche"),-1===t)return a;c(a)}},i=Object(s.useState)(t()),n=Object(r.a)(i,2),a=n[0],c=n[1];return Object(f.jsxs)("section",{id:"yoga"+e.id,className:"ficheYogaSection yogaSection",children:[Object(f.jsxs)("div",{className:"ficheYogaWrapper",children:[e.fiche.map((function(e,i){return Object(f.jsxs)("div",{className:"ficheYoga "+(0===i?"activeFiche":""),id:"ficheYogaID"+i,onClick:function(){t(i,c)},children:[Object(f.jsx)("span",{style:{background:'url("'.concat("https://christineapi.chiliwa.com/assets/"+e.thumbnail.filename_disk,'")'),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(f.jsx)("p",{children:e.titre})]},"ficheYoga"+i)})),Object(f.jsxs)("div",{className:"ficheYogaDetail hideMobile",id:"ficheYogaDetailPanel",children:[Object(f.jsx)("span",{className:"hideOnPc closeFiche",onClick:function(){document.getElementsByClassName("ficheYogaDetail")[0].classList.add("hideMobile")},children:"\u2716"}),a]})]}),Object(f.jsxs)("div",{className:"yogaIndexInfo yogaCardInfo yogaBoxInvert",children:[Object(f.jsx)("h1",{children:e.name}),Object(f.jsx)("p",{children:e.infoYoga.fiches_descriptions}),Object(f.jsxs)("div",{className:"navYogaFiche",children:[Object(f.jsx)("a",{href:"#index",className:"BtnPrev",children:Object(f.jsx)("i",{className:"fas fa-angle-double-up"})}),Object(f.jsx)("a",{href:"#yoga"+(e.id+1),className:e.last?"BtnNext hide":"BtnNext ",children:Object(f.jsx)("i",{className:"fas fa-arrow-down"})})]})]})]},e.name+e.id)},y=function(e){var t=Object(s.useState)({posture:e.videoYoga[0].video_posture,relaxation:"none",active:e.videoYoga[0].video_posture}),i=Object(r.a)(t,2),n=i[0],a=i[1],c=Object(s.useState)(!1),o=Object(r.a)(c,2),l=o[0],d=o[1];return Object(f.jsxs)("section",{id:"yoga"+e.id,className:"VideoYogaSection yogaSection",children:[Object(f.jsxs)("div",{className:"yogaIndexInfo yogaVideoInfo yogaBox "+(l?"show":""),children:[Object(f.jsx)("h1",{children:e.name}),Object(f.jsxs)("div",{className:"videoYogaContent",children:[Object(f.jsx)("p",{children:e.infoYoga.videos_descriptions}),Object(f.jsx)("div",{className:"videoLinkYogaWrapper",children:e.videoYoga.map((function(e,t){return Object(f.jsx)("div",{className:"videoLinkYoga",onClick:function(){a({posture:e.video_posture,relaxation:e.video_relaxation?e.video_relaxation:"none",active:e.video_posture})},children:Object(f.jsx)("p",{children:t+1+" - "+e.titre})},"videoLinks".concat(t))}))})]}),Object(f.jsxs)("div",{className:"navYogaFiche",children:[Object(f.jsx)("a",{href:0!==e.id?"#yoga"+(e.id-1):"#index",className:"BtnPrev",children:Object(f.jsx)("i",{className:"fas fa-arrow-up"})}),Object(f.jsx)("a",{href:"#index",className:"BtnPrev",children:Object(f.jsx)("i",{className:"fas fa-angle-double-up"})}),Object(f.jsx)("div",{className:"mobileShow",onClick:function(){d(!l)},children:Object(f.jsx)("i",{className:"fas fa-list"})})]})]}),Object(f.jsxs)("div",{className:"videoWrapper",children:[Object(f.jsx)("iframe",{title:"cours de yoga",width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(n.active)}),Object(f.jsxs)("div",{className:"videoLinkYogaBtn",children:[Object(f.jsx)("button",{className:"btnLinkYoga",onClick:function(){a({posture:n.posture,relaxation:n.relaxation,active:n.posture})},children:"Posture"}),"none"!==n.relaxation&&Object(f.jsx)("button",{className:"btnLinkYoga",onClick:function(){a({posture:n.posture,relaxation:n.relaxation,active:n.relaxation})},children:"Relaxation"})]})]})]},e.name+e.id)},N=function(e){return e.setsections(Object(f.jsxs)(s.Fragment,{children:[Object(f.jsx)(_,{id:0,name:"fiches techniques",content:"fiche.description",fiche:e.ficheYoga,infoYoga:e.infoYoga,last:!1}),Object(f.jsx)(y,{id:1,name:"video youtube",content:"fiche.description",infoYoga:e.infoYoga,videoYoga:e.videoYoga,last:!0})]})),Object(f.jsxs)(s.Fragment,{children:[Object(f.jsxs)("div",{className:"yogaNav",children:[Object(f.jsx)("a",{href:"#yoga0",className:"BtnNext yogaBox",children:"Fiches techniques"}),Object(f.jsx)("a",{href:"#yoga1",className:"BtnNext yogaBox",children:"videos explicatives"})]}),Object(f.jsxs)("div",{className:"yogaIndexInfo yogaBox",children:[Object(f.jsx)("div",{className:"yogaTitle",children:Object(f.jsxs)("h1",{children:["Lecointe",Object(f.jsx)("br",{}),"Christine"]})}),Object(f.jsx)("div",{className:"yogaContent",children:Object(f.jsx)("p",{children:void 0!==e.info&&e.info})})]})]})},k=[],L={id:0,description_art:"",description_yoga:"",description_index:"",description_page_nouvelle_peintures:"",nouveaute_plage_annuel:0},B={fiches_descriptions:"",videos_descriptions:""},C=[],Y=[];g.getGallerys().then((function(e){k=e.galerie,L=e.info,C=void 0!==e.fiche_yoga?e.fiche_yoga:C,B=e.infos_yoga,Y=e.video_yoga}));var I=function(){var e=Object(s.useState)(Object(f.jsx)(s.Fragment,{})),t=Object(r.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)("index"),c=Object(r.a)(a,2),o=c[0],l=c[1],d=Object(s.useState)(Object(f.jsx)(s.Fragment,{})),j=Object(r.a)(d,2),u=j[0],h=j[1],m=Object(s.useState)(Object(f.jsx)(s.Fragment,{})),p=Object(r.a)(m,2),g=p[0],b=p[1],x=Object(s.useState)(L.description_index),O=Object(r.a)(x,2),_=O[0],y=O[1],I=function(){l("index"),n(Object(f.jsx)(s.Fragment,{})),b(Object(f.jsx)(s.Fragment,{})),h(Object(f.jsx)(s.Fragment,{}))},w=function(){!function(){var e=document.getElementsByClassName("indexPage")[0],t=document.getElementsByClassName("indexMovLeft")[0],i=document.getElementsByClassName("indexMovRight")[0],n=document.getElementsByClassName("cardId")[0],s=document.getElementById("root");t.classList.contains("done")?(t.classList.remove("done"),i.classList.remove("done"),i.classList.remove("hide"),t.classList.remove("hide"),n.classList.remove("done"),e.classList.remove("right"),e.classList.remove("left"),s.style.overflowY="auto"):(t.classList.add("done"),i.classList.add("done"),i.classList.add("hide"),n.classList.add("done"),e.classList.remove("left"),e.classList.add("right"),s.style.overflowY="hidden")}(),"yoga"===o?I():(l("art"),h(Object(f.jsx)(v,{gallerie:k,info:L,setsections:n})),b(Object(f.jsx)(s.Fragment,{})))},E=function(){!function(){var e=document.getElementsByClassName("indexPage")[0],t=document.getElementsByClassName("indexMovLeft")[0],i=document.getElementsByClassName("indexMovRight")[0],n=document.getElementsByClassName("cardId")[0],s=document.getElementById("root");t.classList.contains("done")?(t.classList.remove("done"),t.classList.remove("hide"),i.classList.remove("hide"),i.classList.remove("done"),n.classList.remove("done"),e.classList.remove("right"),e.classList.remove("left"),s.style.overflowY="auto"):(t.classList.add("done"),t.classList.add("hide"),i.classList.add("done"),n.classList.add("done"),e.classList.remove("right"),e.classList.add("left"),s.style.overflowY="hidden")}(),"art"===o?I():function(){var e;b(Object(f.jsx)(N,{info:null===(e=L)||void 0===e?void 0:e.description_yoga,infoYoga:B,ficheYoga:C,setsections:n,videoYoga:Y})),h(Object(f.jsx)(s.Fragment,{})),l("yoga")}()},S=function(){var e=document.getElementsByClassName("cardIdInfo")[0];e.classList.contains("activ")?e.classList.remove("activ"):e.classList.add("activ"),y(L.description_index)};return Object(f.jsxs)(s.Fragment,{children:[Object(f.jsx)("span",{className:"indexMovLeft",onClick:E}),Object(f.jsx)("span",{className:"indexMovRight",onClick:w}),Object(f.jsxs)("div",{className:"cardId",children:[Object(f.jsx)("i",{className:"fas fa-chevron-left",onClick:E}),Object(f.jsx)("i",{className:"fas fa-chevron-left",onClick:E}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{onClick:S,children:["Lecointe",Object(f.jsx)("br",{}),"Christine"]}),Object(f.jsx)("p",{className:"cardIdInfo",onClick:S,children:_})]}),Object(f.jsx)("i",{className:"fas fa-chevron-right",onClick:w}),Object(f.jsx)("i",{className:"fas fa-chevron-right",onClick:w})]}),Object(f.jsxs)("div",{className:"snapWrapper",children:[Object(f.jsxs)("section",{className:"indexPage",id:"index",children:[Object(f.jsxs)("span",{className:"indexYoga",children:[Object(f.jsxs)("span",{className:"titleIndexCatg",children:["Y",Object(f.jsx)("span",{children:"O"}),"GA",Object(f.jsx)("img",{src:"./images/yOga.png",alt:" o "})]}),g]}),Object(f.jsxs)("span",{className:"indexArt",children:[Object(f.jsx)("span",{className:"titleIndexCatg",children:"ART"}),u]})]}),i]})]})};window.addEventListener("resize",(function(){var e=document.location.href;document.location.href="#resize",document.location.href=e})),o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.52da792c.chunk.js.map