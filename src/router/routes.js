
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/auth/login.vue') },
      { path: 'register', component: () => import('pages/auth/register.vue') },
    ]
  },
  {

    path: '/profile',
    component: () => import('layouts/Profile.vue'),
    children: [
      { path: '', component: () => import('pages/profile/index.vue') },
      { path: 'dashboard', component: () => import('pages/profile/dashboard.vue') },
      { path: 'detail', component: () => import('pages/profile/detail.vue') },
      { path: 'following', component: () => import('pages/profile/following.vue') },
      { path: 'gallery', component: () => import('pages/profile/gallery.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
