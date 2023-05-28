import {View, Image, SectionList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React  from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const DATA = [
  {
    title: 'A',
    data: ['Ali', 'Aliza', 'Aarib', "Arham", "Arsalan"],
  },
  {
    title: 'B',
    data: ['Bilal', 'Bisma', 'Baktawar',"Batool", "Basit"],
  },
  {
    title: 'C',
    data: ['Catima', 'Cummar', 'Castila',"Collingwood"],
  },
  {
    title: 'D',
    data: ['Dawood', 'Dilnawaz', 'Danial', "Dani", "Dabuu"],
  },
  {
    title: 'E',
    data: ['Eshal', 'Eman', 'Eiman',"Enna", "Ezma"],
  },
  {
    title: 'F',
    data: ['Farhan', 'Faham', 'faisal',"Farooq","Furqan"],
  },
  {
    title: 'G',
    data: ['Ghazala', 'Gaznavi', 'Gous'],
  },
  {
    title: 'H',
    data: ['Hammas', 'Hania', 'Hiba', "Hamza"],
  },
  {
    title: 'I',
    data: ['Irfan', 'Izhan', 'Iqila'],
  },
  {
    title: 'J',
    data: ['Junejo', 'Junaid', 'javaid', "Jhangir","Jazim",],
  },
  {
    title: 'K',
    data: ['Kumail', 'Kashif', 'Khalil',"Kaiser",
    "kami",
    "Kamran"
  ],
  },
  {
    title: 'L',
    data: ['Laraib', 'Lubna', 'lamela'],
  },
  {
    title: 'M',
    data: ['maaz', 'Muaz', 'Manzoor',"Mohid",
  "Muniba",
"mehak"],
  },
  // Add more sections and contacts as needed
];



const alphabet = [...new Set(DATA.map(item => item.title))];

const App = () => {


  const [selectedAlphabet, setSelectedAlphabet] = useState('');
  

  const renderItem = ({ item }) => (
    <View style={style.item}>
      <Text style={style.title}>{item}</Text>
    </View>
  );



  const renderSectionHeader = ({ section }) => (
    <View style={style.sectionHeader}>
      <Text style={style.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  const handleAlphabetSelection = (letter) => {
    setSelectedAlphabet(letter);
  };

  const filteredData = DATA.filter(item => item.title === selectedAlphabet);



  return (
    <View style={style.container}>
      <View style={style.header}>
        <Ionicons name="arrow-back-outline" size={25} color="#000" />
        <Image source={require('./Assets/zimo.png')} style={style.imgheader} />
        <Ionicons name="arrow-forward-outline" size={25} color="#000" />
      </View>
      <View style={style.line}></View>
      <View style={style.afterline}>
        <Text style={style.textfill}>Fill up this form</Text>
        <Text style={style.contact}>CONTACTS</Text>
        <View>
          <Ionicons name="person-add-sharp" size={30} color="#FFE194" />
        </View>
      </View>
      <View style={style.afterline}>
        <View style={style.imagecontainer}>
          <Image
            style={style.insideimg}
            source={require('./Assets/dummy.jpg')}
          />
        </View>
        <Text style={style.nameuser}>Edin Adam</Text>
        <View style={{top: 40}}>
          <Ionicons name="add" size={30} color="#FFE194" />
        </View>
      </View>
      <View style={style.lineafter}></View>

      <View style={style.container}>
      <View style={style.contentContainer}>
        <SectionList
          sections={filteredData.length > 0 ? filteredData : DATA}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item, index) => item + index}
        />
        <View style={style.alphabetContainer}>
          {alphabet.map((letter) => (
            <TouchableOpacity
              key={letter}
              onPress={() => handleAlphabetSelection(letter)}
              style={[
                style.alphabetButton,
                selectedAlphabet === letter && style.alphabetButtonSelected,
              ]}
            >
              <Text style={style.alphabetButtonText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  header: {
    flexDirection: 'row',
    top: 8,
    justifyContent: 'space-between',
  },
 
  line: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#FFE194',
    alignSelf: 'center',
    top:9
  },
  afterline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  textfill: {
    fontSize: 15,
    fontWeight: '300',
    top: 2,
    marginLeft: 10,
  },
  contact: {
    fontSize: 20,
    fontWeight: '500',
    top: 2,
    color: 'black',
  },
  lineafter: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#FFE194',
    marginTop: 30,
    alignSelf: 'center',
  },
  imagecontainer: {
    backgroundColor: 'teal',
    height: 80,
    width: 80,
    borderRadius: 50,
    marginLeft: 20,
  },
  insideimg: {
    height: 80,
    aspectRatio: 1,
  },
  nameuser: {
    fontSize: 20,
    fontWeight: '300',
    top: 30,
    color: 'black',
    marginRight:140,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
  },
  sectionHeader: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  sectionHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  alphabetContainer: {
    alignItems: 'center',
    marginLeft: 1,
  },
  alphabetButton: {
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  alphabetButtonSelected: {
    backgroundColor: '#FFE194',
  },
  alphabetButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
