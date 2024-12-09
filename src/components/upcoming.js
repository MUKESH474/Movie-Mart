import { useState } from "react";
import upcome from './upcoming.json'
import Button from 'react-bootstrap/Button';
import { MdStar } from "react-icons/md";
import Card from 'react-bootstrap/Card';
function Upcoming(){
    const[topmovie]=useState(upcome)
    return(
        <div>
            <h1 style={{color:"red",marginTop:"40px"}}> Upcoming</h1>
            <div className="container-fluid">
                <div className="row">
                <div className='col '>
                    {topmovie ? (<ul className='movielistcard row-cols-lg-3 row-cols-md-2 row-cols-sm-1 '>{topmovie.map((item)=>(<div key={item.id}>
                        <Card style={{ width: '16rem',height:"36rem" }} className='ms-5 mt-5 '>
                        
                        <Card.Img variant="top" src={item.img} style={{width:"16rem", height:"340px"}} className='cardimage' /> 
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>Count:{item.count} </Card.Text>
                            <Card.Text>Average:{item.average} </Card.Text>
                            <Card.Text>Rating:{item.rating} <MdStar className='star'/> </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                    </div>))}</ul>):(<p>Loading</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Upcoming;