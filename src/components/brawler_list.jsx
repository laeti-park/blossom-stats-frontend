import React from "react";

const BrawlerList = (props) => {
    const [radio, setRadio] = React.useState('16000000');
    const onBrawlerSelected = (e, brawler) => {
        props.getBrawlers(brawler);
    };

    const handleRadioButton = (e) => {
        setRadio(e.target.value);
    };

    return (
        <nav className="brawler_box">
            <div className="nav__list">
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
                                <img className="nav__brawler"
                                     src={`/images/brawler_profile/${brawler.id}.webp`}
                                     alt={brawler.id}
                                     onClick={(e) => onBrawlerSelected(e, brawler)}/>
                            </label>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default BrawlerList

