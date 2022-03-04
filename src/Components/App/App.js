import './App.css';

import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";

import {ModalCharacter} from "../ModalCharacter/ModalCharacter";
import {
  asyncGetCharacterListPage,
  asyncGetSingleCharacter,
  saveModalStatus
} from "../../Redux/Actions/CharactersAction";

import Pagination from '@mui/material/Pagination';
import {Autocomplete, Container, TextField} from "@mui/material";


const App = () => {
  const dispatch = useDispatch()

  const [valueAutocomplete, setValueAutocomplete] = useState('')

  useEffect(() => {
    dispatch(asyncGetCharacterListPage(1))
  }, [dispatch])

  const {characterList} = useSelector(({CharactersReducer}) => CharactersReducer)

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
          clearOnBlur
          value={valueAutocomplete}
          options={characterList?.results?.map((option) => option.name) || []}
          onChange={(event, newValue) => {
            newValue?.length && handleOpenModal(characterList?.results?.find(person => person.name === newValue)?.id)
          }}
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
            <div className="character-item" key={item.id} onClick={() => handleOpenModal(item.id)}>
              <img src={item.image} alt={item.name}/>
              <h3>{item.name}</h3>
              <p>{item.status}</p>
            </div>
          ))}
        </div>

        {characterList?.info?.pages &&
          <Pagination className="custom-pagination" count={characterList.info.pages} color="primary"
                      onChange={paginationChange}/>}
      </Container>
      <ModalCharacter/>
    </div>
  );
}

export default App;