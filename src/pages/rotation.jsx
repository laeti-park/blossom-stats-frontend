import React, {useEffect, useState} from "react";
import axios from "axios";
import RotationList from "../components/rotation_list";

const url = process.env.REACT_APP_BASE_URL;

export default () => {
    const [rotation, setRotation] = useState({})

    useEffect(() => {
        axios.get(`${url}/rotation`)
            .then(async (result) => {
                setRotation(result.data.rotation);
            });
    }, []);

    return (
        <div className={'container_flex'}>
            <RotationList rotation={rotation}/>
        </div>
    );
}