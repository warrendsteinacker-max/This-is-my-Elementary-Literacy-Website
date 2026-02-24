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


// import {useState, useReducer} from 'react'

// const todolist = () => {

//   const [data, setD] = useState([])

//   const Istate = {
//       name: '',
//       dep: '',
//       done: false,
//       id: 0 
//   }

//   const reducer = (state, action) => {
//     switch(action.type){
//       case 'name':
//         return {...state, name: action.payload}
//       case 'dep':
//         return {...state, dep: action.payload}
//       case 'resetn':
//         return {...state, id: 0}
//       default:
//         return state
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, Istate)

//   const submitD = (e) => {
//     e.preventDefault()
//     setD((data) => [...data, {...state, id: data.length + 1}])
//     dispatch({type: 'dep', payload: ''})
//     dispatch({type: 'name', payload: ''})
//     dispatch({type: 'resetn'})
//     console.log(data)
//   }

//   const deleteD = (id) => {
//     const newd = data.filter((item) => item.id !== id)
//     setD(newd)
//   }

//   const completT = (id) => {
//     setD(data.map((item) => item.id === id ? {...item, done: !item.done} : item))
//   }

//   return(<>
//         {/* <div style={{display: 'flex', alignItems: 'center', flexdirection: 'column'}}> */}
//         <form onSubmit={submitD} style={{display: 'flex', flexDirection: 'column'}}>
//           <input value={state.dep} onChange={(e) => dispatch({type: 'dep', payload: e.target.value})}/>
//           <input value={state.name} onChange={(e) => dispatch({type: 'name', payload: e.target.value})}/>
//           <button type='submit'>make to do</button>
//         </form>
//         <div style={{position: 'absolute', left: '45%', top: '50%', backgroundColor: 'black'}}>
//         {data.map((item) => <div key={item.id} style={{display: 'flex', alignItems: 'center', flexdirection: 'column', padding: '50px'}}><div style={{backgroundColor: 'red', margin: '50px'}}><h3>{item.name}</h3></div><div style={{backgroundColor: 'blue', margin: '50px'}}><h3>{item.dep}</h3></div><button onClick={() => deleteD(item.id)}>delete</button><button onClick={() => completT(item.id)}>mark</button>{item.done ? <div style={{backgroundColor: 'green', borderRadius: '100%', width: '20px', height: '20px'}}></div> : <div style={{backgroundColor: 'red', borderRadius: '100%', width: '20px', height: '20px'}}></div>}</div>)}
//         </div>
//         {/* </div> */}
//         </>)


// }


// export default todolist


// import {useState, useEffect} from 'react'

// const wordle = () => {

// const [currentg, setG] = useState('')
// const [wordtoG, setWtg] = useState('cat')
// const [wordgD, setWgdisplay] = useState([])
// const [win, setW] = useState(false)


// useEffect((e) => {
//   const wordlef = (e) => {

//     if(e.key.length === 1){
//       const newG = currentg + e.key
//       setG(newG)
//       console.log(currentg)
//       console.log(wordgD)
//     }

//     if(e.key === 'Enter'){
//       if(wordtoG.legnth === currentg.length){
//         setW(true)
//         console.log('win')
//     }};

//     if(e.key === 'Backspace'){
//       setG(currentg.slice(0, -1))
//       setWgdisplay(wordgD.slice(0, -1))
//       console.log(currentg)
//       console.log(wordgD)
//     }

//     if(wordtoG[currentg.length] === newG){
//       // wordgD.unshift(currentg.charAt(Number(currentg.length)))
//       setWgdisplay([...wordgD, newG])
//       console.log(wordgD)
//     }
//   }
//   document.addEventListener('keydown', wordlef)
//   return () => document.removeEventListener('keydown', wordlef)
// })

// if(win){
//   return <h3>you got it</h3>
// }

// return(<>
      
//       {wordgD.map((val, i) => <div key={i}>{val}</div>)}

//       <input/>

//       </>)


// }

// export default wordle






import {useState} from 'react'



// useEffect(() => {

// }, )



const Newp = () => {


const [currentg, setG] = useState('')
const [index, setRw] = useState(0) 
const [words, setWords] = useState(['cat', 'fart', 'mark'])
const wordtoG = words[index]
const L = wordtoG.split('')
const s = L.length
const [spaces, setP] = useState(Array(s).fill('')) 
const [wordgD, setWgdisplay] = useState([])
const [win, setW] = useState(false)




    const wordlef = (e) => {
    // e.preventDefault()
    const Tcar = e.key.toLowerCase()  
    const newG = currentg + Tcar

    if(e.key.length === 1){
      setG(newG)
      console.log(newG)
      if(wordtoG[currentg.length] === Tcar){
      // wordgD.unshift(currentg.charAt(Number(currentg.length)))
      console.log('word display')
      setWgdisplay([...wordgD, Tcar])
      console.log(wordgD)
    }
    }

    if(e.key === 'Enter'){
      if(wordtoG.length === currentg.length){
        setW(true)
        console.log('win')
    }};

    if(e.key === 'Backspace'){
      setG(currentg.slice(0, -1))
      setWgdisplay(wordgD.slice(0, -1))
      console.log(currentg)
      console.log(wordgD)
    }

  }

  if(win){
    return <><h3>you won</h3><button onClick={() => {setRw(Math.floor(Math.random() * 3)); setW(false); setG('')}}>Play Again</button></>
  }

  
  return(<>
        <div style={{display: 'flex', margin: '0px', border: '5px solid black', width: 'fit-content'}}>
        {spaces.map((_, i) => <div key={i} style={{border: '5px solid black', width: '200px', height: '200px', backgroundColor: wordgD[i] ? 'green':'red'}}>{wordgD[i]}</div>)}
        </div>
        <form onSubmit={() => {console.log('hello')}}>
          <input onKeyDown={wordlef}/>
        </form>

        </>)
}


export default Newp


