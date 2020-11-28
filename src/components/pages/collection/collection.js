import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../collection-item/collection-item';

import {selectCollection} from '../../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({match}) => {
    return(
        <div className='collection-page'>
            <h2>COLLECTION PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
