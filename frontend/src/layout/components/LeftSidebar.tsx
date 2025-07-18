import { HomeIcon, Library, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "../../lib/utils"
import { buttonVariants } from "../../components/ui/button"
import { SignedIn } from "@clerk/clerk-react"
import { ScrollArea } from "../../components/ui/scroll-area"
import PlaylistSkeleton from "../../components/skeletons/PlaylistSkeleton"

const LeftSidebar = () => {
    const isLoading = true;
  return (
    <div className="h-full flex flex-col gap-2">
        
        <div className = "rounded-lg bg-zinc-900 p-4">
            <div className="space-y-2">
                <Link 
                    to={"/"} 
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                            className: "w-full justify-start text-amber-50 hover:bg-zinc-800"
                        })
                    )}
                >
                <HomeIcon className="mr-2 size-5" />
                <span className="hidden md:inline">Home</span>
                </Link>

                <SignedIn>
                    <Link 
                        to={"/chat"} 
                        className={cn(
                            buttonVariants({
                                variant: "ghost",
                                className: "w-full justify-start text-amber-50 hover:bg-zinc-800"
                            })
                        )}
                    >
                    <MessageCircle className="mr-2 size-5" />
                    <span className="hidden md:inline">Messages</span>    
                </Link>
                </SignedIn>
            </div>
        </div>

        <div className="flex-1 rounded-lg bg-zinc-900 p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-amber-50 px-2">
                    <Library className="size-5 mr-2" />
                    <span className="hidden md:inline">Playlists</span>
                </div>
            </div>

            <ScrollArea className="h-[calc(100vh-300px)]">
                <div className="space-y-2">
                    {isLoading ? (
                        <PlaylistSkeleton />
                    ) : (
                        "M U S I C"
                    )}
                </div>
            </ScrollArea>
        </div>
        
    </div>
  )
}

export default LeftSidebar