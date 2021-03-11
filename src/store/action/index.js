const setData = () => {
    return (dispatch) => {
        console.log('SetDAta')
        dispatch({ type: "SetDAta" })
    }
}
export default setData;