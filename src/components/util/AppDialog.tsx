import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react"

interface AppDialogProps extends PropsWithChildren {
  onClick: () => void;
  buttonText: string;
  dialogTitle: string;
}
const AppDialog = ({ onClick, buttonText, dialogTitle, children }: AppDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger onClick={onClick}><Button>{buttonText}</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>
            {children}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export { AppDialog }