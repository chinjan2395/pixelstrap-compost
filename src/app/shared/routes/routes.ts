import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      breadcrumb: 'Dashboard'
    }
  },
  {
    path: 'widgets',
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule),
    data: {
      breadcrumb: 'Widgets'
    }
  },
  {
    path: 'ui-elements',
    loadChildren: () => import('../../components/ui-elements/ui-elements.module').then(m => m.UiElementsModule),
    data: {
      breadcrumb: "UI-Elements"
    }
  },
  {
    path: 'base',
    loadChildren: () => import('../../components/base/base.module').then(m => m.BaseModule),
    data: {
      breadcrumb: "Base"
    }
  },
  {
    path: 'buttons',
    loadChildren: () => import('../../components/buttons/buttons.module').then(m => m.ButtonsModule)
  },
  {
    path: 'to-do',
    loadChildren: () => import('../../components/todo/todo.module').then(m => m.TodoModule),
    data: {
      breadcrumb: 'To-do'
    }
  },
  {
    path: 'pricing',
    loadChildren: () => import('../../components/pricing/pricing.module').then(m => m.PricingModule),
    data: {
      breadcrumb: 'Pricing'
    }
  },
  {
    path: 'knowledgebase',
    loadChildren: () => import('../../components/knowledge-base/knowledge-base.module').then(m => m.KnowledgeBaseModule),
    data: {
      breadcrumb: "Knowledge-Base"
    }
  },
  {
    path: 'icons',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule),
    data: {
      breadcrumb: "Icons"
    }
  },
  {
    path: 'job',
    loadChildren: () => import('../../components/job-search/job-search.module').then(m => m.JobSearchModule),
    data: {
      breadcrumb: "Job-Search"
    }
  },
  {
    path: 'form',
    loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormModule),
    data: {
      title: "Forms",
      breadcrumb: "Forms"
    }
  },
  {
    path: 'cards',
    loadChildren: () => import('../../components/cards/cards.module').then(m => m.CardsModule),
    data: {
      title: "Cards",
      breadcrumb: "Cards"
    }
  },
  {
    path: 'sample-page',
    loadChildren: () => import('../../components/sample-page/sample-page.module').then(m => m.SamplePageModule),
    data: {
      title: "Sample-Page",
      breadcrumb: "Sample-Page"
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('../../components/blog/blog.module').then(m => m.BlogModule),
    data: {
      title: "Blog",
      breadcrumb: "Blog"
    }
  },
  {
    path: 'learning',
    loadChildren: () => import('../../components/learning/learning.module').then(m => m.LearningModule),
    data: {
      title: "Learning",
      breadcrumb: "Learning"
    }
  },
  {
    path: 'faq',
    loadChildren: () => import('../../components/faq/faq.module').then(m => m.FaqModule),
    data: {
      title: "FAQ",
      breadcrumb: "FAQ"
    }
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('../../components/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
    data: {
      title: "E-Commerce",
      breadcrumb: "E-Commerce"
    }
  },
  {
    path: 'user',
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    data: {
      title: "Users",
      breadcrumb: "Users"
    }
  },
  {
    path: 'table',
    loadChildren: () => import('../../components/table/table.module').then(m => m.TableModule),
    data: {
      title: "Table",
      breadcrumb: "Table"
    }
  },
  {
    path: 'advance',
    loadChildren: () => import('../../components/advance/advance.module').then(m => m.AdvanceModule),
    data: {
      title: "Advance",
      breadcrumb: "Advance"
    }
  },
  {
    path: 'timeline',
    loadChildren: () => import('../../components/timeline/timeline.module').then(m => m.TimelineModule),
    data: {
      title: "Timeline",
      breadcrumb: "Timeline"
    }
  },
  {
    path: 'gallery',
    loadChildren: () => import('../../components/gallery/gallery.module').then(m => m.GalleryDemoModule),
    data: {
      title: "Gallery",
      breadcrumb: "Gallery"
    }
  },
  {
    path: 'search-pages',
    loadChildren: () => import('../../components/search/search.module').then(m => m.SearchModule),
    data: {
      title: "Search",
      breadcrumb: "Search"
    }
  },
  {
    path: 'social-app',
    loadChildren: () => import('../../components/social-app/social-app.module').then(m => m.SocialAppModule),
    data: {
      title: "Social-App",
      breadcrumb: "Social-App"
    }
  },
  {
    path: 'editor',
    loadChildren: () => import('../../components/editor/editor.module').then(m => m.EditorModule),
    data: {
      title: "Editor",
      breadcrumb: "Editor"
    }
  },
  {
    path: 'to-do-firebase',
    loadChildren: () => import('../../components/to-do-firebase/to-do-firebase.module').then(m => m.ToDoFirebaseModule),
    data: {
      title: "TODO FIREBASE",
      breadcrumb: "TODO FIREBASE"
    }
  },
  {
    path: 'chart',
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule),
    data: {
      title: "Charts",
      breadcrumb: "Charts"
    }
  },
  {
    path: 'chat',
    loadChildren: () => import('../../components/chat/chat.module').then(m => m.ChatModule),
    data: {
      title: "Chat",
      breadcrumb: "Chat"
    }
  },
  {
    path: 'email',
    loadChildren: () => import('../../components/email/email.module').then(m => m.EmailModule),
    data: {
      title: "E-mail App",
      breadcrumb: "E-mail App"
    }
  },
  {
    path: 'calender',
    loadChildren: () => import('../../components/calender/calender.module').then(m => m.CalenderModule),
    data: {
      title: "Calender",
      breadcrumb: "Calender"
    }
  },
  {
    path: 'map',
    loadChildren: () => import('../../components/map/map.module').then(m => m.MapModule),
    data: {
      title: "Map",
      breadcrumb: "Map"
    }
  },
  {
    path: 'contact',
    loadChildren: () => import('../../components/contact/contact.module').then(m => m.ContactModule),
    data: {
      breadcrumb: "Contact"
    }
  },
  {
    path: 'support-ticket',
    loadChildren: () => import('../../components/support-ticket/support-ticket.module').then(m => m.SupportTicketModule),
    data: {
      breadcrumb: "Support Ticket"
    }
  },
];
