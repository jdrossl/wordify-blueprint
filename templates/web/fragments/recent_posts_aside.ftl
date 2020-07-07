<#import "/templates/system/common/cstudio-support.ftl" as studio />

<h3 class="heading">Recent Posts</h3>
<div class="post-entry-sidebar">
  <ul>
      <#list recentPosts as post>
        <#assign postItem = siteItemService.getSiteItem(post.localId) />
        <li <@studio.componentAttr component=postItem ice=true />>
          <a href="${post.url}">
            <img src="${post.mainImage}" alt="Image placeholder" class="mr-4">
            <div class="text">
              <h4>${post.headline}</h4>
              <div class="post-meta">
                <span class="mr-2">${post.lastModifiedDate?datetime.iso?date}</span>
              </div>
            </div>
          </a>
        </li>
      </#list>
  </ul>