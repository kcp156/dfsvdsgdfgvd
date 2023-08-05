import { SiteHeader } from "@/components/site-header"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
<>
<SiteHeader />
<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        {/* Include shared UI here e.g. a header or sidebar */}
     
              <div className="flex-1">{children}</div>
         
 </section>
</>
    )
  }