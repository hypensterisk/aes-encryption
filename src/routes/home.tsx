/** @format */

import {
  faCopy,
  faKey,
  faLock,
  faLockOpen,
  faMessage,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {AES, enc} from 'crypto-js'
import {useFormik} from 'formik'
import {useState} from 'react'
import {Button, Card, Form, InputGroup, Nav} from 'react-bootstrap'

export default function Home() {
  const [activeKey, setActiveKey] = useState('encrypt')
  return (
    <Card bg='dark' border='primary' text='light'>
      <Card.Header>
        <Nav
          activeKey={activeKey}
          onSelect={(key) => setActiveKey(key)}
          justify
          variant='pills'>
          <Nav.Link eventKey='encrypt'>Encrypt</Nav.Link>
          <Nav.Link eventKey='decrypt'>Decrypt</Nav.Link>
        </Nav>
      </Card.Header>
      <Card.Body>
        {activeKey === 'encrypt' ? <Encrypt /> : <Decrypt />}
      </Card.Body>
    </Card>
  )
}

function Encrypt() {
  const [encrypted, setEncrypted] = useState('')
  const {values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      message: '',
      key: '',
    },
    onSubmit: ({message, key}) =>
      setEncrypted(AES.encrypt(message, key).toString()),
  })
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className='mb-2'>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faMessage} />
        </InputGroup.Text>
        <Form.Control
          id='message'
          onChange={(event) => {
            setEncrypted('')
            handleChange(event)
          }}
          type='text'
          value={values.message}
          placeholder='Message'
        />
      </InputGroup>
      <InputGroup className='mb-2'>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faKey} />
        </InputGroup.Text>
        <Form.Control
          id='key'
          onChange={(event) => {
            setEncrypted('')
            handleChange(event)
          }}
          type='text'
          value={values.key}
          placeholder='Key'
        />
      </InputGroup>
      <Button type='submit' className='d-block mx-auto mb-2'>
        <FontAwesomeIcon icon={encrypted === '' ? faLockOpen : faLock} />{' '}
        Encrypt
      </Button>
      <InputGroup className='mb-2'>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faLock} />
        </InputGroup.Text>
        <Form.Control
          id='encrypted'
          onChange={handleChange}
          type='text'
          value={encrypted}
          placeholder='Encrypted'
        />
        <Button
          type='button'
          onClick={() => navigator.clipboard.writeText(encrypted)}>
          <FontAwesomeIcon icon={faCopy} />
        </Button>
      </InputGroup>
    </Form>
  )
}

function Decrypt() {
  const [decrypted, setDecrypted] = useState('')
  const {values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      ciphertext: '',
      key: '',
    },
    onSubmit: ({ciphertext, key}) =>
      setDecrypted(AES.decrypt(ciphertext, key).toString(enc.Utf8)),
  })
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className='mb-2'>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faLock} />
        </InputGroup.Text>
        <Form.Control
          id='ciphertext'
          onChange={(event) => {
            setDecrypted('')
            handleChange(event)
          }}
          type='text'
          value={values.ciphertext}
          placeholder='Ciphertext'
        />
      </InputGroup>
      <InputGroup className='mb-2'>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faKey} />
        </InputGroup.Text>
        <Form.Control
          id='key'
          onChange={(event) => {
            setDecrypted('')
            handleChange(event)
          }}
          type='text'
          value={values.key}
          placeholder='Key'
        />
      </InputGroup>
      <Button type='submit' className='d-block mx-auto mb-2'>
        <FontAwesomeIcon icon={decrypted === '' ? faLock : faLockOpen} />{' '}
        Decrypt
      </Button>
      <InputGroup className='mb-2'>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faLockOpen} />
        </InputGroup.Text>
        <Form.Control
          id='decrypted'
          onChange={handleChange}
          type='text'
          value={decrypted}
          placeholder='Decrypted'
        />
        <Button
          type='button'
          onClick={() => navigator.clipboard.writeText(decrypted)}>
          <FontAwesomeIcon icon={faCopy} />
        </Button>
      </InputGroup>
    </Form>
  )
}
