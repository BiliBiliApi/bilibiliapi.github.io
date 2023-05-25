import{_ as t,o as d,c as e,O as r}from"./chunks/framework.9be35eee.js";const l=JSON.parse('{"title":"获取用户代表作视频列表","description":"","frontmatter":{},"headers":[],"relativePath":"api/get_masterpiece.md","filePath":"api/get_masterpiece.md"}'),a={name:"api/get_masterpiece.md"},o=r('<h1 id="获取用户代表作视频列表" tabindex="-1">获取用户代表作视频列表 <a class="header-anchor" href="#获取用户代表作视频列表" aria-label="Permalink to &quot;获取用户代表作视频列表&quot;">​</a></h1><p><strong>必选参数</strong> : <code>mid</code> : 用户mid</p><p><strong>接口地址</strong> : <code>/get/masterpiece</code></p><p><strong>可选参数</strong> : <code>无</code></p><p><strong>调用例子</strong> : <code>/get/masterpiece</code></p><p><strong>说明</strong> : 无</p><p><strong>响应说明</strong> :</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>array</td><td>代表作列表</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>代表作1</td><td>无则为空</td></tr><tr><td>1</td><td>obj</td><td>代表作2</td><td>无则为空</td></tr><tr><td>2</td><td>obj</td><td>代表作3</td><td>无则为空<br>最多设置3个</td></tr></tbody></table><p><code>data</code>数组中的对象：</p><p>同<a href="/api/get_top_video.html">获取用户置顶视频</a>中的<code>data</code>对象</p>',13),s=[o];function c(p,n,h,_,i,m){return d(),e("div",null,s)}const b=t(a,[["render",c]]);export{l as __pageData,b as default};
