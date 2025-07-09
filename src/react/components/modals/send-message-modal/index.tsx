import { useState } from "react"
import { useSendMessageModalStore } from "./store/send-message-store"
import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "../../ui"
import { Textarea } from "../../ui/textarea"
import { SendWhatsappMessageModels } from "./data"
import { useSendMessage } from "./hooks/use-send-message"


export default function SendWhatsappMessageModal() {
   const [modelModalOpen, setModelModalOpen] = useState(false)

   const { isOpen, name, close } = useSendMessageModalStore()
   const { form , onSubmit} = useSendMessage()

   return (
      <Dialog open={isOpen} onOpenChange={close}>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Enviar mensagem pelo WhatsApp</DialogTitle>
               <DialogDescription>
                  Preencha os campos abaixo para enviar uma mensagem para o usuário.
               </DialogDescription>
               {name && <p className='font-semibold'>Destinatário: <span className='text-blue-500'>{name}</span></p>}
            </DialogHeader>
            <Form {...form}>
               <form
                  className="fle flex-col gap-4"
                  onSubmit={form.handleSubmit((v) => onSubmit(v))}
               >
                  <FormField
                     control={form.control}
                     name="title"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Título</FormLabel>
                           <FormControl>
                              <Input placeholder="Digite o título" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="message"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className="mt-4">Mensagem</FormLabel>
                           <FormControl>
                              <Textarea
                                 placeholder="Digite a mensagem"
                                 {...field}
                                 className="h-32 break-words max-w-full"
                                 style={{ wordBreak: 'break-word', width: '100%' }}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <Button className="w-full mt-4" type="submit">
                     Enviar
                  </Button>

                  <Dialog open={modelModalOpen} onOpenChange={setModelModalOpen}>
                     <DialogTrigger className='w-full'>
                        <Button variant='outline' className="w-full mt-4" type="button">
                           Ver modelos
                        </Button>
                     </DialogTrigger>
                     <DialogContent>
                        <DialogHeader>
                           <DialogTitle>Modelos de mensagem</DialogTitle>
                           <DialogDescription>Escolha um modelo para enviar a mensagem.</DialogDescription>
                           <div className="flex flex-col gap-3 mt-4 max-h-96 overflow-scroll">
                              {SendWhatsappMessageModels.map((model, index) => (
                                 <Button
                                    key={index}
                                    variant="outline"
                                    className="flex flex-col items-start text-left h-auto py-3 px-4 border border-primary/30 hover:border-primary bg-muted hover:bg-primary/10 transition-all"
                                    onClick={() => {
                                       form.setValue('title', model.title)
                                       form.setValue('message', model.message)
                                       setModelModalOpen(false)
                                    }}
                                    style={{ wordBreak: 'break-word', width: '100%' }}
                                 >
                                    <span className="font-semibold text-base mb-1">{model.title}</span>
                                    <span className="text-sm text-muted-foreground whitespace-pre-line">{model.message}</span>
                                 </Button>
                              ))}
                           </div>
                        </DialogHeader>
                     </DialogContent>
                  </Dialog>
               </form>
            </Form>
         </DialogContent>
      </Dialog>
   )
}
