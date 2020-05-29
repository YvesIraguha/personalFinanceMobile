import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '200'
  },
  value: {
    width: 150
  },
  menuContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    right: 20,
    bottom: 350,
    borderRadius: 5
  },
  menuDisplay: {
    position: 'absolute',
    zIndex: 1,
    right: 20,
    bottom: 450
  },
  menuItem: {
    margin: 1,
    padding: 10
  }
});

export default styles;
