import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "./style.css"

interface Results {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: Date,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

interface Props {
    banner: JSX.Element
    children: React.ReactNode
    data: Results
}

function ModalFilme(props: Props) {

  const { data } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div onClick={toggle}>
        {props.banner}
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{data.original_title}</ModalHeader>
        <ModalBody>
            {props.children}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalFilme;
