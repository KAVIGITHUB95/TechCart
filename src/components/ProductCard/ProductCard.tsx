
export interface StorageOption {
    id: number;
    type: string;
}

export interface ColorOption {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    title: string;
    minPrice: number;
    storageList: StorageOption[];
    colorList: ColorOption[];
}

const ProductCard = ({ product }: { product: Product }) => {
    return (

        <>
            <article>
                <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden w-80 border border-white/20" style={{ width: "20rem" }} id="prod-card">
                    <div className="relative p-4">
                        <img src={`./public/product-images/${product.id}/image1.png`} className="rounded-lg h-80 w-full object-cover" alt={product.title} />
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                                <i className="bi bi-heart text-gray-600"></i>
                            </button>
                            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                                <i className="bi bi-arrow-clockwise text-gray-600"></i>
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center space-x-2 text-sm">
                            <span className="text-yellow-400">Q</span>
                            <span className="text-gray-400">Q</span>
                        </div>
                        <h3 className="text-lg font-semibold" style={{ fontSize: "1.2rem" }}>
                            <a href="#" className="text-black">{product.title}</a>
                        </h3>
                        <div className="flex justify-between items-center my-3">
                            <h5 className="font-bold" style={{ fontSize: "1rem" }}>Starting from Rs.{product.minPrice}</h5>
                            <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-white shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5
                                                        0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 
                                                        0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg>
                            </button>
                        </div>
                        <ul className="text-sm space-y-1" id="prod-down">
                            <li className="flex justify-between"><span>Display:</span><span>Q</span></li>

                            <li className="flex justify-between">
                                <span>Capacity:</span>
                                <span>{product.storageList.map(s => s.type).join(", ")}</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Color:</span>
                                <div className="flex gap-2">
                                    {product.colorList.map(c => (
                                        <span
                                            key={c.id}
                                            className="w-5 h-5 rounded-full border border-gray-300"
                                            style={{ backgroundColor: c.name }}
                                        ></span>
                                    ))}
                                </div>
                            </li>

                            <li className="flex justify-between"><span>Camera:</span><span>Q</span></li>

                            <li className="flex justify-between"><span>Weight:</span><span>Q</span></li>
                        </ul>
                    </div>

                </div>
            </article>

        </>

    )
}

export default ProductCard