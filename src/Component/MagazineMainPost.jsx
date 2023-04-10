import React,{Fragment} from "react";

const MagazineMainPost =()=>{
    return(
    
             <section className="section-main first">
            <div className="container">
                <h1 className="section-title" style={{fontSize:'5rem'}}>
                    Magazine
                </h1>
                <div className="card-jumbotron full-mobile">
                    <div className="card-jumbotron-overlay"></div>
                    <div className="image-bg lazy entered loaded" style={{ backgroundImage: "url(" + "../image/magazine.jpg" + ")",}}>
                    </div>
                    <div className="card-jumbotron-content-bottom">
                        <div className="card-jumbotron-content d-flex">
                            <div className="card-jumbotro-category-link">
                                Features
                            </div>
                            <span className="ml-2">
                                <span className="no-wrap card-jumbotro-reading-time">
                                    <i className="fa-regular fa-clock"></i>
                                    1 minutes
                                </span>
                            </span>
                        </div>
                        <h3 className="card-jumbotro-title-lg" style={{overflow:'hidden',}}>
                            <a href="" className="card-jumbotron-title-link clamp-2">
                                What is the Michelin bil gourman Award?
                            </a>
                        </h3>
                        <p className="card-jumbotron-excerpt clamp-3">
                            Discover more about our award for good quality and good value cooking.
                        </p>
                        <div className="card-jumbotron-tags">
                        <a href="" className=""></a>
                            <a href="" className="btn btn-outline-secondary btn-sm ms-1 background-none"> bil Goumor</a>
                            <a href="" className="btn btn-outline-secondary btn-sm ms-1 background-none">Michelin Guide</a>
                            <a href="" className="btn btn-outline-secondary btn-sm ms-1 background-none"> Edier pick</a>
                        </div>
                    </div>

                </div>
            </div>
          </section>

       
  
            
     
    )

}
export default MagazineMainPost;