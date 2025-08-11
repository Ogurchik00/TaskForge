import { useDispatch } from "react-redux"


export const useItemActions = () => {
  
  const dispatch = useDispatch()

  return (cb, date = {}) => {
    dispatch(cb(date))
  }

}
