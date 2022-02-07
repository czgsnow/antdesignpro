// 经过测试发现，所有的命名路由（在根路径添加name字段）都会出现在菜单栏，这个超级重要的信息，二逼文档一字不提，全靠用户挖宝；
// 1、第一层路由对象内是否有name字段决定了这个路由对象是否会被添加到菜单栏中，有name会被添加到菜单栏当中，被添加到菜单栏中的路由对象其下一层是否有name也决定了下一层是否展示到菜单栏中；
// 2、layout: false；决定是否对匹配的路由页面使用layout布局组件，layout布局组件是放在全局的，可以简单理解为layout为false的时候只是隐藏了菜单栏，
// 3、经过测试发现，redirect使用的前提是这个路由对象必须有一个component的展示容器，而不是空路由。
// 规定跟路径“/”为入口页面；
// ++++++++++++++
// 1、规定路由对象的名字和指向的文件夹的名字一致，使用的组件模板的路径和命名路由尽量清晰直观，展示的访问路径是对外的可以自由定义，
// ============================================================================路由配置情况说明
// 1、第一层路由是否有name字段决定了路由是否会被添加到菜单栏中，没有name字段就不会被添加到菜单栏中
// 2、路由对象有name字段的时候，需要添加一个icon字段，这个字段是给菜单的选项配置图标
// 3、layout字段决定是否在该路由界面使用全局的导航布局框架；默认为true;
// 4、否打开新页面target: '_blank',
// 5、是否在该路由界面下展示顶栏headerRender，默认为true，布局分为顶栏，导航栏，主体。
// 6、在全局配置页脚，但是可以在路由表中决定使用展示这个页脚，footerRender默认为true，
// 7、menuRender: false,决定在该路由下边是否展示菜单栏；
// 8、menuHeaderRender: false,不展示菜单顶栏
// 9、access: 'canRead',权限配置，需要与 plugin-access 插件配合使用
// 10、hideChildrenInMenu: true, 隐藏子菜单
// 11、hideInMenu: true,隐藏自己和子菜单
// 12、hideInBreadcrumb: true,在面包屑中隐藏。正常情况顶部面包屑路由路径导航中会展示当前访问的是那个路由下边的子路由，这个属性就是让面包屑缺少当前路由对象
// 13、flatMenu: true,子项往上提，仍旧展示, 就是把当前路由对象的routes中的子路由对象向上提一级跟在父路由对象后边，让子对象和父对象处于同一个层级
// 14、这个地方的name也是国际化配置locale中层层使用的键名；
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/ccc/bbb/ddd/x6test',
    name: 'x6test',
    // layout:false,
    icon: 'smile',
    component: './X6test',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/ccc/bbb/ddd/x6test',
  },
  {
    component: './404',
  },
];
