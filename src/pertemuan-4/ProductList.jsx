import { useState } from "react";
import ProductData from "./products.json";

export default function ProductList() {
    // Centralized form state
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    // Handle input/select changes
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    // Search and Filter Logic
    const _searchTerm = dataForm.searchTerm.toLowerCase();

    const filteredProduct = ProductData.filter((product) => {
        const matchesSearch =
            product.title.toLowerCase().includes(_searchTerm) ||
            product.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag
            ? product.tags.includes(dataForm.selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });

    const allTags = [
        ...new Set(ProductData.flatMap((product) => product.tags)),
    ];

    return (
        <div className="p-8">
            {/* Search Input */}
            <input
                type="text"
                name="searchTerm"
                placeholder="Search product..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.searchTerm}
                onChange={handleChange}
            />

            {/* Tag Select Dropdown */}
            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.selectedTag}
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Cards */}
            {filteredProduct.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white ">
                    <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-600">Category: {item.category}</p>
                    <p className="text-red-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Discount: {item.discountPercentage}%</p>
                    <p className="text-gray-600">Rating: {item.rating}</p>
                    <p className="text-gray-600">Stock: {item.stock}</p>
                    <p className="text-gray-600">Brand: {item.brand}</p>
                    {item.dimensions && (
                        <p className="text-gray-600">
                            Dimensions: {item.dimensions.width} x {item.dimensions.height} x {item.dimensions.depth}
                        </p>
                    )}
                    <p className="mt-2">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-blue-300 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </p>
                </div>
            ))}
        </div>
        </div>
    );
}
