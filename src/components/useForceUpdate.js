import React from 'react'
function useForceUpdate(){
    const [value, setValue] = React.useState(0)
    console.log('hello world')
    return () => setValue(value => ++value)
}
export default useForceUpdate