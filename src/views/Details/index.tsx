import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as detailsController from "../../controller/detailsController";
import AppState from "../../store/storeType";
import { DetailsState } from "../../store/ducks/details/types";
import api from "../../util/api";
import { Col, Label, Row } from "reactstrap";
import moment from "moment";
import styles from "./style.module.css";

interface Param {
  movieId: string;
}

const Details = () => {
  const { data, loading } = useSelector<AppState, DetailsState>(
    (state) => state.details
  );

  let param = useParams<Param>();
  useEffect(() => {
    detailsController.getMovieDetails(param.movieId);
  }, [param.movieId]);

  moment.locale("pt-br");
  return (
    <>
      {loading && <div className="c-loader"></div>}
      <div className={styles.content}>
        <Col md={3}>
          <div className={styles.avaliacao}>
            <img
              alt={data?.original_title}
              className={styles.poster}
              src={
                `http://image.tmdb.org/t/p/w185` +
                data?.poster_path +
                api.apiKey
              }
            />
            <Row>
              <Label>Avaliação dos usuários</Label>
              <span>{`${data?.vote_average}`}</span>
              <Label>Total de votos</Label>
              <span>{`${data?.vote_count}`}</span>
              <Label>Data de Lançamento</Label>
              <span>{moment(data?.release_date).format("ll")}</span>
            </Row>
          </div>
        </Col>
        <Col md={9}>
          <Row className={styles.session}>
            <div className={styles.alignRight}>
              <div className={styles.titleRight}>Data de Lançamento</div>
              <span>{moment(data?.release_date).format("ll")}</span>
              <div>Status</div>
              <span>
                {data?.status === "Released" ? "Lançado" : "Não lançado"}
              </span>
            </div>
            <Label className={styles.title}>{data?.title}</Label>
            <span className={styles.tagline}>{data?.tagline}</span>
            <p>{data?.overview}</p>
          </Row>
        </Col>
      </div>
    </>
  );
};

export default Details;
