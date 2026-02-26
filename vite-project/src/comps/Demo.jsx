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






// import {useState} from 'react'



// // useEffect(() => {

// // }, )



// const Newp = () => {


// const [currentg, setG] = useState('')
// const [index, setRw] = useState(0) 
// const [words, setWords] = useState(['cat', 'fart', 'mark'])
// const wordtoG = words[index]
// const s = wordtoG.length
// const [spaces, setP] = useState(Array(Number(s)).fill('')) 
// const [wordgD, setWgdisplay] = useState([])

// const [index, setRw] = useState(0)
// const [win, setW] = useState(false)




//     const wordlef = (e) => {
//     // e.preventDefault()
//     const Tcar = e.key.toLowerCase()  
//     const newG = currentg + Tcar

//     if(e.key.length === 1){
//       setG(newG)
//       console.log(newG)
//       if(wordtoG[currentg.length] === Tcar){
//       // wordgD.unshift(currentg.charAt(Number(currentg.length)))
//       console.log('word display')
//       setWgdisplay([...wordgD, Tcar])
//       console.log(wordgD)
//     }
//     }

//     if(e.key === 'Enter'){
//       if(wordtoG.length === currentg.length){
//         setW(true)
//         console.log('win')
//     }};

//     if(e.key === 'Backspace'){
//       setG(currentg.slice(0, -1))
//       setWgdisplay(wordgD.slice(0, -1))
//       console.log(currentg)
//       console.log(wordgD)
//     }

//   }

//   if(win){
//     return <><h3>you won</h3><button onClick={() => {setRw(Math.floor(Math.random() * 3)); setW(false); setG('')}}>Play Again</button></>
//   }

  
//   return(<>
//         <div style={{display: 'flex', margin: '0px', border: '5px solid black', width: 'fit-content'}}>
//         {spaces.map((_, i) => <div key={i} style={{border: '5px solid black', width: '200px', height: '200px', backgroundColor: wordgD[i] ? 'green':'red'}}>{wordgD[i]}</div>)}
//         </div>
//         <form onSubmit={() => {console.log('hello')}}>
//           <input onKeyDown={wordlef}/>
//         </form>

//         </>)
// }


// export default Newp



// import {useEffect, useState} from 'react'



// const newP = () => {


// const words = ['cat', 'fat', 'man', 'dart']
// const [currentG, setCg] = useState([])
// const [win, setW] = useState(false)
// const [count, setC] = useState(0)
// const word = words.at(count)
// const display = Array(word.length).fill('')




// useEffect(()=>{
//   const wordlef = (e) => {
//     const key = e.key.toLowerCase()
//     const keyL = key.length
//     const display = Array(word.length).fill('')
//     const CgL = currentG.length
//     if(keyL === 1){
//       if(key === word[CgL]){
//         if(currentG.length + 1 === word.length){
//           setW(true)
//           return
//         }
//         setCg((currentG)=>[...currentG, e.key])
//         console.log(currentG)
//       }
//     }
//   }

//   document.addEventListener('keydown', wordlef)

//   return () => {document.removeEventListener('keydown', wordlef)}
// }, [currentG, win, word])

// if(win){
//   return <><h3>you won</h3><button onClick={()=>{setCg([]); setW(false); setC((count) => count + 1)}}>start new game</button></>
// }

// return(<>{display.map((_, i) => <div style={{border: '5px solid black'}} key={i}>{currentG[i] || ''}</div>)}</>)

// }

// // , [wordToG], [currentG], [win]




// import {useState, useEffect} from 'react'

// const displayFD = () => {

// const [data, setD] = useState([])
// const [L, setL] = useState(false)
// const [E, setE] = useState(false)
// const [search, setS] = useState('')

// const searchedV = data.filter((item) => item?.name?.toLowerCase().includes(search.toLowerCase()))

//   useEffect(() => {
    
//     const f = async() => {
//       try{
//         setL(true)
//         const res = await fetch('api_url')    
//         if(!res.ok){
//           throw new Error('fetch failed')    
//         }
//         const data = await res.json()
//         setD(data)
//         setE(false)
//       }
//       catch(error){
//         console.error(error.message)
//         setE(true)
//       }
//       finally{
//         setL(false)
//       }
//     }

//     f()

//   }, [])

//   const debounce = (fn, t) => {
//   let timer;

//   return (...args) => {
    
//     clearTimeout(timer)

//     timer = setTimeout(=>{
//         fn(...args)
//     }, t)

//   }

// } 

// // const onC = debounce((e) => {
// //   setS(e.target.value)
// // }, 1000)

// const handler = useMemo(() => {
//   return debounce() => {
//   setS(e.target.value)
// }, 1000), []);


//   if(L){
//     return <h3>...Loading</h3>
//   }

//   return(<>
  
//       {E && <h3>error happened refresh page</h3>}

