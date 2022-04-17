import React from "react";
import PropTypes from "prop-types";
import s from './MenuAdmin.module.css'
import EditItemForm from "../EditItemForm/EditItemForm";
import AddItemForm from "../AddItemForm/AddItemForm";

class MenuAdmin extends React.Component {
    static propTypes = {
        goods: PropTypes.object,
        deleteItem: PropTypes.func,
        updateItem: PropTypes.func,
        addItem: PropTypes.func,
        loadSampleGoods: PropTypes.func
    }


    render() {
        return (
            <div className={s.wrapper}>
                <h2 className={s.header}>Управление меню</h2>
                <div className={s.main}>
                    <AddItemForm addItem={this.props.addItem}/>

                    <div className={s.editForms}>
                        {Object.keys(this.props.goods).map(key => {
                            return <EditItemForm updateItem={this.props.updateItem}
                                                 index={key} key={key}
                                                 item={this.props.goods[key]}
                                                 deleteItem={this.props.deleteItem}/>
                        })}</div>
                </div>

                <button className={s.loadGoods} onClick={this.props.loadSampleGoods}>Загрузить товары</button>
            </div>
        )
    }
}

export default MenuAdmin