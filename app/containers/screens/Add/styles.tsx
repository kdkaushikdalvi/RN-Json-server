import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F6F5FB',
    },
    containerWrapper: {
        flex: 0.6,
        backgroundColor: '#F6F5FB',
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageWrapper: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    headerContent: {
        alignItems: 'center',
    },
    phoneWrapper: {
        paddingHorizontal: 15
    },
    inputText: {
        marginTop: 20,
        marginLeft: 15,
        fontWeight: '700'
    },
    borderBottom: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 15
    },
    flexStyles: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputBox: {
        height: 50,
        borderWidth: 1,
        fontSize: 18,
        padding: 10,
        marginTop: 10,
        borderColor: 'lightgray',
    },
    textInputStyle: {
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: "#F6F5FB",
        height: 50,
        fontSize: 18,
        borderColor: 'lightgray',
        marginTop: 10,
        padding: 10,
    },
    textInputStyleClass2: {
        borderWidth: 1,
        borderRadius: 1,
        backgroundColor: "#F6F5FB"
    },
    textStyleClass: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'lightgray',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10
    },
    signButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#7DE695',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10

    },
    cardView: {
        position: 'absolute',
        width: 520,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        top: '30%',
    },
    cardView2: {
        position: 'absolute',
        top: '10%',
        width: 320,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        },
    borderBottomLine: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#E6E9F9',
        borderBottomWidth: 2,
    },
    signBtn: {
        fontSize: 20,
        color: 'white',
        fontWeight: "500",
        letterSpacing: 0.8,
        paddingVertical: 15
    }
});

export default styles;