//       {data.map((item, i)=><div key={i}><p>{item.dep}</p></div>)}
      
//       {searchedV.length > 0 && searchedV.map((item, i) => <div key={i}>{item.name}</div>)} 

//       <input placeholder='search' value={search} onChange={handler}/>   
      
      
//         </>)

// }




// const throttel = (fn, t) => {

//   let timer = false

//   return (...args) => {
//     if(timer) {return null}
  
//     timer = true

//     fn(...args)

//     setTimeout(() => {
//       timer = false
//     }, t)

//   }

// }


// const db = (fn, t) => {
//   let timer;

//   return (...args) => {

//     clearTimeout(timer)

//     timer = setTimeout(() => {
//       fn(...args)
//     }, t)
//   }
// } 











// const debounce = (fn, t) => {
//   let timer;

//   return (...args) => {
    
//     clearTimeout(timer)

//     timer = setTimeout(=>{
//         fn(...args)
//     }, t)

//   }

// } 










// import {useEffect, useMemo, useState} from 'react'


//   const Th = (fn, t) => {
//     let wait = false;

//     return (...args) => {
      
//       if(wait){return null}

//       wait = true

//       fn(...args);

//       setTimeout(()=>{
//         wait = false;  
//       }, t)

//     }

//   } 

// const IF = () => {


// const [D, setD] = useState([])
// const [L, setL] = useState(false)
// const [E, setE] = useState(false)
// const [offset, setOff] = useState(0)
// const limit = 10


// const FetchMoreI = useCallback(async() => {

//   try{

//     setL(true)
//     const res = await fetch(`api_url?limit=${limit}&offset=${offset}`)
//     const data = await res.json()

//     if(!res.ok){
//       throw new Error('could not fetch data')
//     }

//     if(data.length > 0){
//       setD((D) => [...D, ...data])
//       setOff((offset) => offset + limit)
//     }


//   }
//   catch(error){
//     console.error(error.message)
//     setE(true)
//   }
//   finally{
//     setL(false)
//   }

// }, [offset, L])


// // const THf = Th(() => {

// //   const {scrollTop, scrollHeigth, clientHeight} = document.documentElement
  
// //   if(scrollTop + clientHeight >= scrollHeight - 50){
// //     FetchMoreI()
// //   }

// // }, 3000)

//   const THfm = useMemo(Th(() => {

//     const {scrollTop, scrollHeight, clientHeight} = document.documentElement

//     if(scrollTop + clientHeight >= scrollHeight - 50){
//       FetchMoreI()
//     }

//   }, 3000), [FetchMoreI])


//     useEffect(() => {

//     window.addEventListener('scroll', THfm)

//     FetchMoreI()

//     return () => window.removeEventListner('scroll', THfm)

//   }, [THfm])






//   return(<>
//           {D.map((item) => <div key={item.id}>{item.name}</div>)}
//         </>)
// }




// import {useState, useEffect} from 'react'

// const words = ['cat', 'dog', 'man']

// const Wordle = () => {

//   const [win, setW] = useState(false)
//   const [index, setI] = useState(0)
//   const [CG, setCG] = useState([])
//   const word = words.at(index)
//   const display = Array(word.length).fill('')



//   useEffect(() => {

//     const f = (e) => {

//       if(e.key.length === 1 && e.key === word.charAt(CG.length)){
//         setCG((CG) => [...CG, e.key])
//       }

//       // if(e.key.length === 1 && e.key === word.charAt(CG.length + 1)){
//       //   setCG((CG) => [...CG, e.key])
//       // }

//       if(e.key === 'Backspace'){
//         setCG((CG) => CG.slice(0, -1))
//       }

//       if(CG.length === word.length && e.key === 'Enter'){
//         setW(true)
//         }
//     }


//     window.addEventListener('keydown', f)

//     return () => window.removeEventListener('keydown', f)
//   }, [CG, win, word])



//   if(win){
//     return <><h3>you won</h3><button onClick={() => {setW(false); setCG([]); setI(Math.floor(Math.random() * 3))}}>start new game</button></>
//   }

//   return(<>
//         <h3>press enter when you got the word</h3>
//         {word.length > 0 && display.map((_, i)=> <div key={i} style={{backgroundColor: CG[i] ? 'green' : 'red'}}>{CG[i] || ''}</div>)}
//         </>)
// }


// const Tiktac = () => {

//   const [T, setT] = useState(false)


//   const [display, setD] = useState(Array(9).fill(null))

//   const winner = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]].find(([a,b,c]) => display[a] && display[a] ===  display[b] &&  display[a] ===  display[c])


//   const handleclick = (i) => {
//     const newD = display.slice()

//     if(T){
//       if(newD[i]){
//         return null
//       }
//       newD[i] = 'X'
//       setD(newD)
//       setT(false)
//     }
//     else{
//       if(newD[i]){
//         return null
//       }
//       newD[i] = 'O'
//       setD(newD)
//       setT(true)
//     }

