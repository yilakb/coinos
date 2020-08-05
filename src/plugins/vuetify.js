import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

import Account from 'vue-material-design-icons/Account';
import Add from 'vue-material-design-icons/Plus';
import ArrowLeft from 'vue-material-design-icons/ArrowLeft';
import BellRing from 'vue-material-design-icons/BellRing';
import Camera from 'vue-material-design-icons/Camera';
import Cancel from 'vue-material-design-icons/Close';
import Check from 'vue-material-design-icons/Check';
import Clear from 'vue-material-design-icons/Close';
import ClipboardText from 'vue-material-design-icons/ClipboardText';
import Code from 'vue-material-design-icons/CodeTags';
import ContentCopy from 'vue-material-design-icons/ContentCopy';
import Delete from 'vue-material-design-icons/Delete';
import Dialpad from 'vue-material-design-icons/Dialpad';
import Download from 'vue-material-design-icons/Download';
import Edit from 'vue-material-design-icons/FileDocumentEdit';
import Flash from 'vue-material-design-icons/Flash';
import FormatLineWeight from 'vue-material-design-icons/FormatLineWeight';
import Forward from 'vue-material-design-icons/Forward';
import Gift from 'vue-material-design-icons/Gift';
import Help from 'vue-material-design-icons/InformationOutline';
import Home from 'vue-material-design-icons/Home';
import Info from 'vue-material-design-icons/Information';
import Key from 'vue-material-design-icons/Key';
import Link from 'vue-material-design-icons/Link';
import Lock from 'vue-material-design-icons/Lock';
import Nfc from 'vue-material-design-icons/Nfc';
import Note from 'vue-material-design-icons/Note';
import OpenInNew from 'vue-material-design-icons/OpenInNew';
import Portrait from 'vue-material-design-icons/CropPortrait';
import Qrcode from 'vue-material-design-icons/Qrcode';
import Refresh from 'vue-material-design-icons/Refresh';
import Send from 'vue-material-design-icons/Send';
import Settings from 'vue-material-design-icons/Settings';
import SwapHorizontal from 'vue-material-design-icons/SwapHorizontal';
import Sync from 'vue-material-design-icons/Sync';
import Undo from 'vue-material-design-icons/Undo';
import UnfoldLess from 'vue-material-design-icons/UnfoldLessHorizontal';
import UnfoldMore from 'vue-material-design-icons/UnfoldMoreHorizontal';
import Update from 'vue-material-design-icons/Update';
import Wallet from 'vue-material-design-icons/Wallet';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.yellow,
        secondary: '#333',
        accent: colors.yellow,
        error: '#b71c1c',
      },
    },
  },
  icons: {
    values: {
      'account': { component: Account },
      'add': { component: Add },
      'arrow_back': { component: ArrowLeft },
      'assignment': { component: ClipboardText },
      'bell': { component: BellRing },
      'camera': { component: Camera },
      'cancel': { component: Cancel },
      'check': { component: Check },
      'clear': { component: Clear },
      'code': { component: Code },
      'copy': { component: ContentCopy },
      'delete': { component: Delete },
      'dialpad': { component: Dialpad },
      'download': { component: Download },
      'edit': { component: Edit },
      'flash': { component: Flash },
      'forward': { component: Forward },
      'gift': { component: Gift },
      'help': { component: Help },
      'home': { component: Home },
      'info': { component: Info },
      'key': { component: Key },
      'link': { component: Link},
      'lock': { component: Lock },
      'nfc': { component: Nfc },
      'note': { component: Note },
      'open': { component: OpenInNew },
      'payments': { component: FormatLineWeight },
      'portrait': { component: Portrait },
      'qrcode': { component: Qrcode },
      'refresh': { component: Refresh },
      'send': { component: Send },
      'settings': { component: Settings},
      'swap': { component: SwapHorizontal },
      'sync': { component: Sync },
      'undo': { component: Undo },
      'unfold_less': { component: UnfoldLess },
      'unfold_more': { component: UnfoldMore },
      'update': { component: Update },
      'wallet': { component: Wallet },
    },
  },
});
