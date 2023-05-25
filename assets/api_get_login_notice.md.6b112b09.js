import{_ as t,o as d,c as e,O as o}from"./chunks/framework.9be35eee.js";const m=JSON.parse('{"title":"获取登录记录","description":"","frontmatter":{},"headers":[],"relativePath":"api/get_login_notice.md","filePath":"api/get_login_notice.md"}'),r={name:"api/get_login_notice.md"},n=o('<h1 id="获取登录记录" tabindex="-1">获取登录记录 <a class="header-anchor" href="#获取登录记录" aria-label="Permalink to &quot;获取登录记录&quot;">​</a></h1><p><strong>必选参数</strong> : <code>mid</code> : 用户mid 可以通过<code>获取个人信息</code>接口获取</p><p><strong>接口地址</strong> : <code>/get/login/notice</code></p><p><strong>可选参数</strong> : <code>无</code></p><p><strong>调用例子</strong> : <code>/get/login/notice</code></p><p><strong>说明</strong> : 无</p><p><strong>响应说明</strong> :</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>登录用户mid</td><td></td></tr><tr><td>device_name</td><td>str</td><td>登录设备</td><td>依靠操作登录接口时的UA决定</td></tr><tr><td>login_type</td><td>str</td><td>登录方式</td><td>根据登录接口决定</td></tr><tr><td>login_time</td><td>str</td><td>登录时间</td><td>YYYY-MM-DD hh:mm:ss</td></tr><tr><td>location</td><td>str</td><td>登录位置</td><td>依靠ip决定</td></tr><tr><td>ip</td><td>str</td><td>登录ip</td><td>部分用<code>*</code>打码</td></tr></tbody></table>',11),a=[n];function s(c,i,_,p,h,g){return d(),e("div",null,a)}const b=t(r,[["render",s]]);export{m as __pageData,b as default};
