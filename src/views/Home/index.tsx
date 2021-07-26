import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.css";
import Banner from "../../components/Banner";
import { HomeState } from "../../store/ducks/home/types";
import * as homeController from "../../controller/homeController";
import AppState from "../../store/storeType";
import Slideshow from "../../components/Slideshow";
import Pagination from "../../components/Pagination";

const Home: React.FC = () => {
  const { data, loading } = useSelector<AppState, HomeState>(
    (state) => state.home
  );

  useEffect(() => {
    homeController.getAllFilmes(1);
  }, []);
  return (
    <>
      <Banner />
      {loading && <div className="c-loader"></div>}
      <div className={styles.container}>
        <Slideshow data={data} baseUrl="http://image.tmdb.org/t/p/w185" />
        <Pagination totalPages={data?.total_pages} onPageChange={homeController.getAllFilmes}/>
      </div>
    </>
  );
};

export default Home;
