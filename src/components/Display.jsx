import axios from 'axios'
import React, {useEffect, useState} from 'react'

const Display = ({what, id}) => {

    const [thing, setThing] = useState({})
    const [world, setWorld] = useState("")

    const [err, setErr] = useState(false)
    
    useEffect(()=>{
        if(what==="people"){
            axios.get(`https://swapi.dev/api/${what}/${id}`)
                .then(res=>{
                    setErr(false);
                    setThing(res.data);
                    axios.get(res.data.homeworld)
                        .then(r=>setWorld(r.data.name))
                        .catch(err=>setErr(true))
                })
                .catch(err=>setErr(true))
        }
        else{
            axios.get(`https://swapi.dev/api/${what}/${id}`)
            .then(res=>{
                setErr(false);
                setThing(res.data);
                console.log(res.data);
            })
            .catch(err=>setErr(true))
        }
    },[what,id])



    if(err){
        return(
        <div style={{display:'flex',flexDirection:"column",alignItems:"center"}}>
            <h1>These aren't the droids you're looking for...</h1>
            <img src="https://cdn.mos.cms.futurecdn.net/9R7qcYvf74sqdXzVGAUtCJ.jpg" style={{width:600}} />
        </div>
        )
    }

    if(what==="people"){
        return(
            <div>
                <h1>{thing.name}</h1>
                <h3>Height: {thing.height}</h3>
                <h3>Mass: {thing.mass}</h3>
                <h3>Hair Color: {thing.hair_color}</h3>
                <h3>Skin Color: {thing.skin_color}</h3>
                <h3>Homeworld: {world}</h3>
            </div>
        )
    }
    else if(what==="planets"){
        return(
            <div>
                <h1>{thing.name}</h1>
                <h3>Climate: {thing.climate}</h3>
                <h3>Terrain: {thing.terrain}</h3>
                <h3>Surface Water: {thing.surface_water}</h3>
                <h3>Population: {thing.population}</h3>
            </div>
        )
    }
}

export default Display