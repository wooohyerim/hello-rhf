import {  useFormContext } from "react-hook-form"
import { z } from "zod"
import { ErrorMessage } from "@hookform/error-message"
import { FC} from "react"
import { RHForm } from "./RHForm"


const schema = z.object({
    content: z.string().min(1,"1글자 이상 입력").max(1000,"최대 1,000자")
})

type TestType = z.infer<typeof schema>



type RHTextareaType = {
    name:string
}

const RHTextarea:FC<RHTextareaType> = ({name}) => {
    const methods = useFormContext()
    const fieldMethods = methods.register(name)
    return (
        <>
            <textarea 
                name={fieldMethods.name} 
                ref={fieldMethods.ref} 
                onChange={fieldMethods.onChange} 
                onBlur={fieldMethods.onBlur} />
            <ErrorMessage name={fieldMethods.name} errors={methods.formState.errors} />
        </>
    )
}

const TextareaTest = () => {
  return(
     <RHForm<TestType> schema={schema}>
        <RHTextarea name="content" />
        <button type="submit">submit</button>
        <button type="reset">reset</button>
     </RHForm>
    )
}

export default TextareaTest