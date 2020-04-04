import React , {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import BuildControls from '../../components/Home/BuildControls/BuildControls';
import Home from '../../components/Home/Home';
import Modal from '../../components/Navigation/UI/Modal/Modal';
import OrderSummary from '../../components/Navigation/UI/OrderSummary/OrderSummary';

const KIDS_LOVES = { 
    cute: 1,
    wolfPupps: 1,
    sheepPupps: 1,
    flatFacePupps: 1,
};

class HomeBuilder extends Component {
    state = {
        adorableKids: { 
            cute: 0,
            wolfPupps: 0,
            sheepPupps: 0,
            flatFacePupps: 0
        },
        totalPrice: 0,
        purchase: false,
        purchasable: false,
    }

    purchaseHandler =() => (
        this.setState({purchase: true})
    )

    updatePurchaseState = (adorableKids) => {
        const sum = Object.keys(adorableKids) //cute,woof, sheep
            .map (key => {
                return adorableKids[key]    //adorableKids[cute]
            })
            .reduce((sum,b) => {return sum+b }, 0)
            this.setState({purchasable: sum>0});
    }

    addPuppsHandler = (type) => {
        const updatedCount = this.state.adorableKids[type] + 1;
        const updatedAdorableKids = {...this.state.adorableKids};
        updatedAdorableKids[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + KIDS_LOVES[type];
        this.setState({adorableKids: updatedAdorableKids, totalPrice: updatedPrice});
        this.updatePurchaseState(updatedAdorableKids);
    } 

    removePuppsHandler =(type) => {
        const updatedCount = this.state.adorableKids[type] - 1;
        const deductedAdorableKids = {...this.state.adorableKids};
        deductedAdorableKids[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + KIDS_LOVES[type];
        this.setState({adorableKids: deductedAdorableKids, totalPrice: updatedPrice});
        this.updatePurchaseState(deductedAdorableKids);
    }


    render() {
        const disabledButton = {...this.state.adorableKids };
        for (let key in disabledButton){
            disabledButton[key] = disabledButton[key] <= 0
        };

        return(
            <Auxiliary>
                <Modal
                show={this.state.purchase}>
                    <OrderSummary/>
                </Modal>
                <Home 
                furKid = {this.state.adorableKids}/>

                <BuildControls
                price = {this.state.totalPrice}
                newKid = {this.addPuppsHandler}
                lessKid = {this.removePuppsHandler}
                disabled={disabledButton}
                purchase={this.purchaseHandler}
                purchasable={this.state.purchasable}/>

                <p> Modal </p>
                <p> Order Summary </p>
                <p> New Home </p>
                <p> Cannot cope with the love</p> 
            </Auxiliary>
        )
    }
}

export default HomeBuilder;