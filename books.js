function Book({data}){
    return (
<div className="col-sm-6">        
<div className="cardStyle mb-3 ">    
            <div className="row g-0">
                 <div className="card-img-top">
                    <img src={data.image} className="img-fluid rounded-start" alt={data.title}/>
                </div>
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.subtitle}</p>
                        <p className="card-text"><small className="text-muted"> ISBN: {data.isbn13}</small></p>
                    </div>
                </div>
            </div>
        </div>
</div>

)}