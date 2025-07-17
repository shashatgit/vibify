import { Outlet } from "react-router-dom"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/ui/resizable"
import LeftSidebar from "./components/LeftSidebar";

const MainLayout = () => {
  const isMobile = false;
    return (
    <div className="h-screen bg-black text-white flex flex-col">
      
      <ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden p-2">
        <ResizablePanel defaultSize={20} minSize={isMobile?0:10} maxSize={30}>
          <LeftSidebar />
        </ResizablePanel>

        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        <ResizablePanel defaultSize={isMobile?80:60}>
          <Outlet />
        </ResizablePanel>

        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
          friends-list
        </ResizablePanel>
      </ResizablePanelGroup>

    </div>
  )
}

export default MainLayout