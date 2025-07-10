
import { MultiStepFormWrapper, Step, useMultiStepForm } from "@/react/components/multi-step-form-wrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/react/components/ui"
import { PATHS } from "@/app/paths"
import { Link, useNavigate } from "react-router-dom"
import { basicInfoSchema, contactAndAddressSchema, formSchema, responsibleInfoSchema, type FormValues } from "./schema/create-establishment-schema"
import { useAuthentication } from "./hooks/use-create-establishment"


export function MultiStepFormDemo() {
   const { onSubmit} = useAuthentication()
   const navigate = useNavigate()

   const handleNavigateToLogin = () => {
      navigate(PATHS.LOGIN)
   }

   return (
      <div className="">
         <div className='text-left mb-10'>
            <h1 className="text-2xl font-bold mb-4">Bem vindo ao cadastro!</h1>
            <p className="text-muted-foreground text-sm block">
               Preencha as informações abaixo para concluir efetuar o cadastro dentro da plataforma e começar a gerar seus links.
            </p>
         </div>
         <MultiStepFormWrapper
            onComplete={(v) => onSubmit(v)}
            completeButtonText="Cadastrar"
            nextButtonText="Próximo"
            prevButtonText="Anterior"
            className=" rounded p-4"
            schema={formSchema}
         >
            <Step schema={basicInfoSchema}>
               <BasicInfoStep />
            </Step>
            <Step schema={responsibleInfoSchema}>
               <MessageStep />
            </Step>
            <Step schema={contactAndAddressSchema}>
               <ContactAdress />
            </Step>
         </MultiStepFormWrapper>
         <div className="flex flex-col gap-4 mt-10">
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
               <span className="bg-background text-muted-foreground relative z-10 px-2">
                  Já possui uma conta?
               </span>
            </div>
            <div className="text-center text-sm">
               <Link to={"#"} onClick={handleNavigateToLogin} className="underline underline-offset-4 cursor-pointer">
                  Acesse sua conta
               </Link>
            </div>
         </div>
      </div>
   )
}

function BasicInfoStep() {
   const { form } = useMultiStepForm<FormValues>()

   return (
      <Form {...form}>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField name="cnpj" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>CNPJ</FormLabel>
                  <FormControl><Input {...field} placeholder="00.000.000/0000-00" /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />
            <FormField name="socialReason" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Razão Social</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />
            <FormField name="tradingName" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Nome Fantasia</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="cnae" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>CNAE</FormLabel>
                  <FormControl><Input type="text" {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />
         </div>
      </Form>
   )
}

function MessageStep() {
   const { form } = useMultiStepForm<FormValues>()

   return (
      <Form {...form}>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField name="responsibleName" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Nome do Responsável</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="cpf" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="civilStatus" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Estado Civil</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="cnae" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>CNAE</FormLabel>
                  <FormControl><Input type="number" {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="rg" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>RG</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="rgUf" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>UF do RG</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="rgDate" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Data de Emissão do RG</FormLabel>
                  <FormControl><Input type="date" {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="gender" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Gênero</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="dateOfBirth" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <FormControl><Input type="date" {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />
         </div>
      </Form>
   )
}

function ContactAdress() {
   const { form } = useMultiStepForm<FormValues>()

   return (
      <Form {...form}>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField name="email" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input type="email" {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="password" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl><Input type="password" {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="phone" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="street" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Rua</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="number" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Número</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="complement" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Complemento</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="neighborhood" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Bairro</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="city" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Cidade</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="state" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />

            <FormField name="zipCode" control={form.control} render={({ field }) => (
               <FormItem>
                  <FormLabel>CEP</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
               </FormItem>
            )} />
         </div>
      </Form>
   )
}
