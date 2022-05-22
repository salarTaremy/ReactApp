import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Test = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [tarafhesab, settarafhesab] = useState(props.tarafhesab)



  // useEffect(() => {
  //    console.log('useEffect');
  //    console.log(props.tarafhesab);
  //   // settarafhesab(props.tarafhesab)
  //   // console.log('settarafhesab()');

  //     //when this.state.errors object is empty 
  //     if (Object.entries(tarafhesab).length === 0 && tarafhesab.constructor === Object) {
  //       console.log('is null');
  //       settarafhesab(props.tarafhesab)
  //       console.log(tarafhesab);
  //     }

  // });



  // useEffect(
  //   () => {
  //     console.log('use ef');
  //     console.log(props.tarafhesab);
  //     settarafhesab(props.tarafhesab)
  //     // //when this.state.errors object is empty 
  //     // if (Object.entries(tarafhesab).length === 0 && tarafhesab.constructor === Object) {
  //     //   console.log('is null');
  //     //   console.log(tarafhesab);
  //     //   settarafhesab(props.tarafhesab)
  //     // }

  //     return () => {
  //       console.log('Unload');
  //       //settarafhesab({});
  //     };
  //   },
  //   []
  // );



  const options = [{label: "نا مشخص",value: "0",},{label: "1941-",value: "1941",},{label: "34-",value: "34",},{label: "2546-",value: "2546",},{label: "1-",value: "1",},];



  const handleChange = (e) => {
    console.error('handleChange')
    let th = {...tarafhesab}
    th.id = e.target.value
    settarafhesab(th)
    console.log(th);
    console.log(tarafhesab);
  }

  const salar = () => {
    console.error('salar')
    // let th = {...tarafhesab}
    // th.name = 'jjjjjjjjjjjjjjjjjjjjjjjjj'
    // settarafhesab(th)
    // console.log(th);
    console.log(tarafhesab);
  }


  return (

    <form onSubmit={handleSubmit(onSubmit)}>
       <button onClick={salar}>ddddd</button>
      <input defaultValue={tarafhesab.name} {...register("name")} />
      <input defaultValue={tarafhesab.famil} {...register("famil", { required: true })} />

      <select  value={tarafhesab.id}    onChange={handleChange}  >
        {options.map((option,i) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
     


      {/* <select {...register("id")}>
        <option value="1941">1941_</option>
        <option value="34">34_</option>
        <option value="2546">2546_</option>
      </select> */}

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default Test

