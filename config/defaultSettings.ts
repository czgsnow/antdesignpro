import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // 导航主题
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  // 页面容器组件的布局模式，Fluid为自适应模式，就是在手机和平板和电脑等多种设备下展示的布局不同；
  contentWidth: 'Fluid',
  // 是否固定 header 到顶部 默认为false
  fixedHeader: true,
  // 是否固定左侧导航，默认是false
  fixSiderbar: true,
  // 是否自动分割菜单。当把菜单栏放到左侧的时候的同时还添加了顶栏（用户登录、语言切换、主题切换、）的情况下，顶栏的左侧在电脑屏幕下会留有大量的空白，我们可以通过这个属性把菜单栏的第一层切割下来放到顶栏的左侧；
  splitMenus: false,
  colorWeak: false,
  // title表示页面的顶栏的左上角的标题；
  title: '兔老大',
  pwa: false,
  // 页面顶栏左上角的logo图标a
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // 这个是使用阿里巴巴矢量图标库的地址
  iconfontUrl: '//at.alicdn.com/t/font_2538205_ftv0z3w568r.js',
};

export default Settings;