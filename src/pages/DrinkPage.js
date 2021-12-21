import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import Products from "../components/Products/Products";

const DrinkPage = () => {
    const [allowRender, setAllowRender] = useState(false)

    useEffect(() => {

        setTimeout(() => { setAllowRender(true) }, 300);
        return () => clearInterval();

    }, [allowRender])

    return (
        allowRender ?
            <Products />
            :
            <div className="container-fluid loadDataDiv">
                <Spinner showSpinner={true} />
            </div>
    )
}
export default DrinkPage