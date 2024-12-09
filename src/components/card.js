import prodata from './prodata.json'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { MdStar } from "react-icons/md";
import Card from 'react-bootstrap/Card';
function Cards(){
    console.log(prodata)
    const[product]= useState(prodata)
    return(
        <div>
            {product.map((product)=>( 
                <div className='container'>
                    <div className='row d-flex'  >
                    <div className='col '>
                    <Card style={{ width: '16rem',height:"36rem" }} className='d-flex '>
                        
                        <Card.Img variant="top" src={product.img} style={{width:"16rem", height:"340px"}} className='cardimage' /> 
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>Count:{product.count} </Card.Text>
                            <Card.Text>Average:{product.average} </Card.Text>
                            <Card.Text>Rating:{product.rating} <MdStar className='star'/> </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Cards

















// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {Link} from 'react-router-dom'
// import { FaStar } from "react-icons/fa";
// import { useEffect, useState } from 'react';

// function Cards(){
//     const[data,setdate]= useState()
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//         .then(res=>res.json())
//         .then(ans=>setdate(ans))
//         .catch(erre=>console.log(erre))
//     },[])
//     return (
//     <div>
//     {data? (<ul>{data.map((item)=>(<div key={item.id}>
//         <Card style={{ width: '20rem' }}>
//         {/* <Card.Img variant="top" src={item.image}  className='cardimage'/> */}
//         <Card.Body>
//             <Card.Title>{item.name}</Card.Title>
//             {/* <Card.Text >
//             {item.overview}
//             </Card.Text > */}
//             <div className='d-flex justify-content-between align-items-center'>
//             <Link to={'TopRated/movies'}  ><Button variant="primary">Raed more</Button></Link>
//             {/* <small>
//                 <span > <FaStar className=' text-warning ' />7.25|250 review</span>
//             </small> */}
//             </div>
//         </Card.Body>
//     </Card>
//     </div>))}</ul>):(<p>Loading</p>)}
//     </div>
// )
// }

// export default Cards
