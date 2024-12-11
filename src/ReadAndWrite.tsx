import { Input } from "antd"
import { RHForm } from "./RHForm"
import { z } from "zod"
import { Controller, FieldValues, Path, PathValue, useFormContext, useWatch } from "react-hook-form"

// 제어컴포넌트에서는 Controller를 사용함으로써 등록 됨
// rhf 는 폼 전체 상태관리 하는 


const schema = z.object({
    test:z.string()
})

type FormType = z.infer<typeof schema>

const TestInput = () => {
    return  (
        <Controller  name="test" render={({field})=>{
            
            return <Input name={field.name} value={field.value}  onChange={field.onChange} onBlur={field.onBlur} ref={field.ref} />
        }} />
)
}

type SetButtonProps<T extends FieldValues> = {
    name: Path<T>
}

const SetButton =<T extends FieldValues> ({name}:SetButtonProps<T>) => {
const {setValue}  = useFormContext<T>()

    return <button type="button" onClick={()=>setValue(name, "hi" as PathValue<T, Path<T>>)}>Set</button>
}

const GetButton =<T extends FieldValues> ({name}:SetButtonProps<T>) => {
    const {getValues}  = useFormContext<T>()
    
        return <button type="button" onClick={()=>alert(getValues(name))}>Get</button>
    }

type WatchType<S extends FieldValues> = {
    nameFor: Path<S>
}

const Watch =<S extends FieldValues> ({nameFor}:WatchType<S>) => {
    const value = useWatch<S>({
        name:nameFor
    })
    console.log(value)

    return null
}


const ReadAndWrite = () => {
  return (
    <RHForm<FormType> schema={schema}>
        <TestInput />
        <Watch<FormType> nameFor="test" />
        <SetButton<FormType> name="test" />
        <GetButton<FormType> name="test" />
    </RHForm>
  )
}

export default ReadAndWrite