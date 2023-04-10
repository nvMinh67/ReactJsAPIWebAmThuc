import React,{Fragment} from "react";
import Location from "./Location";
import Review from "./Review";
import Dish from "./Dish";
import Inspiration from "./Inspiration";
import Heroes from "./Heroes";

const Home =()=>{
return (
    <Fragment>
    <Heroes/>
    <Inspiration/>
    <Dish/>
    <Review/>
    <Location/>

    </Fragment>
)
}
export default Home;