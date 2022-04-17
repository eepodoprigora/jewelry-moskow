import React from "react";
import PropTypes from "prop-types";
import s from './Item.module.css'

class Item extends React.Component {

    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string
        }),
        index: PropTypes.string,
        addToOrder: PropTypes.func

    }

    render() {
        const {image, name, price, fabric, extra, status} = this.props.details
        const isAvailable = status === 'available'
        return (
            <>
                <li className={s.item}>
                    <div className={s.imageContainer}>
                        <img src={image} alt={name}/>
                    </div>
                    <h3 className={s.itemTitle}>{name}
                    </h3>
                    <div className={s.descr}>
                    <p className={s.fabric}>{fabric}</p>
                    <p className={s.extra}>{extra}</p>
                    </div>
                    <div className={s.bottom}>
                    <p className={s.price}> {price} ₽</p>
                    <button className={s.buttonOrder}
                            disabled={!isAvailable}>{isAvailable ? "Добавить в корзину" : "Нет в наличии"}</button>
                    </div>
                </li>
            </>
        )
    }
}

export default Item