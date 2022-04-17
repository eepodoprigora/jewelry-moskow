import React from "react";
import Header from "./components/Header/Header";
import MenuAdmin from "./components/MenuAdmin/MenuAdmin";
import sampleGoods from "./sample-goods";
import Item from "./components/Item/Item";
import base from "./base";
import PropTypes from "prop-types";
import firebase from 'firebase/app';
import SignIn from "./components/Auth/SignIn/SignIn";
import './styles.css'

class App extends React.Component {
    static propTypes = {
        match: PropTypes.object
    }
    state = {
        goods: {},
    }

    componentDidMount() {
        const {params} = this.props.match
        this.ref = base.syncState(`${params.shopId}/goods`, {
            context: this,
            state: 'goods'
        })

    }
    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    addItem = (item) => {
        //   1 По принципу иммутабельности всегда делаем копию объекта, а не взаимодейтвуем с изначальным
        const goods = {...this.state.goods}
        // 2 Добавить новый товар в объект товаров
        goods[`item${Date.now()}`] = item
        // 3 Записать новый объект в стэйт
        this.setState({goods})
    }

    updateItem = (key, updatedItem) => {
        const goods = {...this.state.goods}
        goods[key] = updatedItem
        this.setState({goods})
    }

    deleteItem = key => {
        const goods = {...this.state.goods}
        goods[key] = null
        this.setState({goods})
    }
    loadSampleGoods = () => {
        this.setState({goods: sampleGoods})
    }

    handleLogout = async () => {
        await firebase.auth().signOut()
        window.location.reload()
    }

    render() {
        return (
            <SignIn>
                <div className='wrapper'>
                            <Header title='Jewelery Admin Panel'
                                    handleLogout={this.handleLogout}>
                            </Header>
                    <div className='container'>
                            <ul className='goods'>
                                {Object.keys(this.state.goods).map(key => {
                                    return <Item
                                        key={key}
                                        index={key}
                                        details={this.state.goods[key]}
                                       />
                                })}   </ul>

                        <MenuAdmin addItem={this.addItem}
                                   loadSampleGoods={this.loadSampleGoods}
                                   goods={this.state.goods}
                                   updateItem={this.updateItem}
                                   deleteItem={this.deleteItem}
                                  />
                </div>
                </div>
             </SignIn>
        )
    }
}

export default App