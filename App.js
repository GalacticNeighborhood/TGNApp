import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import { 
  Button, 
  Card, 
  Text, 
  Container,
  DamageTable,
} from './components';
import { useColorScheme } from './hooks';

export default function App() {
  const { theme, colorScheme } = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      
      {/* <Image source={require('./assets/SpaceBackground.jpg')} style={styles.backgroundImage} /> */}
      
      {/* Hero Section */}
        <View style={[styles.heroSection, { backgroundColor: theme.background }]}>
          <Text size={32} style={styles.heroTitle} color={theme.text}>
          The Galactic Neighborhood
        </Text>
        <Text size={18} style={styles.heroSubtitle} color={theme.text}>
          A comprehensive guide to the galaxy
        </Text>
        <Button onPress={() => console.log('Explore Rules')}>
          Explore Rules
        </Button>
      </View>

      {/* Navigation Cards */}
      <Container style={{ backgroundColor: theme.secondaryBackground }}>
        <Text style={styles.sectionTitle} center>
          Quick Navigation
        </Text>
        <View style={styles.cardGrid}>
          <TouchableOpacity>
            <Card style={[styles.navCard, 
              { backgroundColor: theme.howToPlayCardBackground, borderColor: theme.howToPlayCardBorder }]}>
              <View style={styles.cardIcon}>
                <Text>⚔️</Text>
              </View>
              <Text color={theme.text} center>
                How to Play
              </Text>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card style={[styles.navCard, 
              { backgroundColor: theme.characterCardBackground, borderColor: theme.characterCardBorder }]}>
              <View style={styles.cardIcon}>
                <Text>🎲</Text>
              </View>
              <Text color={theme.text} center>
                Character Options
              </Text>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card style={[styles.navCard, 
              { backgroundColor: theme.equipmentCardBackground, borderColor: theme.equipmentCardBorder }]}>
              <View style={styles.cardIcon}>
                <Text>🏰</Text>
              </View>
              <Text color={theme.text} center>
                Equipment
              </Text>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card style={[styles.navCard, 
              { backgroundColor: theme.magicCardBackground, borderColor: theme.magicCardBorder }]}>
              <View style={styles.cardIcon}>
                <Text>📚</Text>
              </View>
              <Text color={theme.text} center>
                Magic
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
      </Container>

      <Container>
        <Text style={styles.sectionTitle} center>
          Damage Table
        </Text>
        <DamageTable columns={4} />
      </Container>

      {/* Featured Rules Section */}
      <Container>
        <Text style={styles.sectionTitle} center>
          Featured Rules
        </Text>
        <Card>
          <Text style={{ marginBottom: 10 }}>
            Character Creation
          </Text>
          <Text color={theme.text} style={{ marginBottom: 20 }}>
            Learn how to create compelling characters with our step-by-step guide. 
            From choosing your race and class to determining your character's background.
          </Text>
          <Button onPress={() => console.log('Read More')}>
            Read More →
          </Button>
        </Card>
      </Container>

      {/* Search Section */}
      <Container style={{ backgroundColor: theme.secondaryBackground }}>
        <Text style={styles.sectionTitle} center>
          Find Specific Rules
        </Text>
        <Card>
          <Text color={theme.text}>
            Search rules, keywords, or topics...
          </Text>
        </Card>
      </Container>

    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.5,
    zIndex: -1,
  },
  
  // Hero Section Styles
  heroSection: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    minHeight: 300,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  
  // Section Styles
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  
  // Navigation Card Styles
  cardGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  navCard: {
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
