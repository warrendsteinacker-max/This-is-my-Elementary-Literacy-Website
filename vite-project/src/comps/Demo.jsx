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
  const [T, setT] = useState(true)
  const [C, setC] = useState(0)
  const [E, setE] = useState(false)
  const [landingP, setP] = useState(true)

const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Use .find() to see if any line has the same non-null value
const winningLine = lines.find(([a, b, c]) => 
  squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
);

const winner = winningLine ? squares[winningLine[0]] : null;

  const playclick = (i) => {

    const newSquares = squares.slice()

    if(T){
      if(newSquares[i]){
        setE(true)
      }
    newSquares[i] = 'X'
    setS(newSquares)
    setT(!T)
    setC((C) => C + 1)
    setE(false)
    }
    else{
      if(newSquares[i]){
        setE(true)
      }
    newSquares[i] = 'O'
    setS(newSquares)
    setT(!T)
    setC((C) => C + 1)
    setE(false)
    }
  } 

  if(winner){
    setP(false)
    return T ? <button onClick={() => { setP(true); setS(Array(9).fill(null)) }}>X Won Start New Game</button>:<button onClick={() => setS(Array(9).fill(null))}>O Won Start New Game</button> 
  }

  if(C === 9){
    setP(false)
    return <button onClick={() => {setP(true); setS(Array(9).fill(null))}}>There Was a Draw Start New Game</button>
  }

  if(landingP){
  return(<>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', border: '5px solid black', width: '1000px', height: '1000px'}}>
          {squares.map((val, i)=><div onClick={() => playclick(i)} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '5px solid black', color: 'black'}} key={i}>{val}</div>)}
        </div>
        <button onClick={() => setS(Array(9).fill(null))}>Start New Game</button>
        {E ? <h3>Can not mark were there is already one try again</h3> : <h3>Dont mark were there are marks</h3>}
        </>)
  }
}

export default TiktacG