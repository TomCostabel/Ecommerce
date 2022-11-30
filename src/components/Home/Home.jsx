import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import "../Home/Home.css";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";

export default function Home() {
    //------------------------------ "CONSTANTES" -------------------------------------------------->

    const [productsActuales, setProductsActuales] = useState([]);
    const products = useSelector((state) => state.productos);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [buscador, setBuscador] = useState([]);
    const [datos, setDatos] = useState([]);
    const dispatch = useDispatch();
    const itemXPage = 8;

    //------------------------------ "handleChange" --------------------------------------------------->

    const handleChange = (e) => {
        setBuscador(e.target.value);
        setCurrentPage(0);
    };
    //------------------------------ "useEffect" --------------------------------------------------->

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    //---------------------------------//

    useEffect(() => {
        if (products.length && !datos.length) setDatos(products);
        setProductsActuales(
            datos.slice(
                currentPage * itemXPage,
                currentPage * itemXPage + itemXPage
            )
        );
    }, [dispatch, currentPage, datos, products, itemXPage]);

    //---------------------------------//

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

    //------------------------------ "Next and Prev" ------------------------------------------------>

    const nextHandler = () => {
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * itemXPage;

        if (productsActuales.length < 8 && currentPage !== 0) return;
        setProductsActuales(
            [...datos].slice(firstIndex, firstIndex + itemXPage)
        );
        setCurrentPage(nextPage);
    };

    //---------------------------------//

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * itemXPage;

        setProductsActuales(
            [...datos].slice(firstIndex, firstIndex + itemXPage)
        );
        setCurrentPage(prevPage);
    };

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    //------------------------------ "Return" ------------------------------------------------>

    return (
        <>
            {loading ? (
                <h1>Cargando</h1>
            ) : (
                <div className=" d-flex">
                    <div className="  container-1 d-flex align-items-start ">
                        <NavBar />
                        {/* <input
                            type="text"
                            placeholder="Buscador..."
                            value={buscador}
                            onChange={(e) => handleChange(e)}
                        /> */}
                        {/* <Filters /> */}
                    </div>
                    <div className="   container-fluid  container-2 ">
                        <Pagination
                            items={productsActuales?.map((e) => {
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
                            })}
                            currentPage={currentPage}
                            nextHandler={nextHandler}
                            prevHandler={prevHandler}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
