import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faFolderPlus,
    faMobileAlt,
    faAt,
    faMapPin,
    faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faFolderPlus, faMobileAlt, faAt, faMapPin, faLock);
};

export default Icons;