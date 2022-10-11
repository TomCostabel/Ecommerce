import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import "../Home/Home.css";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";

export default function Home() {
    const products = useSelector((state) => state.productos);
    const [datos, setDatos] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    // const categorys = useSelector((state) => state.categorys);

    const [productsActuales, setProductsActuales] = useState([]);

    const itemXPage = 10;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    useEffect(() => {
        if (products.length && !datos.length) setDatos(products);

        setProductsActuales(
            datos.slice(
                currentPage * itemXPage,
                currentPage * itemXPage + itemXPage
            )
        );
    }, [dispatch, currentPage, datos, products, itemXPage]);

    const nextHandler = () => {
        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemXPage;

        if (productsActuales.length < 8 && currentPage !== 0) return;

        setProductsActuales(
            [...datos].slice(firstIndex, firstIndex + itemXPage)
        );
        setCurrentPage(nextPage);
    };

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * itemXPage;

        setProductsActuales(
            [...datos].slice(firstIndex, firstIndex + itemXPage)
        );
        setCurrentPage(prevPage);
    };

    const allProducts = productsActuales?.map((e) => {
        return (
            <Card
                key={e.id}
                id={e.id}
                title={e.title}
                images={e.images}
                price={e.price}
                category={e.category}
            />
        );
    });

    const [buscador, setBuscador] = useState([]);
    const handleChange = (e) => {
        setBuscador(e.target.value);
        setCurrentPage(0);
    };
    useEffect(() => {
        !buscador.length
            ? setDatos(products)
            : setDatos(
                  products?.filter((el) => {
                      return el.title
                          .toLowerCase()
                          .includes(buscador.toLowerCase())
                          ? el
                          : null;
                  })
              );
    }, [buscador, products]);

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    return (
        <div>
            {loading ? (
                <h1>Cargando</h1>
            ) : (
                <div>
                    <NavBar />

                    <input
                        type="text"
                        placeholder="Buscador..."
                        value={buscador}
                        onChange={(e) => handleChange(e)}
                    />

                    <Filters />
                    <div className="container-cards">
                        <Pagination
                            items={allProducts}
                            currentPage={currentPage}
                            nextHandler={nextHandler}
                            prevHandler={prevHandler}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
