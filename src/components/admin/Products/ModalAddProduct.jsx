import React from "react";
import { useFirestore } from "reactfire";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Icons from "../../common/Icons";

const ExchangeTypes = ["BS", "USD"];

function ModalAddProduct({ openModalEdit, toggleOpenModalEdit }) {
  const firestore = useFirestore();

  const saveChanges = () => {};

  return (
    <Modal isOpen={openModalEdit} toggle={toggleOpenModalEdit} size="md">
      <ModalHeader toggle={toggleOpenModalEdit}>Anadir producto</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="exampleEmail">Nombre del producto:</Label>
          <Input name="name" id="input-name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Enlace corto:</Label>
          <Input name="shortLink" id="input-shortLink" />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={saveChanges}>
          <Icons icon="check" className="mr-2" />
          Guardar cambios
        </Button>
        <Button color="secondary" onClick={toggleOpenModalEdit}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalAddProduct;
