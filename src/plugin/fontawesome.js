import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/** 오디오 재생 관련 아이콘 */
import { faPlay, faPause, faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faVolumeUp, faVolumeMute);

export { FontAwesomeIcon };