import React from 'react'

const Secontrial = () => {
const p= new Promise ((resolve,reject)=>{
    const a = 1+1
    if(a==2){
        resolve('Great work')
    } else{
        reject('Try again')
    }
})
 p.then((message)=>{
    console.log('This is truly ' + message)
 })
 .catch((message)=>{console.log('Sorry but you can ' + '' + message)})



  return (
    <div>Secontrial</div>
  )
}

export default Secontrial