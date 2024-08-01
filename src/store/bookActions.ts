import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk('getBooks', async () => {
  try {
    const {data} = await axios.get(
      'https://649ea51c245f077f3e9cb5bc.mockapi.io/books',
    );
    console.log('dataAPIiiii', data);
    return data;
  } catch (error) {
    console.log(error);
  }
});
