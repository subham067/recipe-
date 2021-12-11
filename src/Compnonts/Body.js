import React,{useEffect,useState} from 'react'

function Body() {
    const [myVar, setMyVar] = useState([])
    useEffect(() => {
        fetch(`https://api.edamam.com/search?q=recipe&app_id=ec932433&app_key=b867b1d1c77f15df907d7a2b375666cd`)
        .then(response => response.json())
        .then(data => {
            setMyVar(data.hits);
            console.log(data.hits);
        });
    }, [])
    return (
        <div>
            <h1 className="text-center">Top Recipe</h1>
            <div
                className="container-fluid bg-trasparent my-4 p-3"
                style={{ position: "relative" }}
            >
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {myVar.map((i)=>{
                    return(
                        <div className="col">
                        <div className="card h-100 shadow-sm">
                            {" "}
                            <h4 className="pt-1 px-2 ">{i.recipe.label}</h4>
                            <img
                                src={i.recipe.image}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <div className="clearfix mb-3">
                                    {" "}
                                    <span className="float-start badge rounded-pill bg-primary">
                                       {i.recipe.dishType}
                                    </span>{" "}
                                    {/* <span className="float-end price-hp">12354.00€</span>{" "} */}
                                </div>
                                <h5 className="card-title">
                               
                                   {i.recipe.ingredientLines.map((j)=> {
                                       return(
                                           <li>{j}</li>
                                       )
                                   })}
                                </h5>
                                <div className="text-center my-4">
                                    {" "}
                                    <a href={i.recipe.url} target="_blank" className="btn btn-warning">
                                        Check offer
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}

                
                </div>
            </div>
        </div>
    )
}

export default Body
