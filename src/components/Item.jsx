import React from 'react'

function Item({props}) {
  const { listing_id, url, MainImage, title, currency_code, price, quantity } = props;
  if (props.state === 'removed') return null;

  let priceNew = price;
  if (currency_code === 'USD') {
    priceNew = '$' + price;
  } else if (currency_code === 'EUR') {
    priceNew = '€' + price;
  } else {
    priceNew = price + ' ' + currency_code;
  }

  let level;
  if (quantity <= 10) {
    level = 'item-quantity level-low';
  } else if (quantity <= 20) {
    level = 'item-quantity level-medium';
  } else {
    level = 'item-quantity level-high';
  }

  let shortTitle = title;
  if (title.length > 50) {
    shortTitle = shortTitle.substring(0, 50) + '...';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}><img src={MainImage.url_570xN} alt=""/></a>
      </div>
      <div className="item-details">
        <p className="item-title">{shortTitle}</p>
        <p className="item-price">{priceNew}</p>
        <p className={level}>{quantity} left</p>
      </div>
    </div>
  )
}

export default Item


/*
listing_id — уникальный идентификатор предложения, число;
url — ссылка на предложение, строка;
MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
title — название предложения, строка;
currency_code — код валюты, строка;
price — цена, строка;
quantity — доступное количество, число.
*/