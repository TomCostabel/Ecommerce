import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import "../Home/Home.css";
import { LoginButton } from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import Profile from "../Profile/Profile";

export default function Home() {
    //------------------------------ "CONSTANTES" -------------------------------------------------->

    const [productsActuales, setProductsActuales] = useState([]);
    const products = useSelector((state) => state.productos);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [buscador, setBuscador] = useState([]);
    const [datos, setDatos] = useState([]);
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useAuth0();
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
                <div className="  container-inicial">
                    <div className="centrado">
                        <div className="     container-navbar">
                            <NavBar />
                        </div>

                        <div className="     container-2 ">
                            <div className="d-flex justify-content-between align-items-end navBarInterna">
                                <div className="Titulo ">Welcome to... </div>
                                <input
                                    className="buscador"
                                    type="text"
                                    placeholder="🔎 Search here..."
                                    value={buscador}
                                    onChange={(e) => handleChange(e)}
                                />
                                {isAuthenticated ? (
                                    <Profile />
                                ) : (
                                    <LoginButton />
                                )}
                            </div>
                            <div
                                className="d-flex contenidoPrincipal justify-content-around
                        "
                            >
                                <div className="container-laterales">
                                    <div className="lateral">CLOTHING </div>

                                    <div className="lateral1">SUMMER </div>

                                    <div className="lateral2">MAKEUP </div>

                                    <div className="lateral3">SPORT </div>
                                </div>
                                <div className="conteiner-central">
                                    <div className="d-flex container-carteles">
                                        <div className="cartel">Hola</div>
                                        <div className="cartel-2">Hola</div>
                                        <div className="cartel-3">Hola</div>
                                    </div>
                                    <div className="container-pagination">
                                        <Pagination
                                            items={productsActuales?.map(
                                                (e) => {
                                                    return (
                                                        <Card
                                                            key={e.id}
                                                            id={e.id}
                                                            title={e.title}
                                                            images={e.images}
                                                            price={e.price}
                                                            category={
                                                                e.category
                                                            }
                                                        />
                                                    );
                                                }
                                            )}
                                            currentPage={currentPage}
                                            nextHandler={nextHandler}
                                            prevHandler={prevHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
