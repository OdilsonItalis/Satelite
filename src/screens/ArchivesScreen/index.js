import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFileWord,
  faBookOpen,
  faGraduationCap,
  faCalendar,
  faSearch,
  faMicrophone,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppHeader from '../../components/AppHeader';
import FooterBar from '../../components/FooterBar';

import {styles} from './styles';

const ArchivesScreen = () => {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.mainContainer}>
        <AppHeader />
        <Text style={styles.title}>Archives</Text>
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <FontAwesomeIcon icon={faSearch} size={15} color="black" />
            <TextInput style={styles.searchInput} />
            <TouchableOpacity>
              <FontAwesomeIcon icon={faMicrophone} size={20} color="#707070" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faTimes} size={15} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faCalendar} size={30} color="#707070" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentTitleRow}>
          <Text style={styles.contentTitle}>Recent Content</Text>
          <View>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.contentsContainer}>
          <View style={styles.contentRow}>
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/download.png')}
            />
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/trash.png')}
            />
            <View>
              <Text style={styles.contentName}>Content 1</Text>
              <Text style={styles.contentDate}>02.15 PM - Sept 17, 2022</Text>
            </View>
            <View style={styles.rightCountsWrapper}>
              <FontAwesomeIcon icon={faFileWord} color="white" />
              <Text style={styles.countNumbers}>12</Text>
              <FontAwesomeIcon icon={faBookOpen} color="white" />
              <Text style={styles.countNumbers}>58</Text>
              <FontAwesomeIcon icon={faGraduationCap} color="white" />
              <Text style={styles.countNumbers}>12</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/download.png')}
            />
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/trash.png')}
            />
            <View>
              <Text style={styles.contentName}>Content 1</Text>
              <Text style={styles.contentDate}>02.15 PM - Sept 17, 2022</Text>
            </View>
            <View style={styles.rightCountsWrapper}>
              <FontAwesomeIcon icon={faFileWord} color="white" />
              <Text style={styles.countNumbers}>12</Text>
              <FontAwesomeIcon icon={faBookOpen} color="white" />
              <Text style={styles.countNumbers}>58</Text>
              <FontAwesomeIcon icon={faGraduationCap} color="white" />
              <Text style={styles.countNumbers}>12</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/download.png')}
            />
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/trash.png')}
            />
            <View>
              <Text style={styles.contentName}>Content 1</Text>
              <Text style={styles.contentDate}>02.15 PM - Sept 17, 2022</Text>
            </View>
            <View style={styles.rightCountsWrapper}>
              <FontAwesomeIcon icon={faFileWord} color="white" />
              <Text style={styles.countNumbers}>12</Text>
              <FontAwesomeIcon icon={faBookOpen} color="white" />
              <Text style={styles.countNumbers}>58</Text>
              <FontAwesomeIcon icon={faGraduationCap} color="white" />
              <Text style={styles.countNumbers}>12</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/download.png')}
            />
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/trash.png')}
            />
            <View>
              <Text style={styles.contentName}>Content 1</Text>
              <Text style={styles.contentDate}>02.15 PM - Sept 17, 2022</Text>
            </View>
            <View style={styles.rightCountsWrapper}>
              <FontAwesomeIcon icon={faFileWord} color="white" />
              <Text style={styles.countNumbers}>12</Text>
              <FontAwesomeIcon icon={faBookOpen} color="white" />
              <Text style={styles.countNumbers}>58</Text>
              <FontAwesomeIcon icon={faGraduationCap} color="white" />
              <Text style={styles.countNumbers}>12</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/download.png')}
            />
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/trash.png')}
            />
            <View>
              <Text style={styles.contentName}>Content 1</Text>
              <Text style={styles.contentDate}>02.15 PM - Sept 17, 2022</Text>
            </View>
            <View style={styles.rightCountsWrapper}>
              <FontAwesomeIcon icon={faFileWord} color="white" />
              <Text style={styles.countNumbers}>12</Text>
              <FontAwesomeIcon icon={faBookOpen} color="white" />
              <Text style={styles.countNumbers}>58</Text>
              <FontAwesomeIcon icon={faGraduationCap} color="white" />
              <Text style={styles.countNumbers}>12</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/download.png')}
            />
            <Image
              style={styles.downloadIcon}
              source={require('../../assets/images/trash.png')}
            />
            <View>
              <Text style={styles.contentName}>Content 1</Text>
              <Text style={styles.contentDate}>02.15 PM - Sept 17, 2022</Text>
            </View>
            <View style={styles.rightCountsWrapper}>
              <FontAwesomeIcon icon={faFileWord} color="white" />
              <Text style={styles.countNumbers}>12</Text>
              <FontAwesomeIcon icon={faBookOpen} color="white" />
              <Text style={styles.countNumbers}>58</Text>
              <FontAwesomeIcon icon={faGraduationCap} color="white" />
              <Text style={styles.countNumbers}>12</Text>
            </View>
          </View>
        </ScrollView>

        <FooterBar />
      </View>
    </View>
  );
};

export default ArchivesScreen;
