// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "M-Works Dev Journal";
export const SITE_TITLE = "Frosti 🧊";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "M-Works Dev Chronicles";
export const USER_SITE = "https://github.com/Gnomeshgh19LvU"
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "首页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "所有博客",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术博客",
        href: "/blog/categories/tech",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "生活博客",
        href: "/blog/categories/life",
        svg: "heart",
        target: "_self",
      }, // Life category
      {
        id: "All categories",
        text: "所有分类",
        href: "/blog/categories/categories",
        svg: "categories",
        target: "_self",
      }, // All categories
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "朋友",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "联系",
    href: "https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=OAkODgoADQENCQx4SUkWW1dV", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/Gnomeshgh19LvU",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://maaaa.oss-cn-nanjing.aliyuncs.com/blog/Wechat-contact.jpg",
    ariaLabel: "WeChat",
    title: "WeChat",
    svg: "MdiWechat",
  },
  {
    href: "https://res.abeim.cn/api/qq/?qq=1662859514",
    ariaLabel: "QQ",
    title: "QQ",
    svg: "MingcuteQqFill",
  },
  {
    href: "https://gitee.com/Maaaashifu",
    ariaLabel: "Gitee",
    title: "Gitee",
    svg: "SimpleIconsGitee",
  },
  {
    href: "https://space.bilibili.com/1796832871",
    ariaLabel: "Bilibili",
    title: "Bilibili",
    svg: "bilibili",
  },
];