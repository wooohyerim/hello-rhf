import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { PropsWithChildren } from "react"
import { DefaultValues, FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { ZodSchema } from "zod"

// 타입은 선언하는 시점이 아니라 실행하는 시점에 정한다.

// FormType을 돌려막기
// 미래의 누군가 쓸 타입
type RHFormProps<FormType> = {
    schema : ZodSchema<FormType>
    defaultValues?:DefaultValues<FormType>
}

 // react-hook-form을 언제든지 사용할 수 있는 역할
 // FormType은 react-hook-form 안에 있는 fieldValues 를 가지기에
 
 export function RHForm<FormType extends FieldValues>({ children ,schema,defaultValues}:PropsWithChildren<RHFormProps<FormType>>) {
    const methods = useForm<FormType>({
        resolver: zodResolver(schema),
        defaultValues
    })

    const onValid: SubmitHandler<FormType> = (values) => {
        alert(JSON.stringify(values))
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onValid)}>
                {children}
            </form>
            <DevTool control={methods.control} />
        </FormProvider>
    )
}