import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import Desert from '../components/Dessert/Dessert'

const DesertPage = () => {
    const [allowRender, setAllowRender] = useState(false)

    useEffect(() => {

        setTimeout(() => { setAllowRender(true) }, 300);
        return () => clearInterval();

    }, [allowRender])

    return (
        allowRender ?
            <Desert />
            :
            <div className="container-fluid loadDataDiv">
                <Spinner showSpinner={true} />
            </div>
    )
}
export default DesertPage