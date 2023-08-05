import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Images",
      href: "/images",
    },
  ],
  sidebarNav: [
    {
      title: "_",
      items: [
        {
          title: "Profile",
          href: "/profile",
          items: [],
        },
      ],
    },
  ],
}
