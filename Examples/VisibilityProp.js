class Modal extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (prevProps.isOpen) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  render() {
    const { isOpen, close, children, allowOverflow } = this.props;

    if (!isOpen) {
      return null;
    }

    return createPortal(
      <Background onClick={dismiss}>
        <ModalContainer
          width={modalWidth}
          onClick={e => e.stopPropagation()}
          allowOverflow={allowOverflow}
        >
          {React.Children.map(children, child => {
            if (!child) {
              return null;
            }
            return React.cloneElement(child, {
              close
            });
          })}
        </ModalContainer>
      </Background>,
      document.body
    );
  }
}