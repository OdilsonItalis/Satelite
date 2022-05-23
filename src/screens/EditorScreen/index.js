import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View, Text, Image} from 'react-native';
import {
  faFileWord,
  faBookOpen,
  faGraduationCap,
  faInfoCircle,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../../components/AppHeader';
import FooterBar from '../../components/FooterBar';

import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const EditorScreen = () => {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.mainContainer}>
        <AppHeader />
        <Text style={styles.title}>HailyAI Editor</Text>
        <View style={styles.contentRow}>
          <View style={styles.descriptionContainer}>
            <View style={styles.countsWrapper}>
              <FontAwesomeIcon icon={faFileWord} size={20} color="white" />
              <Text style={styles.countNumbers}>12</Text>
              <FontAwesomeIcon icon={faBookOpen} size={20} color="white" />
              <Text style={styles.countNumbers}>58</Text>
              <FontAwesomeIcon icon={faGraduationCap} size={25} color="white" />
              <Text style={styles.countNumbers}>12 Grade</Text>
            </View>
            <View style={styles.descriptionTextContainer}>
              <Text style={styles.descriptionText}>
                How To Write Blog Articles
                {'\n'}
                {'\n'}
                Product Descripton: This course will teach you how to write blog
                posts that are more than just simple links to web pages. It will
                also help you craft compelling headlines and build search engine
                friendly content.
                {'\n'}
                {'\n'}
                About this Course: In this course, you will learn how to create
                high quality blog post content that will attract readers and get
                indexed by search engines. You will also learn how to add social
                media sharing buttons to your blog posts so they can be shared
                on Facebook, Twitter, Google+ and other networks. Finally,
                you'll learn how to optimize your blog posts for SEO.
              </Text>
            </View>
          </View>
          <View style={styles.recommendationContainer}>
            <TouchableOpacity>
              <View style={styles.actionButton}>
                <Text style={styles.buttonText}>Scan Document</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionButton}>
                <Text style={styles.buttonText}>Plagarism Check</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.recommendationTitle}>Recommendations</Text>
            <View style={styles.infoItemRow}>
              <FontAwesomeIcon icon={faInfoCircle} size={23} color="#363d43" />
              <View style={styles.infoTextWrapper}>
                <Text style={styles.recommendItemTitle}>Recommendation</Text>
                <Text style={styles.recommendItemDesc}>Example replace</Text>
              </View>
            </View>

            <View style={styles.infoItemRow}>
              <FontAwesomeIcon icon={faInfoCircle} size={23} color="#363d43" />
              <View style={styles.infoTextWrapper}>
                <Text style={styles.recommendItemTitle}>Recommendation</Text>
                <Text style={styles.recommendItemDesc}>Example replace</Text>
              </View>
            </View>

            <View style={styles.infoItemRow}>
              <FontAwesomeIcon icon={faInfoCircle} size={23} color="#363d43" />
              <View style={styles.infoTextWrapper}>
                <Text style={styles.recommendItemTitle}>Recommendation</Text>
                <Text style={styles.recommendItemDesc}>Example replace</Text>
              </View>
            </View>

            <View style={styles.infoItemRow}>
              <FontAwesomeIcon icon={faInfoCircle} size={23} color="#363d43" />
              <View style={styles.infoTextWrapper}>
                <Text style={styles.recommendItemTitle}>Recommendation</Text>
                <Text style={styles.recommendItemDesc}>Example replace</Text>
              </View>
            </View>
            <View style={styles.checkRow}>
              <TouchableOpacity>
                <FontAwesomeIcon
                  style={styles.checkIcon}
                  icon={faCheck}
                  size={25}
                  color="#29943d"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faTimes} size={25} color="#be0a1c" />
              </TouchableOpacity>
            </View>
            <View style={styles.imageRow}>
              <Image
                style={styles.img}
                source={require('../../assets/images/img1.jpg')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/images/img2.jpg')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/images/img3.jpg')}
              />
            </View>
            <View style={styles.checkRow}>
              <TouchableOpacity>
                <Image
                  style={styles.downloadIcon}
                  source={require('../../assets/images/download.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.downloadIcon}
                  source={require('../../assets/images/trash.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FooterBar />
      </View>
    </View>
  );
};

export default EditorScreen;
