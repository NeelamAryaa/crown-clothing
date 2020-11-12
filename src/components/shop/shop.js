import React, { Component } from 'react';
import Shop_Data from "./shop.data";
import CollectionPreview from "../collection-preview/collection-preview"

class ShopPage extends Component {

    state = {
        collections: Shop_Data
    }

    render() {
        const {collections} = this.state
        return(
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProps}) => {
                    return(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                })}
            </div>
        )
    }
}

export default ShopPage;

