const express = require('express');
const app = express();

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*");
  if(req.method ==='OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
    return res.status(200).json({});
  }
  next();
});


app.get('/mensaje', function (req, res) {
  console.log('peticion desde la API');
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(
    
  [{
    id: 32,
    name: "asd",
    price: 0.0,
    brand: "asd",
    thumbnail: "url",
    category: {
      cateogory_id: 23,
      category_name: "asd"
    },
    rating: 0.0,
    seller: {
      seller_id: 12,
      seller_name: "asdsad"
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

  ]
  ));
});

app.listen('3000', function () {
  console.log('Servidor web escuchando en el puerto 3000');
});