---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "小莫的维基库"
  text: "记录一些有用的合集"
  tagline: 可能想起来了会更新一些东西
  actions:
    - theme: brand
      text: Gloss Mod Manager
      link: /GMM/README.md
    - theme: alt
      text: BepInEx
      link: /BepInEx/README.md
    - theme: alt
      text: CMake
      link: /CMake/README.md
    - theme: alt
      text: REFramework
      link: /REFramework/README.md
    

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>