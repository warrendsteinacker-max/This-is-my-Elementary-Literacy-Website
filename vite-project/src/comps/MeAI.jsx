// /////happened when I created env


// import React, { useState } from 'react';

// const MeAI = () => {
//     const [M, setM] = useState('mod1');
//     const [D, setD] = useState('');
//     const [Q, setQ] = useState('');
//     const [L, setL] = useState(false);

//     // Using the environment variable defined in your .env file
//     const BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const submiteToB = async (e) => {
//         e.preventDefault();
//         setL(true);
//         try {
//             const endpointMap = {
//                 'mod1': '1', 'mod2': '2', 'mod3': '3', 
//                 'mod4': '4', 'mod5': '5', 'mod6': '6', 'mod7': '7'
//             };
//             const route = endpointMap[M];

//             // Safety check to ensure the URL is loaded
//             if (!BASE_URL) {
//                 throw new Error("API_BASE_URL is not defined in environment variables.");
//             }

//             const res = await fetch(`${BASE_URL}/api/${route}`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ Q: Q })
//             });
            
//             const result = await res.json();
//             // Handle consistent response patterns from your backend controllers
//             setD(result.d || result.data || "No response received"); 
//         } catch (error) {
//             console.error("Frontend Error:", error.message);
//             setD("Error connecting to server. Please check your network and configuration.");
//         } finally {
//             setL(false);
//         }
//     };

//     if (L) {
//         return (
//             <div style={{ 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 alignItems: 'center', 
//                 height: '400px', 
//                 flexDirection: 'column', 
//                 gap: '15px' 
//             }}>
//                 <img 
//                     src="/loading-spinner.gif" 
//                     alt="Loading..." 
//                     style={{ width: '100px', height: '100px' }} 
//                 />
//             </div>
//         );
//     }

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '40px' }}>
//             <h3 style={{color: 'black'}}>Use the Dropdown Below to Select What Module you Want to Learn About</h3>
//             <select 
//                 className="black-input" 
//                 value={M} 
//                 onChange={(e) => setM(e.target.value)}
//                 style={{ width: '200px' }}
//             >
//                 {['mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6', 'mod7'].map(mod => (
//                     <option key={mod} value={mod}>{mod}</option>
//                 ))}
//             </select>

//             <div style={{ 
//                 width: '800px', 
//                 height: '400px', 
//                 backgroundColor: 'black', 
//                 border: '1px solid #333', 
//                 overflowY: 'auto', 
//                 borderRadius: '10px' 
//             }}>
//                 {D ? (
//                     <pre style={{ 
//                         whiteSpace: 'pre-wrap', 
//                         wordWrap: 'break-word', 
//                         color: 'white', 
//                         padding: '20px', 
//                         fontFamily: 'Avenir' 
//                     }}>
//                         {D}
//                     </pre>
//                 ) : (
//                     <h3 style={{ color: '#666', padding: '20px', textAlign: 'center' }}>
//                         Ask Me Anything About These Assignments
//                     </h3>
//                 )}
//             </div>

//             <form onSubmit={submiteToB} style={{ 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 alignItems: 'flex-end', 
//                 gap: '10px' 
//             }}>
//                 <textarea 
//                     className="black-input"
//                     value={Q} 
//                     placeholder="Type your question..."
//                     onChange={(e) => setQ(e.target.value)} 
//                     style={{ width: '800px', height: '100px' }}
//                 />
//                 <button type='submit' className="black-button">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default MeAI;









import React, { useState } from 'react';

const MeAI = () => {
    const [M, setM] = useState('mod1');
    const [D, setD] = useState('');
    const [Q, setQ] = useState('');
    const [L, setL] = useState(false);

    const BASE_URL = 'https://this-is-my-elementary-literacy-webs.vercel.app';

    const submiteToB = async (e) => {
        e.preventDefault();
        setL(true);
        try {
            const endpointMap = {
                'mod1': '1', 'mod2': '2', 'mod3': '3', 
                'mod4': '4', 'mod5': '5', 'mod6': '6', 'mod7': '7'
            };
            const route = endpointMap[M];

            const res = await fetch(`${BASE_URL}/api/${route}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Q: Q })
            });
            
            const result = await res.json();
            // Unified handling: backend returns {d: ...} or {data: ...}
            setD(result.d || result.data || "No response received"); 
        } catch (error) {
            console.error("Frontend Error:", error.message);
            setD("Error connecting to server. Please ensure the backend is active.");
        } finally {
            setL(false);
        }
    };

    if (L) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', flexDirection: 'column', gap: '15px' }}>
                <img src="/loading-spinner.gif" alt="Loading..." style={{ width: '100px', height: '100px' }} />
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '40px' }}>
            <h3 style={{color: 'black'}}>Use the Dropdown Below to Select What Module you Want to Learn About</h3>
            <select 
                className="black-input" 
                value={M} 
                onChange={(e) => setM(e.target.value)}
                style={{ width: '200px' }}
            >
                {['mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6', 'mod7'].map(mod => (
                    <option key={mod} value={mod}>{mod}</option>
                ))}
            </select>

            <div style={{ width: '800px', height: '400px', backgroundColor: 'black', border: '1px solid #333', overflowY: 'auto', borderRadius: '10px' }}>
                {D ? (
                    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', color: 'white', padding: '20px', fontFamily: 'Avenir' }}>{D}</pre>
                ) : (
                    <h3 style={{ color: '#666', padding: '20px', textAlign: 'center' }}>Ask Me Anything About These Assignments</h3>
                )}
            </div>

            <form onSubmit={submiteToB} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                <textarea 
                    className="black-input"
                    value={Q} 
                    placeholder="Type your question..."
                    onChange={(e) => setQ(e.target.value)} 
                    style={{ width: '800px', height: '100px' }}
                />
                <button type='submit' className="black-button">Submit</button>
            </form>
        </div>
    );
};

export default MeAI;







