import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'

interface RemoveBtnProps {
  onClick: () => void
}

const RemoveBtn = ({ onClick }: RemoveBtnProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="destructive"
          className="focus-visible:bg-neutral-100"
        >
          Remove
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to remove this extension?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently remove this
            extension.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2 pt-4">
          <DialogTrigger asChild>
            <Button className="transition-colors hover:bg-neutral-100 dark:hover:text-neutral-800">
              Cancel
            </Button>
          </DialogTrigger>
          <Button variant="destructive" onClick={onClick}>
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default RemoveBtn
