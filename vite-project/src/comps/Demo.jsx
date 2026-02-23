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


// import {useState} from 'react'

// const TiktacG = () => {

//   const [squares, setS] = useState(Array(9).fill(null))
//   const [T, setT] = useState(true)
//   const [C, setC] = useState(0)
//   const [Won, setW] = useState(Boolean)

// const lines = [
//   [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//   [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
//   [0, 4, 8], [2, 4, 6]             // Diagonals
// ];

// // Use .find() to see if any line has the same non-null value
// const winner = lines.find(([a, b, c]) => 
//   squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
// );

// // const winner = winningLine ? squares[winningLine[0]] : null;

//   const playclick = (i) => {

//     const newSquares = squares.slice()

//     if(T){
//       if(newSquares[i]){
//         return null
//       }
//     newSquares[i] = 'X'
//     setS(newSquares)
//     setT(!T)
//     setC((C) => C + 1)
//     setW(true)
//     }
//     else{
//       if(newSquares[i]){
//         return null
//       }
//       else{
//             newSquares[i] = 'O'
//             setS(newSquares)
//             setT(!T)
//             setC((C) => C + 1)
//             setW(false)
//       }
//     }
//   } 


//   if(C === 9){
//     return <button onClick={() => {setS(Array(9).fill(null)); setC(0)}}>There Was a Draw Start New Game</button>
//   }

//   if(winner){
//     return <button onClick={() => {setS(Array(9).fill(null)); setC(0)}}>{Won ? 'X Won Start New Game' : 'O Won Start New Game'}</button>
//   }


//   return(<>
//         <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', border: '5px solid black', width: '1000px', height: '1000px'}}>
//           {squares.map((val, i)=><div onClick={() => playclick(i)} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '5px solid black', color: 'black'}} key={i}>{val}</div>)}
//         </div>
//         <button onClick={() => setS(Array(9).fill(null))}>Start New Game</button>
//         </>)

// }

// export default TiktacG






// import {useState} from 'react'

// const seacrchB = () => {

//     const data = [{name: 'warren', dep: 'is doc', id: 1}, {name: 'stein', dep: 'is clerk', id: 2}, {name: 'steinacker', dep: 'is me', id: 3}]

  
//   const [searched, setS] = useState('')

//     const filltered = data.filter((item) => item.name.toLowerCase().includes(searched.toLowerCase()))

//   return(<>
//         <input placeholder='search somthing' onChange={(e) => setS(e.target.value)}/>
//         {filltered.map((item) => <div key={item.id} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}><h3>{item.name}</h3><p>{item.dep}</p></div>)}
//         </>)
// }

// export default seacrchB


import {useState, useReducer} from 'react'

const todolist = () => {

  const [data, setD] = useState([])

  const Istate = {
      name: '',
      dep: '',
      done: false,
      id: 0 
  }

  const reducer = (state, action) => {
    switch(action.type){
      case 'name':
        return {...state, name: action.payload}
      case 'dep':
        return {...state, dep: action.payload}
      case 'resetn':
        return {...state, id: 0}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, Istate)

  const submitD = (e) => {
    e.preventDefault()
    setD((data) => [...data, {...state, id: state.length + 1}])
    dispatch({type: 'dep', payload: ''})
    dispatch({type: 'name', payload: ''})
    dispatch({type: 'resetn'})
    console.log(data)
  }

  const deleteD = (id) => {
    const newd = data.filter((item) => item.id !== id)
    setD(newd)
  }

  // const completT = (e) => {
  //   const item = data.find((i) => i.id === id)
  //   item.done = !item.done
  // }

  return(<>
        <form onSubmit={submitD} style={{display: 'flex', flexDirection: 'column'}}>
          <input onChange={(e) => dispatch({type: 'dep', payload: e.target.value})}/>
          <input onChange={(e) => dispatch({type: 'name', payload: e.target.value})}/>
          <button type='submit'>make to do</button>
        </form>
        {data.map((item) => <div key={item.id} style={{display: 'flex', alignItems: 'center', flexdirection: 'column'}}><h3>{item.name}</h3><h3>{item.dep}</h3><button onClick={() => deleteD(item.id)}>delete</button></div>)}
        </>)


}


export default todolist