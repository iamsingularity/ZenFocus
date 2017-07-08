import { connect } from 'react-redux';
import Settings from './settings';
import {
  setFocusLength,
  setLongBreakInterval,
  setLongBreakLength,
  setShortBreakLength,
  setTotalRounds,
  setMinutes,
  setSeconds
} from '../common/Rounds/actions';
import {
  setAudio,
  toggleAudioPhase,
  toggleAudioTick,
} from '../common/Sounds/actions';
import {
  setAppSettings,
  setElectronSettings,
  setNotificationType,
  setCustomNotification,
  setTheme,
  toggleMinimizeToTray
} from '../actions';
import {
  audioPhaseDisabled,
  audioTickDisabled,
  soundFocusPhase,
  soundShortBreakPhase,
  soundLongBreakPhase,
  soundPhaseEnded,
} from '../selectors/sounds.selectors';

const mapStateToProps = state => ({
  audioPhaseDisabled: audioPhaseDisabled(state),
  audioTickDisabled: audioTickDisabled(state),
  currentPhase: state.rounds.currentPhase,
  focusLength: state.rounds.focusLength,
  longBreakInterval: state.rounds.longBreakInterval,
  longBreakLength: state.rounds.longBreakLength,
  minimizeToTray: state.app.minimizeToTray,
  notificationType: state.app.notificationType,
  customNotification: state.app.customNotification,
  shortBreakLength: state.rounds.shortBreakLength,
  soundFocusPhase: soundFocusPhase(state),
  soundShortBreakPhase: soundShortBreakPhase(state),
  soundLongBreakPhase: soundLongBreakPhase(state),
  soundPhaseEnded: soundPhaseEnded(state),
  theme: state.app.theme,
  totalRounds: state.rounds.totalRounds
});

const mapDispatchToProps = dispatch => ({
  setAudio: (sel, ...args) => dispatch(setAudio(sel, ...args)),
  setAppSettings: data => dispatch(setAppSettings(data)),
  setElectronSettings: (keyPath, val, opts) =>
    dispatch(setElectronSettings(keyPath, val, opts)),
  setFocusLength: len => dispatch(setFocusLength(len)),
  setLongBreakInterval: interval => dispatch(setLongBreakInterval(interval)),
  setLongBreakLength: len => dispatch(setLongBreakLength(len)),
  setNotificationType: notType => dispatch(setNotificationType(notType)),
  setCustomNotification: obj => dispatch(setCustomNotification(obj)),
  setShortBreakLength: len => dispatch(setShortBreakLength(len)),
  setTheme: theme => dispatch(setTheme(theme)),
  setTotalRounds: rounds => dispatch(setTotalRounds(rounds)),
  setMinutes: minutes => dispatch(setMinutes(minutes)),
  setSeconds: seconds => dispatch(setSeconds(seconds)),
  toggleAudioPhase: () => dispatch(toggleAudioPhase()),
  toggleAudioTick: () => dispatch(toggleAudioTick()),
  toggleMinimizeToTray: () => dispatch(toggleMinimizeToTray())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
