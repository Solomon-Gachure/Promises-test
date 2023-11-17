import React from 'react'

const Promises = () => {

    const p=new Promise ((resolve,reject)=>{
        const a= 2+1
        if (a==2){
            resolve('Success')
        } else{
            reject('Failed')
        }
    })
    p.then((message)=>{
        console.log('This is true' + message)
    })
    .catch((message)=>{
        console.log('This is false' + message)
    })
  return (
    <div>
        
    </div>
  )
}

export default Promises