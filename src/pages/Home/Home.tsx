import { useEffect, useState } from "react";
import productImage2 from "../../assets/images/2.png";
import productImage3 from "../../assets/images/3.png";
import NavBar from "../../components/NavBar";
import "./Home.module.css";
import ProductCard, { ColorOption, Product, StorageOption } from "../../components/ProductCard/ProductCard";


const Home = () => {

    const [storages, setStorages] = useState<StorageOption[]>([]);
    const [colors, setColors] = useState<ColorOption[]>([]);

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/TechCart/LoadHomeData");
                if (response.ok) {
                    const json = await response.json();
                    console.log("Ok");
                    if (json.status) {
                        setStorages(json.storageList);

                        setColors(json.colorList);

                        setProducts(json.productList);

                        console.log("Ok");
                    }
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    const slides = [

        { id: 1, url: productImage2, h1: "Step into Style", message: "Fresh Drops. Bold Looks. Discover the latest arrivals built for comfort, crafted for style." },
        { id: 2, url: productImage3, h1: "Run Further, Feel Better", message: "Lightweight soles, breathable fabrics — made to move with you." },
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };
    return (
        <>
            <NavBar />

            <main className="bg-white">
                <div className="w-full max-w-6xl mx-auto">
                    {/* Slides */}
                    <div className="relative overflow-hidden rounded-2xl py-3">
                        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                            {slides.map((slide) => (
                                <div key={slide.id} className="relative w-full flex-shrink-0">
                                    <img src={slide.url} alt="carousel slide" className="w-full flex-shrink-0" />

                                    {/* Glass overlay */}
                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/30"></div>

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 flex flex-col items-center justify-center bg-black/33 rounded-2xl backdrop-blur-md border border-white/20 shadow-md p-5 z-50 w-100 h-60 sm:w-200">
                                        <h1 className="text-white font-bold" style={{ fontSize: "2rem" }}>{slide.h1}</h1>
                                        <p className="text-white/80 mt-2">{slide.message}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        {/* Navigation buttons */}

                        <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
                            ❮

                        </button>

                        <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
                            ❯
                        </button>

                    </div>
                    {/* Dots */}

                    <div className="flex justify-center mt-4 space-x-2 py-3">
                        {slides.map((_, index) => (
                            <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full ${current === index ? "bg-blue-500" : "bg-gray-300"}`} />

                        ))}

                    </div>



                </div>
            </main>
            <main style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>

                {/* content */}
                <div className="flex flex-row">
                    <section className="pt-20 mt-8 sm:mt-12 lg:mt-16 py-20 mx-auto max-w-7xl px-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>

                        <div className="flex items-center justify-between border-bottom pb-3 pb-md-4">
                            <h2 className="px-4" style={{ fontSize: "2rem" }}>Trending Products</h2>
                        </div>
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-28" id="product-container">
                            {products.map((p) => (
                                <ProductCard key={p.id} product={{
                                    ...p,
                                    storageList: storages, // attach global storageList
                                    colorList: colors      // attach global colorList
                                }} />
                            ))}

                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Home;