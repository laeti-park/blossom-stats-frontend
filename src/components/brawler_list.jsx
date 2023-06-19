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
                            <label key={brawler.BRAWLER_ID}>
                                <input
                                    type="radio"
                                    className="radio_button"
                                    value={brawler.BRAWLER_ID}
                                    checked={radio === brawler.BRAWLER_ID}
                                    onChange={handleRadioButton}/>
                                <img className={"square__image"}
                                     src={`/images/brawler_profile/${brawler.BRAWLER_ID}.webp`}
                                     alt={brawler.BRAWLER_ID}
                                     onClick={() => onBrawlerSelected(brawler)}/>
                            </label>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default BrawlerList;

