import React, { useEffect, useState } from "react";
import Food from "../components/Food/Food";
import Spinner from "../components/Spinner/Spinner";

const FoodPage = () => {
    const [allowRender, setAllowRender] = useState(false)

    useEffect(() => {

        setTimeout(() => { setAllowRender(true) }, 300);
        return () => clearInterval();

    }, [allowRender])

    return (
        allowRender ?
            <Food />
            :
            <div className="container-fluid loadDataDiv">
                <Spinner showSpinner={true} />
            </div>
    )
}
export default FoodPage