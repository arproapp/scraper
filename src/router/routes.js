import store from "../state/store";

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/account/login.vue"),
    meta:  { title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/register.vue"),
    meta: { title: "Register",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("../views/account/forgot-password.vue"),
    meta: { title: "Forgot Password",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/",
    name: "default",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/ecommerce/index.vue"),
  },
  {
    path: "/dashboard/crypto",
    name: "dashboard-crypto",
    meta: {
      title: "Crypto",
      authRequired: true,
    },
    component: () => import("../views/dashboard/crypto/index.vue"),
  },
  {
    path: "/dashboard/projects",
    name: "dashboard-projects",
    meta: {
      title: "Projects", authRequired: true,
    },
    component: () => import("../views/dashboard/projects/index.vue"),
  },
  {
    path: "/dashboard/crm",
    name: "dashboard-crm",
    meta: {
      title: "CRM", authRequired: true,
    },
    component: () => import("../views/dashboard/crm/index.vue"),
  },
  {
    path: "/dashboard/analytics",
    name: "dashboard-analytics",
    meta: {
      title: "Analytics", authRequired: true,
    },
    component: () => import("../views/dashboard/analytics/index.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      title: "Logout", authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch("auth/logOut");
        } else {
          store.dispatch("authfack/logout");
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute ? { name: "default" } : { ...routeFrom }
        );
      },
    },
    component: () => import("../views/auth/logout/basic.vue")
  },
  {
    path: "/calendar",
    name: "calendar",
    meta: { title: "Calendar", authRequired: true },
    component: () => import("../views/calendar/index.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    meta: { title: "Chat", authRequired: true },
    component: () => import("../views/apps/chat.vue"),
  },
  {
    path: "/mailbox",
    name: "mailbox",
    meta: { title: "Mailbox", authRequired: true },
    component: () => import("../views/apps/mailbox.vue"),
  },
  {
    path: "/apps/projects-list",
    name: "projects-list",
    meta: { title: "Projects List", authRequired: true },
    component: () => import("../views/apps/projects/list.vue"),
  },
  {
    path: "/apps/projects-overview",
    name: "projects Overview",
    meta: { title: "Projects-overview", authRequired: true },
    component: () => import("../views/apps/projects/overview.vue"),
  },
  {
    path: "/apps/projects-create",
    name: "projects-create",
    meta: { title: "projects-create", authRequired: true },
    component: () => import("../views/apps/projects/create.vue"),
  },
  {
    path: "/apps/tasks-details",
    name: "tasks-details",
    meta: { title: "Tasks Details", authRequired: true },
    component: () => import("../views/apps/tasks/details.vue"),
  },
  {
    path: "/apps/tasks-kanban",
    name: "tasks-kanban",
    meta: { title: "Tasks Kanban", authRequired: true },
    component: () => import("../views/apps/tasks/kanban.vue"),
  },
  {
    path: "/apps/tasks-list-view",
    name: "tasks-list-view",
    meta: { title: "Taks List", authRequired: true },
    component: () => import("../views/apps/tasks/list-view.vue"),
  },
  {
    path: "/apps/tickets-details",
    name: "tickets-details",
    meta: { title: "Ticket Details", authRequired: true },
    component: () => import("../views/tickets/details.vue"),
  },
  {
    path: "/apps/tickets-list",
    name: "tickets-list",
    meta: { title: "Tickets List", authRequired: true },
    component: () => import("../views/tickets/list.vue"),
  },
  {
    path: "/apps/crm-contacts",
    name: "crm-contacts",
    meta: { title: "CRM Contacts", authRequired: true },
    component: () => import("../views/apps/crm/contacts.vue"),
  },
  {
    path: "/apps/crm-companies",
    name: "crm-companies",
    meta: { title: "CRM companies", authRequired: true },
    component: () => import("../views/apps/crm/companies.vue"),
  },
  {
    path: "/apps/crm-deals",
    name: "crm-deals",
    meta: { title: "CRM Deals", authRequired: true },
    component: () => import("../views/apps/crm/deals.vue"),
  },
  {
    path: "/apps/crm-leads",
    name: "crm-leads",
    meta: { title: "CRM Leads", authRequired: true },
    component: () => import("../views/apps/crm/leads.vue"),
  },
  {
    path: "/ecommerce/customers",
    name: "customers",
    meta: { title: "Customers", authRequired: true },
    component: () => import("../views/apps/ecommerce/customers.vue"),
  },
  {
    path: "/ecommerce/products",
    name: "products",
    meta: { title: "Products", authRequired: true },
    component: () => import("../views/apps/ecommerce/products.vue"),
  },
  {
    path: "/ecommerce/product-details",
    name: "product-detail",
    meta: { title: "Product Details", authRequired: true },
    component: () => import("../views/apps/ecommerce/product-details.vue"),
  },
  {
    path: "/ecommerce/orders",
    name: "orders",
    meta: { title: "Orders", authRequired: true },
    component: () => import("../views/apps/ecommerce/orders.vue"),
  },
  {
    path: "/ecommerce/order-details",
    name: "order-details",
    meta: { title: "Order Details", authRequired: true },
    component: () => import("../views/apps/ecommerce/order-details.vue"),
  },
  {
    path: "/ecommerce/add-product",
    name: "add-product",
    meta: { title: "Create Product", authRequired: true },
    component: () => import("../views/apps/ecommerce/add-product.vue"),
  },
  {
    path: "/ecommerce/shopping-cart",
    name: "shopping cart",
    meta: { title: "Shopping Cart", authRequired: true },
    component: () => import("../views/apps/ecommerce/shopping-cart.vue"),
  },
  {
    path: "/ecommerce/checkout",
    name: "checkout",
    meta: { title: "Check Out", authRequired: true },
    component: () => import("../views/apps/ecommerce/checkout.vue"),
  },
  {
    path: "/ecommerce/sellers",
    name: "sellers",
    meta: { title: "Sellers", authRequired: true },
    component: () => import("../views/apps/ecommerce/sellers.vue"),
  },
  {
    path: "/ecommerce/seller-details",
    name: "seller-details",
    meta: { title: "Seller Details", authRequired: true },
    component: () => import("../views/apps/ecommerce/seller-details.vue"),
  },
  {
    path: "/crypto/buy-sell",
    name: "buy/sell",
    meta: { title: "Buy & Sell", authRequired: true },
    component: () => import("../views/apps/crypto/buy-sell.vue"),
  },
  {
    path: "/crypto/kyc",
    name: "kyc",
    meta: { title: "KYC Application", authRequired: true },
    component: () => import("../views/apps/crypto/kyc.vue"),
  },
  {
    path: "/crypto/ico",
    name: "ico",
    meta: { title: "ICO List", authRequired: true },
    component: () => import("../views/apps/crypto/ico.vue"),
  },
  {
    path: "/crypto/orders",
    name: "crypto-orders",
    meta: { title: "Orders", authRequired: true },
    component: () => import("../views/apps/crypto/orders.vue"),
  },
  {
    path: "/crypto/wallet",
    name: "wallet",
    meta: { title: "My Wallet", authRequired: true },
    component: () => import("../views/apps/crypto/wallet.vue"),
  },
  {
    path: "/crypto/transactions",
    name: "transactions",
    meta: { title: "Transactions", authRequired: true },
    component: () => import("../views/apps/crypto/transactions.vue"),
  },
  {
    path: "/invoices/detail",
    name: "invoice-detail",
    meta: { title: "Invoice Details", authRequired: true },
    component: () => import("../views/apps/invoices/details.vue"),
  },
  {
    path: "/invoices/list",
    name: "invoice-list",
    meta: { title: "Invoice List", authRequired: true },
    component: () => import("../views/apps/invoices/list.vue"),
  },
  {
    path: "/invoices/create",
    name: "invoice-create",
    meta: { title: "Create Invoice", authRequired: true },
    component: () => import("../views/apps/invoices/create.vue"),
  },
  {
    path: "/ui/alerts",
    name: "Alerts",
    meta: {
      title: "Alerts", authRequired: true,
    },
    component: () => import("../views/ui/alerts.vue"),
  },
  {
    path: "/ui/buttons",
    name: "Buttons",
    meta: {
      title: "Buttons", authRequired: true,
    },
    component: () => import("../views/ui/buttons.vue"),
  },
  {
    path: "/ui/cards",
    name: "Cards",
    meta: { title: "Cards", authRequired: true },
    component: () => import("../views/ui/cards.vue"),
  },
  {
    path: "/ui/carousel",
    name: "Carousel",
    meta: { title: "Carousel", authRequired: true },
    component: () => import("../views/ui/carousel.vue"),
  },
  {
    path: "/ui/dropdowns",
    name: "Dropdowns",
    meta: { title: "Dropdowns", authRequired: true },
    component: () => import("../views/ui/dropdowns.vue"),
  },
  {
    path: "/ui/grid",
    name: "Grid",
    meta: { title: "Grid", authRequired: true },
    component: () => import("../views/ui/grid.vue"),
  },
  {
    path: "/ui/images",
    name: "Images",
    meta: { title: "Images", authRequired: true },
    component: () => import("../views/ui/images.vue"),
  },
  {
    path: "/ui/modals",
    name: "Modals",
    meta: { title: "Modals", authRequired: true },
    component: () => import("../views/ui/modals.vue"),
  },
  {
    path: "/ui/offcanvas",
    name: "offcanvas",
    meta: { title: "Offcanvas", authRequired: true },
    component: () => import("../views/ui/offcanvas.vue"),
  },
  {
    path: "/ui/progress",
    name: "Progress",
    meta: { title: "Progress", authRequired: true },
    component: () => import("../views/ui/progress.vue"),
  },
  {
    path: "/ui/placeholders",
    name: "Placeholders",
    meta: { title: "Placeholders", authRequired: true },
    component: () => import("../views/ui/placeholders.vue"),
  },
  {
    path: "/ui/accordions",
    name: "accordions",
    meta: { title: "Accordions", authRequired: true },
    component: () => import("../views/ui/accordions.vue"),
  },
  {
    path: "/ui/tabs",
    name: "tabs",
    meta: { title: "Tabs", authRequired: true },
    component: () => import("../views/ui/tabs.vue"),
  },
  {
    path: "/ui/typography",
    name: "Typography",
    meta: { title: "Typography", authRequired: true },
    component: () => import("../views/ui/typography.vue"),
  },
  {
    path: "/ui/embed-video",
    name: "embed-video",
    meta: { title: "Embed Video", authRequired: true },
    component: () => import("../views/ui/embed-video.vue"),
  },
  {
    path: "/ui/ribbons",
    name: "ribbons",
    meta: { title: "Ribbons", authRequired: true },
    component: () => import("../views/ui/ribbons.vue"),
  },
  {
    path: "/ui/lists",
    name: "lists",
    meta: { title: "Lists", authRequired: true },
    component: () => import("../views/ui/lists.vue"),
  },
  {
    path: "/ui/utilities",
    name: "utilities",
    meta: { title: "Utilities", authRequired: true },
    component: () => import("../views/ui/utilities.vue"),
  },
  {
    path: "/ui/notifications",
    name: "notifications",
    meta: { title: "Notifications", authRequired: true },
    component: () => import("../views/ui/notifications.vue"),
  },
  {
    path: "/ui/general",
    name: "General",
    meta: { title: "General", authRequired: true },
    component: () => import("../views/ui/general.vue"),
  },
  {
    path: "/ui/colors",
    name: "Colors",
    meta: { title: "Colors", authRequired: true },
    component: () => import("../views/ui/colors.vue"),
  },
  {
    path: "/ui/badges",
    name: "badges",
    meta: { title: "Badges", authRequired: true },
    component: () => import("../views/ui/badges.vue"),
  },
  {
    path: "/ui/media",
    name: "media",
    meta: { title: "Media", authRequired: true },
    component: () => import("../views/ui/media.vue"),
  },
  {
    path: "/widgets",
    name: "widgets",
    meta: { title: "Widgets", authRequired: true },
    component: () => import("../views/widgets/index.vue"),
  },
  {
    path: "/icons/boxicons",
    name: "boxicons-icon",
    meta: { title: "Boxicons", authRequired: true },
    component: () => import("../views/icons/boxicons.vue"),
  },
  {
    path: "/icons/materialdesign",
    name: "Material Design",
    meta: { title: "material Design", authRequired: true },
    component: () => import("../views/icons/materialdesign.vue"),
  },
  {
    path: "/icons/feather",
    name: "feather",
    meta: { title: "Feather", authRequired: true },
    component: () => import("../views/icons/feather.vue"),
  },
  {
    path: "/icons/lineawesome",
    name: "lineawesome",
    meta: { title: "Line Awesome", authRequired: true },
    component: () => import("../views/icons/lineawesome.vue"),
  },
  {
    path: "/icons/remix",
    name: "remix",
    meta: { title: "Remix", authRequired: true },
    component: () => import("../views/icons/remix.vue"),
  },
  {
    path: "/tables/basic",
    name: "basic-table",
    meta: { title: "Basic Table", authRequired: true },
    component: () => import("../views/tables/basic.vue"),
  },
  {
    path: "/tables/gridjs",
    name: "gridjs",
    meta: { title: "Grid JS", authRequired: true },
    component: () => import("../views/tables/grid/index.vue"),
  },
  {
    path: "/form/advanced",
    name: "form-advanced",
    meta: { title: "Form Advance", authRequired: true },
    component: () => import("../views/forms/advanced.vue"),
  },
  {
    path: "/form/elements",
    name: "form-elements",
    meta: { title: "Form Elements", authRequired: true },
    component: () => import("../views/forms/elements.vue"),
  },
  {
    path: "/form/layouts",
    name: "Form Layouts",
    meta: { title: "Form Layouts", authRequired: true },
    component: () => import("../views/forms/layouts.vue"),
  },
  {
    path: "/form/editors",
    name: "Form Editors",
    meta: { title: "Form Editors", authRequired: true },
    component: () => import("../views/forms/editors.vue"),
  },
  {
    path: "/form/file-uploads",
    name: "File Uploads",
    meta: { title: "File Uploads", authRequired: true },
    component: () => import("../views/forms/file-uploads.vue"),
  },
  {
    path: "/form/validation",
    name: "Form Validation",
    meta: { title: "Form Validation", authRequired: true },
    component: () => import("../views/forms/validation.vue"),
  },
  {
    path: "/form/wizard",
    name: "Form Wizard",
    meta: { title: "Form Wizard", authRequired: true },
    component: () => import("../views/forms/wizard.vue"),
  },
  {
    path: "/form/masks",
    name: "form-mask",
    meta: { title: "Form Mask", authRequired: true },
    component: () => import("../views/forms/masks.vue"),
  },
  {
    path: "/form/pickers",
    name: "form-pickers",
    meta: { title: "Form Picker", authRequired: true },
    component: () => import("../views/forms/pickers.vue"),
  },
  {
    path: "/form/range-sliders",
    name: "form-range-slider",
    meta: { title: "Form Range Slider", authRequired: true },
    component: () => import("../views/forms/range-sliders.vue"),
  },
  {
    path: "/form/select",
    name: "form-select",
    meta: { title: "Form Select", authRequired: true },
    component: () => import("../views/forms/select.vue"),
  },
  {
    path: "/form/checkboxs-radios",
    name: "form-checkboxs-radio",
    meta: { title: "Checkboxs & Radios", authRequired: true },
    component: () => import("../views/forms/checkboxs-radios.vue"),
  },
  {
    path: "/landing",
    name: "landing",
    meta: { title: "Landing", authRequired: true },
    component: () => import("../views/landing/index.vue"),
  },
  {
    path: "/pages/starter",
    name: "starter",
    meta: { title: "Starter", authRequired: true },
    component: () => import("../views/pages/starter.vue"),
  },
  {
    path: "/pages/profile",
    name: "profile",
    meta: { title: "Profile", authRequired: true },
    component: () => import("../views/pages/profile/simple.vue"),
  },
  {
    path: "/pages/profile-setting",
    name: "profile-setting",
    meta: { title: "Setting", authRequired: true },
    component: () => import("../views/pages/profile/setting.vue"),
  },
  {
    path: "/pages/maintenance",
    name: "maintenance",
    meta: { title: "Maintanance", authRequired: true },
    component: () => import("../views/pages/maintenance.vue"),
  },
  {
    path: "/pages/coming-soon",
    name: "coming-soon",
    meta: { title: "Comming Soon", authRequired: true },
    component: () => import("../views/pages/coming-soon.vue"),
  },
  {
    path: "/pages/timeline",
    name: "timeline",
    meta: { title: "Timeline", authRequired: true },
    component: () => import("../views/pages/timeline.vue"),
  },
  {
    path: "/pages/faqs",
    name: "FAQs",
    meta: { title: "FAQs", authRequired: true },
    component: () => import("../views/pages/faqs.vue"),
  },
  {
    path: "/pages/pricing",
    name: "pricing",
    meta: { title: "Pricing", authRequired: true },
    component: () => import("../views/pages/pricing.vue"),
  },
  {
    path: "/pages/team",
    name: "team",
    meta: { title: "Team", authRequired: true },
    component: () => import("../views/pages/team.vue"),
  },
  {
    path: "/pages/search-results",
    name: "search-results",
    meta: { title: "Search Results", authRequired: true },
    component: () => import("../views/pages/search-results.vue"),
  },
  {
    path: "/pages/sitemap",
    name: "sitemap",
    meta: { title: "Sitemap", authRequired: true },
    component: () => import("../views/pages/sitemap.vue"),
  },
  {
    path: "/charts/chartjs",
    name: "chartjs-chart",
    meta: { title: "Chartjs", authRequired: true },
    component: () => import("../views/charts/chartjs/index.vue"),
  },
  {
    path: "/charts/echart",
    name: "echart",
    meta: { title: "Echarts", authRequired: true },
    component: () => import("../views/charts/echart/index.vue"),
  },
  {
    path: '/charts/apex-line',
    name: 'line',
    meta: {
      title: "Line Charts", authRequired: true,
    },
    component: () => import('../views/charts/apex/line/index.vue')
  },
  {
    path: '/charts/apex-area',
    name: 'area-chart',
    meta: {
      title: "Area Charts", authRequired: true,
    },
    component: () => import('../views/charts/apex/area/index.vue')
  },
  {
    path: '/charts/apex-bar',
    name: 'bar-chart',
    meta: {
      title: "Bar Charts", authRequired: true,
    },
    component: () => import('../views/charts/apex/bar/index.vue')
  },
  {
    path: '/charts/apex-column',
    name: 'column-chart',
    meta: {
      title: "Column Charts", authRequired: true,
    },
    component: () => import('../views/charts/apex/column/index.vue')
  },
 
  {
    path: '/charts/apex-mixed',
    name: 'mixed-chart',
    meta: {
      title: "Mixed Charts", authRequired: true,
    },
    component: () => import('../views/charts/apex/mixed/index.vue')
  },
  {
    path: '/charts/apex-candlestick',
    name: 'candlestick',
    meta: {
      title: "Candlestick", authRequired: true,
    },
    component: () => import('../views/charts/apex/candlestick/index.vue')
  },
  {
    path: '/charts/apex-boxplot',
    name: 'boxplot',
    meta: {
      title: "Boxplot", authRequired: true,
    },
    component: () => import('../views/charts/apex/boxplot/index.vue')
  },
  {
    path: '/charts/apex-bubble',
    name: 'bubble',
    meta: {
      title: "Bubble Chart", authRequired: true,
    },
    component: () => import('../views/charts/apex/bubble/index.vue')
  },
  {
    path: '/charts/apex-scatter',
    name: 'scatter',
    meta: {
      title: "Scatter", authRequired: true,
    },
    component: () => import('../views/charts/apex/scatter/index.vue')
  },
  {
    path: '/charts/apex-heatmap',
    name: 'heatmap',
    meta: {
      title: "Heatmap", authRequired: true,
    },
    component: () => import('../views/charts/apex/heatmap/index.vue')
  },
  {
    path: '/charts/apex-treemap',
    name: 'treemap',
    meta: {
      title: "Treemap", authRequired: true,
    },
    component: () => import('../views/charts/apex/treemap/index.vue')
  },
  {
    path: '/charts/apex-pie',
    name: 'pie',
    meta: {
      title: "Apex Pie", authRequired: true,
    },
    component: () => import('../views/charts/apex/pie/index.vue')
  },
  {
    path: '/charts/apex-radialbar',
    name: 'radialbar',
    meta: {
      title: "Apex Radialbar", authRequired: true,
    },
    component: () => import('../views/charts/apex/radiabar/index.vue')
  },
  {
    path: '/charts/apex-radar',
    name: 'radar',
    meta: {
      title: "Apex Radar", authRequired: true,
    },
    component: () => import('../views/charts/apex/radar/index.vue')
  },
  {
    path: '/charts/apex-polararea',
    name: 'polararea',
    meta: {
      title: "Polararea", authRequired: true,
    },
    component: () => import('../views/charts/apex/polararea/index.vue')
  },
  {
    path: '/advance-ui/animation',
    name: 'animation',
    meta: {
      title: "Animation", authRequired: true,
    },
    component: () => import('../views/advance-ui/animation.vue')
  },
  {
    path: '/advance-ui/highlight',
    name: 'highlight',
    meta: {
      title: "Highlight", authRequired: true,
    },
    component: () => import('../views/advance-ui/highlight.vue')
  },
  {
    path: '/advance-ui/scrollbar',
    name: 'scrollbar',
    meta: {
      title: "Scrollbar", authRequired: true,
    },
    component: () => import('../views/advance-ui/scrollbar.vue')
  },
  {
    path: '/advance-ui/scrollspy',
    name: 'scrollspy',
    meta: {
      title: "Scrollspy", authRequired: true,
    },
    component: () => import('../views/advance-ui/scrollspy.vue')
  },
  {
    path: '/advance-ui/sweetalerts',
    name: 'sweetalerts',
    meta: {
      title: "Sweet Alerts", authRequired: true,
    },
    component: () => import('../views/advance-ui/sweetalerts.vue')
  },
  {
    path: '/advance-ui/swiper',
    name: 'Swiper Slider',
    meta: {
      title: "Swiper", authRequired: true,
    },
    component: () => import('../views/advance-ui/swiper.vue')
  },
  {
    path: '/auth/signin-basic',
    name: 'signin-basic',
    meta: {
      title: "Signin Basic", authRequired: true,
    },
    component: () => import('../views/auth/signin/basic.vue')
  },
  {
    path: '/auth/signin-cover',
    name: 'signin-cover',
    meta: {
      title: "Signin Cover", authRequired: true,
    },
    component: () => import('../views/auth/signin/cover.vue')
  },
  {
    path: '/auth/signup-basic',
    name: 'signup-basic',
    meta: {
      title: "Signup Basic", authRequired: true,
    },
    component: () => import('../views/auth/signup/basic.vue')
  },
  {
    path: '/auth/signup-cover',
    name: 'signup-cover',
    meta: {
      title: "Signup Cover", authRequired: true,
    },
    component: () => import('../views/auth/signup/cover.vue'),
  },
  {
    path: '/auth/reset-pwd-basic',
    name: 'reset-pwd-basic',
    meta: {
      title: "Reset Password", authRequired: true,
    },
    component: () => import('../views/auth/reset/basic.vue'),
  },
  {
    path: '/auth/reset-pwd-cover',
    name: 'reset-pwd-cover',
    meta: {
      title: "Reset Password", authRequired: true,
    },
    component: () => import('../views/auth/reset/cover.vue'),
  },
  {
    path: '/auth/lockscreen-basic',
    name: 'lock-screen-basic',
    meta: {
      title: "Lock Screen", authRequired: true,
    },
    component: () => import('../views/auth/lockscreen/basic.vue'),
  },
  {
    path: '/auth/lockscreen-cover',
    name: 'lock-screen-cover',
    meta: {
      title: "Lock Screen", authRequired: true,
    },
    component: () => import('../views/auth/lockscreen/cover.vue'),
  },
  {
    path: '/auth/twostep-basic',
    name: 'twostep-basic',
    meta: {
      title: "Two Step Auth", authRequired: true,
    },
    component: () => import('../views/auth/twostep/basic.vue'),
  }, {
    path: '/auth/twostep-cover',
    name: 'twostep-cover',
    meta: {
      title: "Two Step Auth", authRequired: true,
    },
    component: () => import('../views/auth/twostep/cover.vue'),
  },
  {
    path: '/auth/404',
    name: '404',
    meta: {
      title: "Error 404", authRequired: true,
    },
    component: () => import('../views/auth/errors/404.vue'),
  },
  {
    path: '/auth/500',
    name: '500',
    meta: {
      title: "Error 500", authRequired: true,
    },
    component: () => import('../views/auth/errors/500.vue'),
  },
  {
    path: '/auth/404-basic',
    name: '404-basic',
    meta: {
      title: "Error 404", authRequired: true,
    },
    component: () => import('../views/auth/errors/404-basic.vue'),
  },
  {
    path: '/auth/404-cover',
    name: '404-cover',
    meta: {
      title: "Error 404", authRequired: true,
    },
    component: () => import('../views/auth/errors/404-cover.vue'),
  },
  {
    path: '/auth/logout-basic',
    name: 'logout-basic',
    meta: {
      title: "Logout", authRequired: true,
    },
    component: () => import('../views/auth/logout/basic.vue'),
  },
  {
    path: '/auth/logout-cover',
    name: 'logout-cover',
    meta: {
      title: "Logout", authRequired: true,
    },
    component: () => import('../views/auth/logout/cover.vue'),
  },
  {
    path: '/auth/success-msg-basic',
    name: 'success-msg-basic',
    meta: {
      title: "Success Message", authRequired: true,
    },
    component: () => import('../views/auth/success-msg/basic.vue'),
  },
  {
    path: '/auth/success-msg-cover',
    name: 'success-msg-cover',
    meta: {
      title: "Success Message", authRequired: true,
    },
    component: () => import('../views/auth/success-msg/cover.vue'),
  },
  {
    path: "/maps/google",
    name: "Google Maps",
    meta: {
      title: "Google Maps", authRequired: true,
    },
    component: () => import("../views/maps/google.vue"),
  },
  {
    path: "/maps/leaflet",
    name: "Leaflet Maps",
    meta: { title: "Leaflet Maps", authRequired: true },
    component: () => import("../views/maps/leaflet/index.vue"),
  },
];