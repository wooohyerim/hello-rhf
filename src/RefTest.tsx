import { forwardRef, useEffect, useRef } from "react"

type SelectProps = {
  name:string
}


// 함수형 컴포넌트에서 ref를 받으려면 forwardRef를 사용해서 컴포넌트를 감싸면 가능
// ref를 받는 엘리먼트의 타입을 넣어주면 받을 수 있음
const Select = forwardRef<HTMLSelectElement , SelectProps>((props, ref) => {
  return (
    <select name={props.name} ref={ref} id="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  )
})


const RefTest = () => {
  const ref = useRef<HTMLSelectElement>(null)
  
  useEffect(()=>{
    setTimeout(()=>{
      if(ref.current) {
         ref.current.value = "3"
      }
     
    },5000)
  },[])

  return <Select ref={ref} name="select" />
}

export default RefTest


