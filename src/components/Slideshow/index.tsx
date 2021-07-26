import React from "react";
import { Tooltip } from "@material-ui/core";
import { Col, Label, Row } from "reactstrap";
import { GetAllFilmes } from "../../controller/homeController";
import styles from "./style.module.css";
import moment from "moment";
import ModalFilme from "../Modal";
import { Link } from "react-router-dom";

interface Slide {
  data?: GetAllFilmes;
  baseUrl?: string;
}

const Slideshow: React.FC<Slide> = (props) => {
  const { data, baseUrl } = props;
  return (
    <>
      <div className={styles.container}>
        {data?.results?.map((dados, i) => {
          return (
            <div className={styles.card}>
              <div className={styles.vote}>
                <div className={styles.voteText}>{dados.vote_average}</div>
              </div>
              <ModalFilme
                data={dados}
                banner={
                  <Tooltip
                    key={i}
                    title={dados.title}
                    aria-label={dados.title}
                    placement="right"
                  >
                    <img
                      alt={dados.original_title}
                      className={styles.poster}
                      src={baseUrl + dados.poster_path}
                      loading="lazy"
                    />
                  </Tooltip>
                }
              >
                <Row>
                  <Col md={4}>
                    <div className={styles.avaliacao}>
                      {dados.adult && <div className={styles.adult}>+18</div>}
                      <img
                        alt={dados.original_title}
                        className={styles.poster}
                        src={baseUrl + dados.poster_path}
                        loading="lazy"
                      />
                      <Row>
                        <Label>Avaliação dos usuários</Label>
                        <span>{`${dados.vote_average}`}</span>
                        <Label>Total de votos</Label>
                        <span>{`${dados.vote_count}`}</span>
                      </Row>
                    </div>
                  </Col>
                  <Col md={8}>
                    <Row>
                      <h3>Sinopse</h3>
                    </Row>
                    <Row>
                      <p>{dados.overview}</p>
                    </Row>
                  </Col>
                </Row>
              </ModalFilme>
              <Link to={`/details/${dados.id}`} className={styles.title}>
                {dados.original_title}
              </Link>
              <div className={styles.date}>
                {moment(dados.release_date).format("ll")}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slideshow;
