const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Lee Doo Heon",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: `데이터를 좋아하는\nFE개발자입니다.`,
    email: "hiphopbikedev@kakao.com",
    linkedin: "",
    github: "thekanon",
    instagram: "",
  },
  projects: [
    {
      name: "chatGPT로 면접질문 생성해서 구글에 노출하는 웹사이트",
      href: "https://job-search-log.vercel.app",
    },
    {
      name: `키워드 주면 AI가 일러스트 그려주는 앱`,
      href: "http://dombtido.iptime.org:3002",
    },
    {
      name: "출퇴근할때 빠르게 일기써주는 앱",
      href: "http://dombtido.iptime.org:7090",
    },
    {
      name: "출퇴근할때 BBC 뉴스로 영어공부하는 웹앱",
      href: "http://dombtido.iptime.org:3000",
    },
  ],
  // blog setting (required)
  blog: {
    title: "dooveloper-log",
    description: "welcome to dooveloper-log!",
  },

  // CONFIG configration (required)
  link: "https://doovelop-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["blog", "notion", "nextjs", "vercel", "react", "nuxt", "seo"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
