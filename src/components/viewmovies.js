import { useState } from 'react'
import data from './all.json'
function View(){
    const [item]= useState(data)
    return(
        <div className="container-fluid">
            {item? (<ul > {item.map((info)=>(<div key={info.id}>
                <div className="row mt-5" >
                    <div className="col-4">
                        <img src={info.img} style={{width:"360px" }} />
                    </div>
                    <div className="col-8">
                        <h1>{info.title}</h1>
                        <table >
                            <tr >
                            <th >Rating:</th>
                            <td>{info.rating}</td>
                            </tr>
                            <tr>
                            <th>Count:</th>
                            <td>{info.count}</td>
                            </tr>
                            <tr>
                            <th>Average:</th>
                            <td>{info.average}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>))}</ul>):(<p > Loaging</p>)}
        </div>
    )
}
export default View