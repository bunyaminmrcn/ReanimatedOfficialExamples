//

import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Animated, { getRelativeCoords, useAnimatedGestureHandler, useAnimatedRef } from "react-native-reanimated";

const Component1 = () => {
    const aref = useAnimatedRef();
    

    const gestureHandler = useAnimatedGestureHandler({
        onEnd: (event) => {
            getRelativeCoords(aref, event.absoluteX, event.absoluteY);
        },
    });

    return (
        <View ref={aref}>
            <GestureHandlerRootView>
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.box]} />
                </PanGestureHandler>
            </GestureHandlerRootView>
        </View>
    );
};


const styles = StyleSheet.create({
    box: {
        width: 200,
        height: 200
    }
})
export default Component1;