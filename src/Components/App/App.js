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
import Grid from '@mui/material/Grid';


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

        <Grid sx={{flexGrow: 1}} container spacing={3} columns={12}>
          {characterList?.results?.map((item) => (
            <Grid item xs={3}>
              <div className="character-item" key={item.id} onClick={() => handleOpenModal(item.id)}>
                <img src={item.image} alt={item.name}/>
                <h3>{item.name}</h3>
                <p>{item.status}</p>
              </div>
            </Grid>
          ))}
        </Grid>

        {characterList?.info?.pages &&
          <Pagination className="custom-pagination" count={characterList.info.pages} color="primary"
                      onChange={paginationChange}/>}
      </Container>
      <ModalCharacter/>
    </div>
  );
}

export default App;