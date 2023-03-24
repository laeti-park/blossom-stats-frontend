import {useState} from "react";

const BrawlerList = (props) => {
    const [radio, setRadio] = useState('16000000');
    const onBrawlerSelected = (brawler) => {
        props.getBrawlers(brawler);
    };

    const handleRadioButton = (e) => {
        setRadio(e.target.value);
    };

    return (
        <nav className="brawler_box">
            <div>
                {
                    props.brawlers.map(brawler => {
                        return (
                            <label key={brawler.id}>
                                <input
                                    type="radio"
                                    className="radio_button"
                                    value={brawler.id}
                                    checked={radio === brawler.id}
                                    onChange={handleRadioButton}/>
                                <img className={"square_image"}
                                     src={`/images/brawler_profile/${brawler.id}.webp`}
                                     alt={brawler.id}
                                     onClick={() => onBrawlerSelected(brawler)}/>
                            </label>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default BrawlerList

