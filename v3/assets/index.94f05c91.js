import{c as d,p as m}from"./use-translate.3147781c.js";import{n as p,u as f,w as s}from"./with-install.6d6d29d8.js";import{z as u,x as h,e as l,H as V}from"./vue-libs.4d090e76.js";import{u as g}from"./useChildren.e93f4c15.js";import{u as k}from"./index.1f370f94.js";import{c as C,C as b}from"./Checker.bcdcf618.js";import{u as j}from"./useParent.fa48ddd0.js";const[c,v]=d("radio-group"),P={disabled:Boolean,iconSize:p,direction:String,modelValue:f,checkedColor:String},i=Symbol(c);var R=u({name:c,props:P,emits:["change","update:modelValue"],setup(e,{emit:n,slots:r}){const{linkChildren:o}=g(i),t=a=>n("update:modelValue",a);return h(()=>e.modelValue,a=>n("change",a)),o({props:e,updateValue:t}),k(()=>e.modelValue),()=>{var a;return l("div",{class:v([e.direction]),role:"radiogroup"},[(a=r.default)==null?void 0:a.call(r)])}}});const B=s(R),[w,S]=d("radio");var x=u({name:w,props:C,emits:["update:modelValue"],setup(e,{emit:n,slots:r}){const{parent:o}=j(i),t=()=>(o?o.props.modelValue:e.modelValue)===e.name,a=()=>{o?o.updateValue(e.name):n("update:modelValue",e.name)};return()=>l(b,V({bem:S,role:"radio",parent:o,checked:t(),onToggle:a},e),m(r,["default","icon"]))}});const D=s(x);export{D as R,B as a};
