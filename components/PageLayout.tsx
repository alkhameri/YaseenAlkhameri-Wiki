import Sidebar from "./Sidebar"

interface PageLayoutProps {
  currentPath: string
  children: React.ReactNode
}

export default function PageLayout({ currentPath, children }: PageLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar currentPath={currentPath} />
      <main className="flex-1 w-full md:w-4/5">
        {children}
      </main>
    </div>
  )
}