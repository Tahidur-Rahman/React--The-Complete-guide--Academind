import React, { useState } from "react";
import Modal from "./Components/Modal";
import UserForm from "./Components/UserForm";
import Users from "./Components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalText,setModalText] = useState('')

  const addUser = (e) => setUsers((prev) => [...prev, e]);
  const setModal = e => setShowModal(e)
  const closeModal = e => setShowModal(e)
  const setText = e => setModalText(e)

  return (
    <div className="App">
      <UserForm addUser={addUser} setModal={setModal} setText={setText}/>
      <Users users={users} />
      {showModal && <Modal modalText={modalText} closeModal={closeModal}/>}
    </div>
  );
}

export default App;
