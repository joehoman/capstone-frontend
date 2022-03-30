import React from 'react';
import { useState, useEffect } from 'react';
import UserLists from '../components/UserLists.js'


export default function () {

    const [userInfo, setUserInfo] =useState(JSON.parse(localStorage.getItem("userInfo")))
    // const [users]
    const [page, setPage] = useState('')

//     if (page){

//         if (page === "Unasssigned"){
//             return(
//             <>
//             <p>
//                 <label>Guardian Status Lists:</label>
//                     <select name="page" id="page" onChange={(e) => setPage(e.target.value)}>
//                         <option value="">Please choose a List</option>
//                         <option value="Unassigned">Unassigned</option>
//                         <option value="Inbound">Inbound</option>
//                         <option value="Sponsor">Sponsor</option>
//                     </select>
//             </p>

//             </>
//             )}

//     if (page === "Unasssigned"){
//         return (
//         <>
//         <p>
//             <label>Guardian Status Lists:</label>
//                 <select name="page" id="page" onChange={(e) => setPage(e.target.value)}>
//                     <option value="">Please choose a List</option>
//                     <option value="Unassigned">Unassigned</option>
//                     <option value="Inbound">Inbound</option>
//                     <option value="Sponsor">Sponsor</option>
//                 </select>
//         </p>

//         </>
//         )}
//         if (page === "Sponsors"){
//         return (
//         <>
//         <p>
//             <label>Guardian Status Lists:</label>
//                 <select name="page" id="page" onChange={(e) => setPage(e.target.value)}>
//                     <option value="">Please choose a List</option>
//                     <option value="Unassigned">Unassigned</option>
//                     <option value="Inbound">Inbound</option>
//                     <option value="Sponsor">Sponsor</option>
//                 </select>
//         </p>

//         </>
//         )}
// }
// }