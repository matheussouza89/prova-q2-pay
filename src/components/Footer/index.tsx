import React from "react";
import { Col, Label, Row } from "reactstrap";
import styles from "./style.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Col md={3}>
        <div className={styles.logo}></div>
      </Col>
      <Col>
        <div className={styles.menu}>
          <Row>
            <Label>O BÁSICO</Label>
            <a href="/">Contrate-nos</a>
            <a href="/">Suporte</a>
            <a href="/">API</a>
          </Row>
        </div>
      </Col>
      <Col>
        <div className={styles.menu}>
          <Row>
            <Label>COMUNIDADE</Label>
            <a href="/">Diretrizes</a>
            <a href="/">Discussões</a>
            <a href="/">Twitter</a>
          </Row>
        </div>
      </Col>
      <Col>
        <div className={styles.menu}>
          <Row>
            <Label>LEGALIDADE</Label>
            <a href="/">Termos de uso</a>
            <a href="/">Termos de uso da API</a>
            <a href="/">Política de privacidade</a>
          </Row>
        </div>
      </Col>
    </div>
  );
};

export default Footer;
