import React,{Fragment} from "react";
import MagazineItem from "./MagazineItem";

const MagazineGrid =()=>{
    return(
        <Fragment>
             <section className="section-main section-edit-pick mt-40">
            <div className="container">
                <h3 className="section-heading">
                    Editor's Picks
                </h3>  
                <div className="row editor-picks-row">
                  
                    <MagazineItem/>

                </div>
            </div>
        </section>
        </Fragment>

    )
}
export default MagazineGrid