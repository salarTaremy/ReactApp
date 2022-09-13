import React from 'react'

const Error = (props) => {
  let Msg = "مقدار این فیلد نا معتبر است"
  
  if (props.Err != null) {
    //console.log(props.Err.type )
    Msg = props.Err.type === "required" ? "این فیلد الزامی است" : Msg
    Msg = props.Err.type === "maxLength" ? "طول این فیلد بیشتر از حد مجاز است" : Msg
    Msg = props.Err.type === "minLength" ? "طول این فیلد کمتر از حد مجاز است" : Msg
  }
  Msg = props.Msg ? props.Msg : Msg
  const Result = () => {
    if (props.Err == null ) {
      return <></>
    } else {
      return <p className='text-danger'>{Msg}</p>
    }
  }

  return (
    <>
      <Result></Result>
    </>
  )
}
export default Error
