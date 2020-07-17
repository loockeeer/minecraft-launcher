import Store from './storeManager.js';
import config from '../config.js';
import yggdrasil from './YGGDRASILAuthClient.js';

const store = new Store(config.cwd);

export function isAuthenticated() {
	return store.getAccessToken() ? true : false
}

export function isAccessTokenGood() {
	return yggdrasil.validate({
		accessToken: store.getAccessToken(),
		clientToken: store.getClientToken(),
		...store.getUserInfo()
	}).then(_=>true).catch(_>false)
}

export function login(username, password) {
	store.setRandomClientToken()
	return await yggdrasil.auth({
		username,
		password, 
		serverURL: config.serverURL, 
		clientToken: store.getClientToken()
	}).then(user=>{
		store.setAccessToken(user.accessToken)
		store.setUserInfo({name: user.name, id: user.id})
		return true
	})
}

export function refresh() {
	return refresh({
		serverURL: config.serverURL, 
		clientToken: store.getClientToken(), 
		accessToken: store.getAccessToken(), 
		selectedProfile: store.getUserInfo()
	}).then(user=>{
		store.setAccessToken(user.accessToken)
		return true
	})
}

export function invalidate() {
	return yggdrasil.invalidate({
		serverURL: config.serverURL, 
		clientToken: store.getClientToken(), 
		accessToken: store.getAccessToken()
	}).then(()=>{
		store.setAccessToken(undefined)
		store.setRandomClientToken()
	})
}