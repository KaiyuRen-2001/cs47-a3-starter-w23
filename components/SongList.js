import { FlatList, Text, ScrollView, SafeAreaView , Dimensions, StyleSheet, View, Image} from "react-native";
import Song from "./Song";
import { Themes } from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const renderItem = ({ item, index }) => (
  //console.log(item)
  <Song
    id={index + 1}
    image={item.imageURL}
    title={item.songTitle}
    album={item.albumName}
    artist={item.songArtists[0].name}
    duration={item.duration}
  />
  
);

const SongList = ({tracks}) => {
  return (
    <SafeAreaView>
      
      
      <ScrollView>
        <FlatList
          data={tracks}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topBar: {
    display: "flex",
    flexDirection: "row",
    height: windowHeight * 0.05,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },

});
export default SongList;
