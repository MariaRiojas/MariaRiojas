"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] backdrop-blur-xl bg-black/40 border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Contacto</DialogTitle>
        </DialogHeader>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Nombre
            </Label>
            <Input
              id="name"
              placeholder="María Riojas"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Mensaje
            </Label>
            <Textarea
              id="message"
              placeholder="Tu mensaje..."
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <Button type="submit" className="w-full bg-white/20 hover:bg-white/30 text-white">
            Enviar mensaje
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

