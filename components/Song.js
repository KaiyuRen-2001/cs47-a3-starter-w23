import { Text, StyleSheet, Image, View, Dimensions } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";

const windowWidth = Dimensions.get("window").width;

export default function Song({ id, image, title, album, artist, duration }) {
  return (
    <View style={styles.windowView}>
      <View style={styles.indexView}>
        <Text style={styles.text}>{id}</Text>
      </View>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: image}}></Image>
      </View>
      <View style={styles.titleView}>
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
        <Text style={{ color: Themes.colors.gray }}>{artist}</Text>
      </View>
      <View style={styles.albumView}>
        <Text numberOfLines={1} style={styles.text}>
          {album}
        </Text>
      </View>
      <View style={styles.timeView}>
        <Text style={styles.text}>{millisToMinutesAndSeconds(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  windowView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Themes.colors.background,
    padding: 10,
  },
  titleView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "7%",
    width: "35%",
    padding: 5,
  },
  albumView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "28%",
    marginLeft: "5%",
    padding: 5,
  },
  indexView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "7%",
    marginLeft: "1%",
  },
  timeView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "3%",
    width: "10%",
  },
  imageView: {
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: 40,
    //backgroundColor: "red",
  },
  text: {
    color: Themes.colors.white,
  },
  image: {
    resizeMode: "contain",
   
    width: "100%" ,
    height: "100%",
  },
});
