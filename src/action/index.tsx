export const openPoppup = (boolVal:Boolean) => {
    return  {
      type: "TOGGLE_POPUP",
      updateVal: boolVal
    }
}