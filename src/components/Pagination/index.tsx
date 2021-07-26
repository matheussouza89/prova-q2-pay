import React from "react";
import { usePagination } from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { Row } from "reactstrap";

const useStyles = makeStyles({
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
  },
  button: {
    fontWeight: "bold",
    border: "solid 1px #ccc",
    borderRadius: "50%",
    outline: "none",
    cursor: "pointer",
    width: "30px",
    height: "30px",
    margin: "0px 5px 0px 5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "6px 12px",
  },
});

interface Props {
  totalPages?: number
  onPageChange?: Function
}

function Pagination ({ totalPages, onPageChange }: Props) {
  const classes = useStyles();
  const { items } = usePagination({
    count: totalPages,
  });

  return (
    <Row>
      <nav>
        <ul className={classes.ul}>
          {items.map(({ page, type, selected, disabled, onClick }, index) => {
            let children = null;
            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <div
                  className={classes.button}
                  style={{
                    backgroundColor: selected ? "#001D3D" : "#E5E4E2",
                    color: selected ? "#FFF" : undefined,
                  }}
                  onClick={() => {
                    //@ts-ignore
                    onClick();
                    onPageChange && onPageChange(page)
                  }}
                >
                  {page}
                </div>
              );
            } else {
              if (type === "next") {
                children = (
                  <div
                    className={classes.button}
                    style={{
                        backgroundColor: disabled ? "#808080" : "#E5E4E2",
                      }}
                    onClick={() => {
                      if (!disabled) {
                        //@ts-ignore
                        onClick();
                        onPageChange && onPageChange(page)
                      }
                    }}
                  >
                    {`>`}
                  </div>
                );
              }
              if (type === "previous") {
                children = (
                  <div
                    className={classes.button}
                    style={{
                      backgroundColor: disabled ? "#808080" : "#E5E4E2",
                    }}
                    onClick={() => {
                      if (!disabled) {
                        //@ts-ignore
                        onClick();
                        onPageChange && onPageChange(page)
                      }
                    }}
                  >
                    {`<`}
                  </div>
                );
              }
            }
            return <li key={index}>{children}</li>;
          })}
        </ul>
      </nav>
    </Row>
  );
}

export default Pagination;
