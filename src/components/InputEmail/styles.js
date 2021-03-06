import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/utils';

const Styles = StyleSheet.create({
  input: {
    marginLeft: 10,
  },

  container: {
    borderRadius: 5,
    backgroundColor: '#fff',
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('90%'),
    marginTop: heightPercentageToDP('5%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: widthPercentageToDP('1.5%'),
  },
});

export default Styles;
