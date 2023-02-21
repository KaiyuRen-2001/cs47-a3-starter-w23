import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  console.log("tracks", tracks);
  console.log("token", token);

  let contentDisplayed = null; // let because will get reassigned

  if (token){
    contentDisplayed = <SongList tracks={tracks} />
  } else{
    contentDisplayed = <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authButton: {
    backgroundColor: Themes.colors.spotify,
  },
  authText: {
    color: "white"
  }
});
