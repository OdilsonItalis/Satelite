import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCameraRetro,
  faArrowRight,
  faVideo,
  faDownload,
  faEllipsisH,
  faMicrophone,
  faSearch,
  faFileWord,
  faBookOpen,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import {View, Text, Image, TextInput} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.mainContainer}>
        <View style={styles.headRow}>
          <View>
            <Text style={styles.greeting}>Good Afternoon</Text>
            <Text style={styles.name}>Avery Davis</Text>
            <Text style={styles.wordCount}>Word count: 18, 578</Text>
          </View>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={require('../../assets/images/avatar.jpg')}
            />
            <Text style={styles.avaName}>HailyAI Settings</Text>
          </View>
        </View>

        <View style={styles.tempVideo} />

        <Text style={styles.skillsTitle}>Featured Playground Skills</Text>
        <View style={styles.skillsRow}>
          <TouchableOpacity>
            <View style={styles.skillWrapper}>
              <View style={styles.skillIconWrapper}>
                <FontAwesomeIcon icon={faCameraRetro} color="white" />
              </View>
              <Text style={styles.skillText}>Skill 1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.skillWrapper}>
              <View style={styles.skillIconWrapper}>
                <FontAwesomeIcon icon={faArrowRight} color="white" />
              </View>
              <Text style={styles.skillText}>Skill 2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.skillWrapper}>
              <View style={styles.skillIconWrapper}>
                <FontAwesomeIcon icon={faVideo} color="white" />
              </View>
              <Text style={styles.skillText}>Skill 3</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.skillWrapper}>
              <View style={styles.skillIconWrapper}>
                <FontAwesomeIcon icon={faDownload} color="white" />
              </View>
              <Text style={styles.skillText}>Skill 4</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.skillWrapper}>
              <View style={styles.skillIconWrapper}>
                <FontAwesomeIcon icon={faEllipsisH} color="white" />
              </View>
              <Text style={styles.skillText}>More</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} />
          <FontAwesomeIcon size={30} icon={faMicrophone} color="#737373" />
          <View style={styles.searchIconWrapper}>
            <FontAwesomeIcon size={30} icon={faSearch} color="white" />
          </View>
        </View>
        <View style={styles.contentTitleRow}>
          <Text style={styles.contentTitle}>Recent Content</Text>
          <View>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
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
            <Text style={styles.contentName}>Content 2</Text>
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
            <Text style={styles.contentName}>Content 3</Text>
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
        <View style={styles.footerBar}>
          <View style={styles.tempChart} />
          <Text style={styles.graphTitle}>
            Authorized
            {'\n'}
            Reseller
          </Text>
          <View style={styles.spliter} />
          <View>
            <Text style={styles.paysTitle}>Pays Residuals</Text>
            <Text style={styles.comission}>
              <Text style={styles.comissionCount}>30%</Text> Comission
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
