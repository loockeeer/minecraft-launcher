import axios from 'axios'

export function auth({username, password, serverURL, clientToken}) {
	if(!username) throw new Error('Need username to auth to YGGDRASIL Server.')
	if(!password) throw new Error('Need password to auth to YGGDRASIL Server.')
	if(!serverURL) throw new Error('Need YGGDRASIL ServerURL to auth.')
	if(!clientToken) throw new Error('Need clientToken to auth.')

	return axios.post(serverURL+"/authenticate", {
		agent: {
			name: "Minecraft",
			version: 1
		},
		username,
		password,
		clientToken
	}).then(res=>({
		name: res.data.selectedProfile.name, 
		id: res.data.selectedProfile.id, 
		accessToken: res.data.accessToken
	})
}

export function refreshToken({serverURL, accessToken, name, id, clientToken}) {
	if(!username) throw new Error('Need username to refresh accessToken.')
	if(!password) throw new Error('Need password refresh accessToken.')
	if(!serverURL) throw new Error('Need YGGDRASIL ServerURL to refresh accessToken.')
	if(!clientToken) throw new Error('Need clientToken to refresh accessToken.')
	if(!accessToken) throw new Error('Need accessToken to refresh it.')

	return axios.post(serverURL+"/refresh", {
		accessToken,
		clientToken,
		selectedProfile: {
			name,
			id
		}
	}).then(res=>res.data.accessToken)
}

export function validate({serverURL, accessToken, clientToken}) {
	if(!serverURL) throw new Error('Need YGGDRASIL ServerURL to validate accessToken.')
	if(!clientToken) throw new Error('Need clientToken to validate accessToken.')
	if(!accessToken) throw new Error('Need accessToken to validate it.')
	return axios.post(serverURL+"/validate", {
		accessToken,
		clientToken
	}).then(_=>true)
}

export function invalidate({serverURL, accessToken, clientToken}) {
	if(!serverURL) throw new Error('Need YGGDRASIL ServerURL to invalidate accessToken.')
	if(!clientToken) throw new Error('Need clientToken to invalidate accessToken.')
	if(!accessToken) throw new Error('Need accessToken to invalidate it.')
	return axios.post(serverURL+"/invalidate", {
		accessToken,
		clientToken
	})
}