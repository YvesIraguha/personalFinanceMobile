
import EStyleSheet from 'react-native-extended-stylesheet';

const imageDimensions = (width, aspectRatio) => ({
  height: undefined,
  aspectRatio,
  width,
});

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cashContainer: {
    marginLeft: 10,
  },
  editImage: {
    marginLeft: 5,
    ...imageDimensions(15, 1),
  },
  text: {
    fontSize: '13rem',
  },
  headerImage: {
    marginLeft: 5,
    borderRadius: 15,
    ...imageDimensions(32, 1),
  },
  expenseContainer: {
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  plusIcon: {
    ...imageDimensions('32rem', 1),
    tintColor: 'rgba(0, 0, 0, 0.54)',
    marginTop: 10,
    marginLeft: '20rem',
  },
  cancelIconContainer: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  cancelIcon: {
    ...imageDimensions(20, 1),
    tintColor: 'rgba(0,0,0,0.54)',
  },
  nexExpenseContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  newExpenseTitle: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: '15rem',
    marginBottom: 10,
  },
  inputsContainer: { alignSelf: 'center', margin: 10 },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '10rem',
  },
  inputLabel: {
    fontSize: '15rem',
    fontWeight: '100',
  },
  input: {
    fontSize: '15rem',
    fontWeight: '100',
    minWidth: 50,
    marginLeft: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: '1rem',
    ...imageDimensions('75rem', 64 / 21),
  },
  saveButton: {
    ...imageDimensions('80rem', 83 / 21),
    backgroundColor: '#8E20E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '900',
  },
  saveButtonContainer: {
    alignSelf: 'center',
    margin: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 2.5,
    borderColor: '#8E20E3',
  },
});

export default styles;
