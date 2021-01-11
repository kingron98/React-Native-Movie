import React from "react"
import { Image , Text , View} from "react-native"

function Movies(props) {
    return (
        <View>
            <Image source={{uri: props.movies.Poster}} 
		style={{width: 300, height: 300}} /> 
            <Text>Title: {props.movies.Title}</Text>
            <Text>Year: {props.movies.Year}</Text>
        </View>
    )
}

export default Movies