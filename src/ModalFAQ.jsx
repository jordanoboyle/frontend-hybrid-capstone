import "./ModalFAQ.css";

export function ModalFAQ(props) {
  if (props.show) {
    return(
      <div className="modal-background">
        <section className="modal-main">
          {props.children}  {/* this is a special tag that allows drop in children throughout the modal*/}
        <button className="close" type="button" onClick={props.onClose}>
          &#x2715;
        </button>
        </section>
      </div>
    )
  }
}