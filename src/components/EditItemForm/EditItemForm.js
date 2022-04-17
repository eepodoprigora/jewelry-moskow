import React from "react";
import PropTypes from "prop-types";
import s from './EditItemForm.module.css'

class EditItemForm extends React.Component {
    static propTypes = {
        item: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            fabric: PropTypes.string,
            extra: PropTypes.string,
            status: PropTypes.string
        }),
        index: PropTypes.string,
        updateItem: PropTypes.func,
        deleteItem: PropTypes.func,
    }
    handleChange = (e) => {
        const updatedItem = {
            ...this.props.goods,
            [e.currentTarget.name]: e.currentTarget.name === 'price' ?
                parseFloat(e.currentTarget.value) : e.currentTarget.value
        }
        this.props.updateItem(this.props.index, updatedItem)
    }

    render() {
        return (
            <div className={s.itemEdit}>
                <input className={s.name} onChange={this.handleChange} name='name' type='text' value={this.props.item.name}/>
                <input className={s.price}  onChange={this.handleChange} name='price' type='text' value={this.props.item.price}/>
                <select className={s.select} onChange={this.handleChange} name='status' value={this.props.item.status}>
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Не доступно</option>
                </select>
                <input className={s.fabric} onChange={this.handleChange} name='fabric' value={this.props.item.fabric}/>
                <input className={s.extra} onChange={this.handleChange} name='extra' value={this.props.item.extra}/>
                <input className={s.image} onChange={this.handleChange} name='image' type='text' value={this.props.item.image}/>
                <button className={s.button} onClick={() => this.props.deleteItem(this.props.index)}>Снять с продажи</button>
            </div>
        )
    }
}

export default EditItemForm