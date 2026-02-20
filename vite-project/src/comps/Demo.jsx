// import React from 'react'

// const Demo = () => {
//   return (
//     <div 
//       style={{
//         height: '100vh', 
//         width: '100vw', 
//         backgroundColor: 'whitesmoke', 
//         position: 'relative', // Fixed spelling
//         overflow: 'hidden'    // Prevents scrollbars if the dot hits the edge
//       }}
//     >
//       {/* This is your moving dot */}
//       <div className="sin"></div>

//       {/* Optional: Add a subtle path line or text */}
//       <div style={{
//         position: 'absolute', 
//         top: '50%', 
//         width: '100%', 
//         textAlign: 'center', 
//         color: '#ccc',
//         zIndex: 0
//       }}>
//         <h2>Wave Loading...</h2>
//       </div>
//     </div>
//   )
// }

// export default Demo




import {useState} from 'react'

const Demo = () => {

  const [N, setN] = useState(0)

    const getdata = async() => {
          try{
            const newN = N + 1
            console.log(newN)
            setN(newN)
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${N}`)

            if(!res.ok){
              throw new Error('fetch failed')
            }

            const data = await res.json()
            console.log(data)
          }
          catch(error){
            console.error(error.message)
          }
    }

  return(<>

    <button onClick={getdata}>get post</button>

  </>)
}

export default Demo



////////////