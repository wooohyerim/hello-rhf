import { Select } from "antd"
import { FC } from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import { RHForm } from "./RHForm";
import { z } from "zod";
import { ErrorMessage } from "@hookform/error-message";

type OptionType = {
    value:string
    label:string
}

type RHSelect1Props = {
    name:string
    options :OptionType[]
}



const RHSelect1:FC<RHSelect1Props> = ({options,name}) => {
    return (
        <Controller name={name} render={(methods)=>{
            return (
                <>
                    <Select 
                        onChange={methods.field.onChange} 
                        ref={methods.field.ref} 
                        onBlur={methods.field.onBlur} 
                        options={options}
                        value={methods.field.value} 
                    />
                    <ErrorMessage name={name} errors={methods.formState.errors} />
                </>
        )
        }} />
    )
}

const RHSelect2:FC<RHSelect1Props> = ({name}) => {
    const methods = useController({
        name
    })
    return (
        <>
            <Select 
                onChange={methods.field.onChange} 
                ref={methods.field.ref} 
                onBlur={methods.field.onBlur} 
                options={options}
                value={methods.field.value} 
            />
            <ErrorMessage name={name} errors={methods.formState.errors} />
        </>
    )
}


const options:OptionType[] = [
    {value:"1",label:"1"},
    {value:"2",label:"2"},
    {value:"3",label:"3"},
]

const schema = z.object({
    select1:z.string({
        invalid_type_error:"선택해주세요.",
        required_error:"선택해주세요."
    }).optional(),
    select2:z.string({
        invalid_type_error:"선택해주세요.",
         required_error:"선택해주세요."
    }).optional()
})

type FormType = z.infer<typeof schema>

const defaultValues:FormType = {
    select1:undefined,
    select2:undefined,
}

const ResetButton = () => {
    const methods = useFormContext<FormType>()
    
    return  <button type="button" onClick={()=>methods.reset(defaultValues)}>reset</button>
}

const SelectTest = () => {
  return   (
    <RHForm<FormType> schema={schema} defaultValues={defaultValues}>
        <RHSelect1 options={options} name="select1" />
        <RHSelect2 options={options} name="select2" />
        <button type="submit">submit</button>
        <ResetButton />
   
    </RHForm>
)
}

export default SelectTest