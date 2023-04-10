import React,{Fragment} from "react";
import MagazineTag from "./MagazineTag";
import MagazineMainPost from "./MagazineMainPost";
import MagazineGrid from "./MagazineGrid";
import Review from "./Review";

const Magazine =()=>{
    return(
    <Fragment>
        <MagazineTag/>
        <MagazineMainPost/>
        <MagazineGrid/>
        <Review/>

    </Fragment>
    )
}
export default Magazine;
