import { defineConfig } from "vitepress"

function resolveBase() {
  if (process.env.VITEPRESS_BASE) {
    return process.env.VITEPRESS_BASE
  }

  if (process.env.GITHUB_ACTIONS !== "true") {
    return "/"
  }

  const repository = process.env.GITHUB_REPOSITORY?.split("/")[1]

  if (!repository || repository.endsWith(".github.io")) {
    return "/"
  }

  return `/${repository}/`
}

export default defineConfig({
  appearance: {
    initialValue: 'light'
  },
  title: "人工智能数学原理与算法B",
  description: "课程教学大纲",
  lang: "zh-CN",
  srcDir: ".",
  cleanUrls: true,
  lastUpdated: false,
  base: resolveBase(),
  themeConfig: {
    nav: [],
    sidebar: false,
    outline: false,
    appearance: false,
    docFooter: {
      prev: false,
      next: false,
    },
  },
})
