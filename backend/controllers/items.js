const { default: axios } = require('axios');
const { request, response } = require('express');

const getItem = async (req = request, res = response) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/items/${req.params.id}`
    );
    const description = await axios.get(
      `https://api.mercadolibre.com/items/${req.params.id}/description`
    );

    const {
      id,
      title,
      currency_id,
      price,
      pictures,
      condition,
      shipping,
      sold_quantity,
    } = response.data;

    const result = {
      author: {
        name: 'Carlos Alfredo',
        lastname: 'Difilippo Paletti',
      },
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: price,
          decimals:
            Math.floor(price) === price
              ? 0
              : price.toString().split('.')[1].length,
        },
        picture: pictures[0].url,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description: description.data.plain_text,
      },
    };

    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getItemsQuery = async (req = request, res = response) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
    );

    let categories = response.data.filters.find(
      (filter) => filter.id === 'category'
    );

    categories || (categories = []);

    const items = response.data.results.map(
      ({ id, title, currency_id, price, thumbnail, condition, shipping }) => ({
        id,
        title,
        price: {
          currency: currency_id,
          amount: price,
          decimals:
            Math.floor(price) === price
              ? 0
              : price.toString().split('.')[1].length,
        },
        picture: thumbnail,
        condition,
        free_shipping: shipping.free_shipping,
      })
    );

    const result = {
      author: {
        name: 'Carlos Alfredo',
        lastname: 'Difilippo Paletti',
      },
      categories: categories.values[0],
      items,
    };

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getItem,
  getItemsQuery,
};
