(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{43673:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/static-toolbar",function(){return e(84727)}])},65721:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var o=e(52322),r=(e(2784),e(6277)),i=(e(90217),e(88441)),s=e.n(i);function a(t){var n=t.code,e=t.className,i=t.name,a=(0,r.Z)(s().root,e),l=i?s().name:s().hiddenName,d=(0,r.Z)(s().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("div",{className:l,children:i}),(0,o.jsx)("pre",{className:d,children:(0,o.jsx)("code",{children:n})})]})}},14799:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var o=e(52322),r=(e(2784),e(6277)),i=(e(90217),e(4813)),s=e.n(i);function a(t){var n=t.code,e=t.className,i=(0,r.Z)(s().root,e);return(0,o.jsx)("span",{className:i,children:(0,o.jsx)("code",{dangerouslySetInnerHTML:{__html:n}})})}},16744:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var o=e(52322),r=e(18476),i=e.n(r),s=e(2784),a=e(82587),l=e(11497),d=e(26351),c=e(56895);function u(t){var n=t.children,e=t.filePath;return(0,s.useEffect)((function(){i().highlightAll()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(l.Z,{}),(0,o.jsx)(d.Z,{}),n,(0,o.jsx)(c.Z,{filePath:e}),(0,o.jsx)(a.Z,{})]})}},84727:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return F}});var o=e(90581),r=e(27805),i=e(64297),s=e(58408),a=e(52322),l=e(2784),d=e(67619),c=e(65721),u=e(66769),p=e(13706),h=e(47842),m=e(70865),f=e(64705),b=e(16481),x=e(20138),g=e(84397),v=e.n(g),S=function(t){(0,i.Z)(e,t);var n=(0,s.Z)(e);function e(){var t;return(0,o.Z)(this,e),t=n.apply(this,arguments),(0,h.Z)((0,p.Z)(t),"onWindowClick",(function(){return t.props.onOverrideContent(void 0)})),t}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){window.addEventListener("click",t.onWindowClick)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.onWindowClick)}},{key:"render",value:function(){var t=this,n=[x.gS,x.oV,x.R8];return(0,a.jsx)("div",{children:n.map((function(n,e){return(0,a.jsx)(n,(0,m.Z)({},t.props),e)}))})}}]),e}(l.Component),j=function(t){(0,i.Z)(e,t);var n=(0,s.Z)(e);function e(){var t;return(0,o.Z)(this,e),t=n.apply(this,arguments),(0,h.Z)((0,p.Z)(t),"onClick",(function(){return t.props.onOverrideContent(S)})),t}return(0,r.Z)(e,[{key:"render",value:function(){return(0,a.jsx)("div",{className:v().headlineButtonWrapper,children:(0,a.jsx)("button",{onClick:this.onClick,className:v().headlineButton,children:"H"})})}}]),e}(l.Component),y=(0,b.C)(),Z=y.Toolbar,C=[y],_="In this editor a toolbar shows up once you select part of the text \u2026",k=function(t){(0,i.Z)(e,t);var n=(0,s.Z)(e);function e(){var t;return(0,o.Z)(this,e),t=n.apply(this,arguments),(0,h.Z)((0,p.Z)(t),"state",{editorState:(0,f.bf)(_)}),(0,h.Z)((0,p.Z)(t),"onChange",(function(n){t.setState({editorState:n})})),(0,h.Z)((0,p.Z)(t),"focus",(function(){t.editor.focus()})),t}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){this.setState({editorState:(0,f.bf)(_)})}},{key:"render",value:function(){var t=this;return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:v().editor,onClick:this.focus,children:[(0,a.jsx)(f.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:C,ref:function(n){t.editor=n}}),(0,a.jsx)(Z,{children:function(t){return(0,a.jsxs)("div",{children:[(0,a.jsx)(x.n3,(0,m.Z)({},t)),(0,a.jsx)(x.BI,(0,m.Z)({},t)),(0,a.jsx)(x.tg,(0,m.Z)({},t)),(0,a.jsx)(x.Ed,(0,m.Z)({},t)),(0,a.jsx)(b.Z,(0,m.Z)({},t)),(0,a.jsx)(j,(0,m.Z)({},t)),(0,a.jsx)(x.cU,(0,m.Z)({},t)),(0,a.jsx)(x.pu,(0,m.Z)({},t)),(0,a.jsx)(x.YC,(0,m.Z)({},t)),(0,a.jsx)(x.Ou,(0,m.Z)({},t))]})}})]})})}}]),e}(l.Component),E=e(9389),B=e.n(E),T=(0,b.C)(),P=T.Toolbar,w=[T],N="The toolbar above the editor can be used for formatting text, as in conventional static editors  \u2026",W=function(t){(0,i.Z)(e,t);var n=(0,s.Z)(e);function e(){var t;return(0,o.Z)(this,e),t=n.apply(this,arguments),(0,h.Z)((0,p.Z)(t),"state",{editorState:(0,f.bf)(N)}),(0,h.Z)((0,p.Z)(t),"onChange",(function(n){t.setState({editorState:n})})),(0,h.Z)((0,p.Z)(t),"focus",(function(){t.editor.focus()})),t}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){this.setState({editorState:(0,f.bf)(N)})}},{key:"render",value:function(){var t=this;return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:B().editor,onClick:this.focus,children:[(0,a.jsx)(f.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:w,ref:function(n){t.editor=n}}),(0,a.jsx)(P,{})]})})}}]),e}(l.Component),O=e(41887),I=e.n(O),D=e(98773),A=e.n(D),M=e(80398),H=e.n(M),R=(0,b.C)({theme:{buttonStyles:A(),toolbarStyles:H()}}),L=R.Toolbar,z=[R],U="In this editor a toolbar with a lot more options shows up once you select part of the text \u2026",q=function(t){(0,i.Z)(e,t);var n=(0,s.Z)(e);function e(){var t;return(0,o.Z)(this,e),t=n.apply(this,arguments),(0,h.Z)((0,p.Z)(t),"state",{editorState:(0,f.bf)(U)}),(0,h.Z)((0,p.Z)(t),"onChange",(function(n){t.setState({editorState:n})})),(0,h.Z)((0,p.Z)(t),"focus",(function(){t.editor.focus()})),t}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){this.setState({editorState:(0,f.bf)(U)})}},{key:"render",value:function(){var t=this;return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:I().editor,onClick:this.focus,children:[(0,a.jsx)(f.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:z,ref:function(n){t.editor=n}}),(0,a.jsx)(L,{})]})})}}]),e}(l.Component),X=e(90397),J=e(14799),V=e(16744),Q=e(48756),Y=e.n(Q),F=function(t){(0,i.Z)(e,t);var n=(0,s.Z)(e);function e(){return(0,o.Z)(this,e),n.apply(this,arguments)}return(0,r.Z)(e,[{key:"render",value:function(){return(0,a.jsxs)(V.Z,{filePath:"packages/docs/pages/plugin/static-toolbar/index.js",children:[(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(X.Z,{level:2,children:"Toolbar"}),(0,a.jsx)(X.Z,{level:3,children:"Supported Environment"}),(0,a.jsxs)("ul",{className:Y().list,children:[(0,a.jsx)("li",{className:Y().listEntry,children:"Desktop: Yes"}),(0,a.jsx)("li",{className:Y().listEntry,children:"Mobile: No"}),(0,a.jsx)("li",{className:Y().listEntry,children:"Screen-reader: No"})]})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(X.Z,{level:2,children:"Getting Started"}),(0,a.jsx)(c.Z,{code:"npm install @draft-js-plugins/editor"}),(0,a.jsx)(c.Z,{code:"npm install @draft-js-plugins/static-toolbar"}),(0,a.jsx)(c.Z,{code:"// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createToolbarPlugin from '@draft-js-plugins/static-toolbar';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst toolbarPlugin = createToolbarPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the toolbarPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[toolbarPlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,a.jsx)(X.Z,{level:3,children:"Importing the default styles"}),(0,a.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,a.jsx)(J.Z,{code:"node_modules/@draft-js-plugins/static-toolbar/lib/plugin.css"})]}),(0,a.jsx)(X.Z,{level:4,children:"Webpack Usage"}),(0,a.jsxs)("ul",{className:Y().list,children:[(0,a.jsxs)("li",{className:Y().listEntry,children:["1. Install Webpack loaders: \xa0",(0,a.jsx)(J.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,a.jsxs)("li",{className:Y().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,a.jsx)(c.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:Y().guideCodeBlock})]}),(0,a.jsxs)("li",{className:Y().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,a.jsx)(c.Z,{code:"import '@draft-js-plugins/static-toolbar/lib/plugin.css';",className:Y().guideCodeBlock})]}),(0,a.jsx)("li",{className:Y().listEntry,children:"4. Restart Webpack."})]})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(X.Z,{level:2,children:"Simple Static Toolbar Example"}),(0,a.jsx)(W,{}),(0,a.jsx)(c.Z,{code:"import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createToolbarPlugin from '@draft-js-plugins/static-toolbar';\nimport editorStyles from './editorStyles.module.css';\n\nconst staticToolbarPlugin = createToolbarPlugin();\nconst { Toolbar } = staticToolbarPlugin;\nconst plugins = [staticToolbarPlugin];\nconst text =\n  'The toolbar above the editor can be used for formatting text, as in conventional static editors  \u2026';\n\nexport default class SimpleStaticToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <Toolbar />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"SimpleToolbarEditor.js"}),(0,a.jsx)(c.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(X.Z,{level:2,children:"Custom Static Toolbar Example"}),(0,a.jsx)(k,{}),(0,a.jsx)(c.Z,{code:"/* eslint-disable react/no-multi-comp */\nimport React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createToolbarPlugin, {\n  Separator,\n} from '@draft-js-plugins/static-toolbar';\nimport {\n  ItalicButton,\n  BoldButton,\n  UnderlineButton,\n  CodeButton,\n  HeadlineOneButton,\n  HeadlineTwoButton,\n  HeadlineThreeButton,\n  UnorderedListButton,\n  OrderedListButton,\n  BlockquoteButton,\n  CodeBlockButton,\n} from '@draft-js-plugins/buttons';\nimport editorStyles from './editorStyles.module.css';\n\nclass HeadlinesPicker extends Component {\n  componentDidMount() {\n    setTimeout(() => {\n      window.addEventListener('click', this.onWindowClick);\n    });\n  }\n\n  componentWillUnmount() {\n    window.removeEventListener('click', this.onWindowClick);\n  }\n\n  onWindowClick = () =>\n    // Call `onOverrideContent` again with `undefined`\n    // so the toolbar can show its regular content again.\n    this.props.onOverrideContent(undefined);\n\n  render() {\n    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];\n    return (\n      <div>\n        {buttons.map((Button, i) => (\n          // eslint-disable-next-line\n          <Button key={i} {...this.props} />\n        ))}\n      </div>\n    );\n  }\n}\n\nclass HeadlinesButton extends Component {\n  onClick = () =>\n    // A button can call `onOverrideContent` to replace the content\n    // of the toolbar. This can be useful for displaying sub\n    // menus or requesting additional information from the user.\n    this.props.onOverrideContent(HeadlinesPicker);\n\n  render() {\n    return (\n      <div className={editorStyles.headlineButtonWrapper}>\n        <button onClick={this.onClick} className={editorStyles.headlineButton}>\n          H\n        </button>\n      </div>\n    );\n  }\n}\n\nconst toolbarPlugin = createToolbarPlugin();\nconst { Toolbar } = toolbarPlugin;\nconst plugins = [toolbarPlugin];\nconst text =\n  'In this editor a toolbar shows up once you select part of the text \u2026';\n\nexport default class CustomToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <Toolbar>\n            {\n              // may be use React.Fragment instead of div to improve perfomance after React 16\n              (externalProps) => (\n                <div>\n                  <BoldButton {...externalProps} />\n                  <ItalicButton {...externalProps} />\n                  <UnderlineButton {...externalProps} />\n                  <CodeButton {...externalProps} />\n                  <Separator {...externalProps} />\n                  <HeadlinesButton {...externalProps} />\n                  <UnorderedListButton {...externalProps} />\n                  <OrderedListButton {...externalProps} />\n                  <BlockquoteButton {...externalProps} />\n                  <CodeBlockButton {...externalProps} />\n                </div>\n              )\n            }\n          </Toolbar>\n        </div>\n      </div>\n    );\n  }\n}\n",name:"CustomToolbarEditor.js"}),(0,a.jsx)(c.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.headlineButtonWrapper {\n  display: inline-block;\n}\n\n.headlineButton {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.headlineButton:hover,\n.headlineButton:focus {\n  background: #f3f3f3;\n}\n",name:"editorStyles.css"})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(X.Z,{level:2,children:"Themed Static Toolbar Example"}),(0,a.jsx)(q,{}),(0,a.jsx)(c.Z,{code:"import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createToolbarPlugin from '@draft-js-plugins/static-toolbar';\nimport editorStyles from './editorStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\nimport toolbarStyles from './toolbarStyles.module.css';\n\nconst toolbarPlugin = createToolbarPlugin({\n  theme: { buttonStyles, toolbarStyles },\n});\nconst { Toolbar } = toolbarPlugin;\nconst plugins = [toolbarPlugin];\nconst text =\n  'In this editor a toolbar with a lot more options shows up once you select part of the text \u2026';\n\nexport default class ThemedToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <Toolbar />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"ThemedToolbarEditor.js"}),(0,a.jsx)(c.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"}),(0,a.jsx)(c.Z,{code:".buttonWrapper {\n  display: inline-block;\n}\n\n.button {\n  background: #333;\n  color: #ddd;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n  border-radius: 4px;\n}\n\n.button svg {\n  fill: #ddd;\n}\n\n.button:hover, .button:focus {\n  background: #444;\n  outline: 0; /* reset for :focus */\n}\n\n.active {\n  color: #6a9cc9;\n}\n\n.active svg {\n  fill: #6a9cc9;\n}\n",name:"buttonStyles.css"}),(0,a.jsx)(c.Z,{code:".toolbar {\n  border: 1px solid #111;\n  background: #333;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);\n  z-index: 2;\n  box-sizing: border-box;\n}\n\n.toolbar:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: #333;\n  border-width: 4px;\n  margin-left: -4px;\n}\n\n.toolbar:before {\n  border-color: rgba(221, 221, 221, 0);\n  border-top-color: #111;\n  border-width: 6px;\n  margin-left: -6px;\n}\n",name:"toolbarStyles.css"})]})]})}}]),e}(l.Component)},88441:function(t){t.exports={root:"Code_root__L5JtP",name:"Code_name__0g9Xm",hiddenName:"Code_hiddenName__iBe7o"}},84397:function(t){t.exports={editor:"editorStyles_editor__VOpo_",headlineButtonWrapper:"editorStyles_headlineButtonWrapper__KB9tE",headlineButton:"editorStyles_headlineButton__3uA39"}},9389:function(t){t.exports={editor:"editorStyles_editor__wiqT_"}},98773:function(t){t.exports={buttonWrapper:"buttonStyles_buttonWrapper__WH8fv",button:"buttonStyles_button__31gRH",active:"buttonStyles_active__gXfcV"}},41887:function(t){t.exports={editor:"editorStyles_editor__38T7B"}},80398:function(t){t.exports={toolbar:"toolbarStyles_toolbar__xLCJ5"}},4813:function(t){t.exports={root:"InlineCode_root__8ZQag"}},48756:function(t){t.exports={root:"styles_root__RDi4C",param:"styles_param__MaWes",paramName:"styles_paramName__yjZL4",subParams:"styles_subParams__f0WDc",subParam:"styles_subParam__8j0k6",subParamName:"styles_subParamName__LDQMR",list:"styles_list__anhjm",listEntry:"styles_listEntry__3BJ6R",guideCodeBlock:"styles_guideCodeBlock__r7SM0"}},16481:function(t,n,e){"use strict";e.d(n,{C:function(){return h},Z:function(){return u}});var o=e(2784),r=e(52367),i=e(20138),s=e(13980),a=e.n(s);function l(){return l=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},l.apply(this,arguments)}function d(t,n){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},d(t,n)}var c=function(t){var n,e;function r(){for(var n,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return(n=t.call.apply(t,[this].concat(r))||this).state={overrideContent:void 0},n.onOverrideContent=function(t){return n.setState({overrideContent:t})},n.renderDefaultButtons=function(t){return o.createElement("div",null,o.createElement(i.BI,t),o.createElement(i.n3,t),o.createElement(i.tg,t),o.createElement(i.Ed,t))},n}return e=t,(n=r).prototype=Object.create(e.prototype),n.prototype.constructor=n,d(n,e),r.prototype.render=function(){var t=this.props,n=t.theme,e=t.store,r=this.state.overrideContent,i={theme:n.buttonStyles,getEditorState:e.getItem("getEditorState"),setEditorState:e.getItem("setEditorState"),onOverrideContent:this.onOverrideContent};return o.createElement("div",{className:n.toolbarStyles.toolbar},r?o.createElement(r,i):(this.props.children||this.renderDefaultButtons)(i))},r}(o.Component);c.propTypes={children:a().func};function u(t){var n=t.className,e=void 0===n?"s6m29i4":n;return o.createElement("div",{className:e})}var p={buttonStyles:{buttonWrapper:"bi09khh",button:"bc4rxid",active:"akzb7t5"},toolbarStyles:{toolbar:"t16lpgj"}},h=function(t){void 0===t&&(t={});var n=(0,r.MT)(),e=t.theme,i=void 0===e?p:e;return{initialize:function(t){var e=t.getEditorState,o=t.setEditorState;n.updateItem("getEditorState",e),n.updateItem("setEditorState",o)},onChange:function(t){return n.updateItem("selection",t.getSelection()),t},Toolbar:function(t){return o.createElement(c,l({},t,{store:n,theme:i}))}}}},27805:function(t,n,e){"use strict";function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}e.d(n,{Z:function(){return r}})}},function(t){t.O(0,[229,476,939,421,774,888,179],(function(){return n=43673,t(t.s=n);var n}));var n=t.O();_N_E=n}]);