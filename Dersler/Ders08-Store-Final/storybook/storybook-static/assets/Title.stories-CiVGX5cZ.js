import{j as x}from"./jsx-runtime-CkxqCPlQ.js";import{P as i}from"./index-C1dzxQ9A.js";import"./index-DJO9vBfz.js";const s=({size:a,onClick:k,text:z,...l})=>(console.log(...l),x.jsx("div",{...l,onClick:k,className:`cunstom-title ${a}`,children:z}));s.propTypes={size:i.string,onClick:i.func,text:i.string.isRequired};s.defaultProps={size:"medium",onClick:void 0,text:"Başlık 1"};s.__docgenInfo={description:"",methods:[],displayName:"Title",props:{size:{defaultValue:{value:'"medium"',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},text:{defaultValue:{value:'"Başlık 1"',computed:!1},description:"",type:{name:"string"},required:!1}}};const h={title:"Title",component:s,tags:["autodocs"]},o=a=>x.jsx(s,{...a});Small.args={size:"small",text:"Small Title"};const t=o.bind({});Small.args={size:"medium",text:"Medium Title"};const r=o.bind({});Small.args={size:"large",text:"Large Title"};const e=o.bind({});e.args={size:"large",text:"withClick Title",onclick:()=>alert("clicked")};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Title {...args} />",...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var n,u,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Title {...args} />",...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,f,T;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Title {...args} />",...(T=(f=e.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const v=["Medium","Large","withClick"];export{r as Large,t as Medium,v as __namedExportsOrder,h as default,e as withClick};