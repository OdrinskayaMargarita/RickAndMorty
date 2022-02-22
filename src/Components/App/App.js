import './App.css';

import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";

import ModalCharacter from "../ModalCharacter/ModalCharacter";
import {
  asyncGetCharacterList,
  asyncGetCharacterListPage,
  asyncGetSingleCharacter,
  saveModalStatus
} from "../../Redux/Actions/CharactersAction";

import Pagination from '@mui/material/Pagination';
import {Autocomplete, Container, TextField} from "@mui/material";


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetCharacterList())
  }, [])

  const {characterList} = useSelector((store) => store.CharactersReducer)

  const paginationChange = (event, value) => {
    dispatch(asyncGetCharacterListPage(value))
  };

  const handleOpenModal = (id) => {
    dispatch(asyncGetSingleCharacter(id))
    dispatch(saveModalStatus(true))
  }

  return (
    <div className="App">

      <Container>
        <Autocomplete
          freeSolo
          disableClearable
          options={characterList?.results?.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search character"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />

        <div className="list-character">
          {characterList?.results?.map((item) => (
            <div className="character-item" key={item.id}>
              <img src={item.image} alt={item.name}/>
              <h3 onClick={() => handleOpenModal(item.id)}>{item.name}</h3>
              <p>{item.status}</p>
            </div>
          ))}
        </div>

        {characterList?.info?.pages ?
          <Pagination count={characterList.info.pages} color="primary" onChange={paginationChange}/> : null}
      </Container>

      <ModalCharacter/>

    </div>
  );
}

export default App;
