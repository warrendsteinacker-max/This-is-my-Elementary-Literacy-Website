// import React, {useState} from 'react'


// const MeAI = () => {

//     const [M, setM] = useState('')
//     const [D, setD] = useState('')
//     const [Q, setQ] = useState('')
//     const [L, setL] = useState(false)


// ////////change everything else to data.d as well
//     const submiteToB = async(e) => {
//         e.preventDefault()
//         try{
//             setL(true)
//             if(M === 'mod1'){
//             const res = await fetch('http://localhost:3002/1', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({Q: Q})})
//             const data = await res.json()
//             setD(data.d)
//             }
//             if(M === 'mod2'){
//             const res = await fetch('http://localhost:3002/2', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({Q: Q})})
//             const data = await res.json()
//             setD(data)
//             }
//             if(M === 'mod3'){
//             const res = await fetch('http://localhost:3002/3', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({Q: Q})})
//             const data = await res.json()
//             setD(data)
//             }
//             if(M === 'mod4'){
//             const res = await fetch('http://localhost:3002/4', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({Q: Q})})
//             const data = await res.json()
//             setD(data)
//             }
//             if(M === 'mod5'){
//             const res = await fetch('http://localhost:3002/5', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({Q: Q})})
//             const data = await res.json()
//             setD(data)
//             }
//             if(M === 'mod6'){
//             const res = await fetch('http://localhost:3002/6', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({Q: Q})})
//             const data = await res.json()
//             setD(data)
//             }
//             if(M === 'mod7'){
//             const res = await fetch('http://localhost:3002/7', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({Q: Q})})
//             const data = await res.json()
//             setD(data)
//             }
//             if(M === 'mod8'){
//             const res = await fetch('http://localhost:3002/8', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({Q: Q})})
//             const data = await res.json()
//             setD(data)
//             }
//             if(M === 'mod'){
//             const res = await fetch('http://localhost:3002/9', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({Q: Q})})
//             const data = await res.json()
//             setD(data)
//             }
//         }
//         catch(error){
//             console.error(error.message)
//         }
//         finally{
//             setL(false)
//         }
//     }

//     if(L){
//         return <h3 style={{color: 'white'}}>Loading...</h3>
//     }

//   return (
//     <div styles={{display: 'flex', flexDirection: 'column', color: 'white'}}>
//         <div style={{postion: 'absolute', top: '5%', left: '2%'}}>
//         <select>
//             <option onChange={(e) => setM(e.target.value)} value='mod1'>mod1</option>
//             <option onChange={(e) => setM(e.target.value)} value='mod2'>mod2</option>
//             <option onChange={(e) => setM(e.target.value)} value='mod3'>mod3</option>
//             <option onChange={(e) => setM(e.target.value)} value='mod4'>mod4</option>
//             <option onChange={(e) => setM(e.target.value)} value='mod5'>mod5</option>
//             <option onChange={(e) => setM(e.target.value)} value='mod6'>mod6</option>
//             <option onChange={(e) => setM(e.target.value)} value='mod7'>mod7</option>
//             <option onChange={(e) => setM(e.target.value)} value='mod8'>mod8</option>
//             <option onChange={(e) => setM(e.target.value)} value='mod'>Summary of all assigments</option>
//         </select>
//         </div>
//             {D.length > 0 ? <div style={{width: '500px', height: '500px', backgroundColor: 'black'}}><p style={{color: 'white'}}>{D}</p></div>:<h3 style={{color: 'white'}}>Ask Me Anything about These Assigments</h3>}
//         <form onSubmit={submiteToB}>
//             <textarea value={Q} onChange={(e)=>setQ(e.target.value)}></textarea>
//             <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default MeAI




import React, { useState } from 'react';

const MeAI = () => {
    const [M, setM] = useState('mod1'); // Default to mod1
    const [D, setD] = useState('');
    const [Q, setQ] = useState('');
    const [L, setL] = useState(false);

    const submiteToB = async (e) => {
        e.preventDefault();
        setL(true);
        
        try {
            // Map 'mod' names to your endpoint numbers
            const endpointMap = {
                'mod1': '1', 'mod2': '2', 'mod3': '3', 
                'mod4': '4', 'mod5': '5', 'mod6': '6', 
                'mod7': '7', 'mod8': '8', 'mod': '9'
            };

            const route = endpointMap[M];
            
            const res = await fetch(`http://localhost:3002/${route}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Q: Q })
            });

            const data = await res.json();
            
            // Consistent data receiving: use data.d or fallback to data
            setD(data.d || data); 
            
        } catch (error) {
            console.error("Frontend Error:", error.message);
        } finally {
            setL(false);
        }
    };

    if (L) return <h3 style={{ color: 'white' }}>Loading...</h3>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', color: 'white', appearance: 'none', outline: 'none' }}>
            <div style={{ position: 'absolute', top: '5%', left: '2%' }}>
                <select value={M} onChange={(e) => setM(e.target.value)}>
                    <option value='mod1'>mod1</option>
                    <option value='mod2'>mod2</option>
                    <option value='mod3'>mod3</option>
                    <option value='mod4'>mod4</option>
                    <option value='mod5'>mod5</option>
                    <option value='mod6'>mod6</option>
                    <option value='mod7'>mod7</option>
                    <option value='mod8'>mod8</option>
                    <option value='mod'>Summary of all assignments</option>
                </select>
            </div>

            {D ? (
                <div style={{ width: '500px', height: '500px', backgroundColor: 'black', overflowY: 'auto' }}>
                    <p style={{ color: 'white', padding: '10px' }}>{D}</p>
                </div>
            ) : (
                <h3 style={{ color: 'white' }}>Ask Me Anything about These Assignments For the Selected Module</h3>
            )}

            <form onSubmit={submiteToB}>
                <textarea value={Q} onChange={(e) => setQ(e.target.value)} />
                <button type='submit' style={{marginLeft: '20px', marginBottom: '20px'}}>Submit</button>
            </form>
            <h3>hello</h3>
        </div>
    );
};

export default MeAI;