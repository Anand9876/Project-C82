import React,{Component} from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

let customFonts={
    "Bubblegum-Sans":require("../assets/fonts/BubblegumSans-Regular.ttf")
};
export default class PostCardScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            fontsLoaded:false
        }
    }
    async _loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded:true});
    }
    componentDidMount(){
        this._loadFontsAsync();
    }
    renderItem=({item:story})=>{
        return <PostCardScreen story={story} />
            }
    render(){
        if(!this.state.fontsLoaded){
            return<AppLoading/>
        }else {
        return(
            <View style={styles.container} >
                <View style={styles.cardContainer} >
                    <View style={styles.authorContainer} >
                        <View style={styles.titleContainer}>
                            <Text style={styles.storyTitleText}>{this.props.story.title}</Text>
                        </View>
                        <View style={styles.authorImageContainer}>
                            <Image 
                            style={styles.profileImage} 
                            source={require('../assets/profile_img.png')}>
                            </Image>
                            <View style={styles.authorNameContainer}>
                                <Text style={styles.authorNameText}>{this.props.story.author}</Text>

                            </View>

                        </View>
                        <Image
                        source={require('../assets/post.jpeg')} style={styles.postImage}></Image>
                        <View style={styles.captionContainer}>
                            <Text style={styles.captionText}>{this.props.story.caption}</Text>

                        </View>
                        <View style={styles.actionContainer}>
                            <View style={styles.likeButton}>
                                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                                <Text style={styles.likeText}>12K</Text>

                            </View>

                        </View>

                    </View>

                </View>
            </View>
        );
        }
    }
}
const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
marginTop:50
},
cardContainer:{
    marginTop:-20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#2f345d',
    borderRadius:20,
    height:undefined,
    padding:10,
    width:480
},
authorContainer:{
    flexDirection:'row',
    padding:10,
},
authorImageContainer:{
    marginTop:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    borderRadius:20,
    marginBottom:50,
    marginLeft:20
},
profileImage:{
    width:50,
    height:50,
    resizeMode:'contain',
    borderRadius:10
},
authorNameContainer:{
    justifyContent:'center',
    alignItems:'center',
},
authorNameText:{
    color:'white',
    fontWeight:'bold',
    fontStyle:'italic',
    fontFamily:'Bubblegum-Sans',
    fontSize:18
},
postImage:{
width:200,
height:200,
resizeMode:'contain',
borderRadius:20,
marginLeft:50,
marginRight:50
},
captionContainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
},
captionText:{
    color:'white',
    fontWeight:'bold',
    fontStyle:'italic',
    fontFamily:'Bubblegum-Sans',
    fontSize:25
},
actionContainer:{
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
},
likeButton:{
    backgroundColor:'#eb3948',
    borderRadius:30,
    width:200,
    height:60,
    flexDirection:'row'
},
likeText:{
    color:'white',
    fontStyle:'italic',
    fontWeight:'bold',
    fontFamily:"Bubblegum-Sans",
    fontSize:30,
    marginLeft:25,
    marginTop:6

},
titleContainer:{
    width:70,
    height:80,
    flexDirection:'row',
    backgroundColor:'black',
    borderRadius:20,
    marginTop:50
},
storyTitleText:{
    fontFamily:'Bubblegum-Sans',
    fontSize:15,
    color:'white',

}


})