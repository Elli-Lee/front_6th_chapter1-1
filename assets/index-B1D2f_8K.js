(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i={BASE_URL:`/front_6th_chapter1-1/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_PROD:`true`},a=i===void 0?``:`/front_6th_chapter1-1`,o=(e=window.location.pathname)=>e.startsWith(a)?e.slice(a.length)||`/`:e,s=e=>a+e;function c(e={}){let{routes:t=[],onNavigate:n=()=>{}}=e,r=null,i=null;function a(){let e=o(),t=new URLSearchParams(window.location.search);if(r===null||e!==r||t.toString()!==(i?.toString()||``)){r=e,i=t;let a=c(e);n(a,t)}}function c(e){for(let n of t)if(n.path===e)return{...n,params:{}};for(let n of t){let t=l(n.path,e);if(t)return{...n,params:t.params}}return{path:`*`,component:`NotFound`,params:{}}}function l(e,t){if(!e.includes(`:`))return null;let n=e.split(`/`),r=t.split(`/`);if(n.length!==r.length)return null;let i={};for(let e=0;e<n.length;e++){let t=n[e],a=r[e];if(t.startsWith(`:`)){let e=t.slice(1);i[e]=a}else if(t!==a)return null}return{params:i}}function u(e,t={}){let n=new URLSearchParams(t).toString(),r=n?`${e}?${n}`:e,i=s(r);window.history.pushState({},``,i),a()}function d(){window.addEventListener(`popstate`,a),a()}function f(){window.removeEventListener(`popstate`,a)}return{init:d,destroy:f,navigate:u,getCurrentPath:()=>r,getCurrentQuery:()=>i}}function l({title:e=`쇼핑몰`,showBackButton:t=!1,cartCount:n=0}={}){return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            ${t?`
              <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            `:``}
            <h1 class="text-lg font-bold text-gray-900">
              ${t?e:`<a href="/" data-link="">${e}</a>`}
            </h1>
          </div>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              ${n>0?`
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  ${n}
                </span>
              `:``}
            </button>
          </div>
        </div>
      </div>
    </header>
  `}function u(){return`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `}function d(e){let t=e,n=[];return{getState:()=>t,setState:e=>{let r=t;t=typeof e==`function`?e(r):{...r,...e},n.forEach(e=>e(t,r))},subscribe:e=>(n.push(e),()=>{n=n.filter(t=>t!==e)}),reset:()=>{t=e,n.forEach(e=>e(t))}}}const f=d({products:[],total:0,isLoading:!1,error:null,filters:{search:``,category1:``,category2:``,sort:`price_asc`,limit:20},pagination:{currentPage:1,hasNextPage:!0}}),p={updateFilters:e=>{f.setState(t=>({...t,products:[],total:0,filters:{...t.filters,...e},pagination:{...t.pagination,currentPage:1}}))},setProducts:(e,t,n=!1)=>{f.setState(r=>({products:n?[...r.products,...e]:e,total:t,isLoading:!1,error:null,filters:r.filters,pagination:{...r.pagination,hasNextPage:(n?r.products.length:0)+e.length<t}}))},setLoading:e=>{f.setState(t=>({...t,isLoading:e}))},setError:e=>{f.setState(t=>({...t,error:e,isLoading:!1}))},updatePagination:e=>{f.setState(t=>({...t,pagination:{...t.pagination,...e}}))},loadFromURL:e=>{let{search:t=``,sort:n=`price_asc`,limit:r=`20`,category1:i=``,category2:a=``}=e;f.setState({filters:{search:t,sort:n,limit:parseInt(r),category1:i,category2:a}})}},ee={productIds:[]},m=d(ee),h={addToCart:e=>{let t=m.getState(),n=e.id;t.productIds.includes(n)||m.setState({productIds:[...t.productIds,n]})},removeFromCart:e=>{let t=m.getState();m.setState({productIds:t.productIds.filter(t=>t!==e)})},clearCart:()=>{m.setState({productIds:[]})}},g={getTotalCount:()=>{let e=m.getState();return e.productIds.length},getProductIds:()=>{let e=m.getState();return[...e.productIds]}};async function _(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function v(e){let t=await fetch(`/api/products/${e}`);return await t.json()}function y(){let e=f.getState(),{products:t=[],total:n=0,isLoading:r=!1,error:i=null,filters:a}=e||{},o=a||{limit:20,search:``,category1:``,category2:``,sort:`price_asc`};return`
    <div class="home-page">
      <!-- 검색 및 필터 -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <!-- 검색창 -->
        <div class="mb-4">
          <div class="relative">
            <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${o.search}" 
                   class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- 필터 옵션 -->
        <div class="space-y-3">
          <!-- 카테고리 필터 -->
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">카테고리:</label>
              <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
            </div>
            <!-- 1depth 카테고리 -->
            <div class="flex flex-wrap gap-2">
              <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
            </div>
          </div>
          
          <!-- 기존 필터들 -->
          <div class="flex gap-2 items-center justify-between">
            <!-- 페이지당 상품 수 -->
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">개수:</label>
              <select id="limit-select" class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <option value="10" ${o.limit===10?`selected`:``}>10개</option>
                <option value="20" ${o.limit===20?`selected`:``}>20개</option>
                <option value="50" ${o.limit===50?`selected`:``}>50개</option>
                <option value="100" ${o.limit===100?`selected`:``}>100개</option>
              </select>
            </div>
            <!-- 정렬 -->
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">정렬:</label>
              <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <option value="price_asc" ${o.sort===`price_asc`?`selected`:``}>가격 낮은순</option>
                <option value="price_desc" ${o.sort===`price_desc`?`selected`:``}>가격 높은순</option>
                <option value="name_asc" ${o.sort===`name_asc`?`selected`:``}>이름순</option>
                <option value="name_desc" ${o.sort===`name_desc`?`selected`:``}>이름 역순</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- 상품 목록 섹션 -->
      ${ne(t,n,r,i)}
    </div>
  `}function b(){let e=f.getState(),{filters:t}=e;return p.setLoading(!0),_(t).then(e=>{p.setProducts(e.products,e.pagination.total),p.updatePagination({currentPage:1,hasNextPage:e.products.length<e.pagination.total})}).catch(e=>{console.error(`상품 데이터 로딩 실패:`,e),p.setError(e.message)})}function te(){let e=f.getState(),{filters:t,pagination:n,products:r,isLoading:i}=e;if(i||!n.hasNextPage)return Promise.resolve();C();let a=n.currentPage+1,o={...t,page:a};return p.setLoading(!0),window.isInfiniteScrolling=!0,_(o).then(e=>{p.updatePagination({currentPage:a,hasNextPage:e.products.length>0&&r.length+e.products.length<e.pagination.total}),p.setProducts(e.products,e.pagination.total,!0)}).catch(e=>{console.error(`💥 추가 상품 로딩 실패:`,e),p.setError(e.message)}).finally(()=>{w(),setTimeout(()=>{window.isInfiniteScrolling=!1},100)})}function ne(e,t,n,r){return r?`
      <div class="text-center py-8">
        <div class="text-red-500 mb-4">
          <p class="text-sm">상품을 불러오는 중 오류가 발생했습니다.</p>
          <p class="text-xs text-gray-600">${r}</p>
        </div>
        <button onclick="window.location.reload()" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          다시 시도
        </button>
      </div>
    `:n?`
      <div class="mb-6">
        <div>
          <!-- 상품 그리드 -->
          <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            <!-- 로딩 스켈레톤 -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          
          <div class="text-center py-4">
            <div class="inline-flex items-center">
              <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
            </div>
          </div>
        </div>
      </div>
    `:e.length===0?`
      <div class="text-center py-8">
        <p class="text-gray-500">상품이 없습니다.</p>
        <p class="text-sm text-gray-400">다른 검색어나 필터를 시도해보세요.</p>
      </div>
    `:`
    <div class="mb-6">
      <div>
        <!-- 상품 개수 정보 -->
        <div class="mb-4 text-sm text-gray-600" data-testid="product-count">
          총 <span class="font-medium text-gray-900" data-testid="product-total">${t.toLocaleString()}개</span>의 상품
        </div>
        
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          ${e.map(e=>x(e)).join(``)}
        </div>
        
        ${S(n,e.length,t)}
      </div>
    </div>
  `}function x(e){return`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card" 
         data-product-id="${e.productId}">
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img src="${e.image}" 
             alt="${e.title}"
             class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
             loading="lazy">
      </div>
      
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${e.title}
          </h3>
          ${e.brand?`<p class="text-xs text-gray-500 mb-2">${e.brand}</p>`:``}
          <p class="text-lg font-bold text-gray-900">
            ${parseInt(e.lprice).toLocaleString()}원
          </p>
        </div>
        
        <!-- 장바구니 버튼 -->
        <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn" 
                data-product-id="${e.productId}">
          장바구니 담기
        </button>
      </div>
    </div>
  `}function S(e,t,n){return e&&t>0?`
      <div class="text-center py-4">
        <div class="inline-flex items-center">
          <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
        </div>
      </div>
    `:t>=n?`
      <div class="text-center py-4 text-sm text-gray-500">
        모든 상품을 확인했습니다
      </div>
    `:`
    <div class="text-center py-4 text-sm text-gray-500">
      스크롤하여 더 많은 상품을 확인하세요
    </div>
  `}function C(){w();let e=document.querySelector(`#products-grid`);if(e){let t=`
      <div id="infinite-scroll-loading" class="text-center py-4">
        <div class="inline-flex items-center">
          <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
        </div>
      </div>
    `;e.insertAdjacentHTML(`afterend`,t)}}function w(){let e=document.querySelector(`#infinite-scroll-loading`);e&&e.remove()}let T=`home`,E={};const D={home:{title:`쇼핑몰`,showBackButton:!1,renderContent:k},"product-detail":{title:`상품 상세`,showBackButton:!0,renderContent:A},404:{title:`404 페이지`,showBackButton:!1,renderContent:P}};function O(e=`home`,t={}){T=e,E=t;let n=D[e];if(!n)return console.error(`페이지 설정을 찾을 수 없습니다: ${e}`),O(`404`);let r=document.getElementById(`root`);if(!r){console.error(`#root 엘리먼트를 찾을 수 없습니다.`);return}r.innerHTML=`
    <div class="bg-gray-50">
      ${l({title:n.title,showBackButton:n.showBackButton,cartCount:I()})}
      <main class="max-w-md mx-auto px-4 py-4">
        ${n.renderContent(t)}
      </main>
      ${u()}
    </div>
  `}function k(){let e=f.getState(),t=e.products.length===0&&!e.error&&!e.isLoading&&!k.isLoading&&e.pagination.currentPage===1&&!k.hasInitiallyLoaded&&!window.isInfiniteScrolling;return t&&(k.isLoading=!0,k.hasInitiallyLoaded=!0,b().finally(()=>{k.isLoading=!1})),y()}function A(e){let{id:t}=e;if(!t)return`
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="text-center py-8">
          <p class="text-red-500">상품 ID가 없습니다.</p>
        </div>
      </div>
    `;let n=`
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="text-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">상품 정보를 불러오는 중...</p>
      </div>
    </div>
  `;return j(t),n}async function j(e){try{let t=await v(e),n=await M(t.category2,e),r=document.querySelector(`main`);r&&(r.innerHTML=N(t,n))}catch(e){console.error(`상품 상세 정보 로딩 실패:`,e);let t=document.querySelector(`main`);t&&(t.innerHTML=`
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="text-center py-8">
            <p class="text-red-500 mb-4">상품 정보를 불러오는데 실패했습니다.</p>
            <button onclick="window.history.back()" class="bg-blue-600 text-white px-4 py-2 rounded">
              뒤로가기
            </button>
          </div>
        </div>
      `)}}async function M(e,t){try{let n=await fetch(`/api/products?category2=${e}&limit=6`),r=await n.json();return r.products.filter(e=>e.productId!==t).slice(0,4)}catch(e){return console.error(`관련 상품 로딩 실패:`,e),[]}}function N(e,t){let n=e.lprice?parseInt(e.lprice):0,r=e.rating||4,i=e.reviewCount||Math.floor(Math.random()*1e3)+50,a=e.stock||Math.floor(Math.random()*100)+10;return`
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="text-center py-8">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">${e.title}</h1>
        
        <!-- 상품 이미지 -->
        <div class="mb-6">
          <img src="${e.image}" 
               alt="${e.title}"
               class="w-full h-64 object-cover rounded-lg">
        </div>
        
        <!-- 가격 -->
        <p class="text-2xl font-bold text-gray-900 mb-6">${n.toLocaleString()}원</p>
        
        <!-- 상품 정보 -->
        <div class="text-left mb-6">
          <p class="text-gray-600 mb-2">브랜드: ${e.brand||`정보없음`}</p>
          <p class="text-gray-600 mb-2">카테고리: ${e.category1} > ${e.category2}</p>
          <p class="text-gray-600 mb-2">평점: ${r}점 (${i}개 리뷰)</p>
          <p class="text-gray-600 mb-4">재고: ${a}개</p>
          <p class="text-gray-700 text-sm">${e.description||`${e.title}에 대한 상세 설명입니다.`}</p>
        </div>
        
        <!-- 수량 선택 -->
        <div class="flex items-center justify-center gap-4 mb-6">
          <button id="quantity-decrease" class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">-</button>
          <input type="number" id="quantity-input" value="1" min="1" class="w-16 text-center border border-gray-300 rounded-md py-2">
          <button id="quantity-increase" class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">+</button>
        </div>
        
        <!-- 장바구니 담기 버튼 -->
        <button id="add-to-cart-btn" data-product-id="${e.productId}" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          장바구니 담기
        </button>
      </div>
      
      <div class="mt-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">관련 상품</h2>
        <div class="grid grid-cols-2 gap-4">
          ${F(t)}
        </div>
      </div>
    </div>
  `}function P(){return`
    <div class="text-center py-12">
      <div class="mb-8">
        <h1 class="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">페이지를 찾을 수 없습니다</h2>
        <p class="text-gray-600 mb-2">요청하신 페이지가 존재하지 않습니다.</p>
        <p class="text-sm text-gray-500">경로: ${window.location.pathname}</p>
      </div>
      
      <div class="space-y-3">
        <a href="/" data-link class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          홈으로 돌아가기
        </a>
        <br>
        <button onclick="window.history.back()" class="text-blue-600 hover:text-blue-800 hover:underline">
          이전 페이지로 돌아가기
        </button>
      </div>
    </div>
  `}function F(e){return e.map(e=>{let t=e.lprice?parseInt(e.lprice):0;return`
      <div class="related-product-card bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer" 
          data-product-id="${e.productId}">
       <img src="${e.image}" alt="${e.title}" class="w-full h-20 object-cover">
       <div class="p-2">
         <h4 class="text-xs font-medium text-gray-900 mb-1">${e.title}</h4>
         <p class="text-sm font-bold text-gray-900">${t.toLocaleString()}원</p>
       </div>
      </div>
    `}).join(``)}function I(){return g.getTotalCount()}function L(){f.subscribe((e,t)=>{let n=e.products!==t.products||e.isLoading!==t.isLoading||e.error!==t.error||e.filters!==t.filters||e.total!==t.total,r=e.isLoading&&e.pagination.currentPage>1&&t.products.length>0;n&&(r?R(e):O(T,E))}),m.subscribe((e,t)=>{let n=e.productIds.length!==t.productIds.length;n&&O(T,E)})}function R(e){let{products:t=[],total:n=0}=e,r=document.querySelector(`#products-grid`),i=document.querySelector(`[data-testid='product-total']`);if(r&&i){i.textContent=n.toLocaleString();let e=r.querySelectorAll(`.product-card`),a=e.length,o=t.slice(a);if(o.length>0){let e=o.map(e=>z(e)).join(``);r.insertAdjacentHTML(`beforeend`,e)}}}function z(e){return`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card" 
         data-product-id="${e.productId}">
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img src="${e.image}" 
             alt="${e.title}"
             class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
             loading="lazy">
      </div>
      
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${e.title}
          </h3>
          ${e.brand?`<p class="text-xs text-gray-500 mb-2">${e.brand}</p>`:``}
          <p class="text-lg font-bold text-gray-900">
            ${parseInt(e.lprice).toLocaleString()}원
          </p>
        </div>
        
        <!-- 장바구니 버튼 -->
        <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn" 
                data-product-id="${e.productId}">
          장바구니 담기
        </button>
      </div>
    </div>
  `}function re(){document.addEventListener(`click`,B),document.addEventListener(`input`,V),document.addEventListener(`change`,H),document.addEventListener(`keydown`,U),window.addEventListener(`scroll`,se),window.addEventListener(`beforeunload`,()=>{})}function B(e){let t=e.target;if(t.closest(`.add-to-cart-btn`)){G(e);return}if(t.closest(`.product-card`)&&!t.closest(`.add-to-cart-btn`)){W(e);return}if(t.closest(`.related-product-card`)){J(e);return}if(t.closest(`#quantity-increase`)){K(e);return}if(t.closest(`#quantity-decrease`)){q(e);return}if(t.closest(`[data-link]`)){Y(e);return}}function V(e){let t=e.target;if(t.matches(`#search-input`)){X(e);return}}function H(e){let t=e.target;if(t.matches(`#sort-select`)){ae(e);return}if(t.matches(`#limit-select`)){oe(e);return}}function U(e){let t=e.target;if(t.matches(`#search-input`)&&e.key===`Enter`){ie(e);return}}function W(e){let t=e.target.closest(`.product-card`);if(!t)return;let n=t.dataset.productId;window.router&&window.router.navigate(`/product/${n}`)}function G(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();let t=e.target.closest(`.product-card`);if(!t)return;let n=ce(t);n&&h.addToCart(n)}function K(e){e.preventDefault();let t=document.getElementById(`quantity-input`);if(!t)return;let n=parseInt(t.value)||1;t.value=n+1}function q(e){e.preventDefault();let t=document.getElementById(`quantity-input`);if(!t)return;let n=parseInt(t.value)||1,r=Math.max(1,n-1);t.value=r}function J(e){let t=e.target.closest(`.related-product-card`);if(!t)return;let n=t.dataset.productId;window.router&&window.router.navigate(`/product/${n}`)}function Y(e){e.preventDefault();let t=e.target.closest(`[data-link]`);if(!t)return;let n=t.getAttribute(`href`);n&&window.router&&window.router.navigate(n)}function X(e){let t=e.target.value.trim();clearTimeout(X.timer),X.timer=setTimeout(()=>{Z(t)},300)}function ie(e){e.preventDefault();let t=e.target.value.trim();clearTimeout(X.timer),Z(t)}function Z(e){let t=f.getState().filters;p.updateFilters({...t,search:e}),Q({...t,search:e}),b()}function Q(e){let t=new URL(window.location),n=new URLSearchParams;e.search&&e.search!==``&&n.set(`search`,e.search),e.sort&&e.sort!==`price_asc`&&n.set(`sort`,e.sort),e.limit&&e.limit!==20&&n.set(`limit`,e.limit);let r=`${t.pathname}${n.toString()?`?${n.toString()}`:``}`;window.history.replaceState(null,``,r)}function ae(e){let t=e.target.value,n=f.getState().filters;p.updateFilters({...n,sort:t}),Q({...n,sort:t}),b()}function oe(e){let t=parseInt(e.target.value),n=f.getState().filters;p.updateFilters({...n,limit:t}),Q({...n,limit:t}),b()}function se(){let{scrollTop:e,scrollHeight:t,clientHeight:n}=document.documentElement;if(e+n>=t-100){let e=f.getState();!e.isLoading&&!e.error&&e.products.length<e.total&&(window.isInfiniteScrolling=!0,te().finally(()=>{window.isInfiniteScrolling=!1}))}}function ce(e){try{let t=e.querySelector(`h3`),n=e.querySelector(`.text-lg.font-bold`),r=e.querySelector(`img`);return!t||!n||!r?(console.warn(`상품 정보 요소를 찾을 수 없습니다.`),null):{id:e.dataset.productId,title:t.textContent.trim(),lprice:n.textContent.replace(/[^0-9]/g,``),image:r.src}}catch(e){return console.error(`상품 정보 추출 중 오류 발생:`,e),null}}const le=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-B6UXaIre.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));let $;function ue(){let e=document.getElementById(`root`);e&&(L(),$=c({routes:[{path:`/`,component:`Home`},{path:`/product/:id`,component:`ProductDetail`},{path:`*`,component:`NotFound`}],onNavigate:(e,t)=>{let n={};for(let[e,r]of t)n[e]=r;switch(e.component){case`Home`:Object.keys(n).length>0&&p.loadFromURL(n),O(`home`,n);break;case`ProductDetail`:O(`product-detail`,e.params);break;case`NotFound`:default:O(`404`);break}}}),window.router=$,window.productStore=f,$.init(),window.isInfiniteScrolling=!1,re())}le().then(ue);