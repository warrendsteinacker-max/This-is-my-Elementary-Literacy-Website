// // import React from 'react

// // const Demo = () => {
// //   return (
// //     <div 
// //       style={{
// //         height: '100vh', 
// //         width: '100vw', 
// //         backgroundColor: 'whitesmoke', 
// //         position: 'relative', // Fixed spelling
// //         overflow: 'hidden'    // Prevents scrollbars if the dot hits the edge
// //       }}
// //     >
// //       {/* This is your moving dot */}
// //       <div className="sin"></div>

// //       {/* Optional: Add a subtle path line or text */}
// //       <div style={{
// //         position: 'absolute', 
// //         top: '50%', 
// //         width: '100%', 
// //         textAlign: 'center', 
// //         color: '#ccc',
// //         zIndex: 0
// //       }}>
// //         <h2>Wave Loading...</h2>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Demo




// import {useState} from 'react'

// const Demo = () => {

//   const [N, setN] = useState(1)

//     // const getdata = async() => {
//     //       try{
//     //         const newN = N + 1
//     //         setN(newN)
//     //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${N}`)

//     //         if(!res.ok){
//     //           throw new Error('fetch failed')
//     //         }

//     //         const data = await res.json()
//     //         console.log(data)
//     //       }
//     //       catch(error){
//     //         console.error(error.message)
//     //       }
//     // }


//     const getdata = () => {
//       fetch(`https://jsonplaceholder.typicode.com/posts/${N}`).then((res) => {return res.json()}).then((data) => console.log(data)).then(()=> setN(N+1)).catch((error) => console.error(error.message))
//     }




//   return(<>

//     <button onClick={getdata}>get post</button>

//   </>)
// }

// export default Demo



////////////


import {useState} from 'react'

const TiktacG = () => {

  const [squares, setS] = useState(Array(9).fill(null))

  const winner = [[1,2,3],[4,5,6],[7,8,9],[3,6,9],[2,5,8],[1,4,7],[1,5,9],[3,5,7]].find([a,b,c] = squares[a] && squares[b] === squares[b] && squares[c] === squares[c])

  const playclick = (i) => {

    const newSquares = squares.slice()
  } 

  return(<>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', border: '5px solid black', width: '1000px', height: '1000px'}}>
          {squares.map((val, i)=><div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '5px solid black'}} key={i}>{val}</div>)}
        </div>
        <button onClick={}>Start New Game</button>
        </>)
}

export default TiktacG