import React from 'react';
import {FlatList} from 'react-native';

import NewOrders from './NewOrders';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const OrdersList = ({
  cartItems,
  onRemove,
  onAdd,
  deletable,
  style,
  addable,
}) => {
  const cartItemsArray = [];
  const {items} = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch();
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={style}
      data={items}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <NewOrders
          title={item.title}
          name={item.name}
          image={item.image}
          qty={item.qty}
          sum={item.sum}
          onRemove={() => onRemove(item)}
          onAdd={() => onAdd(item)}
          deletable={deletable}
          addable={addable}
        />
      )}
    />
  );
};

export default OrdersList;