//   }

//   if(winner){
//     return <button onClick={() => setD(Array(9).fill(null))}>{T ? 'x won start new game' : 'o won start new game'}</button>
//   }

//   return(<>
//           <div style={{border: '5px solid black', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', width: 'fit-content', display: 'grid'}}>
//           {display.map((item, i) => <div key={i} style={{border: '5px solid black'}} onClick={() => handleclick(i)}>{item}</div>)}
//           </div>
//         </>)
// }

// file one

// import {throttelf} from './throttelf'

// const Newc = () => {

//   const fetchd = async(offset, limit) => {

//     const res = await fetch(`api_url?offset=${offset}&limit=${limit}`)

//     if(!res.ok){
//       throw new Error('res not good')
//     }

//     return res.json()
//   }

//   const {data, error, loading, hasData} = throttelf(fetchd, 10)

//   if(loading){
//     return <h3>...loading</h3>
//   }

//   return(<>

//           {error && <h3>error happened</h3>}
//           {hasData && <h3>no more items</h3>}
//           {data.map((item) => <div key={item.id}>{item.name}</div>)}

//         </>)

// }



// // file two

// import {useEffect, useState, useCallback, useMemo} from 'react'

// const Th = (fn, t) => {
//   let timer = false

//   return (...args) =>{

//     if(timer){
//       return null
//     }
//     fn(...args)

//     timer = true

//     setTimeout(() => {
//       timer = false
//     }, t)
    
//   }
// }

// const Throttelf = (callback, limit = 10) => {

//   const [offset, setOff] = useState(5)
//   const [data, setD] = useState([])
//   const [error, setE] = useState(false)
//   const [loading, setL] = useState(false)
//   const [hasData, setH] = useState(true)

// useEffect(()=> {
//       const f = async(offset, limit) => {  
//         const D = await callback(offset, limit)
//         setD((data) => [...data, ...D])
       
//   }

//   f(offset, limit)
// }, []) 

//   const getD = useCallback(async() => {
//     if(loading || !hasData){
//       return null
//     }

//     setL(true)

//     try{
//       const D = await callback(offset, limit)

//       if(D.length === 0){
//         setH(false)
//       }
//       setD((data) => [...data, ...D])
//       setOff((offset) => offset + 5)
//     }
//     catch(error){
//       console.error(error.message)
//       setE(true)
//     }
//     finally{
//       setL(false)
//     }
//   }, [hasData, loading, offset, callback])


//     const getDT = useMemo(() => {return Th(() => {
//       const {scrollTop, clientHeight, scrollHeight} = document.documentElement

//       if(scrollTop + clientHeight >= scrollHeight - 300){
//         getD()
//       }

//     }, 3000)}, [getD])
  
//   useEffect(() => {

//     document.addEventListener('scroll', getDT)

//     return () => document.removeEventListener('scroll', getDT)
//   }, [getDT])


//   return {data, error, loading, hasData}
// }








import {useEffect, useState} from 'react'

// const throttel = (fn, t) => {
//   let time = false


//   return (...args) => {
//     if(timer){
//       return null
//     }

//     timer = true

//     fn(...args)

//     setTimeout(()=>{
//       timer = false
//     })
//   }
// }

//   const callback = async(x, y) => {
//     try{
//       const res = await fetch(`https://dummyjson.com/products?skip=${x}&limit=${y}`)
      
//       return res.json()
//     }
//     catch(error){
//       console.error(error.message)
//     }
//   }

const De = (offset, limit = 10) => {

  // const [moreD, setMd] = useState(true)
  const [D, setD] = useState([])
  const [E, setE] = useState(false)
  const [L, setL] = useState(false)

  // const callback = async(x, y) => {
  //   try{
  //     const res = await fetch(`https://dummyjson.com/products?skip=${x}&limit=${y}`)
      
  //     return res.json()
  //   }
  //   catch(error){
  //     console.error(error.message)
  //   }
  // }

  useEffect(() => {
    const f = async() => {
      try{
          const res = await fetch(`https://dummyjson.com/products?skip=${offset}&limit=${limit}`)
          const data = await res.json()
          setD((D) => [...data, ...D])
          setE(false)
        }
        catch(error){
          console.error(error.message)
          setE(true)
        }
        finally{
          setL(false)
        }
    }
    f()
  }, [offset])


  return{D, E, L}

} 




const Del = () => {

  const [offset, setF] = useState(0)
  const {D, E, L} = De(offset)


  if(L){
    return <h3>Loading...</h3>
  }
  return(<>
          {E && <h3>there has been a error</h3>}
          {D.map((item)=><div key={i}>{item.name}</div>)}
          <button onClick={(pre) => setF(pre+5)}>fetch D</button>
        </>)
}

export default Del






