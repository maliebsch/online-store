import React from 'react';
import styles from './Filter.module.css';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const Filter = ({ sort, size, numberOfProducts, changeSize, changeSort }) => {
  return (
    <div className={styles.productFilter}>
      <div className={styles.filter}>
        <div className={styles.size}>
          <FormControl className={styles.formControl}>
            <InputLabel id="size">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              className={styles.sizeSelect}
              value={size}
              onChange={changeSize}
            >
              <MenuItem value={100}>100ml</MenuItem>
              <MenuItem value={150}>150ml</MenuItem>
              <MenuItem value={350}>350ml</MenuItem>
              <MenuItem value={500}>500ml</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.sort}>
          <FormControl className={styles.formControl}>
            <InputLabel id="sort">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              className={styles.sortSelect}
              value={sort}
              onChange={changeSort}
            >
              <MenuItem value={'lowest'}>Lowest to highest</MenuItem>
              <MenuItem value={'highest'}>Highest to lowest</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <p>{numberOfProducts} products found </p>
    </div>
  );
};

export default Filter;
