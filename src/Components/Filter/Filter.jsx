import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetCharacterListPage, clearParams, writeParams} from "../../Redux/Actions/CharactersAction";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import './Filter.css';


export const Filter = () => {
  const dispatch = useDispatch()
  const {params} = useSelector(({CharactersReducer}) => CharactersReducer)

  useEffect(() => {
    dispatch(asyncGetCharacterListPage(params?.currentPage, params?.filterGender, params?.filterStatus, params?.filterSpecies))
  }, [params])

  const handleFilter = ({target}) => {
    dispatch(writeParams(target.name, target.value))
  }

  const clearFilter = () => {
    dispatch(clearParams())
  }

  return (
    <>
      <Button onClick={() => clearFilter()}>Clear Filter</Button>
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Select labelId="gender" id="gender"
                onChange={(e) => handleFilter(e)} value={params?.filterGender} name="gender">
          <MenuItem value='female'>Female</MenuItem>
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='genderless'>Genderless</MenuItem>
          <MenuItem value='unknown'>Other</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select labelId="gender" id="gender"
                onChange={(e) => handleFilter(e)} value={params?.filterStatus} name="status">
          <MenuItem value='alive'>Alive</MenuItem>
          <MenuItem value='dead'>Dead</MenuItem>
          <MenuItem value='unknown'>Other</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Species</InputLabel>
        <Select labelId="gender" id="gender"
                onChange={(e) => handleFilter(e)} value={params?.filterSpecies} name="species">
          <MenuItem value='human'>Human</MenuItem>
          <MenuItem value='alien'>Alien</MenuItem>
          <MenuItem value='humanoid'>Humanoid</MenuItem>
          <MenuItem value='robot'>Robot</MenuItem>
          <MenuItem value='animal'>Animal</MenuItem>
          <MenuItem value='cronenberg'>Cronenberg</MenuItem>
          <MenuItem value='poopybutthole'>Poopybutthole</MenuItem>
          <MenuItem value='disease'>Disease</MenuItem>
          <MenuItem value='unknown'>Other</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}