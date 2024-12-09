
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from "../components/card"
import prodata from '../components/prodata.json'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { MdStar } from "react-icons/md";
import Card from 'react-bootstrap/Card';

function Movielist({title}){
    
    const navigate=useNavigate();
    console.log(prodata)
    const[product]= useState(prodata)
    const navi= useNavigate()
    return(
        <div>
            <main className="container-fluid">
                {title == "Home Page" ? (
                    <div className="bg-body-tertiary p-4 border mb-5 mt-3">
                        <h3 className="text-warning">Welcome to Movie Mart</h3>
                        <p className="lead">Discover movies you'll love with quick search - your guide to finding great flims</p>
                        <button className="btn btn-info" onClick={()=>{navigate("Popular/movies")}}> Explore Now</button>
                    </div>
                ):""}
                <h5 style={{color:'red', marginTop:'1px', marginBottom:'1px'}}>{title}</h5>
                <div className="row   ">
                    <div className='col '>
                    {product ? (<ul className='movielistcard row-cols-lg-3 row-cols-md-2 row-cols-sm-1 '>{product.map((item)=>(<div key={item.id}>
                        <Card style={{ width: '16rem',height:"36rem" }} className='ms-5 mt-3 '>
                        
                        <Card.Img variant="top" src={item.img} style={{width:"16rem", height:"340px"}} className='cardimage' /> 
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>Count:{item.count} </Card.Text>
                            <Card.Text>Average:{item.average} </Card.Text>
                            <Card.Text>Rating:{item.rating} <MdStar className='star'/> </Card.Text>
                            <Button variant="primary" onClick={()=>navi("view-movies")}>View</Button>
                        </Card.Body>
                    </Card>
                    </div>))}</ul>):(<p>Loading</p>)}
                    </div>
                </div>
            </main>
            
        </div>
    )
}
export default Movielist