const express = require('express');
const app = express();

app.use(express.static(__dirname + '/publicy/'));

app.get('/mensaje', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify([{
    id: 32,
    name: "",
    price: 0.0,
    brand: "",
    thumbnail: "url",
    category: {
      cateogory_id: 23,
      category_name: ""
    },
    rating: 0.0,
    seller: {
      seller_id: 12,
      seller_name: ""
    }
  },
  {
    id: 31,
    name: "",
    price: 0.0,
    brand: "",
    thumbnail: "url",
    category: {
      cateogory_id: 23,
      category_name: ""
    },
    rating: 0.0,
    seller: {
      seller_id: 12,
      seller_name: ""
    }
  },
  {
    id: 42,
    name: "",
    price: 0.0,
    brand: "",
    thumbnail: "url",
    category: {
      cateogory_id: 23,
      category_name: ""
    },
    rating: 0.0,
    seller: {
      seller_id: 12,
      seller_name: ""
    }
  }
    ,
  {
    id: 34,
    name: "",
    price: 0.0,
    brand: "",
    thumbnail: "url",
    category: {
      cateogory_id: 23,
      category_name: ""
    },
    rating: 0.0,
    seller: {
      seller_id: 12,
      seller_name: ""
    }
  }

  ]));
});

app.listen('3000', function () {
  console.log('Servidor web escuchando en el puerto 3000');
});