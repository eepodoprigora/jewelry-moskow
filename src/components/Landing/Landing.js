import React, {useState} from "react"
import "./Landing.css"
import PropTypes from "prop-types";
import shops from "../../shops";

const Landing = props => {

    const [display, toggleDisplay] = useState(false)
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const displayList = () => {
        toggleDisplay(!display)
    }
    const getTitle = (shop) => {
        const {title, url} = shop
        setTitle(title)
        setUrl(url)
        toggleDisplay(false)

    }
    const goToAffiliate = () => {
        props.history.push(`/shop/${url}`)
    }
    return (
        <div className='shopSelect'>
            <div className="shopSelectTop" onClick={displayList}>
                <div className='shopSelectTopHeader'>
                    {title ? title : 'Выберите филиал'}
                </div>
                <div className='arrowPicker'>
                    <div className='arrowUp'></div>
                    <div className='arrowDown'></div>
                </div>
            </div>
            {display ? <div className='shopSelectBottom'>
                <ul>
                    {shops.map((shop) => {
                        return <li onClick={() => getTitle(shop)}
                                   key={shop.id}>{shop.title}</li>
                    })}
                </ul>
            </div> : null}
            {title && !display ?
                <button className='goToAffiliate' onClick={goToAffiliate}>Перейти к ассортименту</button> : null}
        </div>
    )
}

Landing.propTypes = {
    history: PropTypes.object
}

export default Landing