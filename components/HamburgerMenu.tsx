
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { createClient } from "@/lib/supabase/server"

import { Menu } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"



const HamburgerMenu = async () => {

  const supabase = await createClient()
 const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  
  return (

      <Sheet>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4 mt-[20%]">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Name</Label>
              <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-username">Username</Label>
              <Input id="sheet-demo-username" defaultValue="@peduarte" />
            </div>
          </div>

          {user ?
            <div className="px-4 mb-14">
              <button className="bg-red-300 w-full h-12 rounded-2xl text-white text-lg font-semibold hover:bg-red-400">プランを見る</button>
            </div>
            :
            <Dialog >
              <DialogTrigger>
                <button className="bg-red-300 w-full h-12 rounded-2xl text-white text-lg hover:bg-red-400">無料登録</button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          }
         
        </SheetContent>

      </Sheet>
      
    
  )
}

export default HamburgerMenu
