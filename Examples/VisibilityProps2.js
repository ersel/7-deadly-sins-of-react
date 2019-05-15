return (
  <React.Fragment>
    {isOpen && (
      <Modal bgDismiss={false}>
        <ModalBody>
          <p>
            Are you sure you want to <b>remove</b> this record?
          </p>
        </ModalBody>
      </Modal>
    )}
  </React.Fragment>
);
