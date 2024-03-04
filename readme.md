
#Store API
### It is a Store API where we can search for particular products, filter them by variuos criterion, sort them and many more...
#### Get all items

```http
  GET /api/v1/products
```
## API Reference

#### Filter 

```http
  GET /api/v1/products?name='xyz'&featured=true&company='A/B/C/D
```

#### Sort

```http
  GET /api/v1/products?sort="-name price"
```

#### Pagination

```http
  GET /api/v1/products?page=2&limit=10
```

