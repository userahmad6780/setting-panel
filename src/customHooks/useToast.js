import { useSelector } from "react-redux";
import { toast } from "react-toastify"

function useToast () {
    const { isNotificationEnabled } = useSelector((state) => state.userAuth);
    const customToastify = (message, options = {}) => {
        if (isNotificationEnabled) {
          toast(message, options);
        }
      };
    
    return customToastify;
}

export default useToast;