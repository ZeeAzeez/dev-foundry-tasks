import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Chris Rominov</Text>
        </View>

        {/* Profile Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic details</Text>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Personal</Text>
            <Text style={styles.detailValue}>Male, Single/Unmarried</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Date of birth</Text>
            <Text style={styles.detailValue}>01 Jan 2000</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Category</Text>
            <Text style={styles.detailValue}>OC</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Address</Text>
            <Text style={styles.detailValue}>Hyderabad, Telangana - 500074</Text>
          </View>

          <Text style={styles.addDetailsText}>Add more details</Text>
        </View>

        {/* More Info Link */}
        <Text style={styles.moreInfoLink}>Log Out {'>'}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#E0E7FF',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3B82F6',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  detailItem: {
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  addDetailsText: {
    color: '#3B82F6',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  moreInfoLink: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'right',
    paddingRight: 8,
  },
});

export default Profile;