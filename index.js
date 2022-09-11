/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Logger from "js-logger";

Logger.useDefaults();
// Logger.setLevel(Logger.TRACE)
Logger.setLevel(Logger.ERROR)

AppRegistry.registerComponent(appName, () => App);
