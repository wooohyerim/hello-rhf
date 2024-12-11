import { Controller, useFieldArray} from "react-hook-form"
import { RHForm } from "./RHForm"
import { z } from "zod"


// 비제어컴포넌트로는 체크박스를 구현할 수 없음 -> ref가 value 값을 덮어버림
// 제어컴포넌트를 사용할 때 Controller 사용 -> 비제어로 사용하기 위해 -> 리렌더링을 최소화 하기 위해

const CheckBoxList = () => {
    const {fields = []} = useFieldArray({
        name:"test"
    })


    return (
        <>
            {
                fields.map((field,index)=>{
                   const name = `test.${index}`
                  
                    return (
                        <Controller name={name} render={({field:{onBlur,onChange,value}}) => {
                            return (
                                <input 
                                key={field.id} 
                                type="checkbox"
                                name={name} 
                                onChange={(e)=>onChange({value:e.target.value, checked:e.target.checked})}
                                onBlur={onBlur} 
                                value={value.value}
                                checked={value.checked}
                            />
                            )
                        }} />                
                    )
                })
            }
        </>
    )
}


const schema = z.object({
    test:z.array(
      z.object({
        value:z.string(),
        checked:z.boolean()
      })  
    )
})  

const defaultValues = {
    test:[
        {value:"1",checked:false},{value:"2",checked:false},{value:"3",checked:true}
    ]
}
  


const FieldArrayCheckboxPage = () => {
  return (
  <RHForm schema={schema} defaultValues={defaultValues}>
    <CheckBoxList />
   {/* // <input type="text" value="1" /> */}
  </RHForm>
)
}

export default FieldArrayCheckboxPage