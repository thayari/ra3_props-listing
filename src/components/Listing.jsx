import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

function Listing({items}) {
  const itemElements = items.map((item) => <Item key={item.listing_id} props={item} />)
  return (
    <div className="item-list">
      {itemElements}
    </div>
  )
}

Listing.propTypes = {
  items: PropTypes.array,
}

export default Listing

