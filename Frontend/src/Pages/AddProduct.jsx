import { useEffect, useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        oldPrice: "",
        image: null,
    });
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");

    const [isEditOpen, setIsEditOpen] = useState(false); // popup state
    const [editProduct, setEditProduct] = useState(null); // product to edit

    // Fetch products
    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:9000/get-products");
            setProducts(res.data.products || res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle form input
    const handleChange = (e) => {
        if (e.target.name === "image") {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    // Add product
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData();
            form.append("title", formData.title);
            form.append("description", formData.description);
            form.append("price", formData.price);
            form.append("oldPrice", formData.oldPrice);
            form.append("image", formData.image);

            const res = await axios.post("http://localhost:9000/add-product", form, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setMessage(res.data.message);
            setFormData({ title: "", description: "", price: "", oldPrice: "", image: null });
            fetchProducts(); // refresh product list
        } catch (err) {
            console.error(err);
            setMessage("Error adding product.");
        }
    };

    // Delete product
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:9000/delete-product/${id}`);
            fetchProducts();
        } catch (err) {
            console.error(err);
        }
    };

    // Open edit popup
    const openEdit = (product) => {
        setEditProduct(product);
        setIsEditOpen(true);
    };

    // Handle edit input changes
    const handleEditChange = (e) => {
        if (e.target.name === "image") {
            setEditProduct({ ...editProduct, image: e.target.files[0] });
        } else {
            setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
        }
    };

    // Submit edit
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData();
            form.append("title", editProduct.title);
            form.append("description", editProduct.description);
            form.append("price", editProduct.price);
            form.append("oldPrice", editProduct.oldPrice);
            if (editProduct.image instanceof File) {
                form.append("image", editProduct.image);
            }

            await axios.put(`http://localhost:9000/update-product/${editProduct._id}`, form, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setIsEditOpen(false);
            setEditProduct(null);
            fetchProducts();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="add-product">
            <div className="container mt-4">
                <h3 className="mb-3">Add Product</h3>
                {message && <div className="alert alert-info">{message}</div>}

                <form onSubmit={handleSubmit} encType="multipart/form-data" className="mb-5">
                    <input type="text" name="title" placeholder="Product Title" value={formData.title} onChange={handleChange} className="mb-3" required />
                    <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="mb-3" required />
                    <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="mb-3" required />
                    <input type="number" name="oldPrice" placeholder="Old Price" value={formData.oldPrice} onChange={handleChange} className="mb-3" />
                    <input type="file" name="image" onChange={handleChange} className="mb-3" accept="image/*" required />
                    <button type="submit" className="btn btn-add">Add Product</button>
                </form>

                <h4 className="mb-3">Product List</h4>
                <div className="list-group">
                    {products.map((product) => (
                        <div key={product._id} className="list-group-item d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={`http://localhost:9000/uploads/${product.image}`} alt={product.title} style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }} />
                                <div>
                                    <h6 className="mb-1">{product.title}</h6>
                                    <p className="mb-0">${product.price} <del>${product.oldPrice}</del></p>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-green btn-sm me-2" onClick={() => openEdit(product)}>Edit</button>
                                <button className="btn btn-red btn-sm" onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Edit Popup Modal */}
            {isEditOpen && editProduct && (
                <div className="edit-modal mt-4 mx-3">
                    <div className="edit-modal-content">
                        <h5>Edit Product</h5>
                        <form onSubmit={handleEditSubmit} encType="multipart/form-data">
                            <input type="text" name="title" value={editProduct.title} onChange={handleEditChange} required />
                            <textarea name="description" value={editProduct.description} onChange={handleEditChange} required />
                            <input type="number" name="price" value={editProduct.price} onChange={handleEditChange} required />
                            <input type="number" name="oldPrice" value={editProduct.oldPrice} onChange={handleEditChange} />
                            <input type="file" name="image" onChange={handleEditChange} accept="image/*" />
                            <div className="mt-2">
                                <button type="submit" className="btn btn-green me-2">Save</button>
                                <button type="button" className="btn btn-red" onClick={() => setIsEditOpen(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddProduct;
