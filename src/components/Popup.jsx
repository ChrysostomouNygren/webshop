import Modal from "react-bootstrap/Modal";
import { Button } from "bootstrap";
import { productsState } from "../recoil/products/atom";
import { useRecoilValue } from "recoil";


function Popup(props) {
  const products = useRecoilValue(productsState);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {products.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{products.price}</h5>
        <p>
          {products.desctription}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;


