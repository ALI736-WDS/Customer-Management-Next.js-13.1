import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = (event, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1); //az index yeki delete kon
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="item-list">
      <p> Purchased Products </p>
      {products.map((product, index) => (
        <ProductsItem
          key={index}
          product={product}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={() => deleteHandler(index)}
        />
      ))}

      <button onClick={addHandler}> Add item </button>
    </div>
  );
}

export default ItemList;

function ProductsItem({ product, changeHandler, deleteHandler }) {
  return (
    <div className="form-input__list">
      <FormInput
        type="text"
        name="name"
        label="Product Name"
        value={product.name}
        onChange={changeHandler}
      />
      <div>
        <FormInput
          type="text"
          name="price"
          label="Price"
          value={product.price}
          onChange={changeHandler}
        />
        <FormInput
          type="number"
          name="qty"
          label="QTY"
          value={product.qty}
          onChange={changeHandler}
        />
      </div>
      <button onClick={deleteHandler}> Remove </button>
    </div>
  );
}
