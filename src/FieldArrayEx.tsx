import { useFieldArray, useFormContext } from "react-hook-form";
import { RHForm } from "./RHForm";
import { z } from "zod";


// useFieldArray는 기본값으로 동작함

function FieldArray() {
    const { control, register } = useFormContext();
    const { fields, append } = useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormProvider)
      name: "test", // unique name for your Field Array
    });
  
  
    return (
      <>
      {fields.map((field, index) => (
        <input
          key={field.id} // important to include key with field's id
          {...register(`test.${index}`)} 
        />
      ))}
      <button type="button" onClick={()=>append("초기값")}>append</button>
      </>
    );
  }

 
const schema = z.object({
  test:z.array(z.string().min(1))
})  

type FormType = z.infer<typeof schema>

const defaultValues = {
  test:["1","2","3"]
}


const FieldArrayEx = () => {
  return (
    <RHForm<FormType> schema={schema} defaultValues={defaultValues}>
        <FieldArray />
        <button type="submit">submit</button>
    </RHForm>
  )
}

export default FieldArrayEx