import React from 'react'

const NormalDropDown = React.forwardRef(({ onChange, onBlur, name ,dataSource,className}, ref) => (
    <>
      <select className={className} name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        {
          dataSource.map((item) =>
            <option key={item.id} value={item.id} >{item.value}</option>
          )
        }
      </select>
    </>
  ));

  export default NormalDropDown