import {Pressable, Text, StyleSheet, Image} from "react-native";
import { Images, Themes } from "../assets/Themes";


const SpotifyAuthButton = ({authenticationFunction}) => {
    return (
        <Pressable style={styles.authButton} onPress={authenticationFunction}>
            <Image
            source={Images.spotify}
            style={styles.logoStyle}
            >
            </Image>
            <Text style={styles.authText}>Connect with Spotify</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    authButton: {
        backgroundColor: Themes.colors.spotify,
        padding: 12,
        borderRadius: 999999,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      authText:{
        color: "white",
        paddingHorizontal: 5,
        fontWeight: "bold",
      },
      logoStyle:{
        width: 20,
        height: 20,
        resizeMode: "contain",
        paddingHorizontal: 5,
      },
      
});
export default SpotifyAuthButton;
