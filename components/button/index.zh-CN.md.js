webpackJsonp([214],{1803:function(t,e){t.exports={content:["section",["p","\u6309\u94ae\u7528\u4e8e\u5f00\u59cb\u4e00\u4e2a\u5373\u65f6\u64cd\u4f5c\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u6807\u8bb0\u4e86\u4e00\u4e2a\uff08\u6216\u5c01\u88c5\u4e00\u7ec4\uff09\u64cd\u4f5c\u547d\u4ee4\uff0c\u54cd\u5e94\u7528\u6237\u70b9\u51fb\u884c\u4e3a\uff0c\u89e6\u53d1\u76f8\u5e94\u7684\u4e1a\u52a1\u903b\u8f91\u3002"]],meta:{category:"Components",type:"General",title:"Button",subtitle:"\u6309\u94ae",filename:"components/button/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","\u901a\u8fc7\u8bbe\u7f6e Button \u7684\u5c5e\u6027\u6765\u4ea7\u751f\u4e0d\u540c\u7684\u6309\u94ae\u6837\u5f0f\uff0c\u63a8\u8350\u987a\u5e8f\u4e3a\uff1a",["code","type"]," -> ",["code","shape"]," -> ",["code","size"]," -> ",["code","loading"]," -> ",["code","disabled"]],["p","\u6309\u94ae\u7684\u5c5e\u6027\u8bf4\u660e\u5982\u4e0b\uff1a"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","disabled"],["td","\u6309\u94ae\u5931\u6548\u72b6\u6001"],["td","boolean"],["td",["code","false"]]],["tr",["td","ghost"],["td","\u5e7d\u7075\u5c5e\u6027\uff0c\u4f7f\u6309\u94ae\u80cc\u666f\u900f\u660e\uff0c\u7248\u672c 2.7 \u4e2d\u589e\u52a0"],["td","boolean"],["td","false"]],["tr",["td","href"],["td","\u70b9\u51fb\u8df3\u8f6c\u7684\u5730\u5740\uff0c\u6307\u5b9a\u6b64\u5c5e\u6027 button \u7684\u884c\u4e3a\u548c a \u94fe\u63a5\u4e00\u81f4"],["td","string"],["td","-"]],["tr",["td","htmlType"],["td","\u8bbe\u7f6e ",["code","button"]," \u539f\u751f\u7684 ",["code","type"]," \u503c\uff0c\u53ef\u9009\u503c\u8bf7\u53c2\u8003 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"},"HTML \u6807\u51c6"]],["td","string"],["td",["code","button"]]],["tr",["td","icon"],["td","\u8bbe\u7f6e\u6309\u94ae\u7684\u56fe\u6807\u7c7b\u578b"],["td","string"],["td","-"]],["tr",["td","loading"],["td","\u8bbe\u7f6e\u6309\u94ae\u8f7d\u5165\u72b6\u6001"],["td","boolean ","|"," { delay: number }"],["td",["code","false"]]],["tr",["td","shape"],["td","\u8bbe\u7f6e\u6309\u94ae\u5f62\u72b6\uff0c\u53ef\u9009\u503c\u4e3a ",["code","circle"]," \u6216\u8005\u4e0d\u8bbe"],["td","string"],["td","-"]],["tr",["td","size"],["td","\u8bbe\u7f6e\u6309\u94ae\u5927\u5c0f\uff0c\u53ef\u9009\u503c\u4e3a ",["code","small"]," ",["code","large"]," \u6216\u8005\u4e0d\u8bbe"],["td","string"],["td",["code","default"]]],["tr",["td","target"],["td","\u76f8\u5f53\u4e8e a \u94fe\u63a5\u7684 target \u5c5e\u6027\uff0chref \u5b58\u5728\u65f6\u751f\u6548"],["td","string"],["td","-"]],["tr",["td","type"],["td","\u8bbe\u7f6e\u6309\u94ae\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a ",["code","primary"]," ",["code","dashed"]," ",["code","danger"],"(\u7248\u672c 2.7 \u4e2d\u589e\u52a0) \u6216\u8005\u4e0d\u8bbe"],["td","string"],["td","-"]],["tr",["td","onClick"],["td",["code","click"]," \u4e8b\u4ef6\u7684 handler"],["td","function"],["td","-"]],["tr",["td","block"],["td","\u5c06\u6309\u94ae\u5bbd\u5ea6\u8c03\u6574\u4e3a\u5176\u7236\u5bbd\u5ea6\u7684\u9009\u9879"],["td","boolean"],["td",["code","false"]]]]],["p",["code","<Button>Hello world!</Button>"]," \u6700\u7ec8\u4f1a\u88ab\u6e32\u67d3\u4e3a ",["code","<button><span>Hello world!</span></button>"],"\uff0c\u5e76\u4e14\u9664\u4e86\u4e0a\u8868\u4e2d\u7684\u5c5e\u6027\uff0c\u5176\u5b83\u5c5e\u6027\u90fd\u4f1a\u76f4\u63a5\u4f20\u5230 ",["code","<button></button>"],"\u3002"],["p",["code",'<Button href="http://example.com">Hello world!</Button>']," \u5219\u4f1a\u6e32\u67d3\u4e3a ",["code",'<a href="http://example.com"><span>Hello world!</span></a>'],"\u3002"],["style",'\n[id^="components-button-demo-"] .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n[id^="components-button-demo-"] .ant-btn-group > .ant-btn {\n  margin-right: 0;\n}\n']]}}});