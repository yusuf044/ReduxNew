import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import FoodAPI from '../APIs/MyAPI';
import MyView from '../components/MyView';
import UserImage from '../components/UserImage';
import MyText from '../components/MyText';
import Search from '../components/Search';
import Catogry from '../components/Catogry';
import FoodCard from '../components/FoodCard';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {addItem} from '../store/cartReducer';

function FoodScreen({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {items} = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch();
  // function getTotalQuantity(data) {
  //   try {
  //     const items = data.items;
  //     if (items) {
  //       const totalQuantity = Object.values(items).reduce(
  //         (sum, item) => sum + (item.qty || 0),
  //         0,
  //       );
  //       return totalQuantity;
  //     } else {
  //       return 0;
  //     }
  //   } catch (error) {
  //     console.error(`An error occurred: ${error}`);
  //     return 0;
  //   }
  // }
  console.log('items====FoodScreen', items);
  console.log('data', data);

  useEffect(() => {
    getFoods();
  }, []);

  function getFoods() {
    setLoading(true);
    FoodAPI.get('gBEMjx/06ff04fd5a1cf2ffa5d520cc3f7d2dd7376087b1/files/Food')
      .then(async function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }

  return (
    <MyView style={styles.con}>
      {/* <Feather
        style={{position: 'absolute', top: 5.5, left: 17}}
        name="menu"
        size={36.9}
      /> */}
      <UserImage image={require('../assets/avatar.jpeg')} />
      <MyText
        style={{marginTop: 57, marginBottom: 7, marginLeft: 21, fontSize: 19}}>
        Choose the
      </MyText>
      <MyText boldy style={styles.text}>
        Food You Love
      </MyText>
      <Search />
      <MyText style={styles.text}>Catogries</MyText>
      <View style={{height: 100}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Catogry title="Pizza" icon={require('../assets/food/piza.png')} />
          <Catogry
            title="French fries"
            icon={require('../assets/food/frenchFries.png')}
          />
          <Catogry
            title="Teh Special"
            icon={require('../assets/food/food.png')}
          />
          <Catogry title="K F C" icon={require('../assets/food/KFC.png')} />
        </ScrollView>
      </View>
      <MyText style={styles.text}>Main Dishes</MyText>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => (
          <FoodCard
            title={item.title}
            price={item.price}
            image={item.image}
            onPress={() => {
              dispatch(addItem(item));
            }}
          />
        )}
      />
      <ActivityIndicator
        animating={loading}
        size="large"
        color="red"
        style={{position: 'absolute', top: '67%', left: '50%'}}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 29,
          right: 23,
          borderRadius: 20.5,
          flexDirection: 'row',
          width: 100,
        }}
        onPress={() => {
          navigation.navigate('NewOrder');
        }}>
        <MyText
          boldy
          style={{
            color: 'white',
            fontSize: 20,
            width: 50,
            textAlign: 'center',
          }}>
          {/* {getTotalQuantity(cart)} */}
          {items.length}
        </MyText>
        <Image
          tintColor={'white'}
          source={require('../assets/icons/cart.png')}
          style={{height: 30, width: 30}}
        />
      </TouchableOpacity>
    </MyView>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#f7f6ff',
  },
  text: {
    marginLeft: 21,
    fontSize: 19,
    marginBottom: 13,
  },
});
export default FoodScreen;
