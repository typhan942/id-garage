// core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, LayoutAnimation, TouchableOpacity, Text, StyleSheet, Image,
} from 'react-native';
// icons
import { AntDesign } from '@expo/vector-icons';
// redux
import { connect } from 'react-redux';
// styles
import colors from '../../assets/css/style-colors';
import Cell from '../../assets/generic-components/cell';

import logoAlert from '../../assets/images/command/alert.png';

const mapStateToProps = ({ languageReducer }) => ({
  lg: languageReducer.language,
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: 10,
    marginLeft: -10,
    marginRight: -10,
  },
  main: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.paleGrey,
    marginLeft: 10,
    marginRight: 10,
  },
  name: {
    fontSize: 13,
    fontFamily: 'GothamBold',
    flexBasis: '60%',
    color: colors.dark,
  },
  toggleBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    borderRadius: 50,
    backgroundColor: colors.WhiteDark,
    width: 45,
    height: 45,
  },
  invoiceDetail: {
    paddingHorizontal: 10,
  },
  logo: {
    width: 24,
    height: 24,
  },
  bgCell: {
    backgroundColor: colors.paleGrey,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
  },
  w20: {
    width: '20%',
  },
});
const GroupItem = ({
  lg, hasExpand = true, item,
}) => {
  // states
  const [isExpand, setIsExpand] = useState(!hasExpand);

  // methods
  const onToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpand(!isExpand);
  };

  const expandStyle = isExpand ? { height: 'auto' } : { height: 0 };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.name}>
          {item.name || ''}
        </Text>
        <View style={styles.w20}>
          {
              item.image
                ? <Image style={styles.logo} source={{ uri: item.image || '' }} />
                : <Image style={styles.logo} source={logoAlert} />
            }
        </View>

        {hasExpand
          && (
          <TouchableOpacity
            style={styles.toggleBtn}
            onPress={onToggle}
          >
            <AntDesign
              name={isExpand ? 'minus' : 'plus'}
              size={13}
              color={colors.dark}
            />
          </TouchableOpacity>
          )}
      </View>
      <View style={[styles.invoiceDetail, expandStyle]}>
        <View style={styles.bgCell}>
          <Cell price={item.price || ''} title={lg.quote.ttc} />
        </View>
      </View>
    </View>
  );
};

GroupItem.propTypes = {
  hasExpand: PropTypes.bool,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

GroupItem.defaultProps = {
  hasExpand: true,
};

export default connect(mapStateToProps)(GroupItem);
