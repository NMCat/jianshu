import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _28341424 = () => import('..\\pages\\sign-up.vue' /* webpackChunkName: "pages_sign-up" */).then(m => m.default || m)
const _b157b96e = () => import('..\\pages\\setting.vue' /* webpackChunkName: "pages_setting" */).then(m => m.default || m)
const _7c79e20e = () => import('..\\pages\\setting\\message.vue' /* webpackChunkName: "pages_setting_message" */).then(m => m.default || m)
const _67b13a75 = () => import('..\\pages\\setting\\basic.vue' /* webpackChunkName: "pages_setting_basic" */).then(m => m.default || m)
const _0d5ad5ac = () => import('..\\pages\\news.vue' /* webpackChunkName: "pages_news" */).then(m => m.default || m)
const _62cf7c18 = () => import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */).then(m => m.default || m)
const _204e6bd5 = () => import('..\\pages\\news\\request.vue' /* webpackChunkName: "pages_news_request" */).then(m => m.default || m)
const _bd83117e = () => import('..\\pages\\news\\like.vue' /* webpackChunkName: "pages_news_like" */).then(m => m.default || m)
const _546589db = () => import('..\\pages\\news\\follow.vue' /* webpackChunkName: "pages_news_follow" */).then(m => m.default || m)
const _b0920566 = () => import('..\\pages\\news\\message.vue' /* webpackChunkName: "pages_news_message" */).then(m => m.default || m)
const _14702a58 = () => import('..\\pages\\likeArticle.vue' /* webpackChunkName: "pages_likeArticle" */).then(m => m.default || m)
const _92b351ac = () => import('..\\pages\\likeArticle\\index.vue' /* webpackChunkName: "pages_likeArticle_index" */).then(m => m.default || m)
const _72cc5e68 = () => import('..\\pages\\likeArticle\\other.vue' /* webpackChunkName: "pages_likeArticle_other" */).then(m => m.default || m)
const _c5795970 = () => import('..\\pages\\follow.vue' /* webpackChunkName: "pages_follow" */).then(m => m.default || m)
const _86df7f8c = () => import('..\\pages\\follow\\index.vue' /* webpackChunkName: "pages_follow_index" */).then(m => m.default || m)
const _d9f9fb90 = () => import('..\\pages\\follow\\specialRecome.vue' /* webpackChunkName: "pages_follow_specialRecome" */).then(m => m.default || m)
const _9fc0222c = () => import('..\\pages\\follow\\authorRecome.vue' /* webpackChunkName: "pages_follow_authorRecome" */).then(m => m.default || m)
const _98ccd8fa = () => import('..\\pages\\collectArticle.vue' /* webpackChunkName: "pages_collectArticle" */).then(m => m.default || m)
const _1492cb42 = () => import('..\\pages\\myHome.vue' /* webpackChunkName: "pages_myHome" */).then(m => m.default || m)
const _5c22bb00 = () => import('..\\pages\\myHome\\index.vue' /* webpackChunkName: "pages_myHome_index" */).then(m => m.default || m)
const _4aa2248d = () => import('..\\pages\\myHome\\comment.vue' /* webpackChunkName: "pages_myHome_comment" */).then(m => m.default || m)
const _616f8784 = () => import('..\\pages\\myHome\\Article.vue' /* webpackChunkName: "pages_myHome_Article" */).then(m => m.default || m)
const _4e5a1e7b = () => import('..\\pages\\myHome\\hot.vue' /* webpackChunkName: "pages_myHome_hot" */).then(m => m.default || m)
const _139dbdae = () => import('..\\pages\\sign-in.vue' /* webpackChunkName: "pages_sign-in" */).then(m => m.default || m)
const _23fe423e = () => import('..\\pages\\p\\_id.vue' /* webpackChunkName: "pages_p__id" */).then(m => m.default || m)
const _1ce75dea = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/sign-up",
			component: _28341424,
			name: "sign-up"
		},
		{
			path: "/setting",
			component: _b157b96e,
			name: "setting",
			children: [
				{
					path: "message",
					component: _7c79e20e,
					name: "setting-message"
				},
				{
					path: "basic",
					component: _67b13a75,
					name: "setting-basic"
				}
			]
		},
		{
			path: "/news",
			component: _0d5ad5ac,
			children: [
				{
					path: "",
					component: _62cf7c18,
					name: "news"
				},
				{
					path: "request",
					component: _204e6bd5,
					name: "news-request"
				},
				{
					path: "like",
					component: _bd83117e,
					name: "news-like"
				},
				{
					path: "follow",
					component: _546589db,
					name: "news-follow"
				},
				{
					path: "message",
					component: _b0920566,
					name: "news-message"
				}
			]
		},
		{
			path: "/likeArticle",
			component: _14702a58,
			children: [
				{
					path: "",
					component: _92b351ac,
					name: "likeArticle"
				},
				{
					path: "other",
					component: _72cc5e68,
					name: "likeArticle-other"
				}
			]
		},
		{
			path: "/follow",
			component: _c5795970,
			children: [
				{
					path: "",
					component: _86df7f8c,
					name: "follow"
				},
				{
					path: "specialRecome",
					component: _d9f9fb90,
					name: "follow-specialRecome"
				},
				{
					path: "authorRecome",
					component: _9fc0222c,
					name: "follow-authorRecome"
				}
			]
		},
		{
			path: "/collectArticle",
			component: _98ccd8fa,
			name: "collectArticle"
		},
		{
			path: "/myHome",
			component: _1492cb42,
			children: [
				{
					path: "",
					component: _5c22bb00,
					name: "myHome"
				},
				{
					path: "comment",
					component: _4aa2248d,
					name: "myHome-comment"
				},
				{
					path: "Article",
					component: _616f8784,
					name: "myHome-Article"
				},
				{
					path: "hot",
					component: _4e5a1e7b,
					name: "myHome-hot"
				}
			]
		},
		{
			path: "/sign-in",
			component: _139dbdae,
			name: "sign-in"
		},
		{
			path: "/p/:id?",
			component: _23fe423e,
			name: "p-id"
		},
		{
			path: "/",
			component: _1ce75dea,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
