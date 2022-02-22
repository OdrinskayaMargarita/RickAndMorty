import React from "react";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import {useDispatch, useSelector} from "react-redux";

import "./ModalCharacters.css"
import {clearCharacterItem, saveModalStatus} from "../../Redux/Actions/CharactersAction";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  height: '90vh',
  p: 0,
};


const ModalCharacter = () => {
  const dispatch = useDispatch()
  const {characterItem} = useSelector((store) => store.CharactersReducer)
  const {modalStatus} = useSelector((store) => store.CharactersReducer)

  const closeModal = () => {
    dispatch(saveModalStatus(false))
    dispatch(clearCharacterItem())
  }

  return (
    <Modal open={modalStatus} onClose={closeModal}>
      <Box sx={style}>
        <div className="modal-characters">
          <div className="modal-characters__img">
            <img src={characterItem.image} alt={characterItem?.name}/>
          </div>
          <div className="modal-characters__txt">
            <p>Name: <b>{characterItem?.name}</b></p>
            <p>Species: <b>{characterItem?.species}</b></p>
            <p>Gender: <b>{characterItem?.gender}</b></p>
            <p>Status: <b>{characterItem?.status}</b></p>
            <p>Location: <b>{characterItem?.location?.name}</b></p>
            <p>Created: <b>{characterItem.created}</b></p>
            <ul>
              <p>Episods</p>
              {characterItem?.episode?.length ? characterItem.episode.map((episode, key) => <li key={key}>{episode}</li>) :
                <p>Any episods</p>}
            </ul>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalCharacter