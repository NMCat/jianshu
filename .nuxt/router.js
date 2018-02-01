import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1ce75dea = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _28341424 = () => import('..\\pages\\sign-up.vue' /* webpackChunkName: "pages/sign-up" */).then(m => m.default || m)
const _139dbdae = () => import('..\\pages\\sign-in.vue' /* webpackChunkName: "pages/sign-in" */).then(m => m.default || m)
const _23fe423e = () => import('..\\pages\\p\\_id.vue' /* webpackChunkName: "pages/p-id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
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
			path: "/",
			component: _1ce75dea,
			name: "index"
		},
		{
			path: "/sign-up",
			component: _28341424,
			name: "sign-up"
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
		}
    ],
    fallback: false
  })
}
