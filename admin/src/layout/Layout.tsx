import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Sidebar from '../components/Sidebar'

const Layout = () => {
    return (
        <div className='w-full h-screen'>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={15} minSize={15} maxSize={25}  >
                    <div className='w-full h-full p-3'>
                        <Sidebar />
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <div className='w-full h-full '>
                        <h1>Two</h1>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

export default Layout