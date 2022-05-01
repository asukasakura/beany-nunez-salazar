const Item = ({ product }) => {
 
  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="px-10 pt-10">
        <img src={product.pictureUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center self-end">
        <h2 className="card-title">{product.title}</h2>
        <p className="truncate w-44">{product.description}</p>
        <strong>${product.price}</strong>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Item;