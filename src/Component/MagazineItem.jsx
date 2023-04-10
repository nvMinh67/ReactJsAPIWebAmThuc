import React,{Fragment} from "react";

const MagazineItem=()=>{
    return(
        <Fragment>
              <div className="col-lg-6 col-sm-21">
                        <div className="card-post">
                            <div className="row no-gutter">
                                <div className="col-lg-4 col-sm-12">
                                    <a href="" className="image-wrapper image-cover lazy entered loaded adjusted"  style={{backgroundImage: "url(" + "../image/magazineitem.webp" + ")"}}></a>
                                </div>
                                <div className="col-lg-8 col-sm-12">
                                    <div className="card-post-wrapper">
                                        <div className="card-post-sub-content d-flex" style={{height:'28px'}}>
                                            <a href="" className="link link-secondary card-post-sub-link">Features</a>
                                            <span className="no-wrap card-post-reading-time">
                                                <i className="fa-regular fa-clock"></i>
                                                 1 minutes
                                            </span>
                                        </div>
                                        <h3 className="card-post-title">
                                            <a href="">What is michelin start</a>
                                        </h3>
                                        <div className="card-post-content">
                                            <p className="clamp-2">
                                                All your questions answered by a MICHELIN Guide Inspector.
                                            </p>
                                        </div>
                                        <div className="card-post-tags">
                                            <a href="" className="btn btn-outline-secondary btn-sm"> bil Goumor</a>
                                            <a href="" className="btn btn-outline-secondary btn-sm">Michelin Guide</a>
                                            <a href="" className="btn btn-outline-secondary btn-sm"> Edier pick</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </Fragment>
    )
}
export default MagazineItem;