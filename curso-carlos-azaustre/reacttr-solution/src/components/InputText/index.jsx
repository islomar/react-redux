import React, { PropTypes} from 'react'
import styles from './input-text.css'

const propTypes = {
  userNameToReply: PropTypes.string.isRequired,
  onSendText: PropTypes.func.isRequired,
  onCloseText: PropTypes.func.isRequired
}

function InputText ({ onSendText, userNameToReply, onCloseText }) {
  return (
    <form className={styles.form} method='post' onSubmit={onSendText}>
      <textarea className={styles.text} name='text'>
        {(userNameToReply) ? `@${userNameToReply} ` : ''}
      </textarea>
      <div className={styles.buttons}>
        <button className={styles.close} onClick={onCloseText}>Cerrar</button>
        <button className={styles.send} type='submit'>Enviar</button>
      </div>
    </form>
  )
}

InputText.propTypes = propTypes

export default InputText
