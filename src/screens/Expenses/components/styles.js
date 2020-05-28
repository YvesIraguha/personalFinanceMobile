import EStyleSheet from 'react-native-extended-stylesheet';

import { StyleSheet } from 'react-native';

const imageDimensions = (width, aspectRatio) => ({
  height: undefined,
  aspectRatio,
  width
});

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  cashContainer: {
    marginLeft: 10
  },
  moreIcon: {
    marginLeft: 5,
    ...imageDimensions(15, 1)
  },
  text: {
    fontSize: '13rem'
  },
  headerImage: {
    marginLeft: 5,
    borderRadius: 15,
    ...imageDimensions(32, 1)
  },
  expenseContainer: {
    flex: 13,
    marginVertical: 2
  },
  expenseAvatarContainer: {
    flex: 2,
    alignItems: 'center',
    margin: 10
  },
  expenseAvatar: {
    marginHorizontal: 20,
    ...imageDimensions('40rem', 1),
    borderRadius: '20rem'
  },
  profileAvatar: {
    marginLeft: 20,
    ...imageDimensions('38rem', 1),
    borderRadius: '19rem'
  },
  data: {
    flexDirection: 'row',
    paddingVertical: 5,
    flex: 11,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  time: {
    fontWeight: '200',
    marginRight: 10,
    fontSize: 12
  },
  title: {
    fontWeight: '300',
    marginBottom: 5,
    fontSize: 16
  },
  price: {
    fontWeight: '200',
    fontSize: 13
  },
  plusIcon: {
    ...imageDimensions('32rem', 1),
    tintColor: 'rgba(0, 0, 0, 0.54)',
    marginTop: 10,
    marginLeft: '20rem'
  },
  cancelIconContainer: {
    alignSelf: 'flex-end',
    margin: 10
  },
  cancelIcon: {
    ...imageDimensions(20, 1),
    tintColor: 'rgba(0,0,0,0.54)'
  },
  nexExpenseContainer: {
    backgroundColor: 'white',
    borderRadius: 8
  },
  newExpenseTitle: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: '15rem'
  },
  inputsContainer: { alignSelf: 'center', margin: 10 },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10rem'
  },
  inputLabel: {
    fontSize: '15rem',
    fontWeight: '100'
  },
  input: {
    fontSize: '15rem',
    fontWeight: '100',
    minWidth: 50,
    marginLeft: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: '1rem',
    ...imageDimensions('75rem', 64 / 21)
  },
  saveButton: {
    ...imageDimensions('80rem', 83 / 21),
    backgroundColor: '#8E20E3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '900'
  },
  saveButtonContainer: {
    alignSelf: 'center',
    margin: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 2.5,
    borderColor: '#8E20E3'
  },
  errorContainer: {
    height: 20,
    marginTop: 10,
    alignItems: 'center'
  },
  errorMessage: {
    color: 'red'
  },
  addExpense: {
    // position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    borderRadius: 28,
    // right: 40,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 14
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 10,
    backgroundColor: '#009688',
    bottom: 30
  }
});

export default styles;
