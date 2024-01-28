import styles from './Modal.module.scss'

function Modal({ modal, setModal, setTodos }) {
  const resetTodosHandler = () => {
    setTodos([])
    setModal(false)
  }

  return (
    <>
      {modal && (
        <div className={styles.modalContainer}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm reset</h5>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to reset all tasks?</p>
              </div>
              <div className="modal-footer gap-2 p-2">
                <button
                  onClick={() => setModal(false)}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Cancel
                </button>
                <button
                  onClick={resetTodosHandler}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Reset all tasks
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
