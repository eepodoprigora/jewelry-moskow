import React from "react";
import PropTypes from "prop-types";
import s from './AddItemForm.module.css'

class AddBurgerForm extends React.Component {
    static propTypes = {
        addItem: PropTypes.func
    }

    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    fabricRef = React.createRef()
    extraRef = React.createRef()
    imageRef = React.createRef()

    createItem = (e) => {
        e.preventDefault()
        const item = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value) || 0,
            status: this.statusRef.current.value,
            fabric: this.fabricRef.current.value,
            extra: this.extraRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addItem(item)
        e.currentTarget.reset()
    }

    render() {
        return (
            <form className={s.itemAdd} onSubmit={this.createItem}>
                <input className={s.name} ref={this.nameRef}  name='name' type='text' placeholder="Name"
                       autoComplete='off'/>
                <input className={s.price}  ref={this.priceRef}  name='price' type='text' placeholder="Price"
                       autoComplete='off'/>
                <select className={s.select} ref={this.statusRef}  name='status'>
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Нет в наличии</option>
                </select>
                <input className={s.fabric} ref={this.fabricRef} name='fabric' placeholder="Fabric"/>
                <input ref={this.extraRef} name='extra' placeholder="Extra"/>
                <input className={s.image}   ref={this.imageRef}  name='image' type='text'
                       placeholder="Image"/>
                <button className={s.button} type='submit' >+ Добавить в ассортимент</button>
            </form>
        )
    }
}

export default AddBurgerForm